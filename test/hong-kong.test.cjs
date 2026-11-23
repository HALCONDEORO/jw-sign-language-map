const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),zlib=require('node:zlib');
function unpack(){const wrapper=fs.readFileSync('index.html','utf8');const b64=wrapper.match(/atob\("([A-Za-z0-9+/=]+)"\)/)[1];return zlib.gunzipSync(Buffer.from(b64,'base64')).toString()}
test('Hong Kong selection aid is shipped, conditional and zoom/viewport sized',()=>{
 const html=unpack();
 for(const token of ["selected==='Hong Kong'&&visible.some(r=>r.geoName==='Hong Kong')",'960/Math.max(svg.getBoundingClientRect().width,1)/zoom','width="128" height="44"','Not a congregation location.',"window.addEventListener('resize',drawHongKongCallout)"])assert.ok(html.includes(token),token);
});
test('Hong Kong remains a CSL sample, not an invented HKS meeting figure',()=>{
 const data=JSON.parse(fs.readFileSync('evidence.json'));const hk=data.hub.filter(x=>x.code==='HK');
 assert.equal(hk.length,1);assert.equal(hk[0].languageCode,'CSL');assert.equal(hk[0].congregations,1);assert.equal(hk[0].groups,0);
 assert.equal(data.publicationLanguages.find(x=>x.name==='Hong Kong Sign Language').locatorExactName,false);
 assert.ok(!data.legalContext.some(x=>x.geoName==='Hong Kong'));
});

test('Mainland China has sourced context without changing Hong Kong',()=>{const d=JSON.parse(fs.readFileSync('evidence.json'));const c=d.legalContext.find(x=>x.code==='CN');assert.equal(c.geoName,'China');assert.equal(c.asOf,'2026-05-11');assert.ok(c.url.startsWith('https://www.uscirf.gov/'));assert.ok(!d.legalContext.some(x=>['HK','MO'].includes(x.code)));});
