import { build } from 'esbuild';
import { mkdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
await mkdir('assets/dist', { recursive: true });
// Font và icon là asset tĩnh. Ảnh nội dung lấy URL Cloudinary từ MySQL.
await build({
    entryPoints: ['assets/src/app.js'],
    bundle: true,
    minify: true,
    outdir: 'assets/dist',
    format: 'iife',
    target: ['es2020'],
    assetNames: 'files/[name]-[hash]',
    loader: { '.woff2': 'file', '.woff': 'file', '.ttf': 'file', '.svg': 'file', '.eot': 'file' },
});
execFileSync(
    process.execPath,
    ['node_modules/tailwindcss/lib/cli.js', '-i', 'input.css', '-o', 'assets/dist/tailwind.css', '--minify'],
    { stdio: 'inherit' },
);
const utilities = await readFile('assets/dist/tailwind.css', 'utf8');
const stylesheet = await readFile('assets/dist/app.css', 'utf8');
await writeFile('assets/dist/app.css', utilities + '\n' + stylesheet);
await unlink('assets/dist/tailwind.css');
console.log('Built FoodZone: Tailwind CSS, vanilla JavaScript, local fonts and icons.');
