(function(){
var FREE=5000,SHIP=245;
var COL=[['Pembe','#F4BFD0'],['Siyah','#171317'],['Beyaz','#FFFFFF'],['Krem','#EFE3D3'],['Bordo','#7A2237'],['Mavi','#8FB3D9'],['Yeşil','#2E7D32'],['Mor','#8E5BB8'],['Turuncu','#C9772B']];
var CN={clothing:'Giyim',dresses:'Elbiseler',tops:'Üstler',bottoms:'Alt Giyim',shoes:'Ayakkabı',bags:'Çanta',accessories:'Aksesuar',care:'Saç ve Cilt Bakımı',underwear:'İç Giyim',kids:'Çocuk'};
var NAV=[['YENİ GELENLER','new-arrivals'],['ELBİSELER','dresses'],['ÜSTLER','tops'],['ALT GİYİM','bottoms'],['AYAKKABI','shoes'],['AKSESUAR','accessories'],['İÇ GİYİM','underwear'],['ÇOCUK','kids'],['BAKIM','care'],['İNDİRİM','sale']];
var L=[['Saten Midi Elbise','dresses',89],['Çiçekli Yazlık Elbise','dresses',69],['Kruvaze Mini Elbise','dresses',59],['Dantelli Abiye Elbise','dresses',149],['Örgü Triko Elbise','dresses',79],['Keten Gömlek Elbise','dresses',74],
['İpek Bluz','tops',54],['Basic Pamuklu Tişört','tops',24],['Crop Triko Kazak','tops',49],['Oversize Gömlek','tops',44],['Fırfırlı Bluz','tops',39],['Bodysuit','tops',29],
['Yüksek Bel Mom Jean','bottoms',64],['Pileli Midi Etek','bottoms',52],['Kumaş Pantolon','bottoms',58],['Geniş Paça Jean','bottoms',69],['Mini Deri Etek','bottoms',49],['Bol Paça Pantolon','bottoms',56],
['Trençkot','clothing',129],['Oversize Blazer Ceket','clothing',99],['Kısa Deri Ceket','clothing',119],['Uzun Yün Kaban','clothing',189],['Triko Hırka','clothing',59],
['Topuklu Stiletto','shoes',89],['Beyaz Sneaker','shoes',79],['Deri Bot','shoes',119],['Platform Sandalet','shoes',69],['Babet','shoes',54],['Loafer','shoes',84],
['Mini Omuz Çantası','bags',79],['Tote Çanta','bags',94],['Zincirli Clutch','bags',59],['Sırt Çantası','bags',69],['Kol Çantası','bags',84],
['İnci Kolye','accessories',34],['Altın Halka Küpe','accessories',24],['İpek Eşarp','accessories',29],['Deri Kemer','accessories',39],['Güneş Gözlüğü','accessories',44],['Saç Tokası Seti','accessories',14]];
var MAT={dresses:'%95 viskon, %5 elastan. 30°C’de hassas yıkama.',tops:'%100 pamuk. 30°C’de yıkayın, düşük ısıda ütüleyin.',bottoms:'%98 pamuk, %2 elastan. Ters çevirip 30°C’de yıkayın.',clothing:'Dış: %100 polyester, astar: %100 viskon. Kuru temizleme önerilir.',shoes:'Dış: suni deri, taban: kauçuk. Nemli bezle silin.',bags:'Suni deri, astar: polyester. Nemli bezle silin.',care:'İçerik ve kullanım bilgisi ürün ambalajında yer almaktadır.',accessories:'Metal alaşım / kumaş. Nemden ve parfümden uzak tutun.'};
var P=L.map(function(a,i){var c=a[1],sz=c=='shoes'?['36','37','38','39','40','41']:(c=='bags'||c=='accessories')?['Tek Beden']:['XS','S','M','L','XL'];
 var d=i%3==0?20+(i%4)*5:0,out=i%11==10,st={};sz.forEach(function(s,j){st[s]=out?0:((i+j)%5==0?0:(i%6==0?2:8))});
 var n=1+i%3,cs=[i%6,(i+2)%6,(i+4)%6].slice(0,n).map(function(k){return COL[k]});
 return{id:i+1,name:a[0],cat:c,orig:a[2],disc:d,price:Math.round(a[2]*(100-d)/100),sizes:sz,stock:st,colors:cs,isNew:i%4==1,best:i%5==2,brand:i%2?'AYMELEK Studio':'AYMELEK',avail:Object.keys(st).some(function(k){return st[k]>0}),mat:MAT[c],
 desc:a[0]+', AYMELEK’in yeni sezon koleksiyonundan. Zarif kesimi ve rahat kalıbıyla gün boyu konfor sağlar. (Örnek ürün)'}});
function $(s,r){return(r||document).querySelector(s)}function $$(s,r){return[].slice.call((r||document).querySelectorAll(s))}
function f(n){return new Intl.NumberFormat('tr-TR',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n)+' TL'}
function rd(k){try{var v=JSON.parse(localStorage.getItem(k));return Array.isArray(v)?v:[]}catch(e){return[]}}
function wr(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}counters()}
function counters(){var c=rd('aymelek_cart').reduce(function(s,i){return s+i.qty},0),w=rd('aymelek_wishlist').length;
 $$('[data-count=cart]').forEach(function(e){e.textContent=c;e.dataset.n=c});$$('[data-count=wish]').forEach(function(e){e.textContent=w;e.dataset.n=w})}
function productPrice(p){return p.price>0?f(p.price):'Fiyat yakında'}
function pid(id){return P.filter(function(p){return p.id==id})[0]}
function img(p,ci,v){return p.images[v||0]||'data:image/webp;base64,UklGRkAAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqAQABAAIANCWkAANwAP77/VAA'}

var IC={s:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',u:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',h:'<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',b:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',m:'<path d="M3 6h18M3 12h18M3 18h18"/>'};
function ic(k){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+IC[k]+'</svg>'}
var AD='Gültepe, Türe Sk. No:1, 34295 Küçükçekmece/İstanbul',WA='905079613036',SO={instagram:'https://www.instagram.com/sahra_garajayeva_93',tiktok:'https://www.tiktok.com/@sahra_garajayeva'};
function wl(t){return'https://wa.me/'+WA+'?text='+encodeURIComponent(t||'Merhaba AYMELEK, bilgi almak istiyorum.')}
var WI='<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.100-4.500-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800 0-1.400.7-2 1-2.300.3-.3.6-.3.800-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.300 0 .5l-.4.600-.4.400c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400z"/></svg>';
function soc(){var o='<a class="so" href="'+wl()+'" target="_blank" rel="noopener" aria-label="WhatsApp">'+WI+'</a>';
 if(SO.instagram)o+='<a class="so" href="'+SO.instagram+'" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.500" cy="6.500" r="1" fill="currentColor"/></svg></a>';
 if(SO.tiktok)o+='<a class="so" href="'+SO.tiktok+'" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.500 3c.3 2.200 1.700 3.700 3.800 3.900v3a7 7 0 0 1-3.800-1.200v6.300A5.800 5.800 0 1 1 10.700 9v3.100a2.700 2.700 0 1 0 2.100 2.600V3h3.700z"/></svg></a>';return o}
function chrome(){
 var nav='<li><a href="index.html#magaza-defile">DEFİLE</a></li>'+NAV.map(function(n){return'<li><a href="products.html?cat='+n[1]+'"'+(n[1]=='sale'?' class="sale"':'')+'>'+n[0]+'</a></li>'}).join(''),dn='<a href="index.html#magaza-defile">DEFİLE</a>'+NAV.map(function(n){return'<a href="products.html?cat='+n[1]+'">'+n[0]+'</a>'}).join('');
 var q=new URLSearchParams(location.search).get('q')||'';
 var form=function(i){return'<form class="search" role="search" action="products.html"><label class="sr" for="q'+i+'">Ara</label><input id="q'+i+'" name="q" type="search" list="sg" value="'+htmlText(q)+'" placeholder="Elbise, ayakkabı, çanta ara…" autocomplete="off"><button aria-label="Ara">'+ic('s')+'</button></form>'};
 $('#top').innerHTML='<div class="ann"><p class="on">5.000 TL ve üzeri siparişlerde ücretsiz kargo</p></div><header class="hdr"><div class="wrap"><div class="main"><div><button class="ib burger" aria-label="Menüyü aç">'+ic('m')+'</button>'+form('d')+'</div><a class="logo" href="index.html" aria-label="AYMELEK ana sayfa"><img src="logo-light.png" alt="AYMELEK" width="555" height="492"></a><div class="icons"><button class="ib msearch" aria-label="Ara">'+ic('s')+'</button><a class="ib hide-m" href="account.html" aria-label="Hesabım">'+ic('u')+'</a><a class="ib" href="wishlist.html" aria-label="Favorilerim">'+ic('h')+'<span class="cnt" data-count="wish" data-n="0"></span></a><a class="ib" href="cart.html" aria-label="Sepetim">'+ic('b')+'<span class="cnt" data-count="cart" data-n="0"></span></a></div></div></div><div class="msb">'+form('m')+'</div><div class="cats"><div class="wrap"><ul>'+nav+'</ul></div></div></header><datalist id="sg">'+P.map(function(p){return'<option value="'+htmlText(p.name)+'">'}).join('')+'</datalist><div class="drawer"><div class="bg"></div><nav aria-label="Menü"><button class="x" aria-label="Menüyü kapat">×</button>'+dn+'</nav></div>';
 $('#foot').innerHTML='<footer><div class="wrap"><div class="f"><img src="logo-light.png" alt="AYMELEK" style="height:64px;width:auto"><nav><a href="index.html">Ana Sayfa</a><a href="products.html">Tüm Ürünler</a><a href="wishlist.html">Favoriler</a><a href="cart.html">Sepet</a><a href="about.html">Hakkımızda</a><a href="contact.html">İletişim</a><a href="shipping-returns.html">Kargo ve İade</a><a href="privacy.html">Gizlilik</a><a href="terms.html">Koşullar</a><a href="pre-information.html">Ön Bilgilendirme</a><a href="distance-sales.html">Mesafeli Satış</a><a href="cookies.html">Çerez Politikası</a></nav></div><div class="fa"><a href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(AD)+'" target="_blank" rel="noopener">'+AD+'</a><span class="sl">'+soc()+'</span></div><small>© '+new Date().getFullYear()+' AYMELEK. Tüm hakları saklıdır.</small></div></footer>';
 var h=$('.hdr'),d=$('.drawer');function st(){h.classList.toggle('stuck',scrollY>40)}st();addEventListener('scroll',st,{passive:true});
 function tg(o){d.classList.toggle('open',o);document.body.style.overflow=o?'hidden':''}
 $('.burger').onclick=function(){tg(1)};$('.bg',d).onclick=$('.x',d).onclick=function(){tg(0)};
 $('.msearch').onclick=function(){var b=$('.msb');b.classList.toggle('open');if(b.classList.contains('open'))$('input',b).focus()};$('#foot').insertAdjacentHTML('beforeend','<a class="wf" href="'+wl()+'" target="_blank" rel="noopener" aria-label="WhatsApp ile yazın">'+WI+'</a>');counters()}
function htmlText(value){return String(value==null?'':value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function safeImage(value){if(typeof value!=='string')return false;if(/^data:image\/(?:png|jpeg|webp|gif|avif);base64,[a-z0-9+/=]+$/i.test(value))return true;try{var url=new URL(value,location.href);return url.protocol==='https:'&&!url.username&&!url.password}catch(e){return false}}
function card(p,extra){var w=rd('aymelek_wishlist').indexOf(p.id)>-1;
 return'<article class="pc"><a class="pi" href="product.html?id='+htmlText(p.id)+'"><img loading="lazy" src="'+htmlText(img(p))+'" alt="'+htmlText(p.name)+'" width="300" height="400">'+(p.isNew?'<span class="tag">YENİ</span>':p.best?'<span class="tag">ÇOK SATAN</span>':'')+(p.disc?'<span class="off">-%'+p.disc+'</span>':'')+'</a><button class="wb'+(w?' on':'')+'" data-w="'+htmlText(p.id)+'" aria-label="Favorilere ekle/çıkar" aria-pressed="'+w+'">'+ic('h')+'</button><div class="pn">'+htmlText(p.name)+'</div><div class="pp">'+(p.disc?'<b class="r">'+productPrice(p)+'</b><s>'+f(p.orig)+'</s>':'<b>'+productPrice(p)+'</b>')+'</div><div class="sw">'+p.colors.map(function(c){return'<i title="'+htmlText(c[0])+'" style="background:'+( /^#[0-9a-f]{3,8}$/i.test(c[1]) ? c[1] : '#888' )+'"></i>'}).join('')+'</div><div class="sz">'+(p.avail?p.sizes.join(' · '):'Tükendi')+'</div>'+(extra||'')+'</article>'}
document.addEventListener('click',function(e){var b=e.target.closest('[data-w]');if(!b)return;var id=+b.dataset.w,w=rd('aymelek_wishlist'),i=w.indexOf(id);i>-1?w.splice(i,1):w.push(id);wr('aymelek_wishlist',w);
 if(document.body.dataset.page=='wishlist')return pages.wishlist();$$('[data-w="'+id+'"]').forEach(function(x){x.classList.toggle('on',i<0);x.setAttribute('aria-pressed',i<0)})});
function addCart(id,size,color,qty){var c=rd('aymelek_cart'),m=c.filter(function(x){return x.id==id&&x.size==size&&x.color==color})[0],mx=pid(id).stock[size];
 if(m)m.qty=Math.min(mx,m.qty+qty);else c.push({id:id,size:size,color:color,qty:Math.min(mx,qty)});wr('aymelek_cart',c)}
var pages={};
pages.products=function(){var u=new URLSearchParams(location.search),S={cat:u.get('cat')||'all',q:(u.get('q')||'').trim(),sort:'rec'};
 var T={all:'Tüm Ürünler','new-arrivals':'Yeni Gelenler',sale:'İndirim',clothing:'Giyim'};Object.keys(CN).forEach(function(k){T[k]=T[k]||CN[k]});
 var sizes=[],cols=COL.map(function(c){return c[0]});P.forEach(function(p){p.sizes.forEach(function(s){if(sizes.indexOf(s)<0)sizes.push(s)})});
 var cats=[['all','Tümü'],['new-arrivals','Yeni Gelenler'],['dresses','Elbiseler'],['tops','Üstler'],['bottoms','Alt Giyim'],['shoes','Ayakkabı'],['accessories','Aksesuar'],['underwear','İç Giyim'],['kids','Çocuk'],['care','Saç ve Cilt Bakımı'],['sale','İndirim']];
 var maxPrice=Math.max(10000,...P.map(function(p){return p.price}));
 var app=$('#app');app.innerHTML='<div class="wrap pw"><h1 class="pt" id="ttl"></h1><p class="ps" id="cnt"></p><div class="cl"><form class="fl" id="fl" aria-label="Filtreler"><button type="button" class="x" id="fx" style="display:none;float:right;font-size:24px">×</button><h4>KATEGORİ</h4>'+cats.map(function(c){return'<label><input type="radio" name="cat" value="'+htmlText(c[0])+'"'+(c[0]==S.cat?' checked':'')+'>'+htmlText(c[1])+'</label>'}).join('')+'<h4>FİYAT (EN FAZLA)</h4><input type="range" name="pr" min="0" max="'+maxPrice+'" step="1" value="'+maxPrice+'" style="width:100%;accent-color:#F4A3BE"><div id="prv" style="font-size:13px">'+f(maxPrice)+'</div><h4>BEDEN</h4><div class="row">'+sizes.map(function(s){return'<label class="chip"><input type="checkbox" name="sz" value="'+htmlText(s)+'"><span>'+htmlText(s)+'</span></label>'}).join('')+'</div><h4>RENK</h4><div class="row">'+COL.map(function(c){return'<label class="chip"><input type="checkbox" name="co" value="'+htmlText(c[0])+'"><span class="dot" title="'+htmlText(c[0])+'" style="background:'+( /^#[0-9a-f]{3,8}$/i.test(c[1]) ? c[1] : '#888' )+'"></span></label>'}).join('')+'</div><h4>MARKA</h4><label><input type="checkbox" name="br" value="AYMELEK">AYMELEK</label><label><input type="checkbox" name="br" value="AYMELEK Studio">AYMELEK Studio</label><h4>DİĞER</h4><label><input type="checkbox" name="av">Sadece stokta olanlar</label><label><input type="checkbox" name="di">İndirimli ürünler</label><label><input type="checkbox" name="nw">Yeni gelenler</label><button type="button" class="btn o" id="clr" style="color:#171317;border-color:#171317;margin-top:20px;width:100%;height:44px">TÜM FİLTRELERİ TEMİZLE</button></form><div><div class="bar"><button class="fb" id="fb" type="button">FİLTRELE</button><select id="so" aria-label="Sırala"><option value="rec">Önerilen</option><option value="new">En yeni</option><option value="asc">Fiyat: düşükten yükseğe</option><option value="desc">Fiyat: yüksekten düşüğe</option><option value="best">Çok satanlar</option></select></div><div class="dm">Bu mağazadaki ürünler ve görseller örnektir.</div><div class="pg" id="pg"></div></div></div></div>';
 var fl=$('#fl');
 function run(){var d=new FormData(fl),cat=d.get('cat'),mx=+d.get('pr'),sz=d.getAll('sz'),co=d.getAll('co'),br=d.getAll('br'),q=S.q.toLowerCase();
  $('#prv').textContent=f(mx);
  var r=P.filter(function(p){var cn=(CN[p.cat]||'').toLowerCase();
   if(!inCategory(p,cat))return 0;
   if(q&&(p.name+' '+cn+' '+p.brand).toLowerCase().indexOf(q)<0)return 0;if(p.price>mx)return 0;
   if(sz.length&&!sz.some(function(s){return p.stock[s]>0}))return 0;if(co.length&&!p.colors.some(function(c){return co.indexOf(c[0])>-1}))return 0;
   if(br.length&&br.indexOf(p.brand)<0)return 0;if(d.get('av')&&!p.avail)return 0;if(d.get('di')&&!p.disc)return 0;if(d.get('nw')&&!p.isNew)return 0;return 1});
  var so=$('#so').value;r.sort(function(a,b){return so=='asc'?a.price-b.price:so=='desc'?b.price-a.price:so=='new'?(b.isNew-a.isNew)||(b.id-a.id):so=='best'?(b.best-a.best)||(a.id-b.id):(Number(b.demo===true)-Number(a.demo===true))||a.id-b.id});
  $('#ttl').textContent=q?'“'+S.q+'” için sonuçlar':T[cat]||'Tüm Ürünler';document.title=($('#ttl').textContent)+' — AYMELEK';$('#cnt').textContent=r.length+' ürün';
  $('#pg').innerHTML=r.length?r.map(function(p){return card(p)}).join(''):'<div class="empty" style="grid-column:1/-1"><p>Aramanıza uygun ürün bulunamadı.</p><button class="btn o" type="button" id="clr2">FİLTRELERİ TEMİZLE</button></div>';
  var c2=$('#clr2');if(c2)c2.onclick=clear}
 function clear(){fl.reset();S.q='';$$('input[name=cat]',fl)[0].checked=true;$('#so').value='rec';run()}
 fl.oninput=fl.onchange=run;$('#so').onchange=run;$('#clr').onclick=clear;
 $('#fb').onclick=function(){fl.classList.add('open');$('#fx').style.display='block'};$('#fx').onclick=function(){fl.classList.remove('open')};
 fl.addEventListener('change',function(){if(innerWidth>1000)fl.classList.remove('open')});run()};
pages.product=function(){var p=pid(new URLSearchParams(location.search).get('id')),app=$('#app');
 if(!p){app.innerHTML='<div class="wrap pw empty"><p>Ürün bulunamadı.</p><a class="btn o" href="products.html">TÜM ÜRÜNLER</a></div>';return}
 document.title=p.name+' — AYMELEK';try{var ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Product',name:p.name,description:p.desc,brand:{'@type':'Brand',name:p.brand},image:(p.images&&p.images.length?[new URL(p.images[0],location.href).href]:[]),offers:p.price>0?{'@type':'Offer',priceCurrency:'TRY',price:String(p.price),availability:p.avail?'https://schema.org/InStock':'https://schema.org/OutOfStock',url:location.href}:undefined});document.head.appendChild(ld)}catch(e){}var S={size:p.sizes.length==1&&p.stock[p.sizes[0]]>0?p.sizes[0]:null,ci:p.colors.length==1?0:-1,qty:1,v:0,d3:false},w=rd('aymelek_wishlist').indexOf(p.id)>-1;
 var rel=P.filter(function(x){return x.cat==p.cat&&x.id!=p.id}).slice(0,4);
 function draw(){if(window.__b3){window.__b3.stop();window.__b3=null}var ci=Math.max(S.ci,0),tot=S.size?p.stock[S.size]:0;
  app.innerHTML='<div class="wrap pw"><p class="ps"><a href="index.html">Ana Sayfa</a> / <a href="products.html?cat='+htmlText(p.cat)+'">'+CN[p.cat]+'</a> / '+htmlText(p.name)+'</p><div class="pd"><div class="gal"><div class="th">'+(p.images&&p.images.length?p.images.map(function(_,i){return i}):[0,1,2]).map(function(v){return'<button type="button" data-v="'+v+'" class="'+(v===S.v?'on':'')+'" aria-label="Görsel '+(v+1)+'"><img src="'+htmlText(img(p,ci,v))+'" alt=""></button>'}).join('')+(p.bottle?'<button type="button" data-v="d" class="'+(S.v==='d'?'on':'')+'" aria-label="3D görünüm" style="font-size:13px;letter-spacing:.1em;border:1px solid #171317;aspect-ratio:3/4">3D</button>':'')+'</div>'+(S.v==='d'?'<div class="mn" id="mn3" style="cursor:grab;position:relative;background:#FCE8EF"><canvas id="bc" style="width:100%;height:100%;display:block;touch-action:pan-y" aria-label="Dönen 3 boyutlu ürün" role="img"></canvas><span style="position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:11px;letter-spacing:.12em;color:#858085">DÖNDÜRMEK İÇİN SÜRÜKLEYİN</span></div>':'<div class="mn" id="mn"><img src="'+htmlText(img(p,ci,S.v))+'" alt="'+htmlText(p.name)+'" width="300" height="400"></div>')+'</div><div class="info" id="satin-al"><h1>'+htmlText(p.name)+'</h1><div class="pp">'+(p.disc?'<b class="r">'+productPrice(p)+'</b><s>'+f(p.orig)+'</s> <span style="color:#F4A3BE;font-size:14px">-%'+p.disc+'</span>':'<b>'+productPrice(p)+'</b>')+'</div><div class="dm">Örnek ürün ve örnek görsel.</div><h4>RENK'+(S.ci>-1?': '+htmlText(p.colors[S.ci][0].toUpperCase()):'')+'</h4><div class="row" style="display:flex;gap:6px;flex-wrap:wrap">'+p.colors.map(function(c,i){return'<label class="chip"><input type="radio" name="co" value="'+i+'"'+(i==S.ci?' checked':'')+'><span class="dot" title="'+htmlText(c[0])+'" style="background:'+( /^#[0-9a-f]{3,8}$/i.test(c[1]) ? c[1] : '#888' )+'"></span></label>'}).join('')+'</div><h4>BEDEN</h4><div style="display:flex;gap:6px;flex-wrap:wrap">'+p.sizes.map(function(s){var o=p.stock[s]<1;return'<label class="chip"><input type="radio" name="sz" value="'+htmlText(s)+'"'+(o?' disabled':'')+(s==S.size?' checked':'')+'><span style="'+(o?'opacity:.35;text-decoration:line-through;cursor:not-allowed':'')+'">'+htmlText(s)+'</span></label>'}).join('')+'</div><div class="stk'+(S.size&&tot<=3&&tot>0?' lo':'')+'">'+(!p.avail?'Tükendi':S.size?(tot<=3?'Son '+tot+' adet!':'Stokta var'):'Stokta var — beden seçin')+'</div><h4>ADET</h4><div class="qty"><button type="button" id="qm" aria-label="Azalt">−</button><span>'+S.qty+'</span><button type="button" id="qp" aria-label="Artır">+</button></div><div class="msg" id="msg" role="alert"></div><button class="btn add" id="add"'+(p.avail?'':' disabled')+'>'+(p.avail?'SEPETE EKLE':'TÜKENDİ')+'</button><button class="btn o" id="wl" type="button" style="width:100%;margin-top:10px;color:#171317;border-color:#171317">'+(w?'♥ FAVORİLERDEN ÇIKAR':'♡ FAVORİLERE EKLE')+'</button><h4 style="margin-top:28px">AÇIKLAMA</h4><p style="font-size:14px">'+htmlText(p.desc)+'</p><details><summary>MALZEME VE BAKIM</summary><p>'+htmlText(p.mat)+'</p></details><details><summary>KARGO VE İADE</summary><p>5.000 TL ve üzeri siparişlerde ücretsiz kargo. Altındaki siparişlerde kargo ücreti '+f(SHIP)+'. Kolay iade (örnek metin).</p></details></div></div>'+(rel.length?'<h2 class="pt" style="margin-top:64px;font-size:26px">Bunları da beğenebilirsin</h2><div class="pg" style="margin-top:20px">'+rel.map(function(x){return card(x)}).join('')+'</div>':'')+'</div>';
  $$('[data-v]').forEach(function(b){b.onclick=function(){S.v=b.dataset.v=='d'?'d':+b.dataset.v;draw()}});if(S.v==='d'&&window.Bottle3D)window.__b3=Bottle3D.mount($('#bc'),{color:p.bottle,label:p.label,logo:'logo.png'});
  $$('input[name=co]').forEach(function(i){i.onchange=function(){S.ci=+i.value;draw()}});$$('input[name=sz]').forEach(function(i){i.onchange=function(){S.size=i.value;S.qty=Math.min(S.qty,p.stock[S.size]);draw()}});
  $('#qm').onclick=function(){if(S.qty>1){S.qty--;draw()}};$('#qp').onclick=function(){var mx=S.size?p.stock[S.size]:10;if(S.qty<mx){S.qty++;draw()}};
  var mn=$('#mn');if(mn){mn.onclick=function(e){mn.classList.toggle('z')};mn.onmousemove=function(e){if(mn.classList.contains('z')){var r=mn.getBoundingClientRect();$('img',mn).style.transformOrigin=((e.clientX-r.left)/r.width*100)+'% '+((e.clientY-r.top)/r.height*100)+'%'}}};
  $('#wl').onclick=function(){var l=rd('aymelek_wishlist'),i=l.indexOf(p.id);i>-1?l.splice(i,1):l.push(p.id);wr('aymelek_wishlist',l);w=i<0;draw()};
  $('#add').onclick=function(){var m=$('#msg');if(!S.size&&p.sizes.length>1){m.textContent='Lütfen bir beden seçin.';return}if(S.ci<0){m.textContent='Lütfen bir renk seçin.';return}
   addCart(p.id,S.size,p.colors[S.ci][0],S.qty);m.style.color='#7ee2a8';m.textContent='Sepete eklendi. ';var a=document.createElement('a');a.href='cart.html';a.textContent='Sepeti görüntüle';a.style.textDecoration='underline';m.appendChild(a)}}
 draw();
 if(location.hash==='#satin-al')requestAnimationFrame(function(){$('#satin-al').scrollIntoView({block:'start'})});
};
pages.cart=function(){var app=$('#app');
 function draw(){var c=rd('aymelek_cart').filter(function(x){return pid(x.id)});
  if(!c.length){app.innerHTML='<div class="wrap pw empty"><h1 class="pt">Sepetiniz</h1><p>Sepetiniz boş.</p><a class="btn o" href="products.html">ALIŞVERİŞE BAŞLA</a></div>';return}
  var sub=0,tot=0;c.forEach(function(x){var p=pid(x.id);sub+=p.orig*x.qty;tot+=p.price*x.qty});var disc=sub-tot,ship=tot>=FREE?0:SHIP;
  app.innerHTML='<div class="wrap pw"><h1 class="pt">Sepetiniz</h1><p class="ps">'+c.length+' ürün</p><div class="cart"><div>'+c.map(function(x,i){var p=pid(x.id),ci=Math.max(0,p.colors.map(function(k){return k[0]}).indexOf(x.color));
   return'<div class="ln"><a href="product.html?id='+htmlText(p.id)+'"><img src="'+htmlText(img(p,ci))+'" alt="'+htmlText(p.name)+'"></a><div><a href="product.html?id='+htmlText(p.id)+'"><b style="font-weight:500">'+htmlText(p.name)+'</b></a><small>Beden: '+htmlText(x.size)+' · Renk: '+htmlText(x.color)+'</small><div class="qty"><button data-m="'+i+'" aria-label="Azalt">−</button><span>'+htmlText(x.qty)+'</span><button data-p="'+i+'" aria-label="Artır">+</button></div><button class="rm" data-r="'+i+'">Kaldır</button></div><div style="text-align:right">'+(p.disc?'<b style="color:#F4A3BE;font-weight:500">'+f(p.price*x.qty)+'</b><br><s style="color:#858085;font-size:13px">'+f(p.orig*x.qty)+'</s>':f(p.price*x.qty))+'</div></div>'}).join('')+'</div><aside class="sum"><div><span>Ara toplam</span><span>'+f(sub)+'</span></div><div><span>İndirim</span><span>'+(disc?'−'+f(disc):f(0))+'</span></div><div><span>Kargo</span><span>'+(ship?f(ship):'Ücretsiz')+'</span></div><div class="t"><span>Toplam</span><span>'+f(tot+ship)+'</span></div>'+(ship?'<p class="nt">Ücretsiz kargo için '+f(FREE-tot)+' daha ekleyin.</p>':'')+'<button class="btn p" id="co" style="background:#171317;color:#fff;border-color:#171317">SİPARİŞ ÖZETİNİ GÖR</button><button class="btn p" type="button" disabled aria-describedby="cn" style="opacity:.55;cursor:not-allowed">ÖDEME YAP</button><p class="nt" id="cn" role="status">Ödeme henüz etkin değil. Sipariş gönderilmez veya ödeme alınmaz.</p><div class="nt" id="order-preview" role="status" hidden></div></aside></div></div>';
  function chg(i,fn){var l=rd('aymelek_cart');fn(l,l[i]);wr('aymelek_cart',l);draw()}
  $$('[data-m]').forEach(function(b){b.onclick=function(){chg(+b.dataset.m,function(l,x){if(x.qty>1)x.qty--})}});
  $$('[data-p]').forEach(function(b){b.onclick=function(){chg(+b.dataset.p,function(l,x){if(x.qty<pid(x.id).stock[x.size])x.qty++})}});
  $$('[data-r]').forEach(function(b){b.onclick=function(){chg(+b.dataset.r,function(l){l.splice(+b.dataset.r,1)})}});
  $('#co').onclick=function(){window.location.href='checkout.html';return;var rows=rd('aymelek_cart').filter(function(x){return pid(x.id)});var preview=$('#order-preview');preview.hidden=false;preview.textContent='Sipariş özeti: '+rows.map(function(x){return pid(x.id).name+' ('+x.size+', '+x.qty+' adet)'}).join(' · ')+' — Toplam '+f(tot+ship)+'. Bu bir ön izlemedir; sipariş oluşturulmadı.'}}
 draw()};
pages.wishlist=function(){var ids=rd('aymelek_wishlist'),l=ids.map(pid).filter(Boolean),app=$('#app');
 app.innerHTML='<div class="wrap pw"><h1 class="pt">Favorilerim</h1><p class="ps">'+l.length+' ürün</p>'+(l.length?'<div class="pg">'+l.map(function(p){return card(p,p.avail?'<div style="display:flex;gap:6px;margin-top:8px"><select class="ws" data-s="'+htmlText(p.id)+'" aria-label="Beden" style="flex:1;height:38px;border:1px solid #e6d6dc;background:#fff">'+(p.sizes.length>1?'<option value="">Beden</option>':'')+p.sizes.filter(function(s){return p.stock[s]>0}).map(function(s){return'<option>'+htmlText(s)+'</option>'}).join('')+'</select><button class="btn o" data-mv="'+htmlText(p.id)+'" style="height:38px;padding:0 12px;color:#171317;border-color:#171317;font-size:11px">SEPETE TAŞI</button></div><div class="msg" id="m'+htmlText(p.id)+'"></div>':'')}).join('')+'</div>':'<div class="empty"><p>Henüz favori ürününüz yok.</p><a class="btn o" href="products.html">ÜRÜNLERİ KEŞFET</a></div>')+'</div>';
 $$('[data-mv]').forEach(function(b){b.onclick=function(){var id=+b.dataset.mv,p=pid(id),s=$('[data-s="'+id+'"]').value;if(!s){$('#m'+id).textContent='Lütfen beden seçin.';return}
  addCart(id,s,p.colors[0][0],1);var w=rd('aymelek_wishlist');w.splice(w.indexOf(id),1);wr('aymelek_wishlist',w);pages.wishlist()}})};
pages.static=function(){};
function validateProduct(p){
 if(!p||typeof p!=='object'||!Number.isSafeInteger(Number(p.id))||Number(p.id)<1||
    typeof p.name!=='string'||!p.name.trim()||p.name.length>200||
    !Object.prototype.hasOwnProperty.call(CN,p.cat)||!Number.isFinite(Number(p.orig))||Number(p.orig)<0||(Number(p.orig)===0&&p.orig!==0)||
    !p.stock||typeof p.stock!=='object'||Array.isArray(p.stock))return false;
 return Object.keys(p.stock).every(function(size){return size.length<=40&&Number.isSafeInteger(Number(p.stock[size]))&&Number(p.stock[size])>=0});
}
function norm(p){p.id=Number(p.id);p.stock=Object.fromEntries(Object.keys(p.stock||{}).map(function(size){return [size,Number(p.stock[size])]}));
 p.colors=Array.isArray(p.colors)?p.colors.filter(function(c){return Array.isArray(c)&&typeof c[0]==='string'&&/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(c[1])}):[];
 p.images=Array.isArray(p.images)?p.images.filter(safeImage):[];p.stock=p.stock||{};p.sizes=Object.keys(p.stock);p.disc=+p.disc||0;p.orig=Number(p.orig)*(p.currency==='TRY'?1:50);p.currency='TRY';p.price=Math.round(p.orig*(100-p.disc)/100);p.avail=p.price>0&&p.sizes.some(function(k){return p.stock[k]>0});p.colors=p.colors&&p.colors.length?p.colors:[COL[0]];return p}
[['Yeşil','#2E7D32','yesil'],['Pembe','#F4BFD0','pembe'],['Mor','#8E5BB8','mor'],['Mavi','#8FB3D9','mavi'],['Turuncu','#C9772B','turuncu']].forEach(function(c,j){var st={'100 ml':24};P.push({id:41+j,name:'Biberiye Suyu · '+c[0],cat:'care',orig:15,disc:0,price:15,sizes:['100 ml'],stock:st,colors:[[c[0],c[1]]],isNew:j<2,best:j==0,brand:'AYMELEK',avail:true,mat:MAT.care,desc:'AYMELEK Hidrosel Saç ve Cilt Bakımı, 100 ml sprey şişede. (Örnek ürün ve örnek fiyat)',images:['bakim-'+c[2]+'.jpg'],bottle:{Yeşil:'#2E7D32',Pembe:'#E58AA8',Mor:'#8E5BB8',Mavi:'#2F6FA8',Turuncu:'#B8641F'}[c[0]],label:'BİBERİYE SUYU'})});
P=[
  {
    "id": 101,
    "name": "Kemerli Bej Trençkot",
    "cat": "clothing",
    "orig": 89,
    "disc": 0,
    "stock": {
      "S": 8,
      "M": 8,
      "L": 8
    },
    "colors": [
      [
        "Bej",
        "#D5B997"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Kemerli Bej Trençkot. Demo katalog ürünü.",
    "images": [
      "demo-products/1.jpg"
    ],
    "demo": true
  },
  {
    "id": 102,
    "name": "Siyah Kruvaze Blazer",
    "cat": "clothing",
    "orig": 79,
    "disc": 0,
    "stock": {
      "S": 8,
      "M": 8,
      "L": 8
    },
    "colors": [
      [
        "Siyah",
        "#171317"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Siyah Kruvaze Blazer. Demo katalog ürünü.",
    "images": [
      "demo-products/2.jpg"
    ],
    "demo": true
  },
  {
    "id": 103,
    "name": "Pudra Saten Midi Elbise",
    "cat": "dresses",
    "orig": 69,
    "disc": 0,
    "stock": {
      "S": 8,
      "M": 8,
      "L": 8
    },
    "colors": [
      [
        "Pudra",
        "#E7B8BE"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Pudra Saten Midi Elbise. Demo katalog ürünü.",
    "images": [
      "demo-products/3.jpg"
    ],
    "demo": true
  },
  {
    "id": 104,
    "name": "Çiçek Desenli Midi Elbise",
    "cat": "dresses",
    "orig": 65,
    "disc": 0,
    "stock": {
      "S": 8,
      "M": 8,
      "L": 8
    },
    "colors": [
      [
        "Krem",
        "#EFE3D3"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Çiçek Desenli Midi Elbise. Demo katalog ürünü.",
    "images": [
      "demo-products/4.jpg"
    ],
    "demo": true
  },
  {
    "id": 105,
    "name": "Beyaz Minimal Sneaker",
    "cat": "shoes",
    "orig": 59,
    "disc": 0,
    "stock": {
      "36": 8,
      "37": 8,
      "38": 8,
      "39": 8,
      "40": 8
    },
    "colors": [
      [
        "Beyaz",
        "#FFFFFF"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Beyaz Minimal Sneaker. Demo katalog ürünü.",
    "images": [
      "demo-products/5.jpg"
    ],
    "demo": true
  },
  {
    "id": 106,
    "name": "Siyah Rugan Stiletto",
    "cat": "shoes",
    "orig": 64,
    "disc": 0,
    "stock": {
      "36": 8,
      "37": 8,
      "38": 8,
      "39": 8,
      "40": 8
    },
    "colors": [
      [
        "Siyah",
        "#171317"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Siyah Rugan Stiletto. Demo katalog ürünü.",
    "images": [
      "demo-products/6.jpg"
    ],
    "demo": true
  },
  {
    "id": 107,
    "name": "Pudra Mini Omuz Çantası",
    "cat": "bags",
    "orig": 45,
    "disc": 0,
    "stock": {
      "Tek Beden": 8
    },
    "colors": [
      [
        "Pudra",
        "#E7B8BE"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Pudra Mini Omuz Çantası. Demo katalog ürünü.",
    "images": [
      "demo-products/7.jpg"
    ],
    "demo": true
  },
  {
    "id": 108,
    "name": "Siyah Yapılı Tote Çanta",
    "cat": "bags",
    "orig": 62,
    "disc": 0,
    "stock": {
      "Tek Beden": 8
    },
    "colors": [
      [
        "Siyah",
        "#171317"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Siyah Yapılı Tote Çanta. Demo katalog ürünü.",
    "images": [
      "demo-products/8.jpg"
    ],
    "demo": true
  },
  {
    "id": 109,
    "name": "Altın Tonlu Halka Küpe",
    "cat": "accessories",
    "orig": 19,
    "disc": 0,
    "stock": {
      "Tek Beden": 8
    },
    "colors": [
      [
        "Altın",
        "#C9A14A"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Altın Tonlu Halka Küpe. Demo katalog ürünü.",
    "images": [
      "demo-products/9.jpg"
    ],
    "demo": true
  },
  {
    "id": 110,
    "name": "İnci Kolye",
    "cat": "accessories",
    "orig": 29,
    "disc": 0,
    "stock": {
      "Tek Beden": 8
    },
    "colors": [
      [
        "İnci",
        "#EFE3D3"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "İnci Kolye. Demo katalog ürünü.",
    "images": [
      "demo-products/10.jpg"
    ],
    "demo": true
  },
  {
    "id": 111,
    "name": "Yüz Bakım Serumu",
    "cat": "care",
    "orig": 22,
    "disc": 0,
    "stock": {
      "30 ml": 8
    },
    "colors": [
      [
        "Amber",
        "#9F6637"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Yüz Bakım Serumu. Demo katalog ürünü.",
    "images": [
      "demo-products/11.jpg"
    ],
    "demo": true
  },
  {
    "id": 112,
    "name": "Günlük Yüz Kremi",
    "cat": "care",
    "orig": 18,
    "disc": 0,
    "stock": {
      "50 ml": 8
    },
    "colors": [
      [
        "Pembe",
        "#F4BFD0"
      ]
    ],
    "isNew": true,
    "best": false,
    "brand": "AYMELEK",
    "desc": "Günlük Yüz Kremi. Demo katalog ürünü.",
    "images": [
      "demo-products/12.jpg"
    ],
    "demo": true
  }
].concat([
  {
    "id": 201,
    "name": "Biberiye Spreyi",
    "cat": "care",
    "orig": 390,
    "currency": "TRY",
    "stock": {
      "100 ml": 12
    },
    "colors": [
      [
        "Yeşil",
        "#646732"
      ]
    ],
    "showcaseModel": "spray",
    "showcaseOrder": 1,
    "brand": "AYMELEK",
    "isNew": true,
    "disc": 0,
    "desc": "100 ml · Demo bakım ürünü.",
    "volume": "100 ml",
    "images": [
      "showcase-photos/1.jpg"
    ]
  },
  {
    "id": 202,
    "name": "Kolajen Serum",
    "cat": "care",
    "orig": 690,
    "currency": "TRY",
    "stock": {
      "30 ml": 12
    },
    "colors": [
      [
        "Kahverengi",
        "#95652e"
      ]
    ],
    "showcaseModel": "dropper",
    "showcaseOrder": 2,
    "brand": "AYMELEK",
    "isNew": true,
    "disc": 0,
    "desc": "30 ml · Demo bakım ürünü.",
    "volume": "30 ml",
    "images": [
      "showcase-photos/2.jpg"
    ]
  },
  {
    "id": 203,
    "name": "Yüz Temizleme Jeli",
    "cat": "care",
    "orig": 490,
    "currency": "TRY",
    "stock": {
      "150 ml": 12
    },
    "colors": [
      [
        "Yeşil",
        "#7c8a75"
      ]
    ],
    "showcaseModel": "pump",
    "showcaseOrder": 3,
    "brand": "AYMELEK",
    "isNew": true,
    "disc": 0,
    "desc": "150 ml · Demo bakım ürünü.",
    "volume": "150 ml",
    "images": [
      "showcase-photos/3.jpg"
    ]
  },
  {
    "id": 204,
    "name": "Günlük Nemlendirici",
    "cat": "care",
    "orig": 590,
    "currency": "TRY",
    "stock": {
      "50 ml": 12
    },
    "colors": [
      [
        "Pembe",
        "#bf9385"
      ]
    ],
    "showcaseModel": "airless",
    "showcaseOrder": 4,
    "brand": "AYMELEK",
    "isNew": true,
    "disc": 0,
    "desc": "50 ml · Demo bakım ürünü.",
    "volume": "50 ml",
    "images": [
      "showcase-photos/4.jpg"
    ]
  },
  {
    "id": 205,
    "name": "Saç Bakım Yağı",
    "cat": "care",
    "orig": 540,
    "currency": "TRY",
    "stock": {
      "50 ml": 12
    },
    "colors": [
      [
        "Kahverengi",
        "#6b4128"
      ]
    ],
    "showcaseModel": "oil",
    "showcaseOrder": 5,
    "brand": "AYMELEK",
    "isNew": true,
    "disc": 0,
    "desc": "50 ml · Demo bakım ürünü.",
    "volume": "50 ml",
    "images": [
      "showcase-photos/5.jpg"
    ]
  },
  {
    "id": 206,
    "name": "Misel Su",
    "cat": "care",
    "orig": 440,
    "currency": "TRY",
    "stock": {
      "200 ml": 12
    },
    "colors": [
      [
        "Mavi",
        "#6da1b4"
      ]
    ],
    "showcaseModel": "flip",
    "showcaseOrder": 6,
    "brand": "AYMELEK",
    "isNew": true,
    "disc": 0,
    "desc": "200 ml · Demo bakım ürünü.",
    "volume": "200 ml",
    "images": [
      "showcase-photos/6.jpg"
    ]
  }
],P).map(norm);
var shoeLaunch=[
  {
    "id": 301,
    "name": "ASICS Sneaker · Buz Mavisi",
    "brand": "ASICS",
    "cat": "shoes",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Buz Mavisi",
        "#9bbdce"
      ]
    ],
    "isNew": true,
    "desc": "Buz Mavisi renkli ayakkabı.",
    "images": [
      "shoe-assets/sneaker-1.webp"
    ]
  },
  {
    "id": 302,
    "name": "On Sneaker · Beyaz / Siyah",
    "brand": "On",
    "cat": "shoes",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Beyaz / Siyah",
        "#ebeaea"
      ]
    ],
    "isNew": true,
    "desc": "Beyaz / Siyah renkli ayakkabı.",
    "images": [
      "shoe-assets/sneaker-2.webp"
    ]
  },
  {
    "id": 303,
    "name": "adidas x Wales Bonner Sneaker · Bordo / Krem",
    "brand": "adidas",
    "cat": "shoes",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Bordo / Krem",
        "#633238"
      ]
    ],
    "isNew": true,
    "desc": "Bordo / Krem renkli ayakkabı.",
    "images": [
      "shoe-assets/sneaker-3.webp"
    ]
  },
  {
    "id": 304,
    "name": "Nike ACG Arazi Ayakkabısı · Krem / Adaçayı",
    "brand": "Nike",
    "cat": "shoes",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Krem / Adaçayı",
        "#a6b1a2"
      ]
    ],
    "isNew": true,
    "desc": "Krem / Adaçayı renkli ayakkabı.",
    "images": [
      "shoe-assets/sneaker-4.webp"
    ]
  },
  {
    "id": 305,
    "name": "Nike ACG Arazi Ayakkabısı · Bordo / Kahve",
    "brand": "Nike",
    "cat": "shoes",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Bordo / Kahve",
        "#57363b"
      ]
    ],
    "isNew": true,
    "desc": "Bordo / Kahve renkli ayakkabı.",
    "images": [
      "shoe-assets/sneaker-5.webp"
    ]
  },
  {
    "id": 306,
    "name": "New Balance 1906 Sneaker · Gri / Lacivert",
    "brand": "New Balance",
    "cat": "shoes",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Gri / Lacivert",
        "#667284"
      ]
    ],
    "isNew": true,
    "desc": "Gri / Lacivert renkli ayakkabı.",
    "images": [
      "shoe-assets/sneaker-6.webp"
    ]
  },
  {
    "id": 307,
    "name": "New Balance Sneaker · Kahve / Koyu Yeşil",
    "brand": "New Balance",
    "cat": "shoes",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Kahve / Koyu Yeşil",
        "#51473d"
      ]
    ],
    "isNew": true,
    "desc": "Kahve / Koyu Yeşil renkli ayakkabı.",
    "images": [
      "shoe-assets/sneaker-7.webp"
    ]
  },
  {
    "id": 308,
    "name": "New Balance 1906 Sneaker · Çiçekli Pembe / Yeşil",
    "brand": "New Balance",
    "cat": "shoes",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Çiçekli Pembe / Yeşil",
        "#ad567e"
      ]
    ],
    "isNew": true,
    "desc": "Çiçekli Pembe / Yeşil renkli ayakkabı.",
    "images": [
      "shoe-assets/sneaker-8.webp"
    ]
  }
];
P=P.concat(shoeLaunch.map(function(p){return norm(JSON.parse(JSON.stringify(p)))}));
function includeLaunchShoes(list){
 return list.concat(shoeLaunch.filter(function(shoe){return !list.some(function(p){return Number(p.id)===shoe.id})}).map(function(p){return JSON.parse(JSON.stringify(p))}));
}
window.AYMELEK_INCLUDE_LAUNCH_SHOES=includeLaunchShoes;
var newCategoryProducts=[
  {
    "id": 401,
    "name": "Dikişsiz Bralet · Pudra",
    "brand": "AYMELEK",
    "cat": "underwear",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Pudra",
        "#d3a6a6"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/underwear-1.webp"
    ]
  },
  {
    "id": 402,
    "name": "Yüksek Bel Dikişsiz Külot · Siyah",
    "brand": "AYMELEK",
    "cat": "underwear",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Siyah",
        "#1d1c1e"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/underwear-2.webp"
    ]
  },
  {
    "id": 403,
    "name": "Fitilli Askılı Atlet · Ekru",
    "brand": "AYMELEK",
    "cat": "underwear",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Ekru",
        "#e8dfcd"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/underwear-3.webp"
    ]
  },
  {
    "id": 404,
    "name": "Balensiz Yumuşak Sütyen · Lavanta",
    "brand": "AYMELEK",
    "cat": "underwear",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Lavanta",
        "#b2a1cf"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/underwear-4.webp"
    ]
  },
  {
    "id": 405,
    "name": "Dikişsiz Boxer Şort · Antrasit",
    "brand": "AYMELEK",
    "cat": "underwear",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Antrasit",
        "#49464b"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/underwear-5.webp"
    ]
  },
  {
    "id": 406,
    "name": "Kapüşonlu Fermuarlı Çocuk Sweatshirt · Adaçayı",
    "brand": "AYMELEK",
    "cat": "kids",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Adaçayı",
        "#8b9d82"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/kids-1.webp"
    ]
  },
  {
    "id": 407,
    "name": "Gökkuşağı Desenli Çocuk Tişörtü · Krem",
    "brand": "AYMELEK",
    "cat": "kids",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Krem",
        "#e8dfca"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/kids-2.webp"
    ]
  },
  {
    "id": 408,
    "name": "Lastik Paça Çocuk Eşofman Altı · Lacivert",
    "brand": "AYMELEK",
    "cat": "kids",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Lacivert",
        "#354761"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/kids-3.webp"
    ]
  },
  {
    "id": 409,
    "name": "Kısa Kollu Çocuk Elbisesi · Lila",
    "brand": "AYMELEK",
    "cat": "kids",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Lila",
        "#c0b1db"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/kids-4.webp"
    ]
  },
  {
    "id": 410,
    "name": "Düğmeli Çocuk Pijama Takımı · Gök Mavisi",
    "brand": "AYMELEK",
    "cat": "kids",
    "orig": 0,
    "currency": "TRY",
    "disc": 0,
    "stock": {},
    "colors": [
      [
        "Gök Mavisi",
        "#83a9ca"
      ]
    ],
    "isNew": true,
    "desc": "Koleksiyon önizlemesi. Ürün görseli temsilidir.",
    "images": [
      "category-assets/kids-5.webp"
    ]
  }
];
function includeNewCategories(list){
 return list.concat(newCategoryProducts.filter(function(product){return !list.some(function(existing){return Number(existing.id)===product.id})}).map(function(product){return JSON.parse(JSON.stringify(product))}));
}
P=includeNewCategories(P).map(norm);
window.AYMELEK_INCLUDE_NEW_CATEGORIES=includeNewCategories;
var catalogImages={"1":{"name":"Saten Midi Elbise","source":"","image":"dress-assets/dress-1.webp"},"2":{"name":"Çiçekli Yazlık Elbise","source":"","image":"dress-assets/dress-2.webp"},"3":{"name":"Kruvaze Mini Elbise","source":"","image":"dress-assets/dress-3.webp"},"4":{"name":"Dantelli Abiye Elbise","source":"","image":"dress-assets/dress-4.webp"},"5":{"name":"Örgü Triko Elbise","source":"","image":"dress-assets/dress-5.webp"},"6":{"name":"Keten Gömlek Elbise","source":"","image":"dress-assets/dress-6.webp"},"7":{"cat":"tops","name":"İpek Bluz","source":"","image":"catalog-assets/product-7.webp"},"8":{"cat":"tops","name":"Basic Pamuklu Tişört","source":"","image":"catalog-assets/product-8.webp"},"9":{"cat":"tops","name":"Crop Triko Kazak","source":"","image":"catalog-assets/product-9.webp"},"10":{"cat":"tops","name":"Oversize Gömlek","source":"","image":"catalog-assets/product-10.webp"},"11":{"cat":"tops","name":"Fırfırlı Bluz","source":"","image":"catalog-assets/product-11.webp"},"12":{"cat":"tops","name":"Bodysuit","source":"","image":"catalog-assets/product-12.webp"},"13":{"cat":"bottoms","name":"Yüksek Bel Mom Jean","source":"","image":"catalog-assets/product-13.webp"},"14":{"cat":"bottoms","name":"Pileli Midi Etek","source":"","image":"catalog-assets/product-14.webp"},"15":{"cat":"bottoms","name":"Kumaş Pantolon","source":"","image":"catalog-assets/product-15.webp"},"16":{"cat":"bottoms","name":"Geniş Paça Jean","source":"","image":"catalog-assets/product-16.webp"},"17":{"cat":"bottoms","name":"Mini Deri Etek","source":"","image":"catalog-assets/product-17.webp"},"18":{"cat":"bottoms","name":"Bol Paça Pantolon","source":"","image":"catalog-assets/product-18.webp"},"35":{"cat":"accessories","name":"İnci Kolye","source":"","image":"catalog-assets/product-35.webp"},"36":{"cat":"accessories","name":"Altın Halka Küpe","source":"","image":"catalog-assets/product-36.webp"},"37":{"cat":"accessories","name":"İpek Eşarp","source":"","image":"catalog-assets/product-37.webp"},"38":{"cat":"accessories","name":"Deri Kemer","source":"","image":"catalog-assets/product-38.webp"},"39":{"cat":"accessories","name":"Güneş Gözlüğü","source":"","image":"catalog-assets/product-39.webp"},"40":{"cat":"accessories","name":"Saç Tokası Seti","source":"","image":"catalog-assets/product-40.webp"},"41":{"cat":"care","name":"Biberiye Suyu · Yeşil","source":"bakim-yesil.jpg","image":"care-assets/product-41.webp"},"42":{"cat":"care","name":"Biberiye Suyu · Pembe","source":"bakim-pembe.jpg","image":"care-assets/product-42.webp"},"43":{"cat":"care","name":"Biberiye Suyu · Mor","source":"bakim-mor.jpg","image":"care-assets/product-43.webp"},"44":{"cat":"care","name":"Biberiye Suyu · Mavi","source":"bakim-mavi.jpg","image":"care-assets/product-44.webp"},"45":{"cat":"care","name":"Biberiye Suyu · Turuncu","source":"bakim-turuncu.jpg","image":"care-assets/product-45.webp"},"103":{"name":"Pudra Saten Midi Elbise","source":"demo-products/3.jpg","image":"dress-assets/dress-103.webp"},"104":{"name":"Çiçek Desenli Midi Elbise","source":"demo-products/4.jpg","image":"dress-assets/dress-104.webp"},"109":{"cat":"accessories","name":"Altın Tonlu Halka Küpe","source":"demo-products/9.jpg","image":"catalog-assets/product-109.webp"},"110":{"cat":"accessories","name":"İnci Kolye","source":"demo-products/10.jpg","image":"catalog-assets/product-110.webp"},"111":{"cat":"care","name":"Yüz Bakım Serumu","source":"demo-products/11.jpg","image":"care-assets/product-111.webp"},"112":{"cat":"care","name":"Günlük Yüz Kremi","source":"demo-products/12.jpg","image":"care-assets/product-112.webp"},"201":{"cat":"care","name":"Biberiye Spreyi","source":"showcase-photos/1.jpg","image":"care-assets/product-201.webp"},"202":{"cat":"care","name":"Kolajen Serum","source":"showcase-photos/2.jpg","image":"care-assets/product-202.webp"},"203":{"cat":"care","name":"Yüz Temizleme Jeli","source":"showcase-photos/3.jpg","image":"care-assets/product-203.webp"},"204":{"cat":"care","name":"Günlük Nemlendirici","source":"showcase-photos/4.jpg","image":"care-assets/product-204.webp"},"205":{"cat":"care","name":"Saç Bakım Yağı","source":"showcase-photos/5.jpg","image":"care-assets/product-205.webp"},"206":{"cat":"care","name":"Misel Su","source":"showcase-photos/6.jpg","image":"care-assets/product-206.webp"}};
function isWebpImage(source){
 return /^data:image\/webp;base64,/i.test(source)||(!/^data:/i.test(source)&&/\.webp(?:[?#]|$)/i.test(source));
}
function applyCatalogImages(products){
 return products.map(function(product){
  var replacement=catalogImages[product.id];
  var images=Array.isArray(product.images)?product.images:[];
  if(!replacement||product.cat!==(replacement.cat||'dresses')||product.name!==replacement.name||(images.length&&images[0]!==replacement.source))return Object.assign({},product,{images:images.filter(isWebpImage)});
  return Object.assign({},product,{images:[replacement.image].concat(images.slice(1).filter(isWebpImage)),desc:(product.desc||'')+(replacement.cat?' Ürün görseli temsilidir.':' Mankenli ürün görseli temsilidir.')});
 });
}
P=applyCatalogImages(P);
window.AYMELEK_DEFAULTS=JSON.parse(JSON.stringify(P));
window.AYMELEK_APPLY_CATALOG_IMAGES=applyCatalogImages;
window.AYMELEK_WL=wl;window.AYMELEK_NORMALIZE_PRODUCT=norm;window.AYMELEK_VALIDATE_PRODUCT=validateProduct;
function mergeShowcaseDemo(local){
 if(localStorage.getItem('aymelek_showcase_six')||local.some(function(p){return p.id>=201&&p.id<=206}))return local.map(function(p){var demo=window.AYMELEK_DEFAULTS.find(function(item){return item.id===p.id&&item.id>=201&&item.id<=206});if(!demo||p.images&&p.images.length)return p;return Object.assign({},p,{images:demo.images})});
 var samples=window.AYMELEK_DEFAULTS.filter(function(p){return p.id>=201&&p.id<=206});
 return local.map(function(p){return [41,42,45].includes(p.id)?Object.assign({},p,{showcaseOrder:0,showcaseModel:''}):p}).concat(samples);
}
window.AYMELEK_MERGE_SHOWCASE=mergeShowcaseDemo;
function inCategory(p,cat){
 if(['clothing','bags'].includes(p.cat)||['clothing','bags'].includes(cat))return false;
 if(cat==='new-arrivals')return Boolean(p.isNew);
 if(cat==='sale')return Boolean(p.disc);
 return !CN[cat]||p.cat===cat;
}
function homeProducts(){
 const runway=$('#magaza-defile');
 if(!runway)return;
 const links=[...document.querySelectorAll('.cats a,.drawer a,.hero .btns a,.runway-care-entry')].filter(a=>a.getAttribute('href').startsWith('products.html'));
 const category=a=>new URL(a.href).searchParams.get('cat')||'all';
 links.forEach(a=>a.addEventListener('click',event=>{
  if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  event.preventDefault();
  const cat=category(a);
  const drawer=$('.drawer');
  if(drawer?.classList.contains('open'))$('.drawer .x').click();
  links.forEach(link=>{
   if(category(link)===cat)link.setAttribute('aria-current','true');
   else link.removeAttribute('aria-current');
  });
  const title=CN[cat]||({'new-arrivals':'Yeni Gelenler',sale:'İndirim'}[cat])||'Tüm Ürünler';
  const products=P.filter(p=>inCategory(p,cat)&&p.images.length).map(p=>{
   const availableSizes=p.sizes.filter(size=>p.stock[size]>0);
   const size=availableSizes[0];
   const color=p.colors[0][0];
   const quickAdd=p.avail&&availableSizes.length===1&&p.colors.length===1 ? ()=>{
    const before=rd('aymelek_cart').find(row=>row.id==p.id&&row.size===size&&row.color===color)?.qty||0;
    if(before>=p.stock[size])return 'Bu ürünün mevcut stoğu zaten sepetinde.';
    addCart(p.id,size,color,1);
    const after=rd('aymelek_cart').find(row=>row.id==p.id&&row.size===size&&row.color===color)?.qty||0;
    return after>before?'Sepete eklendi.':'Ürün sepete eklenemedi.';
   } : null;
   return {id:p.id,name:p.name,image:img(p),price:productPrice(p),available:p.avail,quickAdd};
  });
  runway.dispatchEvent(new CustomEvent('aymelek:category',{detail:{title,products}}));
 }));
}
document.addEventListener('click',function(event){
 const control=event.target.closest('.runway-add, #satin-al #add, .hero .btns .btn.p, .runway-add[hidden] + .runway-product[href$="#satin-al"]');
 if(!control||event.defaultPrevented||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 if(control.matches('a')&&(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey))return;
 const box=control.getBoundingClientRect();
 const x=event.detail?event.clientX:box.left+box.width/2;
 const y=event.detail?event.clientY:box.top+box.height/2;
 for(let index=0;index<12;index++){
  const angle=index*Math.PI/6;
  const distance=36+index%4*11;
  const star=document.createElement('span');
  star.className='purchase-star';
  star.setAttribute('aria-hidden','true');
  star.textContent=index%3?'✦':'★';
  Object.assign(star.style,{left:x+'px',top:y+'px',fontSize:(13+index%4*3)+'px'});
  document.body.append(star);
  const flight=star.animate([
   {transform:'translate(-50%, -50%) scale(.65)',opacity:1},
   {transform:'translate(calc(-50% + '+Math.cos(angle)*distance+'px), calc(-50% + '+Math.sin(angle)*distance+'px)) rotate(55deg) scale(.5)',opacity:0}
  ],{duration:360,easing:'ease-out'});
  flight.onfinish=()=>star.remove();
 }
 if(control.matches('a')){
  event.preventDefault();
  setTimeout(()=>location.assign(control.href),220);
 }
},true);
function go(){try{var local=JSON.parse(localStorage.getItem('aymelek_admin_draft'));if(Array.isArray(local)){var draft=mergeShowcaseDemo(local.filter(validateProduct));if(!localStorage.getItem('aymelek_shoes_2026'))draft=includeLaunchShoes(draft);if(!localStorage.getItem('aymelek_new_categories_2026'))draft=includeNewCategories(draft);P=applyCatalogImages(draft.map(norm))}}catch(e){}if(document.getElementById('urun3d')){var selected=P.filter(function(p){return p.cat==='care'&&p.avail&&['spray','dropper','pump','airless','oil','flip'].includes(p.showcaseModel)&&Number.isInteger(p.showcaseOrder)&&p.showcaseOrder>=1&&p.showcaseOrder<=6}).sort(function(a,b){return a.showcaseOrder-b.showcaseOrder||a.id-b.id}).slice(0,6);document.dispatchEvent(new CustomEvent('aymelek:showcase',{detail:selected}))}homeProducts();var pg=pages[document.body.dataset.page];if(!pg)return;chrome();pg()}
if(document.body.dataset.page=='admin'){window.AYMELEK_COL=COL;window.AYMELEK_CN=CN}else
fetch('products.json',{cache:'no-cache'}).then(function(r){return r.ok?r.json():null}).then(function(j){if(Array.isArray(j)&&j.some(validateProduct))P=applyCatalogImages(j.filter(validateProduct).map(norm))}).catch(function(){}).then(go);})();
