# -*- coding: utf-8 -*-
"""Genera las 11 diapositivas (1920x1080) del vídeo sobre Color en Interfaces Web."""
import os
import math
from PIL import Image, ImageDraw, ImageFont

W, H = 1920, 1080
OUT = os.path.join(os.path.dirname(__file__), "slides")
os.makedirs(OUT, exist_ok=True)

# ---- Paleta del proyecto (¡la propia temática como identidad visual!) ----
INK   = (32, 33, 36, 255)      # texto principal
GRAY  = (95, 99, 104, 255)     # texto secundario
BLUE  = (11, 87, 208, 255)     # #0B57D0 primary
LBLUE = (232, 240, 254, 255)   # #E8F0FE surface blue
RED   = (217, 48, 37, 255)     # error
GREEN = (24, 128, 56, 255)     # éxito / correcto
YELLOW= (249, 171, 0, 255)     # aviso
CARD  = (241, 243, 244, 255)   # gris superficie
WHITE = (255, 255, 255, 255)

FD = "C:/Windows/Fonts"
def F(size, weight="b"):
    name = {"b": "segoeuib.ttf", "r": "segoeui.ttf", "sb": "segoeuisb.ttf",
            "bb": "seguibl.ttf"}.get(weight)
    p = os.path.join(FD, name)
    if not os.path.exists(p):  # fallback
        p = os.path.join(FD, "segoeuib.ttf" if weight != "r" else "segoeui.ttf")
    return ImageFont.truetype(p, size)

def mono(size):
    p = os.path.join(FD, "consola.ttf")
    return ImageFont.truetype(p, size)

# --- marcas vectoriales (Segoe UI no trae ✓ ✗ ✕ ⚠ como texto) ---
def draw_check(d, x, y, col, s=34):
    w = max(4, s // 8)
    d.line([(x, y + s*0.55), (x + s*0.36, y + s*0.92)], fill=col, width=w)
    d.line([(x + s*0.36, y + s*0.92), (x + s, y + s*0.12)], fill=col, width=w)

def draw_cross(d, x, y, col, s=30):
    w = max(4, s // 7)
    d.line([(x, y), (x + s, y + s)], fill=col, width=w)
    d.line([(x, y + s), (x + s, y)], fill=col, width=w)

def draw_warn(d, x, y, s=34):
    d.polygon([(x + s/2, y), (x + s, y + s), (x, y + s)], fill=YELLOW)
    d.line([(x + s/2, y + s*0.34), (x + s/2, y + s*0.66)], fill=INK, width=4)
    d.ellipse([x + s/2 - 2.5, y + s*0.76, x + s/2 + 2.5, y + s*0.86], fill=INK)

def new_slide():
    img = Image.new("RGBA", (W, H), WHITE)
    return img, ImageDraw.Draw(img)

def progress(d, idx, total=10):
    # barra fina inferior
    d.rectangle([0, H-14, W, H], fill=(240, 241, 242, 255))
    w = W * idx / total
    d.rectangle([0, H-14, w, H], fill=BLUE)

def kicker(d, txt, y=76, color=BLUE):
    f = F(30, "b")
    d.text((100, y), txt.upper(), font=f, fill=color)
    d.rectangle([100, y-22, 160, y-14], fill=color)

def h1(d, txt, y=140, size=84, color=INK, weight="bb"):
    d.text((100, y), txt, font=F(size, weight), fill=color)

def tag(d, txt, x, y, fg, bg, pad=14, size=27):
    f = F(size, "b")
    tw = d.textlength(txt, font=f)
    d.rounded_rectangle([x, y, x+tw+2*pad+2, y+size+2*pad+6], 16, fill=bg)
    d.text((x+pad+1, y+pad), txt, font=f, fill=fg)
    return x + tw + 2*pad + 2

def body(d, lines, x, y, size=32, color=INK, lh=None, weight="r"):
    f = F(size, weight)
    lh = lh or int(size*1.42)
    for i, ln in enumerate(lines):
        d.text((x, y + i*lh), ln, font=f, fill=color)
    return y + len(lines)*lh

# ----------------------------- s01 · Gancho -----------------------------
def s01():
    img, d = new_slide()
    tag(d, "PROYECTO DIW · COLOR EN INTERFACES WEB", 100, 90, BLUE, LBLUE)
    d.text((100, 220), "El color", font=F(120, "bb"), fill=INK)
    d.text((100, 356), "no es decoración.", font=F(120, "bb"), fill=BLUE)
    body(d, ["En una interfaz web el color es un", "sistema: jerarquía, estado y accesibilidad."],
         100, 560, size=40, color=GRAY)
    # stat cards
    def stat(x, val, label, col):
        d.rounded_rectangle([x, 330, x+300, 610], 24, fill=WHITE, outline=(226,228,230,255), width=2)
        d.text((x+40, 370), val, font=F(84, "bb"), fill=col)
        d.multiline_text((x+40, 490), label, font=F(28, "r"), fill=GRAY, spacing=8)
    d.rounded_rectangle([1150, 300, 1490, 620], 28, fill=LBLUE)
    d.text((1190, 330), "95,9 %", font=F(90, "bb"), fill=BLUE)
    body(d, ["de las webs", "más visitadas", "fallan WCAG"], 1190, 450, size=28, color=INK)
    d.rounded_rectangle([1510, 300, 1850, 620], 28, fill=(253,235,233,255))
    d.text((1550, 330), "83,9 %", font=F(90, "bb"), fill=RED)
    body(d, ["tiene texto", "con bajo", "contraste"], 1550, 450, size=28, color=INK)
    d.text((1150, 660), "Fuente: WebAIM Million 2026", font=F(24, "r"), fill=GRAY)
    # paleta decorativa
    for i, c in enumerate([BLUE, GREEN, YELLOW, RED, INK]):
        d.ellipse([100 + i*70, 700, 150 + i*70, 750], fill=c)
    progress(d, 1)
    img.convert("RGB").save(f"{OUT}/s01.png")

# ---------------------- s02 · Las tres funciones -------------------------
def s02():
    img, d = new_slide()
    kicker(d, "Las tres funciones del color")
    h1(d, "No es bonito. Es funcional.", 140)
    cards = [
        ("1", "JERARQUÍA", "¿Qué es más importante?", "¿Qué es interactivo?", BLUE, LBLUE),
        ("2", "ESTADO", "Éxito · Error · Aviso", "Foco · Selección", YELLOW, (254,247,225,255)),
        ("3", "IDENTIDAD", "El color de marca", "se adapta al contraste", GREEN, (230,245,236,255)),
    ]
    for i, (n, t, l1, l2, fg, bg) in enumerate(cards):
        x = 100 + i*590
        d.rounded_rectangle([x, 330, x+550, 700], 28, fill=bg)
        d.text((x+50, 360), n, font=F(110, "bb"), fill=fg)
        d.text((x+50, 510), t, font=F(52, "bb"), fill=INK)
        d.text((x+50, 590), l1, font=F(30, "r"), fill=GRAY)
        d.text((x+50, 640), l2, font=F(30, "r"), fill=GRAY)
    d.text((100, 760), "El color nunca es el único canal:", font=F(38, "bb"), fill=INK)
    d.text((760, 758), "texto · icono · forma", font=F(38, "bb"), fill=RED)
    body(d, ["En este orden: la marca se adapta a los umbrales de contraste,"],
         100, 850, size=30, color=GRAY)
    d.text((100, 896), "no al revés.", font=F(32, "b"), fill=INK)
    progress(d, 2)
    img.convert("RGB").save(f"{OUT}/s02.png")

# ----------------------- s03 · Valores vs roles --------------------------
def s03():
    img, d = new_slide()
    kicker(d, "Material Design 3")
    h1(d, "Un valor es un número. Un rol es una función.", 140, size=68)
    # card valor
    d.rounded_rectangle([100, 330, 860, 760], 28, fill=CARD)
    d.text((150, 370), "VALOR", font=F(34, "b"), fill=GRAY)
    d.text((150, 430), "#0B57D0", font=mono(86), fill=INK)
    body(d, ["· No sabe nada: ¿lleva texto encima?", "· ¿cómo se comporta en modo oscuro?",
             "· Cada componente, repintado a mano"], 150, 560, size=31, color=GRAY)
    d.text((880, 510), "→", font=F(90, "bb"), fill=BLUE)
    # card rol
    d.rounded_rectangle([980, 330, 1830, 760], 28, fill=WHITE, outline=BLUE, width=3)
    d.text((1030, 370), "ROL", font=F(34, "b"), fill=BLUE)
    for i,(ln) in enumerate(["· Fija el propósito y su pareja", "  de contraste: se verifica una vez",
                             "· Cambia de tema sin repintar",
                             "· Componente nuevo → roles existentes"]):
        d.text((1030, 430 + i*46), ln, font=F(31, "r"), fill=GRAY)
    # botón ejemplo
    bx, by = 1470, 640
    d.rounded_rectangle([bx, by, bx+330, by+86], 43, fill=BLUE)
    d.text((bx+105, by+27), "Primary", font=F(30, "b"), fill=WHITE)
    d.text((bx-330, by+30), "on-primary →", font=mono(28), fill=INK)
    # chips 6 grupos
    x, y = 100, 820
    for g in ["primary", "secondary", "tertiary", "error", "surface", "outline"]:
        x = tag(d, g, x if x > 190 else x, y, BLUE, LBLUE) + 16
    body(d, ["26 roles estándar organizados en 6 grupos"], 100, 900, size=28, color=GRAY)
    progress(d, 3)
    img.convert("RGB").save(f"{OUT}/s03.png")

# ------------------------- s04 ·Crear la paleta --------------------------
def s04():
    img, d = new_slide()
    kicker(d, "Crear la paleta")
    h1(d, "La paleta es un sistema, no una colección.", 140, size=64)
    # escalera de luminosidad
    y0 = 320
    steps = 9
    base_h, base_s, base_v = 217, 95, 81  # aprox #0B57D0 en HSV
    for i in range(steps):
        v = 97 - i*(85/steps)  # claro → oscuro
        s = 96 - i*6
        c = tuple(int(ch*255) for ch in __import__("colorsys").hsv_to_rgb(base_h/360, s/100, v/100))
        col = tuple(list(c)+[255])
        x = 100 + i*190
        d.rectangle([x, y0, x+180, y0+240], fill=col, outline=(230,232,235,255), width=2)
    d.text((100, 580), "Familias con distintas luminosidades, desde el color de marca → cubren todos los estados",
           font=F(29, "r"), fill=GRAY)
    # HSL vs OKLCH
    d.rounded_rectangle([100, 660, 940, 840], 24, fill=(253,240,238,255))
    d.text((150, 690), "HSL", font=F(40, "bb"), fill=RED)
    body(d, ["Limitada: “bajar la L” no siempre se ve más oscuro",
             "… y dos pasos de L ≠ misma diferencia visual"], 150, 745, size=30, color=INK)
    d.rounded_rectangle([980, 660, 1820, 840], 24, fill=(230,245,236,255))
    d.text((1030, 690), "OKLCH / LCH", font=F(40, "bb"), fill=GREEN)
    body(d, ["Perceptualmente uniforme: escalas coherentes al ojo",
             "Y en ambos casos: se verifica con herramientas de contraste"], 1030, 745, size=30, color=INK)
    progress(d, 4)
    img.convert("RGB").save(f"{OUT}/s04.png")

# -------------------------- s05 · 60-30-10 -------------------------------
def s05():
    img, d = new_slide()
    kicker(d, "La proporción 60 · 30 · 10")
    h1(d, "Equilibrio visual: el acento destaca porque es escaso.", 140, size=58)
    # barra apilada
    x0, y0, y1 = 100, 340, 520
    total = 1720
    seg = [("60%", 0.6, CARD, INK), ("30%", 0.3, BLUE, WHITE), ("10%", 0.1, YELLOW, INK)]
    x = x0
    for lbl, frac, col, fg in seg:
        w = total*frac
        d.rectangle([x, y0, x+w, y1], fill=col, outline=WHITE, width=4)
        d.text((x+w/2 - d.textlength(lbl, font=F(56,"bb"))/2, y0+80), lbl, font=F(56,"bb"), fill=fg)
        x += w
    labels = [("Color base / neutro", 100), ("Secundario · marca", 1132), ("Acento", 1636)]
    for t, lx in labels:
        d.text((lx, 545), t, font=F(30, "b"), fill=INK)
    # tokens
    d.rounded_rectangle([100, 680, 1820, 830], 24, fill=(237,242,249,255))
    d.text((150, 715), "token = función, no apariencia:", font=F(34, "b"), fill=INK)
    d.text((150, 770), "--color-error: D93025", font=mono(34), fill=(58,60,64,255))
    draw_check(d, 660, 774, GREEN, 30)
    d.text((860, 770), "--rojo-oscuro: D93025", font=mono(34), fill=(58,60,64,255))
    draw_cross(d, 1370, 776, RED, 28)
    d.text((100, 880), "Guía práctica de equilibrio · NO es un estándar ni un requisito WCAG",
           font=F(32, "b"), fill=GRAY)
    progress(d, 5)
    img.convert("RGB").save(f"{OUT}/s05.png")

# ------------------------ s06 · El contraste -----------------------------
def s06():
    img, d = new_slide()
    kicker(d, "El contraste", color=BLUE)
    h1(d, "El ratio decide si tu texto se lee.", 140, size=72)
    # demo 1
    d.rounded_rectangle([100, 320, 940, 700], 28, fill=WHITE, outline=(226,228,230,255), width=3)
    d.rounded_rectangle([140, 360, 900, 560], 16, fill=(255,255,255,255), outline=(210,214,218,255), width=2)
    d.text((180, 385), "Inscripciones abiertas", font=F(40, "b"), fill=(0,0,0,255))
    d.text((180, 445), "Reserva tu plaza antes del viernes.", font=F(30, "r"), fill=(0,0,0,255))
    d.text((140, 590), "negro sobre blanco · 21:1", font=mono(30), fill=INK)
    d.text((140, 645), "Se lee sin esfuerzo", font=F(30, "b"), fill=GREEN)
    draw_check(d, 470, 649, GREEN, 32)
    # demo 2
    d.rounded_rectangle([980, 320, 1820, 700], 28, fill=WHITE, outline=(226,228,230,255), width=3)
    d.rounded_rectangle([1020, 360, 1780, 560], 16, fill=(255,255,255,255), outline=(210,214,218,255), width=2)
    d.text((1060, 385), "Inscripciones abiertas", font=F(40, "b"), fill=(187,187,187,255))
    d.text((1060, 445), "Reserva tu plaza antes del viernes.", font=F(30, "r"), fill=(187,187,187,255))
    d.text((1020, 590), "#BBBBBB sobre blanco · 1,92:1", font=mono(30), fill=INK)
    d.text((1020, 645), "Apenas se distingue", font=F(30, "b"), fill=RED)
    draw_cross(d, 1330, 651, RED, 28)
    # escala
    d.rectangle([100, 780, 1820, 820], fill=(238,240,241,255))
    for i, t in enumerate(["1:1 imposible", "4,5:1 texto normal", "7:1 AAA", "21:1 máximo"]):
        d.text((120 + i*420, 840), t, font=F(28, "b"), fill=GRAY)
    d.text((120, 760), "", font=F(4), fill=GRAY)
    d.text((100, 900), "El resultado NUNCA se redondea: 4,49:1 no cumple 4,5:1.",
           font=F(36, "bb"), fill=RED)
    progress(d, 6)
    img.convert("RGB").save(f"{OUT}/s06.png")

# ---------------------- s07 · Umbrales WCAG ------------------------------
def s07():
    img, d = new_slide()
    kicker(d, "WCAG 2.2 · Nivel AA")
    h1(d, "¿Cuánto contraste hace falta?", 140, size=76)
    rows = [
        ("Texto normal",              "≥ 4,5 : 1", BLUE, "criterio 1.4.3"),
        ("Texto grande (≥24 px / negrita ≥18,7 px)", "≥ 3 : 1", BLUE, "1.4.3"),
        ("Componentes e iconos (botones, campos…)", "≥ 3 : 1", BLUE, "1.4.11"),
        ("Texto normal — nivel AAA",  "≥ 7 : 1", GREEN, "1.4.6"),
    ]
    y = 320
    for r, ratio, col, crit in rows:
        d.rounded_rectangle([100, y, 1820, y+110], 20, fill=CARD)
        d.text((140, y+32), r, font=F(34, "b"), fill=INK)
        d.text((1780 - d.textlength(crit, font=F(26,"r")), y+40), crit, font=F(26, "r"), fill=GRAY)
        tw = d.textlength(ratio, font=mono(44))
        d.text((1150 - tw/2, y+30), ratio, font=mono(44), fill=col)
        y += 130
    d.text((100, 880), "Mide el color FINAL que ve el usuario: hover · foco · imágenes · degradados · transparencias",
           font=F(32, "b"), fill=GRAY)
    d.text((100, 935), "Truco: si tienes que entrecerrar los ojos para leer, ya tienes el diagnóstico.",
           font=F(30, "r"), fill=RED)
    progress(d, 7)
    img.convert("RGB").save(f"{OUT}/s07.png")

# ---------------------- s08 · El color significa -------------------------
def s08():
    img, d = new_slide()
    kicker(d, "Significado")
    h1(d, "El color comunica… o aparenta comunicar.", 140, size=70)
    defs = [("✕", "ERROR", RED, 100), ("!", "AVISO", (218,165,32,255), 580),
            ("✓", "ÉXITO", GREEN, 1060), ("i", "INFO", BLUE, 1540)]
    for glyph, t, col, x in defs:
        d.rounded_rectangle([x, 315, x+320, 545], 24, fill=CARD)
        d.ellipse([x+110, 350, x+170, 410], fill=col)
        if glyph == "✕":
            draw_cross(d, x+126, 366, WHITE, 28)
        elif glyph == "✓":
            draw_check(d, x+126, 368, WHITE, 28)
        else:
            d.text((x+134, 356), glyph, font=F(30, "b"), fill=INK if glyph == "!" else WHITE)
        d.text((x+40, 430), t, font=F(42, "bb"), fill=INK)
    d.rounded_rectangle([100, 610, 1820, 760], 24, fill=(254,247,225,255))
    draw_warn(d, 150, 642, 40)
    d.text((215, 640), "No son universales:", font=F(36, "bb"), fill=INK)
    d.text((150, 695), "en China el rojo se asocia a la buena suerte · lo ‘estándar’ es sesgo occidental (Komischke, InfoQ)",
           font=F(30, "r"), fill=GRAY)
    d.text((100, 820), "Regla 1.4.1 de WCAG:", font=F(36, "bb"), fill=INK)
    d.text((620, 818), "el color nunca es el único canal → texto · icono · forma", font=F(36, "b"), fill=BLUE)
    d.text((100, 910), "Y coherencia total: el mismo estado, siempre los mismos colores, iconos y mensajes.",
           font=F(30, "r"), fill=GRAY)
    progress(d, 8)
    img.convert("RGB").save(f"{OUT}/s08.png")

# ------------------------- s09 · Errores ---------------------------------
def s09():
    img, d = new_slide()
    kicker(d, "WebAIM Million 2026", color=RED)
    h1(d, "Los errores que se repiten año tras año", 140, size=66)
    d.rounded_rectangle([100, 300, 620, 700], 28, fill=(253,235,233,255))
    d.text((150, 340), "83,9 %", font=F(100, "bb"), fill=RED)
    body(d, ["de portadas con texto", "de bajo contraste", "", "media de 34 casos", "por página"],
         150, 490, size=30, color=INK)
    items = [
        ("Significado solo por color", "par rojo-verde → se rompe con el daltonismo"),
        ("Enlaces poco evidentes", "solo se distinguen por ser azules, sin subrayado"),
        ("Texto sobre imágenes / degradados", "contraste medido sobre un fondo que no es el real"),
        ("Estados sin verificar", "hover · foco · active · disabled"),
        ("Sistema roto", "roles mal emparejados, valores “hardcode” y exceso de acentos"),
    ]
    y = 310
    for t, sub in items:
        draw_cross(d, 700, y + 8, RED, 30)
        d.text((760, y), t, font=F(34, "bb"), fill=INK)
        d.text((760, y+46), sub, font=F(27, "r"), fill=GRAY)
        y += 110
    d.rounded_rectangle([700, 880, 1830, 990], 24, fill=(253,235,233,255))
    d.text((740, 912), "Si tienes que forzar la vista para leerlo… ese contraste es insuficiente.",
           font=F(32, "b"), fill=RED)
    progress(d, 9)
    img.convert("RGB").save(f"{OUT}/s09.png")

# ---------------------- s10 · Checklist final ----------------------------
def s10():
    img, d = new_slide()
    kicker(d, "Checklist antes de publicar", color=GREEN)
    h1(d, "Marca ↔ accesibilidad", 150, size=80)
    checks = [
        "Cada color con una función definida como token",
        "Contraste medido sobre el color renderizado: 4,5:1 texto · 3:1 componentes",
        "Estados y modo oscuro probados de verdad",
        "Errores, enlaces y campos obligatorios con un segundo canal además del color",
        "Revisar: escala de grises · daltonismo · navegación con teclado",
    ]
    y = 300
    for c in checks:
        d.ellipse([120, y, 172, y+52], fill=(230,245,236,255))
        draw_check(d, 133, y+11, GREEN, 26)
        d.text((210, y+8), c, font=F(32, "r"), fill=INK)
        y += 92
    d.text((120, 800), "La prueba final: lees el mensaje sin fijarte en el color y se entiende.",
           font=F(34, "b"), fill=INK)
    d.text((120, 900), "La marca se adapta a la accesibilidad, no al revés.", font=F(44, "bb"), fill=BLUE)
    progress(d, 10)
    img.convert("RGB").save(f"{OUT}/s10.png")

# --------------------------- s11 · Endcard -------------------------------
def s11():
    img, d = new_slide()
    d.rounded_rectangle([0, 0, W, H], 0, fill=(15,17,20,255))
    cs = [BLUE, (76,110,245,255), GREEN, YELLOW, RED]
    for i, c in enumerate(cs):
        cx = W/2 - (len(cs)-1)*55 + i*110
        d.ellipse([cx-28, 300, cx+28, 356], fill=c)
    d.text((W/2 - d.textlength("Color en Interfaces Web", font=F(84,"bb"))/2, 480),
           "Color en Interfaces Web", font=F(84, "bb"), fill=WHITE)
    d.text((W/2 - d.textlength("Un sistema, no decoración.", font=F(40,"r"))/2, 620),
           "Un sistema, no decoración.", font=F(40, "r"), fill=(160,168,178,255))
    d.text((W/2 - d.textlength("Material Design 3 · WCAG 2.2 · WebAIM Million 2026 · Sajid — UI Colors",
                              font=F(26,"r"))/2, 950),
           "Material Design 3 · WCAG 2.2 · WebAIM Million 2026 · Sajid — UI Colors",
           font=F(26, "r"), fill=(120,128,138,255))
    img.convert("RGB").save(f"{OUT}/s11.png")

if __name__ == "__main__":
    for i in range(1, 12):
        globals()[f"s{i:02d}"]()
        print(f"s{i:02d} ok")
    print("Listo:", OUT)
