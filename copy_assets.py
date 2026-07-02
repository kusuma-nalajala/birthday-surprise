import os
import shutil

src_dir = r"C:\Users\ADMIN\.gemini\antigravity\brain\48848b46-6d1b-4f5a-aaef-2d1dcb60fe89"
dest_dir = r"c:\Users\ADMIN\Downloads\kusuma\app\frontend\public\assets"

os.makedirs(dest_dir, exist_ok=True)

images = {
    "sunset_silhouette_1782974822228.png": "sunset.png",
    "candle_wishes_1782974849712.png": "candle.png",
    "cozy_moments_1782974872966.png": "cozy.png"
}

for src_name, dest_name in images.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy(src_path, dest_path)
        print(f"Copied {src_name} to {dest_name}")
    else:
        print(f"Source not found: {src_path}")
