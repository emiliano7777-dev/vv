import path from 'node:path';
import sharp from 'sharp';

const inputImagePath = path.resolve('public/assets/aistudio/logoshadow_25de809b.webp');

async function generate() {
  const base512 = await sharp(inputImagePath)
    .resize(512, 512, {
      fit: 'cover',
      position: 'center',
    })
    .png()
    .toBuffer();

  await sharp(base512)
    .resize(192, 192)
    .png()
    .toFile(path.resolve('public', 'pwa-192x192.png'));

  await sharp(base512)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public', 'pwa-512x512.png'));

  await sharp(base512)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public', 'pwa-maskable-512x512.png'));

  await sharp(base512)
    .resize(180, 180)
    .png()
    .toFile(path.resolve('public', 'apple-touch-icon.png'));

  await sharp(base512)
    .resize(32, 32)
    .png()
    .toFile(path.resolve('public', 'favicon-32x32.png'));

  console.log('PWA icons restored to user logo!');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
