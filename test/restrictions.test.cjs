const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),zlib=require('node:zlib');
const data=JSON.parse(fs.readFileSync('evidence.json'));
test('Additional dated restrictions are sourced, unique and do not include HK, MO or Ukraine',()=>{
 const rows=data.legalContext;assert.equal(new Set(rows.map(x=>x.code)).size,rows.length);
 for(const code of ['EG','TJ','TM','SG']){const r=rows.find(x=>x.code===code);assert.ok(r);assert.match(r.url,/^https:\/\//);assert.match(r.asOf,/^\d{4}-\d{2}$/);assert.ok(r.note.includes('not')||r.note.includes('Do not'));}
 for(const code of ['HK','MO','UA'])assert.ok(!rows.some(x=>x.code===code));
});
test('Published wrapper carries all restriction rows unchanged',()=>{const b=fs.readFileSync('index.html','utf8').match(/atob\("([A-Za-z0-9+/=]+)"\)/)[1],html=zlib.gunzipSync(Buffer.from(b,'base64')).toString();for(const r of data.legalContext){assert.ok(html.includes(JSON.stringify(r)));}});
