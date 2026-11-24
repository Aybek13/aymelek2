/* AYMELEK - site arka plani: 3D logo (hilal + melek), yildizlar ve parlamalar */
(function(){
var c=document.createElement('canvas');c.setAttribute('aria-hidden','true');c.style.cssText='position:fixed;left:0;top:0;width:100%;height:100%;z-index:-1;pointer-events:none';document.body.insertBefore(c,document.body.firstChild);
var x=c.getContext('2d'),W=0,H=0,dpr=Math.min(devicePixelRatio||1,1.5),sc=0,mx=0,my=0,tx=0,ty=0,N=12,fr=0,ft=performance.now(),cut=0,B=null,ar=1.128,st=[],du=[],k,
red=matchMedia('(prefers-reduced-motion:reduce)').matches,pic=document.querySelector('.hero .pic');
for(k=0;k<170;k++)st.push([Math.random(),Math.random(),.4+Math.random()*1.2,Math.random()*6.28,.3+Math.random()*.7]);
for(k=0;k<80;k++)du.push([Math.random()*6.283,.5+Math.random()*.5,.4+Math.random()*1.6,Math.random()*6.28,(Math.random()-.5)*.0004]);
var LG=new Image();LG.onload=function(){var w=Math.min(560,LG.naturalWidth),h=Math.round(w*LG.naturalHeight/LG.naturalWidth);ar=w/h;
 B=[0,.4,.66].map(function(d){var o=document.createElement('canvas');o.width=w;o.height=h;var g=o.getContext('2d');g.drawImage(LG,0,0,w,h);if(d){g.globalCompositeOperation='source-atop';g.fillStyle='rgba(30,4,20,'+d+')';g.fillRect(0,0,w,h)}return o});draw(performance.now())};
LG.src='logo-light.png';
function op(){c.style.opacity=W<700?.20:(.16+.10*Math.min(1,sc/450)).toFixed(3)}
function size(){W=innerWidth;H=innerHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);op();N=W<700?8:14;draw(performance.now())}
function draw(t){x.clearRect(0,0,W,H);var m=W<700,i,q;
 for(i=0;i<st.length;i++){q=st[i];var yy=((q[1]*H-sc*.04*q[2])%H+H)%H,a=q[4]*(.45+.55*Math.sin(t*.0015+q[3]));x.fillStyle='rgba(255,255,255,'+(a*.7)+')';x.beginPath();x.arc(q[0]*W,yy,q[2],0,6.283);x.fill()}
 var lh=Math.min(H*(m?.45:.63),W*(m?.8:.47)),lw=lh*ar,cx=W*(m?.5:.67),cy=H*(m?.44:.5)+Math.sin(t*.0009)*H*.008;
 var g=x.createRadialGradient(cx,cy,0,cx,cy,lh*.9);g.addColorStop(0,'rgba(116,255,237,.20)');g.addColorStop(1,'rgba(116,255,237,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 if(B){var ry=red?-.35:Math.sin(t*.00021)*.42+Math.sin(sc*.0008)*.3+mx*.3,cs=Math.cos(ry),sn=Math.sin(ry),sx=(Math.abs(cs)<.07?.07:Math.abs(cs))*(cs<0?-1:1),T=lw*.055,n=N;
  for(q=0;q<n;q++){var zi=cs>=0?q:n-1-q,z=(zi/(n-1)-.5)*T,dd=(n-1-q)/(n-1),bm=q==n-1?B[0]:(dd<.45?B[1]:B[2]);
   x.save();x.translate(cx+z*sn,cy-my*z*.5);x.scale(sx,1);x.drawImage(bm,-lw/2,-lh/2,lw,lh);x.restore()}
  for(i=0;i<du.length;i++){q=du[i];var an=q[0]+t*q[4],r=lh*(.5+q[1]*.45),px=cx+Math.cos(an)*r*1.05*cs,py=cy+Math.sin(an)*r*.8,al=.25+.75*Math.abs(Math.sin(t*.002+q[3]));x.fillStyle='rgba(252,232,239,'+al*.8+')';x.beginPath();x.arc(px,py,q[2],0,6.283);x.fill()}}}
function loop(t){if(!document.hidden){mx+=(tx-mx)*.05;my+=(ty-my)*.05;if(W>=700||(fr&1))draw(t);
  if(pic&&innerWidth>=1000)pic.style.transform='perspective(1100px) rotateY('+(mx*8).toFixed(2)+'deg) rotateX('+(-my*5).toFixed(2)+'deg)';
  fr++;if(fr==90){var d=(performance.now()-ft)/90;if(d>32&&cut<2){cut++;N=Math.max(6,N-4)}fr=0;ft=performance.now()}}requestAnimationFrame(loop)}
addEventListener('resize',size);addEventListener('scroll',function(){sc=scrollY;op();if(red)draw(0)},{passive:true});
addEventListener('pointermove',function(e){if(e.pointerType==='mouse'){tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5}},{passive:true});
size();if(!red)requestAnimationFrame(loop);
/* kaydirinca belirme */
if('IntersectionObserver'in window&&!red){var sel='.sh,.cc,.pv .wrap>*,.mp .wrap>*,.pc,.ln,.sum,.doc>*,.info>*',io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target;io.unobserve(el);el.classList.add('in');el.addEventListener('transitionend',function f(ev){if(ev.target!==el)return;el.classList.remove('rv','in');el.style.transitionDelay='';el.removeEventListener('transitionend',f)})}})},{threshold:.08,rootMargin:'0px 0px -4% 0px'});
 function add(root){var l=root.matches&&root.matches(sel)?[root]:[];[].push.apply(l,root.querySelectorAll?root.querySelectorAll(sel):[]);l.forEach(function(el,j){if(el.classList.contains('rv')||el.dataset.rv)return;el.dataset.rv=1;var r=el.getBoundingClientRect();if(r.top<innerHeight*.96&&r.bottom>0)return;el.classList.add('rv');el.style.transitionDelay=(j%5)*70+'ms';io.observe(el)})}
 add(document.body);new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType==1)add(n)})})}).observe(document.body,{childList:true,subtree:true});
 setTimeout(function(){[].forEach.call(document.querySelectorAll('.rv:not(.in)'),function(el){el.classList.add('in')})},4500)}
})();
