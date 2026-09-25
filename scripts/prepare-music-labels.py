"""Outline the three music labels from the site's Caveat font.
Optional authoring dependencies: fonttools and uharfbuzz. Not needed to build.
SVG outlines keep iOS text autosizing from changing the label independently.
The surrounding HTML button retains its state-dependent accessible label.
"""
import json
from pathlib import Path
import uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

root = Path(__file__).resolve().parents[1]
font_path = root / 'dist/assets/caveat.ttf'
font = TTFont(font_path)
glyphs = font.getGlyphSet()
order = font.getGlyphOrder()
shaper = hb.Font(hb.Face(font_path.read_bytes()))
shaper.scale = (font['head'].unitsPerEm,) * 2
labels = {}
for key, text in [('off', 'Music off'), ('on', 'Music on'), ('starting', 'Starting…')]:
    buffer = hb.Buffer()
    buffer.add_str(text)
    buffer.guess_segment_properties()
    hb.shape(shaper, buffer)
    placements = []
    x = y = 0
    bounds = BoundsPen(glyphs)
    for info, pos in zip(buffer.glyph_infos, buffer.glyph_positions):
        assert info.codepoint != 0, f'Missing glyph in {text}'
        name = order[info.codepoint]
        gx, gy = x + pos.x_offset, y + pos.y_offset
        placements.append((name, gx, gy))
        glyphs[name].draw(TransformPen(bounds, (1, 0, 0, 1, gx, gy)))
        x += pos.x_advance
        y += pos.y_advance
    left, bottom, right, top = bounds.bounds
    scale = min(38 / font['head'].unitsPerEm, 150 / (right-left), 44 / (top-bottom))
    tx, ty = 77-(left+right)*scale/2, 25+(bottom+top)*scale/2
    pen = SVGPathPen(glyphs, ntos=lambda n: format(n, '.3f').rstrip('0').rstrip('.') or '0')
    for name, gx, gy in placements:
        glyphs[name].draw(TransformPen(pen, (scale, 0, 0, -scale, tx+gx*scale, ty-gy*scale)))
    labels[key] = pen.getCommands()
    print(f'{text}: {(right-left)*scale:.2f} x {(top-bottom)*scale:.2f}, inside 154 x 50')
(root / 'src/music-labels.json').write_text(json.dumps(labels, separators=(',', ':'))+'\n')
