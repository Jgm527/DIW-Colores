# -*- coding: utf-8 -*-
"""Genera la locución con Piper (una por segmento) y mide duraciones."""
import os, sys, json, wave
from piper import PiperVoice, SynthesisConfig
from guion import SEGMENTOS

BASE = os.path.dirname(__file__)
VOICE_KEY = sys.argv[1] if len(sys.argv) > 1 else "davefx"  # davefx | sharvard | mls

MODELS = {
    "davefx":   (os.path.join(BASE, "piper", "davefx.onnx"), None),
    "sharvard": (os.path.join(BASE, "piper", "sharvard.onnx"), 0),   # hablante masculino M
    "mls":      (os.path.join(BASE, "piper", "mls10246.onnx"), None),
}
model_path, speaker = MODELS[VOICE_KEY]
voice = PiperVoice.load(model_path)
cfg = None
if speaker is not None:
    cfg = SynthesisConfig(speaker_id=speaker)

outdir = os.path.join(BASE, "audio")
os.makedirs(outdir, exist_ok=True)

durations = {}
for i, seg in enumerate(SEGMENTOS, 1):
    name = f"seg{i:02d}"
    text = seg["voz"]
    if not text:
        durations[name] = 3.5   # endcard silencioso
        continue
    wav_path = os.path.join(outdir, name + ".wav")
    mp3_path = os.path.join(outdir, name + ".mp3")
    with wave.open(wav_path, "wb") as w:
        voice.synthesize_wav(text, w, cfg)
    os.system(f'ffmpeg -y -loglevel error -i "{wav_path}" "{mp3_path}"')
    # medir duración del mp3
    out = os.popen(f'ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "{mp3_path}"').read().strip()
    durations[name] = float(out)
    os.remove(wav_path)
    print(f"{name}: {durations[name]:.2f}s · {len(text)} chars")

json.dump(durations, open(os.path.join(outdir, "durations.json"), "w"), indent=2)
total = sum(durations.values())
print(f"TOTAL locución: {total:.1f}s = {total/60:.2f} min (+ ~1.2s/segmento de pausas)")
