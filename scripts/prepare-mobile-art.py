"""Generate smaller copies for the scaled phone scene. Requires Pillow.

Original assets stay untouched. Run after adding/replacing original PNGs;
the generated copies are committed so Pages needs no image tooling.
"""
from pathlib import Path
from PIL import Image

assets = Path(__file__).resolve().parents[1] / 'dist' / 'assets'
output = assets / 'compact'
output.mkdir(exist_ok=True)
for source in sorted(assets.glob('*.png')):
    with Image.open(source) as image:
        image.thumbnail((960, 960), Image.Resampling.LANCZOS)
        image.save(output / source.name, optimize=True)

