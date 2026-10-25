import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist', {recursive:true});
for (const file of ['index.html','styles.css','script.js','content.json','_headers','robots.txt']) await copyFile(file, `dist/${file}`);
await cp('assets','dist/assets',{recursive:true});
console.log('Sitio estático generado en dist.');
