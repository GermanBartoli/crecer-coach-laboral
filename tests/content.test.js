import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access,stat} from 'node:fs/promises';
const data=JSON.parse(await readFile(new URL('../content.json',import.meta.url),'utf8'));
test('Las 15 publicaciones se distribuyen sin duplicados en 5, 4 y 6',()=>{assert.equal(new Set(data.instagram.map(p=>p.id)).size,15);for(const [group,count] of [['featured',5],['quotes',4],['remaining',6]])assert.equal(data.instagram.filter(p=>p.group===group).length,count);});
test('Las imágenes referenciadas existen y los enlaces apuntan a la red correcta',async()=>{for(const p of [...data.instagram,...data.linkedin]){const host=new URL(p.url).hostname;assert.ok(host===`www.${p.network.toLowerCase()}.com`);assert.ok(p.title&&p.body);for(const file of p.images)await access(new URL('../'+file,import.meta.url));}});
test('El formulario usa el correo de Celeste y conserva WhatsApp',async()=>{const html=await readFile(new URL('../index.html',import.meta.url),'utf8');assert.match(html,/action="https:\/\/formsubmit.co\/crecer\.coaching\.cr@gmail\.com" method="post"/);assert.match(html,/type="submit"/);assert.match(html,/mailto:crecer\.coaching\.cr@gmail\.com/);assert.match(html,/https:\/\/wa.me\/5493513942980/);});

test('Los siete reels tienen MP4 reproducibles dentro del límite de Cloudflare Pages',async()=>{
  const reels=data.instagram.filter(p=>p.type==='Clip');
  assert.equal(reels.length,7);
  for(const reel of reels){
    assert.equal(reel.video,`assets/videos/${reel.id}.mp4`);
    const file=new URL('../'+reel.video,import.meta.url);
    const info=await stat(file);
    assert.ok(info.size>1000&&info.size<25*1024*1024,reel.id);
    const bytes=await readFile(file);
    assert.equal(bytes.toString('ascii',4,8),'ftyp',reel.id);
  }
});
