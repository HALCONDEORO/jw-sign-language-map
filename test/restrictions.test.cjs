const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),zlib=require('node:zlib');
const data=JSON.parse(fs.readFileSync('evidence.json'));
test('Additional dated restrictions are sourced, unique and do not include HK, MO or Ukraine',()=>{
 const rows=data.legalContext;assert.equal(new Set(rows.map(x=>x.geoName)).size,rows.length);const coded=rows.filter(x=>x.code!==null);assert.equal(new Set(coded.map(x=>x.code)).size,coded.length);
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

test('Twenty-four additional country contexts preserve exact geo keys and dated caveats',()=>{
const expected={"IR":"Iran","IQ":"Iraq","SY":"Syria","AF":"Afghanistan","LY":"Libya","UZ":"Uzbekistan","BY":"Belarus","LA":"Laos","MA":"Morocco","TN":"Tunisia","QA":"Qatar","OM":"Oman","KW":"Kuwait","BH":"Bahrain","JO":"Jordan","AE":"United Arab Emirates","LB":"Lebanon","BN":"Brunei","MV":"Maldives","BT":"Bhutan","MR":"Mauritania","SO":"Somalia","DJ":"Djibouti","KM":"Comoros"};
for(const [code,name]of Object.entries(expected)){const r=data.legalContext.find(x=>x.code===code);assert.equal(r.geoName,name);assert.match(r.note,/not a verified sign-language congregation count or numeric zero/);assert.match(r.note,/Missing locator data is not zero/);assert.match(r.asOf,/^\d{4}-\d{2}$/);}
for(const name of ['Yemen'])assert.ok(!data.legalContext.some(x=>x.geoName===name));
});


test('Territorial restriction keys use exact geoName without invented ISO codes',()=>{
 const expected=['Somaliland','N. Cyprus'];
 const uncoded=data.legalContext.filter(r=>r.code===null);assert.deepEqual(uncoded.map(r=>r.geoName),expected);
 for(const name of expected){const r=uncoded.find(r=>r.geoName===name);assert.ok(r);assert.equal(data.countryMeta[name].iso3,'-99');assert.equal(data.countryMeta[name].code,undefined);assert.equal(r.asOf,'2023-12');assert.match(r.note,/2023/);assert.match(r.note,/published in 2024/);assert.match(r.note,/(no political recognition is being asserted|political recognition is not being asserted)/);assert.match(r.note,/Missing locator data is not zero/);assert.match(r.url,/^https:\/\/www.state.gov\//);}
 assert.ok(!data.legalContext.some(r=>r.geoName==='Cyprus'));
 assert.ok(data.legalContext.some(r=>r.geoName==='Somalia'&&r.code==='SO'));
});


test('Territorial runtime and cards resolve by geoName, not nullable ISO code',()=>{
 const wrapped=fs.readFileSync('index.html','utf8').match(/atob\("([A-Za-z0-9+/=]+)"\)/)[1];
 const html=zlib.gunzipSync(Buffer.from(wrapped,'base64')).toString();
 assert.ok(html.includes('r=>r.geoName===p.dataset.country'));
 assert.ok(html.includes('x=>x.geoName===selected'));
});
