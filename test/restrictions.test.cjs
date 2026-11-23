const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),zlib=require('node:zlib');
const data=JSON.parse(fs.readFileSync('evidence.json'));
test('Additional dated restrictions are sourced, unique and do not include HK, MO or Ukraine',()=>{
 const rows=data.legalContext;assert.equal(new Set(rows.map(x=>x.code)).size,rows.length);
 for(const code of ['EG','TJ','TM','SG']){const r=rows.find(x=>x.code===code);assert.ok(r);assert.match(r.url,/^https:\/\//);assert.match(r.asOf,/^\d{4}-\d{2}$/);assert.ok(r.note.includes('not')||r.note.includes('Do not'));}
 for(const code of ['HK','MO','UA'])assert.ok(!rows.some(x=>x.code===code));
});
test('Published wrapper carries all restriction rows unchanged',()=>{const b=fs.readFileSync('index.html','utf8').match(/atob\("([A-Za-z0-9+/=]+)"\)/)[1],html=zlib.gunzipSync(Buffer.from(b,'base64')).toString();for(const r of data.legalContext){assert.ok(html.includes(JSON.stringify(r)));}});

test('Five general religious-freedom contexts are dated and narrowly scoped',()=>{
 const expected={KP:'North Korea',SA:'Saudi Arabia',AZ:'Azerbaijan',VN:'Vietnam',DZ:'Algeria'};
 for(const [code,name]of Object.entries(expected)){const r=data.legalContext.find(x=>x.code===code);assert.equal(r.geoName,name);assert.match(r.note,/independent U.S. federal commission/);assert.match(r.note,/not local legislation/);assert.match(r.note,/not a sign-language congregation count/);assert.match(r.note,/not zero/);assert.match(r.url,/^https:\/\/www.uscirf.gov\//);}
 assert.match(data.legalContext.find(x=>x.code==='KP').note,/not a verified Jehovah/);
 assert.match(data.legalContext.find(x=>x.code==='SA').note,/private Christian worship/);
 assert.match(data.legalContext.find(x=>x.code==='AZ').note,/beyond Baku/);
 assert.match(data.legalContext.find(x=>x.code==='VN').note,/January 2027 are not presented here as already in force/);
 assert.match(data.legalContext.find(x=>x.code==='DZ').note,/formally permits non-Muslim worship/);
});
