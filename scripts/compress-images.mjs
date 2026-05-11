import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const PRODUCTS_DIR = new URL('../public/Products', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const WEBP_QUALITY = 82;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(e => {
    const full = join(dir, e.name);
    return e.isDirectory() ? getFiles(full) : full;
  }));
  return files.flat();
}

async function main() {
  const files = await getFiles(PRODUCTS_DIR);
  const images = files.filter(f => /\.(png|jpe?g)$/i.test(f));

  console.log(`Found ${images.length} images to convert...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const src of images) {
    const ext = extname(src);
    const dest = src.slice(0, -ext.length) + '.webp';
    const { size: before } = await stat(src);
    totalBefore += before;

    await sharp(src).webp({ quality: WEBP_QUALITY }).toFile(dest);

    const { size: after } = await stat(dest);
    totalAfter += after;

    const pct = Math.round((1 - after / before) * 100);
    console.log(`  ${basename(src).padEnd(16)} ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(2)}MB  (-${pct}%)`);

    await unlink(src);
  }

  console.log(`\nDone! ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  (${Math.round((1 - totalAfter/totalBefore)*100)}% smaller)`);
}

main().catch(console.error);
