# -*- coding: utf-8 -*-
"""Monta el vídeo final: slide i + audio i -> segmentos mp4 -> concat -> video_final.mp4"""
import os, json, subprocess, sys
from guion import SEGMENTOS

BASE = os.path.dirname(__file__)
PAD = 0.55   # silencio tras la voz de cada segmento
FF = "ffmpeg"
FB = "ffprobe"

def run(cmd):
    r = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if r.returncode != 0:
        print(r.stderr[-1500:])
        raise SystemExit(1)

TMP = {"atempo": 1.08}
durations = json.load(open(os.path.join(BASE, "audio", "durations.json")))

tmp = os.path.join(BASE, "tmp")
os.makedirs(tmp, exist_ok=True)
segfiles = []
for i, seg in enumerate(SEGMENTOS, 1):
    name = f"seg{i:02d}"
    nameplate = seg["slide"]
    audio = os.path.join(BASE, "audio", name + ".mp3")
    if name == "seg11":
        d = float(durations[name])   # endcard sin voz
        silent = os.path.join(tmp, name + "_a.m4a")
        run(f'{FF} -y -loglevel error -f lavfi -i anullsrc=r=44100:cl=stereo -t {d:.3f} -c:a aac "{silent}"')
    else:
        d_raw = float(durations[name]) / TMP["atempo"] + PAD
        ap = os.path.join(tmp, name + "_a.m4a")
        run(f'{FF} -y -loglevel error -i "{audio}" -af "atempo={TMP["atempo"]},adelay=150:all=1,apad=pad_dur={PAD}" -t {d_raw:.3f} -ar 44100 -ac 2 -c:a aac -b:a 192k "{ap}"')
        silent = ap
        out_p = os.popen(f'{FB} -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "{ap}"').read().strip()
        d = float(out_p)
    out = os.path.join(tmp, name + ".mp4")
    run(f'{FF} -y -loglevel error -loop 1 -i "{BASE}/slides/{nameplate}.png" -i "{silent}" '
        f'-t {d:.3f} -r 30 -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p '
        f'-vf "scale=1920:1080" -c:a aac -b:a 192k -shortest "{out}"')
    segfiles.append(out)
    print(name, "ok", f"{d:.2f}s")

print("Concatenando…")
lst = os.path.join(tmp, "list.txt")
with open(lst, "w") as f:
    for s in segfiles:
        f.write(f"file '{s}'\n")
final = os.path.join(BASE, "video_final.mp4")
run(f'{FF} -y -loglevel error -f concat -safe 0 -i "{lst}" -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart "{final}"')
voz = sum(float(v) for k, v in durations.items() if k != "seg11")
segundos = voz / TMP["atempo"] + float(durations["seg11"]) + PAD * len(SEGMENTOS) + 0.15
p = os.popen(f'{FB} -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "{final}"').read().strip()
print(f"{final} listo · ffprobe={float(p):.0f}s ~ {float(p)/60:.2f} min")
