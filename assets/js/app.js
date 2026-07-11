/* ═══════════════════════════════════════════════════════════
   ikonhouse · AV Pre-Sales Studio — application logic
   ═══════════════════════════════════════════════════════════ */

/* ──────────── Icon set (24×24, stroke-based) ──────────── */
const ICONS = {
  'ceiling-speaker':'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  'speaker':'<rect x="7" y="3" width="10" height="18" rx="2"/><circle cx="12" cy="15" r="3"/><circle cx="12" cy="7.5" r="1.2"/>',
  'soundbar':'<rect x="2" y="9" width="20" height="6" rx="3"/><circle cx="7" cy="12" r=".8" fill="currentColor"/><circle cx="12" cy="12" r=".8" fill="currentColor"/><circle cx="17" cy="12" r=".8" fill="currentColor"/>',
  'subwoofer':'<rect x="4" y="4" width="16" height="16" rx="2.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  'outdoor-speaker':'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
  'tv':'<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
  'projector':'<rect x="2" y="8" width="20" height="9" rx="2"/><circle cx="16" cy="12.5" r="2.5"/><path d="M5 12.5h5"/>',
  'screen':'<path d="M3 4h18M12 4v3"/><rect x="4" y="7" width="16" height="11" rx="1"/>',
  'wifi':'<path d="M2.5 9a15 15 0 0 1 19 0M5.5 12.5a10 10 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1.2" fill="currentColor"/>',
  'rack':'<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M5 8h14M5 13h14M8 5.5h.01M8 10.5h.01M8 15.5h.01"/>',
  'keypad':'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8.5 9h.01M12 9h.01M15.5 9h.01M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15h.01M12 15h.01M15.5 15h.01"/>',
  'keypad-2':'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="7.2" y="7.4" width="9.6" height="3.4" rx="1"/><rect x="7.2" y="13.2" width="9.6" height="3.4" rx="1"/>',
  'touch':'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 15l2.5-4 2 3"/><circle cx="8.5" cy="10.5" r="1"/>',
  'thermostat':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  'sensor':'<circle cx="12" cy="12" r="1.4" fill="currentColor"/><path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.8 4.8a10.2 10.2 0 0 0 0 14.4M19.2 4.8a10.2 10.2 0 0 1 0 14.4"/>',
  'blinds':'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M4 7.5h16M4 12h16M4 16.5h16"/>',
  'curtain':'<path d="M3 3h18M5 3c0 7-1 12-2 18M19 3c0 7 1 12 2 18M12 3c0 7 .5 12 1.5 18M12 3c0 7-.5 12-1.5 18"/>',
  'cctv':'<path d="M3 7l13-3 2 6-13 3z"/><path d="M8 12.5V17h5"/><circle cx="16.5" cy="8" r="1" fill="currentColor"/>',
  'access':'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.4" fill="currentColor"/>',
  'intercom':'<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="9" r="2.5"/><path d="M9 16h6"/>',
  'phone':'<path d="M22 16.9v2a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5.1 2h2a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  'mic':'<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
  'light':'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 1 3.5 10.9c-.8.6-1.5 1.3-1.5 2.1h-4c0-.8-.7-1.5-1.5-2.1A6 6 0 0 1 12 3z"/>',
  'atmos':'<circle cx="12" cy="12" r="2"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/>',
  'plug':'<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v4"/>'
};
const svgOf = icon => `<svg viewBox="0 0 24 24">${ICONS[icon]||ICONS['plug']}</svg>`;
const PALETTE = [
  '#141414','#5B5B5B','#94A3B8','#64748B','#AE8B5C','#8C6A3F',
  '#2E5CFF','#1D3FA8','#0EA5E9','#0E7490','#0FA3A3','#16B364',
  '#1F9D55','#84A93F','#EAB308','#F59E0B','#F4572E','#E5484D',
  '#D62FA0','#7C4DFF'
];

/* Official ikonhouse logotype, embedded so canvas exports never taint
   (file:// images are treated as cross-origin and would block toDataURL). */
const LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="408" viewBox="6.28 5.5 410.3 66.971"><path d="M13.44 14.14c0 2.04-1.39 3.81-3.72 3.81-2.04 0-3.44-1.77-3.44-3.81s1.58-3.9 3.62-3.9c2.06 0 3.54 1.76 3.54 3.9zM7.68 71.439V26.86h4.46v44.58H7.68zM31.46 48.32h.19a92.334 92.334 0 0 1 4.27-4.92l15.79-16.53h5.39L39.08 45.34l20.53 26.1h-5.39l-18.21-23.4-4.55 4.83v18.569H27V5.5h4.46v42.82zM105.48 48.689c0 16.621-11.42 23.781-21.36 23.781-11.52 0-20.43-9.011-20.43-22.941 0-15.229 10.03-23.679 21.08-23.679 12.35-.01 20.71 9.28 20.71 22.839zm-37.34.551c0 11.15 7.15 19.51 16.25 19.51 9.29 0 16.63-8.359 16.63-19.79 0-8.17-4.55-19.41-16.35-19.41-11.42.01-16.53 10.13-16.53 19.69zM116.8 37.54c0-4.09-.09-7.15-.37-10.68h4.18l.28 8.08h.19c2.42-5.02 8.08-9.1 15.32-9.1 4.27 0 15.6 2.14 15.6 18.86v26.75h-4.46V45.06c0-8.081-3.16-15.42-12.35-15.42-6.22 0-11.61 4.46-13.37 10.22-.28 1.111-.56 2.6-.56 3.99v27.58h-4.46V37.54z"/><g><path d="M165.19 5.5h11.42v26.84h.19c1.39-2.14 3.34-3.9 5.67-5.11a16.09 16.09 0 0 1 7.89-2.05c7.71 0 15.79 5.11 15.79 19.599v26.66h-11.42V46c0-6.5-2.42-11.52-8.73-11.52-4.46 0-7.62 2.97-8.92 6.411-.37 1.02-.47 2.229-.47 3.439v27.12h-11.42V5.5zM261.311 48.41c0 16.619-11.701 24.05-23.221 24.05-12.72 0-22.66-8.729-22.66-23.31 0-14.86 9.75-23.96 23.4-23.96 13.471 0 22.481 9.48 22.481 23.22zm-34.09.46c0 8.729 4.359 15.33 11.239 15.33 6.5 0 11.05-6.32 11.05-15.511 0-7.06-3.16-15.229-10.959-15.229-8.08 0-11.33 7.89-11.33 15.41zM311.18 57.88c0 5.39.18 9.851.371 13.56h-9.941l-.559-6.779h-.281c-1.949 3.16-6.41 7.8-14.58 7.8s-15.699-4.92-15.699-19.69V26.21h11.42v24.61c0 7.52 2.42 12.35 8.449 12.35 4.641 0 7.621-3.16 8.73-6.13.461-.931.65-2.229.65-3.53v-27.3h11.42v31.67h.02zM323.061 60.85c2.51 1.58 7.43 3.351 11.52 3.351 5.01 0 7.24-2.14 7.24-5.11 0-3.07-1.86-4.55-7.43-6.6-8.82-2.971-12.441-7.801-12.441-13.19 0-7.99 6.602-14.12 17.091-14.12 5.011 0 9.38 1.21 12.069 2.7l-2.319 7.99c-1.86-1.11-5.569-2.6-9.569-2.6-4.091 0-6.311 2.04-6.311 4.83 0 2.88 2.13 4.179 7.9 6.31 8.26 2.88 11.979 7.061 12.069 13.75 0 8.27-6.409 14.21-18.39 14.21-5.48 0-10.4-1.3-13.74-3.16l2.311-8.361zM370.33 52.029c.279 8.171 6.6 11.701 13.93 11.701 5.301 0 9.01-.83 12.541-2.041l1.67 7.801c-3.9 1.67-9.291 2.88-15.791 2.88-14.67 0-23.31-9.011-23.31-22.851 0-12.54 7.61-24.339 22.101-24.339 14.67 0 19.5 12.08 19.5 22.009 0 2.131-.181 3.811-.371 4.83h-30.27v.01zm19.88-7.989c.091-4.18-1.771-11.05-9.38-11.05-7.061 0-10.029 6.41-10.5 11.05h19.88zM409.061 68.29c0-2.41 1.58-4.181 3.81-4.181s3.71 1.761 3.71 4.181c0 2.229-1.48 4.181-3.9 4.181-2.141-.011-3.71-1.961-3.62-4.181z"/></g></svg>';
const LOGO_DATAURL = 'data:image/svg+xml;base64,'+btoa(LOGO_SVG);

/* Sheet & cover palette (always light — these are printed deliverables) */
const PAPER_INK='#141414', PAPER_DIM='#8A857C', PAPER_LINE='#E9E6E0', PAPER_HL='#AE8B5C', PAPER_SOFT='#F7F6F3';

/* ──────────── Vendor loader (local first, CDN fallback) ──────────── */
const VENDORS = {
  xlsx:{ ready:()=>window.XLSX, srcs:['assets/vendor/xlsx.full.min.js','https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'] },
  pdf :{ ready:()=>window.pdfjsLib, srcs:['assets/vendor/pdf.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'],
         workers:['assets/vendor/pdf.worker.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'] },
  zip :{ ready:()=>window.JSZip, srcs:['assets/vendor/jszip.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'] },
  jspdf:{ ready:()=>window.jspdf&&window.jspdf.jsPDF, srcs:['assets/vendor/jspdf.umd.min.js','https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'] }
};
function ensureLib(name){
  const v=VENDORS[name];
  if(v.ready()) return Promise.resolve(v.loadedIndex||0);
  return new Promise((res,rej)=>{
    const tryIdx=i=>{
      if(i>=v.srcs.length) return rej(new Error(name+' unavailable'));
      const s=document.createElement('script');
      s.src=v.srcs[i];
      s.onload=()=>{ v.loadedIndex=i; res(i); };
      s.onerror=()=>{ s.remove(); tryIdx(i+1); };
      document.head.appendChild(s);
    };
    tryIdx(0);
  });
}

/* ──────────── State ──────────── */
const uid = () => Math.random().toString(36).slice(2,9);
let state = {
  project:'Untitled Project', client:'', location:'', reference:'', preparedBy:'',
  theme:'light', brandLogo:null, libDock:'left', libHidden:false, libFloat:null,
  items:[], floors:[], activeFloor:null, pinScale:1
};
let armedItem=null, selMarker=null, zoom=1, undoStack=[], ctxTarget=null;

const SEED = [
 ['Ceiling Speaker','Audio','ceiling-speaker','#2E5CFF'],['Invisible Speaker','Audio','speaker','#0E7490'],
 ['Soundbar','Audio','soundbar','#2E5CFF'],['Subwoofer','Audio','subwoofer','#141414'],
 ['Outdoor Speaker','Audio','outdoor-speaker','#1F9D55'],
 ['TV Display','Video','tv','#7C4DFF'],['Projector','Video','projector','#D62FA0'],['Projection Screen','Video','screen','#D62FA0'],
 ['Wi-Fi Access Point','Network','wifi','#F4572E'],['Network Rack','Network','rack','#64748B'],
 ['Keypad','Control','keypad','#0FA3A3'],['Keypad (2-Button)','Control','keypad-2','#0FA3A3'],['Touch Panel','Control','touch','#0FA3A3'],
 ['Thermostat','Climate','thermostat','#F59E0B'],['Motion Sensor','Control','sensor','#F59E0B'],
 ['Motorized Blinds','Shading','blinds','#64748B'],['Motorized Curtains','Shading','curtain','#64748B'],
 ['CCTV Camera','Security','cctv','#1F9D55'],['Access Control','Security','access','#1F9D55'],['Video Intercom','Security','intercom','#0E7490']
];
state.items = SEED.map(([name,cat,icon,color])=>({id:uid(),name,cat,model:'',price:0,icon,color}));

/* ──────────── Helpers ──────────── */
const $ = s => document.querySelector(s);
const el = (tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;};
const activeFloor = () => state.floors.find(f=>f.id===state.activeFloor);
const itemById = id => state.items.find(i=>i.id===id);
const qtyOf = (itemId,floorId=null)=>state.floors.reduce((n,f)=>(floorId&&f.id!==floorId)?n:n+f.placements.filter(p=>p.itemId===itemId).length,0);
const planRect = () => $('#planImg').getBoundingClientRect();
const isMobile = () => window.innerWidth<=1024;
function toast(msg){const t=$('#toast');t.textContent=msg;t.style.display='block';clearTimeout(t._h);t._h=setTimeout(()=>t.style.display='none',2800);}
function loadImg(src){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src;});}
async function loadBrandImg(){
  /* Only taint-free sources may be drawn onto export canvases.
     Data URLs are always safe; file-based logos are taint-tested first. */
  if(state.brandLogo){ try{return await loadImg(state.brandLogo);}catch{} }
  else{
    for(const src of ['assets/img/logo.svg','assets/img/logo.png']){
      try{
        const img=await loadImg(src);
        const t=document.createElement('canvas');t.width=t.height=2;
        t.getContext('2d').drawImage(img,0,0,2,2);
        t.toDataURL();               // throws if the canvas would be tainted
        return img;
      }catch{}
    }
  }
  try{return await loadImg(LOGO_DATAURL);}catch{}   // embedded official logo
  return null;
}
const today=()=>new Date().toLocaleDateString(undefined,{day:'2-digit',month:'short',year:'numeric'});

/* ──────────── Theme ──────────── */
function applyTheme(){
  document.documentElement.dataset.theme = state.theme;
  document.querySelectorAll('#themeRow [data-theme-opt]').forEach(b=>b.classList.toggle('on',b.dataset.themeOpt===state.theme));
}
document.querySelectorAll('#themeRow [data-theme-opt]').forEach(b=>{
  b.addEventListener('click',()=>{ state.theme=b.dataset.themeOpt; applyTheme(); });
});
/* View menu (theme + docking) */
$('#btnView').addEventListener('click',e=>{e.stopPropagation();$('#viewMenu').classList.toggle('open');$('#exportMenu').classList.remove('open');});
document.addEventListener('click',()=>$('#viewMenu').classList.remove('open'));
$('#viewMenu').addEventListener('click',e=>e.stopPropagation());

/* ──────────── Brand logo ──────────── */
function renderBrand(){
  const img=$('#brandImg'), wm=$('#brandWordmark');
  const show=()=>{ img.style.display='block'; wm.style.display='none'; };
  const hide=()=>{ img.style.display='none'; wm.style.display='flex'; };
  if(state.brandLogo){ img.onload=show; img.onerror=hide; img.src=state.brandLogo; return; }
  img.onload=show;
  img.onerror=()=>{ img.onerror=hide; img.src='assets/img/logo.png'; };
  img.src='assets/img/logo.svg';
}
$('#btnLogoReplace').addEventListener('click',()=>$('#fileLogo').click());
$('#fileLogo').addEventListener('change',e=>{
  const f=e.target.files[0]; e.target.value=''; if(!f)return;
  const rd=new FileReader();
  rd.onload=()=>{ state.brandLogo=rd.result; renderBrand(); toast('Logo updated — it will also appear on exported sheets.'); };
  rd.readAsDataURL(f);
});

/* ──────────── Dashboard stats ──────────── */
function renderStats(){
  const pins=state.floors.reduce((a,f)=>a+f.placements.length,0);
  const amount=state.items.reduce((a,it)=>a+qtyOf(it.id)*(it.price||0),0);
  $('#dashStats').innerHTML=
    `<span class="stat"><b>${state.floors.length}</b><span>Floors</span></span>`+
    `<span class="stat"><b>${state.items.length}</b><span>Devices</span></span>`+
    `<span class="stat"><b>${pins}</b><span>Ikons placed</span></span>`+
    (amount?`<span class="stat"><b>${amount.toLocaleString(undefined,{maximumFractionDigits:0})}</b><span>BoQ total</span></span>`:'');
}

/* ──────────── Library ──────────── */
function renderLibrary(){
  const q=$('#libSearch').value.trim().toLowerCase();
  const list=$('#libList'); list.innerHTML='';
  const items=state.items.filter(i=>!q||i.name.toLowerCase().includes(q)||(i.cat||'').toLowerCase().includes(q));
  [...new Set(items.map(i=>i.cat||'Other'))].forEach(cat=>{
    list.appendChild(el('div','cat-head',cat));
    items.filter(i=>(i.cat||'Other')===cat).forEach(item=>{
      const qty=qtyOf(item.id);
      const row=el('div','item-row'+(armedItem===item.id?' armed':''));
      row.innerHTML=`<span class="item-chip" style="background:${item.color}">${svgOf(item.icon)}</span>
        <span class="item-meta"><span class="nm">${item.name}</span>${item.model?`<span class="md">${item.model}</span>`:''}</span>
        <span class="item-qty ${qty?'on':''}">${qty||'—'}</span>
        <button class="item-edit" title="Edit"><svg viewBox="0 0 24 24"><path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></svg></button>`;
      row.addEventListener('click',e=>{
        if(e.target.closest('.item-edit')){openItemModal(item.id);return;}
        armItem(armedItem===item.id?null:item.id);
        if(armedItem&&isMobile()) closeLib();
      });
      list.appendChild(row);
    });
  });
  $('#libCount').textContent='· '+state.items.length;
  $('#catList').innerHTML=[...new Set(state.items.map(i=>i.cat).filter(Boolean))].map(c=>`<option value="${c}">`).join('');
  renderStats();
}
$('#libSearch').addEventListener('input',renderLibrary);

/* mobile library sheet */
const openLib=()=>document.body.classList.add('lib-open');
const closeLib=()=>document.body.classList.remove('lib-open');
$('#btnLib').addEventListener('click',()=>{
  if(state.libHidden){ state.libHidden=false; applyDock(); return; }
  openLib();
});
$('#libClose').addEventListener('click',closeLib);
$('#libVeil').addEventListener('click',closeLib);

/* ──────────── Library docking (left / top / bottom / right / float / hidden) ──────────── */
function applyDock(){
  const b=document.body;
  b.classList.remove('dock-left','dock-right','dock-top','dock-bottom','dock-float','lib-hidden');
  b.classList.add('dock-'+(state.libDock||'left'));
  if(state.libHidden) b.classList.add('lib-hidden');
  const lp=$('#libPanel');
  if(state.libDock==='float'){
    const p=state.libFloat||{x:84,y:126};
    lp.style.left=Math.min(Math.max(8,p.x),window.innerWidth-120)+'px';
    lp.style.top =Math.min(Math.max(64,p.y),window.innerHeight-80)+'px';
  } else { lp.style.left='';lp.style.top=''; }
  document.querySelectorAll('#dockRow [data-dock]').forEach(x=>x.classList.toggle('on',!state.libHidden&&x.dataset.dock===(state.libDock||'left')));
  $('#dockHideOpt').classList.toggle('on',!!state.libHidden);
  /* the stage just changed size — keep the plan sensibly in view */
  requestAnimationFrame(()=>{ if(activeFloor()&&!cropMode){clampPan();applyView();} });
}
document.querySelectorAll('#dockRow [data-dock]').forEach(btn=>{
  btn.addEventListener('click',()=>{ state.libDock=btn.dataset.dock; state.libHidden=false; applyDock(); });
});
$('#dockHideOpt').addEventListener('click',()=>{ state.libHidden=true; applyDock(); toast('Library hidden — use the Devices button to bring it back.'); });
/* drag the floating panel by its grip */
$('#floatGrip').addEventListener('pointerdown',e=>{
  e.preventDefault();
  const lp=$('#libPanel');
  const sx=e.clientX,sy=e.clientY;
  const x0=parseFloat(lp.style.left)||84, y0=parseFloat(lp.style.top)||126;
  const id=e.pointerId;
  const mv=ev=>{
    if(ev.pointerId!==id)return;
    const x=Math.min(Math.max(8,x0+(ev.clientX-sx)),window.innerWidth-120);
    const y=Math.min(Math.max(64,y0+(ev.clientY-sy)),window.innerHeight-80);
    lp.style.left=x+'px';lp.style.top=y+'px';
    state.libFloat={x,y};
  };
  const up=ev=>{ if(ev.pointerId!==id)return;
    document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up); };
  document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
});

/* ──────────── Arm / place ──────────── */
function armItem(id){
  if(cropMode) cancelCrop();
  armedItem=id; setSelMarker(null);
  $('#planClick').classList.toggle('armed',!!id);
  $('#planHolder').classList.toggle('arming',!!id);
  $('#hintbar').style.display=id?'block':'none';
  if(id){const it=itemById(id);$('#hintName').textContent=it.name;
    $('#chipDot').style.background=it.color;$('#chipDot').innerHTML=svgOf(it.icon);
    $('#chipName').textContent=it.name;updateChipCount();
  }else $('#chip').style.display='none';
  renderLibrary();renderMarkers();
}
function updateChipCount(){ if(armedItem) $('#chipCnt').textContent='×'+qtyOf(armedItem); }
$('#hintbar').addEventListener('click',()=>armItem(null));
document.addEventListener('pointermove',e=>{
  if(!armedItem||e.pointerType==='touch')return;
  const over=e.target.closest&&e.target.closest('#stage');
  const c=$('#chip');c.style.display=over?'flex':'none';
  c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';
});
$('#planClick').addEventListener('contextmenu',e=>{ if(armedItem){e.preventDefault();armItem(null);} });
$('#planClick').addEventListener('click',e=>{
  if(panMoved)return;                       /* a drag-to-pan just ended — not a placement click */
  const f=activeFloor(); if(!f||cropMode)return;
  if(!armedItem){setSelMarker(null);renderMarkers();return;}
  const r=planRect();
  const x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
  if(x<0||x>1||y<0||y>1)return;
  const p={id:uid(),itemId:armedItem,x,y};
  f.placements.push(p);
  undoStack.push({type:'add',floorId:f.id,p});
  renderMarkers();renderLibrary();renderBoq();updateChipCount();
});

/* ──────────── Markers (pointer-based: mouse + touch) ──────────── */
function setSelMarker(id){
  selMarker=id;
  $('#pinActions').classList.toggle('open',!!id);
}
function pinPx(){const f=activeFloor();if(!f)return 24;return Math.max(12,Math.min(70,f.w*0.021))*state.pinScale;}
function renderMarkers(){
  const holder=$('#planHolder');holder.querySelectorAll('.marker').forEach(m=>m.remove());
  const f=activeFloor();if(!f)return;
  const s=pinPx();
  f.placements.forEach(p=>{
    const it=itemById(p.itemId);if(!it)return;
    const m=el('div','marker'+(selMarker===p.id?' sel':''),svgOf(it.icon));
    m.style.cssText=`left:${p.x*100}%;top:${p.y*100}%;width:${s}px;height:${s}px;background:${it.color}`;
    m.title=it.name;
    m.addEventListener('pointerdown',ev=>{
      if(armedItem||cropMode||(ev.pointerType==='mouse'&&ev.button!==0))return;
      ev.stopPropagation();ev.preventDefault();
      startDrag(p,m,ev);
    });
    m.addEventListener('contextmenu',ev=>{
      ev.preventDefault();ev.stopPropagation();
      ctxTarget=p;const c=$('#ctx');c.style.display='block';
      c.style.left=Math.min(ev.clientX,window.innerWidth-160)+'px';c.style.top=ev.clientY+'px';
    });
    holder.appendChild(m);
  });
}
function startDrag(p,m,ev){
  let moved=false;
  const startX=ev.clientX,startY=ev.clientY;
  m.setPointerCapture(ev.pointerId);
  const onMove=e=>{
    if(!moved&&Math.hypot(e.clientX-startX,e.clientY-startY)<4)return;
    moved=true;
    const r=planRect();
    p.x=Math.min(1,Math.max(0,(e.clientX-r.left)/r.width));
    p.y=Math.min(1,Math.max(0,(e.clientY-r.top)/r.height));
    m.style.left=(p.x*100)+'%';m.style.top=(p.y*100)+'%';   // live update without re-render
  };
  const onUp=()=>{
    m.removeEventListener('pointermove',onMove);m.removeEventListener('pointerup',onUp);m.removeEventListener('pointercancel',onUp);
    setSelMarker(p.id);   // tap = select, drag = reposition (stays selected)
    renderMarkers();
  };
  m.addEventListener('pointermove',onMove);
  m.addEventListener('pointerup',onUp);
  m.addEventListener('pointercancel',onUp);
}
function deletePlacement(id){
  const f=activeFloor();if(!f)return;
  const i=f.placements.findIndex(p=>p.id===id);
  if(i>-1){undoStack.push({type:'del',floorId:f.id,p:f.placements[i]});f.placements.splice(i,1);}
  if(selMarker===id)setSelMarker(null);
  renderMarkers();renderLibrary();renderBoq();updateChipCount();
}
$('#paRemove').addEventListener('click',()=>deletePlacement(selMarker));
$('#paDone').addEventListener('click',()=>{setSelMarker(null);renderMarkers();});
document.addEventListener('click',()=>$('#ctx').style.display='none');
$('#ctxDelete').addEventListener('click',()=>{if(ctxTarget){deletePlacement(ctxTarget.id);ctxTarget=null;}});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    const veil=document.querySelector('.veil.open');
    if(veil){veil.classList.remove('open');return;}
    if(cropMode){cancelCrop();return;}
    if(document.body.classList.contains('lib-open')){closeLib();return;}
    if(armedItem)armItem(null);else{setSelMarker(null);renderMarkers();}
  }
  if((e.key==='Delete'||e.key==='Backspace')&&selMarker&&!e.target.matches('input,select,textarea')){
    deletePlacement(selMarker);
  }
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'&&!e.target.matches('input,select,textarea')){
    e.preventDefault();const a=undoStack.pop();if(!a)return;
    const f=state.floors.find(fl=>fl.id===a.floorId);if(!f)return;
    if(a.type==='add'){const i=f.placements.findIndex(p=>p.id===a.p.id);if(i>-1)f.placements.splice(i,1);}
    if(a.type==='del')f.placements.push(a.p);
    renderMarkers();renderLibrary();renderBoq();updateChipCount();
  }
});

/* ──────────── Floors ──────────── */
function renderFloors(){
  const tabs=$('#floorTabs');tabs.innerHTML='';
  state.floors.forEach(f=>{
    const t=el('button','floor-tab'+(f.id===state.activeFloor?' on':''));
    t.innerHTML=`<span class="fname">${f.name}</span><span class="x" title="Remove floor">✕</span>`;
    t.querySelector('.fname').addEventListener('dblclick',e=>{
      e.stopPropagation();const nn=prompt('Rename floor',f.name);if(nn){f.name=nn.trim()||f.name;renderFloors();}
    });
    t.addEventListener('click',e=>{
      if(e.target.classList.contains('x')){
        if(confirm(`Remove "${f.name}" and its ${f.placements.length} ikons?`)){
          if(cropMode)cancelCrop();
          state.floors=state.floors.filter(x=>x.id!==f.id);
          if(state.activeFloor===f.id)state.activeFloor=state.floors[0]?.id||null;
          renderFloors();showFloor();renderLibrary();renderBoq();
        }return;
      }
      if(cropMode)cancelCrop();
      state.activeFloor=f.id;renderFloors();showFloor();
    });
    tabs.appendChild(t);
  });
  renderStats();
}
function showFloor(){
  const f=activeFloor();
  $('#emptyState').style.display=f?'none':'block';
  $('#planHolder').style.display=f?'block':'none';
  setSelMarker(null);
  if(f){$('#planImg').src=f.img;requestAnimationFrame(()=>{fitZoom();renderMarkers();});}
}
function addFloor(name,dataUrl,w,h){
  const f={id:uid(),name,img:dataUrl,w,h,placements:[]};
  state.floors.push(f);state.activeFloor=f.id;
  renderFloors();showFloor();renderBoq();
  return f;
}

/* ──────────── Plan import: file, PDF, paste, drag-drop ──────────── */
$('#btnAddFloor').addEventListener('click',()=>$('#filePlan').click());
$('#btnUploadEmpty').addEventListener('click',()=>$('#filePlan').click());
$('#filePlan').addEventListener('change',e=>{const f=e.target.files[0];e.target.value='';if(f)routeFile(f);});

async function routeFile(file){
  try{
    if(file.type==='application/pdf'||/\.pdf$/i.test(file.name))await importPdf(file);
    else if(file.type.startsWith('image/'))await importImage(file);
    else toast('Unsupported file — use an image or PDF.');
  }catch(err){toast('Could not read that file — try a PNG/JPG or a standard PDF.');console.error(err);}
}
function importImage(file,label){
  return new Promise((res,rej)=>{
    const rd=new FileReader();
    rd.onload=()=>{const img=new Image();
      img.onload=()=>{addFloor(label||file.name.replace(/\.[^.]+$/,'')||'Plan',rd.result,img.naturalWidth,img.naturalHeight);toast('Plan added — pick a device and click to place.');res();};
      img.onerror=rej;img.src=rd.result;};
    rd.onerror=rej;rd.readAsDataURL(file);
  });
}
async function importPdf(file){
  toast('Loading PDF…');
  const which=await ensureLib('pdf');
  pdfjsLib.GlobalWorkerOptions.workerSrc=VENDORS.pdf.workers[which];
  const buf=await file.arrayBuffer();
  const pdf=await pdfjsLib.getDocument({data:buf}).promise;
  const n=Math.min(pdf.numPages,15);
  let firstId=null;
  for(let i=1;i<=n;i++){
    const page=await pdf.getPage(i);
    const vp1=page.getViewport({scale:1});
    const scale=Math.min(2400/vp1.width,3);
    const vp=page.getViewport({scale});
    const cv=document.createElement('canvas');cv.width=vp.width;cv.height=vp.height;
    await page.render({canvasContext:cv.getContext('2d'),viewport:vp}).promise;
    const f=addFloor(`Page ${i}`,cv.toDataURL('image/jpeg',0.86),cv.width,cv.height);
    if(!firstId)firstId=f.id;
  }
  if(firstId){state.activeFloor=firstId;renderFloors();showFloor();}
  toast(`Imported ${n} page${n>1?'s':''} from PDF. Double-click a tab to rename floors.`);
}
let pasteCount=0;
document.addEventListener('paste',e=>{
  if(e.target.matches('input,select,textarea'))return;
  const items=[...(e.clipboardData?.items||[])].filter(i=>i.type.startsWith('image/'));
  if(!items.length)return;
  e.preventDefault();
  items.forEach(i=>{const f=i.getAsFile();if(f)importImage(f,`Pasted plan ${++pasteCount}`);});
});
const stage=$('#stage');
['dragenter','dragover'].forEach(ev=>stage.addEventListener(ev,e=>{e.preventDefault();stage.classList.add('dropping');}));
['dragleave','drop'].forEach(ev=>stage.addEventListener(ev,e=>{e.preventDefault();if(ev==='dragleave'&&e.relatedTarget&&stage.contains(e.relatedTarget))return;stage.classList.remove('dropping');}));
stage.addEventListener('drop',e=>{[...(e.dataTransfer?.files||[])].forEach(routeFile);});

/* ──────────── Free pan & zoom canvas ────────────
   The plan is positioned by transform, not scroll — drag it anywhere in the
   window (left, right, wherever). A soft clamp keeps ≥60px visible so the
   plan can never be lost off-screen. */
let panX=0, panY=0, panMoved=false, spaceHeld=false;
function applyView(){
  $('#planHolder').style.transform=`translate(${panX}px, ${panY}px) scale(${zoom})`;
  $('#zoomLbl').textContent=Math.round(zoom*100)+'%';
}
function clampPan(){
  const f=activeFloor();if(!f)return;
  const vis=60;
  panX=Math.min(stage.clientWidth -vis, Math.max(vis-f.w*zoom, panX));
  panY=Math.min(stage.clientHeight-vis, Math.max(vis-f.h*zoom, panY));
}
function fitZoom(){
  const f=activeFloor();if(!f)return;
  const mrg=window.innerWidth<=760?24:64;
  zoom=Math.max(0.05,Math.min((stage.clientWidth-mrg)/f.w,(stage.clientHeight-mrg)/f.h,1.6));
  panX=(stage.clientWidth -f.w*zoom)/2;
  panY=(stage.clientHeight-f.h*zoom)/2;
  applyView();
}
function zoomAt(cx,cy,nz){
  nz=Math.min(4,Math.max(0.05,nz));
  const k=nz/zoom;
  panX=cx-(cx-panX)*k; panY=cy-(cy-panY)*k; zoom=nz;
  clampPan();applyView();
}
$('#zoomIn').addEventListener('click',()=>zoomAt(stage.clientWidth/2,stage.clientHeight/2,zoom*1.2));
$('#zoomOut').addEventListener('click',()=>zoomAt(stage.clientWidth/2,stage.clientHeight/2,zoom/1.2));
$('#zoomFit').addEventListener('click',fitZoom);
stage.addEventListener('wheel',e=>{
  e.preventDefault();
  const r=stage.getBoundingClientRect(), cx=e.clientX-r.left, cy=e.clientY-r.top;
  if(e.ctrlKey||e.metaKey) zoomAt(cx,cy,zoom*(e.deltaY<0?1.1:0.9));   /* zoom to cursor */
  else{ panX-=e.deltaX; panY-=e.deltaY; clampPan(); applyView(); }     /* scroll / trackpad = pan */
},{passive:false});
$('#pinSize').addEventListener('input',e=>{state.pinScale=e.target.value/100;renderMarkers();});

document.addEventListener('keydown',e=>{if(e.code==='Space'&&!e.target.matches('input,select,textarea')){spaceHeld=true;stage.style.cursor='grab';e.preventDefault();}});
document.addEventListener('keyup',e=>{if(e.code==='Space'){spaceHeld=false;stage.style.cursor='';}});

/* drag to pan — mouse (background, or on the plan when nothing is armed;
   plus space-drag / middle-drag anywhere) and one-finger touch.
   NOTE: no pointer capture here — capturing on the stage would retarget the
   derived click event and silently break every button inside the stage. */
stage.addEventListener('pointerdown',e=>{
  if(e.target.closest('button,input,a,.marker,.crop-rect')||e.target.classList.contains('ch'))return;
  const mouse=e.pointerType==='mouse';
  const onPlan=!!e.target.closest('#planClick');
  const allow = e.button===1 || spaceHeld || !mouse || (e.button===0 && (!onPlan || !armedItem));
  if(!allow || pinchActive) return;
  if(e.button===1||spaceHeld) e.preventDefault();   /* stop middle-click autoscroll / page scroll on space */
  const id=e.pointerId, sx=e.clientX, sy=e.clientY, px0=panX, py0=panY; let moved=false;
  const mv=ev=>{
    if(ev.pointerId!==id||pinchActive)return;
    if(!moved&&Math.hypot(ev.clientX-sx,ev.clientY-sy)<4)return;
    moved=true;panMoved=true;stage.style.cursor='grabbing';
    panX=px0+(ev.clientX-sx); panY=py0+(ev.clientY-sy);
    clampPan();applyView();
  };
  const up=ev=>{
    if(ev.pointerId!==id)return;
    document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);
    stage.style.cursor=spaceHeld?'grab':'';
    setTimeout(()=>panMoved=false,0);   /* lets the click handler skip the post-drag click */
  };
  document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
});

/* two-finger pinch: zooms around and follows the midpoint */
let pinch=null,pinchActive=false;
stage.addEventListener('touchstart',e=>{
  if(e.touches.length===2){
    pinchActive=true;
    const r=stage.getBoundingClientRect(),[a,b]=e.touches;
    pinch={d:Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY),z:zoom,px:panX,py:panY,
           mx:(a.clientX+b.clientX)/2-r.left,my:(a.clientY+b.clientY)/2-r.top};
  }
},{passive:true});
stage.addEventListener('touchmove',e=>{
  if(pinch&&e.touches.length===2){
    e.preventDefault();
    const r=stage.getBoundingClientRect(),[a,b]=e.touches;
    const d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
    const mx=(a.clientX+b.clientX)/2-r.left, my=(a.clientY+b.clientY)/2-r.top;
    const nz=Math.min(4,Math.max(0.05,pinch.z*(d/pinch.d)));
    panX=mx-(pinch.mx-pinch.px)*(nz/pinch.z);
    panY=my-(pinch.my-pinch.py)*(nz/pinch.z);
    zoom=nz;clampPan();applyView();
  }
},{passive:false});
stage.addEventListener('touchend',e=>{ if(e.touches.length<2){pinch=null;pinchActive=false;} },{passive:true});

/* ──────────── Crop tool ──────────── */
let cropMode=false, crop={x:0,y:0,w:0,h:0}, cropRatio=Math.SQRT2;
const RATIOS=[
  {id:'aL',label:'A Series · Landscape',v:Math.SQRT2},
  {id:'aP',label:'A Series · Portrait',v:1/Math.SQRT2},
  {id:'169',label:'16:9',v:16/9},
  {id:'43',label:'4:3',v:4/3},
  {id:'11',label:'1:1',v:1},
  {id:'free',label:'Free',v:null},
];
function recommendedRatio(){const f=activeFloor();return f&&f.h>f.w?1/Math.SQRT2:Math.SQRT2;}
function enterCrop(){
  const f=activeFloor();if(!f){toast('Upload a floor plan first.');return;}
  armItem(null);setSelMarker(null);
  cropMode=true;
  cropRatio=recommendedRatio();
  fitCropToRatio();
  $('#cropLayer').style.display='block';
  $('#cropBar').classList.add('open');
  renderRatioChips();renderCropRect();
}
function cancelCrop(){
  cropMode=false;
  $('#cropLayer').style.display='none';
  $('#cropBar').classList.remove('open');
}
$('#btnCrop').addEventListener('click',()=>cropMode?cancelCrop():enterCrop());
$('#cropCancel').addEventListener('click',cancelCrop);

/* rotate the active plan 90° clockwise, remapping pins with it */
async function rotateFloor(){
  const f=activeFloor();if(!f){toast('Upload a floor plan first.');return;}
  if(cropMode)cancelCrop();
  toast('Rotating…');
  const img=await loadImg(f.img);
  const cv=document.createElement('canvas');cv.width=f.h;cv.height=f.w;
  const ctx=cv.getContext('2d');
  ctx.translate(f.h,0);ctx.rotate(Math.PI/2);
  ctx.drawImage(img,0,0);
  f.img=cv.toDataURL('image/jpeg',0.92);
  f.placements=f.placements.map(p=>({...p,x:1-p.y,y:p.x}));   /* CW: (x,y) → (1−y, x) */
  [f.w,f.h]=[f.h,f.w];
  undoStack=[];
  showFloor();renderLibrary();renderBoq();
  toast('Rotated 90° clockwise — click again for further turns.');
}
$('#btnRotate').addEventListener('click',rotateFloor);
function fitCropToRatio(){
  const f=activeFloor();
  if(cropRatio==null){crop={x:f.w*0.05,y:f.h*0.05,w:f.w*0.9,h:f.h*0.9};return;}
  let w=f.w*0.94, h=w/cropRatio;
  if(h>f.h*0.94){h=f.h*0.94;w=h*cropRatio;}
  crop={x:(f.w-w)/2,y:(f.h-h)/2,w,h};
}
function renderRatioChips(){
  const rec=recommendedRatio();
  const box=$('#cropRatios');box.innerHTML='';
  RATIOS.forEach(r=>{
    const on=(r.v==null&&cropRatio==null)||(r.v!=null&&cropRatio!=null&&Math.abs(r.v-cropRatio)<0.001);
    const isRec=r.v!=null&&Math.abs(r.v-rec)<0.001;
    const b=el('button','ratio-chip'+(on?' on':''),r.label+(isRec?'<span class="rec">RECOMMENDED</span>':''));
    b.addEventListener('click',()=>{cropRatio=r.v;fitCropToRatio();renderRatioChips();renderCropRect();});
    box.appendChild(b);
  });
}
function renderCropRect(){
  const f=activeFloor();if(!f)return;
  const r=$('#cropRect');
  r.style.left=(crop.x/f.w*100)+'%';r.style.top=(crop.y/f.h*100)+'%';
  r.style.width=(crop.w/f.w*100)+'%';r.style.height=(crop.h/f.h*100)+'%';
}
/* crop rect: move + corner resize (pointer events, mouse & touch) */
$('#cropRect').addEventListener('pointerdown',ev=>{
  if(ev.target.classList.contains('ch'))return;
  ev.preventDefault();ev.stopPropagation();
  const f=activeFloor();const r0={...crop};
  const rect=planRect();const k=f.w/rect.width;
  const sx=ev.clientX,sy=ev.clientY;
  const t=ev.currentTarget;t.setPointerCapture(ev.pointerId);
  const mv=e=>{
    crop.x=Math.min(f.w-crop.w,Math.max(0,r0.x+(e.clientX-sx)*k));
    crop.y=Math.min(f.h-crop.h,Math.max(0,r0.y+(e.clientY-sy)*k));
    renderCropRect();
  };
  const up=()=>{t.removeEventListener('pointermove',mv);t.removeEventListener('pointerup',up);t.removeEventListener('pointercancel',up);};
  t.addEventListener('pointermove',mv);t.addEventListener('pointerup',up);t.addEventListener('pointercancel',up);
});
document.querySelectorAll('.ch').forEach(h=>{
  h.addEventListener('pointerdown',ev=>{
    ev.preventDefault();ev.stopPropagation();
    const f=activeFloor();const dir=h.dataset.h;
    const rect=planRect();const k=f.w/rect.width;
    /* anchor = opposite corner */
    const ax = dir.includes('w') ? crop.x+crop.w : crop.x;
    const ay = dir.includes('n') ? crop.y+crop.h : crop.y;
    h.setPointerCapture(ev.pointerId);
    const mv=e=>{
      const px=Math.min(f.w,Math.max(0,(e.clientX-rect.left)*k));
      const py=Math.min(f.h,Math.max(0,(e.clientY-rect.top)*k));
      let w=Math.abs(px-ax), hgt=Math.abs(py-ay);
      if(cropRatio!=null){
        /* honour the dominant drag axis, derive the other from the ratio */
        if(w/cropRatio>=hgt) hgt=w/cropRatio; else w=hgt*cropRatio;
        /* clamp inside image while preserving ratio */
        const maxW=(px>=ax?f.w-ax:ax), maxH=(py>=ay?f.h-ay:ay);
        const s=Math.min(1,maxW/w,maxH/hgt);
        w*=s;hgt*=s;
      }
      w=Math.max(60,w);hgt=Math.max(60,hgt);
      crop.x=px>=ax?ax:ax-w;  crop.w=w;
      crop.y=py>=ay?ay:ay-hgt;crop.h=hgt;
      /* free-ratio: follow the pointer exactly on both axes */
      if(cropRatio==null){
        crop.x=Math.min(ax,px);crop.w=Math.max(60,Math.abs(px-ax));
        crop.y=Math.min(ay,py);crop.h=Math.max(60,Math.abs(py-ay));
      }
      renderCropRect();
    };
    const up=()=>{h.removeEventListener('pointermove',mv);h.removeEventListener('pointerup',up);h.removeEventListener('pointercancel',up);};
    h.addEventListener('pointermove',mv);h.addEventListener('pointerup',up);h.addEventListener('pointercancel',up);
  });
});
$('#cropApply').addEventListener('click',async()=>{
  const f=activeFloor();if(!f)return;
  const inside=p=>{const px=p.x*f.w,py=p.y*f.h;return px>=crop.x&&px<=crop.x+crop.w&&py>=crop.y&&py<=crop.y+crop.h;};
  const dropped=f.placements.filter(p=>!inside(p)).length;
  if(dropped&&!confirm(`${dropped} ikon${dropped>1?`s`:``} fall outside the crop and will be removed. Continue?`))return;
  const img=await loadImg(f.img);
  const cv=document.createElement('canvas');
  cv.width=Math.round(crop.w);cv.height=Math.round(crop.h);
  cv.getContext('2d').drawImage(img,crop.x,crop.y,crop.w,crop.h,0,0,cv.width,cv.height);
  f.img=cv.toDataURL('image/jpeg',0.92);
  f.placements=f.placements.filter(inside).map(p=>({...p,
    x:(p.x*f.w-crop.x)/crop.w,
    y:(p.y*f.h-crop.y)/crop.h
  }));
  f.w=cv.width;f.h=cv.height;
  undoStack=[];
  cancelCrop();showFloor();renderLibrary();renderBoq();
  toast('Plan cropped.');
});

/* ──────────── Item modal ──────────── */
let editingId=null,mIcon='ceiling-speaker',mColor=PALETTE[6];
function buildIconGrid(){
  const g=$('#iconGrid');g.innerHTML='';
  Object.keys(ICONS).forEach(k=>{
    const b=el('button','icon-opt'+(k===mIcon?' on':''),svgOf(k));b.title=k;
    b.addEventListener('click',()=>{mIcon=k;buildIconGrid();});
    g.appendChild(b);
  });
}
function buildColorRow(){
  const r=$('#colorRow');r.innerHTML='';
  PALETTE.forEach(c=>{
    const b=el('button','color-opt'+(c.toLowerCase()===mColor.toLowerCase()?' on':''));
    b.style.background=c;b.addEventListener('click',()=>{mColor=c;buildColorRow();});
    r.appendChild(b);
  });
  const cust=el('input');cust.type='color';cust.className='color-custom';cust.value=mColor;cust.title='Custom color';
  cust.addEventListener('input',e=>{mColor=e.target.value;buildColorRow();});
  r.appendChild(cust);
}
function openItemModal(id){
  editingId=id||null;
  const it=id?itemById(id):null;
  $('#itemModalTitle').textContent=it?'Edit device':'New device';
  $('#fName').value=it?.name||'';$('#fCat').value=it?.cat||'';
  $('#fModel').value=it?.model||'';$('#fPrice').value=it?.price||'';
  mIcon=it?.icon||'ceiling-speaker';mColor=it?.color||PALETTE[6];
  $('#fDelete').style.display=it?'block':'none';
  buildIconGrid();buildColorRow();
  $('#itemVeil').classList.add('open');
}
$('#btnNewItem').addEventListener('click',()=>openItemModal(null));
$('#fSave').addEventListener('click',()=>{
  const name=$('#fName').value.trim();if(!name){toast('Give the device a name.');return;}
  const data={name,cat:$('#fCat').value.trim()||'Other',model:$('#fModel').value.trim(),price:parseFloat($('#fPrice').value)||0,icon:mIcon,color:mColor};
  if(editingId)Object.assign(itemById(editingId),data);
  else state.items.push({id:uid(),...data});
  $('#itemVeil').classList.remove('open');
  renderLibrary();renderMarkers();renderBoq();
});
$('#fDelete').addEventListener('click',()=>{
  const n=qtyOf(editingId);
  if(!confirm(`Delete this device${n?` and its ${n} placed ikon${n>1?`s`:``}`:''}?`))return;
  state.floors.forEach(f=>f.placements=f.placements.filter(p=>p.itemId!==editingId));
  state.items=state.items.filter(i=>i.id!==editingId);
  if(armedItem===editingId)armItem(null);
  $('#itemVeil').classList.remove('open');
  renderLibrary();renderMarkers();renderBoq();
});
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$('#'+b.dataset.close).classList.remove('open')));
document.querySelectorAll('.veil').forEach(v=>v.addEventListener('click',e=>{if(e.target===v)v.classList.remove('open');}));

/* ──────────── Project details ──────────── */
$('#btnDetails').addEventListener('click',()=>{
  $('#dName').value=state.project;$('#dClient').value=state.client;
  $('#dLocation').value=state.location;$('#dReference').value=state.reference;
  $('#dPrepared').value=state.preparedBy;
  $('#detailsVeil').classList.add('open');
});
$('#dSave').addEventListener('click',()=>{
  state.project=$('#dName').value.trim()||'Untitled Project';
  state.client=$('#dClient').value.trim();
  state.location=$('#dLocation').value.trim();
  state.reference=$('#dReference').value.trim();
  state.preparedBy=$('#dPrepared').value.trim();
  $('#projName').value=state.project;
  $('#detailsVeil').classList.remove('open');
  renderStats();toast('Project details saved.');
});
$('#projName').addEventListener('input',e=>{state.project=e.target.value||'Untitled Project';renderStats();});

/* ──────────── BoQ ──────────── */
$('#btnBoq').addEventListener('click',()=>{$('#drawer').classList.toggle('open');renderBoq();});
$('#drawerClose').addEventListener('click',()=>$('#drawer').classList.remove('open'));
function boqRows(){
  return state.items.map(it=>{
    const perFloor=state.floors.map(f=>qtyOf(it.id,f.id));
    const total=perFloor.reduce((a,b)=>a+b,0);
    return{it,perFloor,total,amount:total*(it.price||0)};
  }).filter(r=>r.total>0);
}
function renderBoq(){
  if(!$('#drawer').classList.contains('open'))return;
  const rows=boqRows();const t=$('#boqTable');
  if(!rows.length){t.innerHTML='<tbody><tr><td style="padding:26px 10px;color:var(--dim)">Nothing placed yet — pick a device and click on the plan.</td></tr></tbody>';return;}
  const hasPrice=rows.some(r=>r.it.price>0);
  let h='<thead><tr><th>Device</th><th style="text-align:right">Qty</th>'+(hasPrice?'<th style="text-align:right">Unit</th><th style="text-align:right">Amount</th>':'')+'</tr></thead><tbody>';
  rows.forEach(r=>{
    h+=`<tr><td><span class="swatch" style="background:${r.it.color}">${svgOf(r.it.icon)}</span>${r.it.name}${r.it.model?`<span style="color:var(--dim);font-size:11px"> · ${r.it.model}</span>`:''}</td>
      <td class="num">${r.total}</td>`+
      (hasPrice?`<td class="num">${r.it.price?r.it.price.toLocaleString(undefined,{minimumFractionDigits:2}):'—'}</td><td class="num">${r.amount?r.amount.toLocaleString(undefined,{minimumFractionDigits:2}):'—'}</td>`:'')+'</tr>';
  });
  h+='</tbody><tfoot><tr><td>Total</td><td class="num">'+rows.reduce((a,r)=>a+r.total,0)+'</td>'+
     (hasPrice?'<td></td><td class="num">'+rows.reduce((a,r)=>a+r.amount,0).toLocaleString(undefined,{minimumFractionDigits:2})+'</td>':'')+'</tr></tfoot>';
  t.innerHTML=h;
}

/* ──────────── Export menu & paper dialog ──────────── */
$('#btnExport').addEventListener('click',e=>{e.stopPropagation();$('#exportMenu').classList.toggle('open');});
document.addEventListener('click',()=>$('#exportMenu').classList.remove('open'));
$('#exportMenu').addEventListener('click',e=>e.stopPropagation());
const closeMenu=()=>$('#exportMenu').classList.remove('open');
const safeName=()=>state.project.replace(/[^\w\- ]+/g,'')||'Project';
const preparedByLine=()=> state.preparedBy ? `PREPARED BY ${state.preparedBy.toUpperCase()} · IKONHOUSE` : 'PREPARED BY IKONHOUSE';

const PAPERS=[
  {id:'a4',label:'A4',sub:'297 × 210 mm · 300 dpi',long:3508,short:2480,mm:[297,210]},
  {id:'a3',label:'A3',sub:'420 × 297 mm · 250 dpi',long:4134,short:2923,mm:[420,297]},
  {id:'a1',label:'A1',sub:'841 × 594 mm · 150 dpi',long:4967,short:3508,mm:[841,594]},
];
let paperChoice='a3', fmtChoice='pdf', pendingExport=null;
function openPaperDialog(kind){
  pendingExport=kind;closeMenu();
  $('#paperTitle').textContent =
    kind==='cover'?'Export cover page':
    kind==='all'?'Export all layout sheets':
    kind==='package'?'Export full package':'Export layout sheet';
  $('#paperHint').textContent =
    kind==='cover'? 'A cover with the ikonhouse identity, project title, client and details — orientation matches your plans.':
    kind==='package'? 'One .zip containing a combined PDF document (cover + all sheets), the individual PNG sheets and the Excel BoQ.':
    'Orientation follows each plan automatically. Sheets include the branded header, plan and device legend.';
  /* format chips (hidden for package — it always includes both) */
  $('#fmtRow').style.display = kind==='package'?'none':'grid';
  const fb=$('#fmtOpts');fb.innerHTML='';
  [{id:'pdf',label:kind==='all'?'PDF · one document':'PDF'},{id:'png',label:'PNG'}].forEach(f=>{
    const b=el('button','ratio-chip'+(f.id===fmtChoice?' on':''),f.label);
    b.addEventListener('click',()=>{fmtChoice=f.id;openPaperDialog(kind);});
    fb.appendChild(b);
  });
  const box=$('#paperOpts');box.innerHTML='';
  PAPERS.forEach(p=>{
    const b=el('button','paper-opt'+(p.id===paperChoice?' on':''),`<b>${p.label}</b><span>${p.sub}</span>`);
    b.addEventListener('click',()=>{paperChoice=p.id;openPaperDialog(kind);});
    box.appendChild(b);
  });
  $('#paperVeil').classList.add('open');
}
$('#mSheet').addEventListener('click',()=>{ if(!activeFloor()){toast('Upload a floor plan first.');return;} openPaperDialog('sheet'); });
$('#mAllSheets').addEventListener('click',()=>{ if(!state.floors.length){toast('Upload a floor plan first.');return;} openPaperDialog('all'); });
$('#mCover').addEventListener('click',()=>openPaperDialog('cover'));
$('#mPackage').addEventListener('click',()=>{ if(!state.floors.length){toast('Upload a floor plan first.');return;} openPaperDialog('package'); });
$('#paperGo').addEventListener('click',async()=>{
  $('#paperVeil').classList.remove('open');
  const paper=PAPERS.find(p=>p.id===paperChoice);
  try{
    if(pendingExport==='sheet'){
      toast('Rendering sheet…');
      const f=activeFloor();
      const pages=[{cv:await renderSheet(f,paper,1,1),landscape:f.w>=f.h}];
      if(fmtChoice==='pdf'){ const doc=await pagesToPdf(pages,paper); doc.save(`${safeName()} - ${f.name} - ${paper.label}.pdf`); }
      else await downloadCanvas(pages[0].cv,`${safeName()} - ${f.name} - ${paper.label}.png`);
      toast('Layout sheet exported.');
    }
    if(pendingExport==='all'){
      toast('Rendering all sheets…');
      const pages=[];let i=1;
      for(const f of state.floors){ pages.push({name:`${String(i).padStart(2,'0')} ${f.name}`,cv:await renderSheet(f,paper,i,state.floors.length),landscape:f.w>=f.h}); i++; }
      if(fmtChoice==='pdf'){ const doc=await pagesToPdf(pages,paper); doc.save(`${safeName()} - Layout Sheets - ${paper.label}.pdf`); }
      else for(const p of pages) await downloadCanvas(p.cv,`${safeName()} - ${p.name} - ${paper.label}.png`);
      toast('All layout sheets exported.');
    }
    if(pendingExport==='cover'){
      toast('Rendering cover…');
      const land=coverLandscape();
      const pages=[{cv:await renderCover(paper,land),landscape:land}];
      if(fmtChoice==='pdf'){ const doc=await pagesToPdf(pages,paper); doc.save(`${safeName()} - Cover - ${paper.label}.pdf`); }
      else await downloadCanvas(pages[0].cv,`${safeName()} - Cover - ${paper.label}.png`);
      toast('Cover page exported.');
    }
    if(pendingExport==='package'){ await exportPackage(paper); }
  }catch(err){ console.error(err); toast('Export failed — see the browser console for details.'); }
});
function downloadCanvas(cv,name){
  return new Promise(res=>{
    const a=document.createElement('a');a.download=name;a.href=cv.toDataURL('image/png');a.click();
    setTimeout(res,350);
  });
}
function canvasBlob(cv){ return new Promise(res=>cv.toBlob(res,'image/png')); }
function downloadBlob(blob,name){
  const a=document.createElement('a');a.download=name;a.href=URL.createObjectURL(blob);a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
}

/* ──────────── PDF assembly (jsPDF) ──────────── */
async function pagesToPdf(pages,paper){
  await ensureLib('jspdf');
  const {jsPDF}=window.jspdf;
  const [L,S]=paper.mm;
  let doc=null;
  pages.forEach((p,i)=>{
    const w=p.landscape?L:S, h=p.landscape?S:L;
    const o=w>h?'landscape':'portrait';
    if(i===0) doc=new jsPDF({orientation:o,unit:'mm',format:[w,h]});
    else doc.addPage([w,h],o);
    doc.addImage(p.cv.toDataURL('image/jpeg',0.92),'JPEG',0,0,w,h);
  });
  return doc;
}

/* ──────────── Full package (.zip): combined PDF + PNG sheets + BoQ ──────────── */
async function exportPackage(paper){
  toast('Building package — rendering cover…');
  let zip=null;
  try{ await ensureLib('zip'); zip=new JSZip(); }catch{}
  const land=coverLandscape();
  const pages=[{name:`00 Cover - ${paper.label}.png`, cv:await renderCover(paper,land), landscape:land}];
  let i=1;
  for(const f of state.floors){
    toast(`Building package — sheet ${i} of ${state.floors.length}…`);
    pages.push({name:`${String(i).padStart(2,'0')} ${f.name} - ${paper.label}.png`, cv:await renderSheet(f,paper,i,state.floors.length), landscape:f.w>=f.h});
    i++;
  }

  /* combined PDF (best effort) */
  let pdfBlob=null;
  try{ toast('Building package — assembling PDF…'); pdfBlob=(await pagesToPdf(pages,paper)).output('blob'); }
  catch{ toast('Note: PDF library unavailable — package will contain PNGs only.'); }

  /* BoQ workbook (best effort) */
  let boqData=null;
  const rows=boqRows();
  if(rows.length){
    try{ await ensureLib('xlsx'); boqData=XLSX.write(buildBoqWorkbook(rows),{type:'array',bookType:'xlsx'}); }
    catch{ toast('Note: Excel library unavailable — package will not include the BoQ.'); }
  }

  if(zip){
    const folder=zip.folder(safeName());
    if(pdfBlob) folder.file(`${safeName()} - Device Location Plan - ${paper.label}.pdf`, pdfBlob);
    if(boqData) folder.file(`${safeName()} - BoQ.xlsx`, boqData);
    const sheets=folder.folder('sheets-png');
    for(const p of pages) sheets.file(p.name, await canvasBlob(p.cv));
    toast('Compressing package…');
    const blob=await zip.generateAsync({type:'blob'});
    downloadBlob(blob,`${safeName()} - Package.zip`);
    toast('Full package exported (.zip).');
  }else{
    toast('Zip library unavailable — downloading files individually…');
    if(pdfBlob) downloadBlob(pdfBlob,`${safeName()} - Device Location Plan - ${paper.label}.pdf`);
    for(const p of pages) await downloadCanvas(p.cv,`${safeName()} - ${p.name}`);
    if(boqData) downloadBlob(new Blob([boqData],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),`${safeName()} - BoQ.xlsx`);
    toast('Package exported as individual files.');
  }
}

/* ──────────── Excel BoQ ──────────── */
function buildBoqWorkbook(rows){   /* requires XLSX to be loaded */
  const floorNames=state.floors.map(f=>f.name);
  const header=['#','Device','Category','Model / SKU',...floorNames,'Total Qty','Unit Price','Amount'];
  const aoa=[['BILL OF QUANTITIES'],['Project',state.project]];
  if(state.client)aoa.push(['Client',state.client]);
  if(state.location)aoa.push(['Location',state.location]);
  if(state.reference)aoa.push(['Reference',state.reference]);
  aoa.push(['Prepared by',state.preparedBy?state.preparedBy+' — ikonhouse':'ikonhouse'],['Date',today()],[],header);
  rows.forEach((r,i)=>aoa.push([i+1,r.it.name,r.it.cat,r.it.model||'',...r.perFloor,r.total,r.it.price||'',r.amount||'']));
  aoa.push([]);
  aoa.push(['','','','TOTAL',...state.floors.map((f,fi)=>rows.reduce((a,r)=>a+r.perFloor[fi],0)),rows.reduce((a,r)=>a+r.total,0),'',rows.reduce((a,r)=>a+r.amount,0)||'']);
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols']=[{wch:4},{wch:26},{wch:14},{wch:22},...floorNames.map(n=>({wch:Math.max(10,n.length+2)})),{wch:10},{wch:11},{wch:12}];
  ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:header.length-1}}];
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'BoQ');
  return wb;
}
async function exportExcel(){
  const rows=boqRows();
  if(!rows.length){toast('Place some devices first — the BoQ is empty.');return;}
  closeMenu();toast('Preparing Excel…');
  try{await ensureLib('xlsx');}catch{toast('Excel library unavailable — connect once, or add it to assets/vendor (see README).');return;}
  XLSX.writeFile(buildBoqWorkbook(rows),`${safeName()} - BoQ.xlsx`);
}
$('#mExcel').addEventListener('click',exportExcel);
$('#drawerExcel').addEventListener('click',exportExcel);

/* ──────────── Branded layout sheet (A-series) ──────────── */
function iconImage(icon,color){
  return new Promise(res=>{
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${(ICONS[icon]||ICONS['plug']).replaceAll('currentColor',color)}</svg>`;
    const img=new Image();img.onload=()=>res(img);
    img.src='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(svg)));
  });
}
function drawBrand(ctx,logo,x,yCenter,h){
  /* returns width consumed */
  if(logo){
    const w=h*(logo.width/logo.height);
    ctx.drawImage(logo,x,yCenter-h/2,w,h);
    return w;
  }
  ctx.textBaseline='middle';ctx.textAlign='left';
  const size=h*0.92;
  ctx.fillStyle=PAPER_INK;
  ctx.font=`300 ${size}px 'Poppins',sans-serif`;
  ctx.fillText('ikon',x,yCenter);
  const w1=ctx.measureText('ikon').width;
  ctx.font=`700 ${size}px 'Poppins',sans-serif`;
  ctx.fillText('house.',x+w1,yCenter);
  return w1+ctx.measureText('house.').width;
}
async function renderSheet(f,paper,idx,total){
  const landscape=f.w>=f.h;
  const pw=landscape?paper.long:paper.short;
  const ph=landscape?paper.short:paper.long;
  const M=Math.round(pw*0.032);
  const cv=document.createElement('canvas');cv.width=pw;cv.height=ph;
  const ctx=cv.getContext('2d');
  ctx.fillStyle='#FFFFFF';ctx.fillRect(0,0,pw,ph);

  const logo=await loadBrandImg();
  const base=await loadImg(f.img);

  /* header */
  const headH=Math.round(ph*0.088);
  drawBrand(ctx,logo,M,headH*0.52,Math.round(headH*0.30));
  ctx.textAlign='right';ctx.textBaseline='alphabetic';
  ctx.fillStyle=PAPER_INK;
  ctx.font=`600 ${Math.round(ph*0.020)}px 'Poppins',sans-serif`;
  ctx.fillText(state.project,pw-M,headH*0.46);
  const meta=[state.client&&('CLIENT  '+state.client.toUpperCase()),f.name.toUpperCase(),today().toUpperCase(),state.reference&&('REF '+state.reference.toUpperCase())].filter(Boolean).join('   ·   ');
  ctx.font=`500 ${Math.round(ph*0.0105)}px 'JetBrains Mono',monospace`;
  ctx.fillStyle=PAPER_DIM;
  ctx.fillText(meta,pw-M,headH*0.46+Math.round(ph*0.022));
  ctx.fillStyle=PAPER_HL;ctx.fillRect(M,headH-4,Math.round(pw*0.055),4);
  ctx.strokeStyle=PAPER_LINE;ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(0,headH);ctx.lineTo(pw,headH);ctx.stroke();

  /* footer */
  const footH=Math.round(ph*0.045);
  ctx.beginPath();ctx.moveTo(0,ph-footH);ctx.lineTo(pw,ph-footH);ctx.stroke();
  ctx.textAlign='left';
  ctx.font=`500 ${Math.round(ph*0.0095)}px 'JetBrains Mono',monospace`;
  ctx.fillStyle=PAPER_DIM;
  ctx.fillText('DEVICE LOCATION PLAN  ·  '+preparedByLine(),M,ph-footH/2+Math.round(ph*0.0035));
  ctx.textAlign='right';
  ctx.fillText(`${paper.label}  ·  SHEET ${idx} / ${total}`,pw-M,ph-footH/2+Math.round(ph*0.0035));

  /* legend measurement */
  const used=state.items.map(it=>({it,q:qtyOf(it.id,f.id)})).filter(r=>r.q>0);
  const chipH=Math.round(ph*0.030), gap=Math.round(chipH*0.38);
  const nameF=`500 ${Math.round(chipH*0.42)}px 'Inter',sans-serif`;
  const cntF=`600 ${Math.round(chipH*0.40)}px 'JetBrains Mono',monospace`;
  const chips=used.map(r=>{
    ctx.font=nameF;const nw=ctx.measureText(r.it.name).width;
    ctx.font=cntF;const cw=ctx.measureText('×'+r.q).width;
    return {r,w:Math.round(chipH*0.28+chipH*0.72+chipH*0.30+nw+chipH*0.30+cw+chipH*0.42)};
  });
  const availW=pw-2*M;
  let rows=1,x=0;
  chips.forEach(c=>{ if(x+c.w>availW&&x>0){rows++;x=0;} x+=c.w+gap; });
  const legH=used.length? rows*(chipH+gap)+gap : 0;

  /* plan area */
  const py0=headH+Math.round(M*0.55);
  const py1=ph-footH-legH-Math.round(M*0.45);
  const availPW=pw-2*M, availPH=py1-py0;
  const s=Math.min(availPW/f.w,availPH/f.h);
  const dw=f.w*s,dh=f.h*s;
  const dx=M+(availPW-dw)/2, dy=py0+(availPH-dh)/2;
  ctx.drawImage(base,dx,dy,dw,dh);
  ctx.strokeStyle=PAPER_LINE;ctx.lineWidth=2;ctx.strokeRect(dx,dy,dw,dh);

  /* pins */
  const pin=Math.max(10,Math.min(70,f.w*0.021))*state.pinScale*s;
  const iconCache={};
  for(const p of f.placements){
    const it=itemById(p.itemId);if(!it)continue;
    const x0=dx+p.x*dw, y0=dy+p.y*dh;
    ctx.beginPath();ctx.arc(x0,y0,pin/2,0,Math.PI*2);
    ctx.fillStyle=it.color;ctx.fill();
    ctx.lineWidth=Math.max(1,pin*0.06);ctx.strokeStyle='rgba(255,255,255,.9)';ctx.stroke();
    if(!iconCache[it.icon])iconCache[it.icon]=await iconImage(it.icon,'#ffffff');
    const g=pin*0.56;
    ctx.drawImage(iconCache[it.icon],x0-g/2,y0-g/2,g,g);
  }

  /* legend chips */
  if(used.length){
    let cx=M, cy=py1+Math.round(M*0.15);
    for(const c of chips){
      if(cx+c.w>M+availW&&cx>M){cx=M;cy+=chipH+gap;}
      /* pill */
      ctx.fillStyle=PAPER_SOFT;
      roundRect(ctx,cx,cy,c.w,chipH,chipH/2);ctx.fill();
      ctx.strokeStyle=PAPER_LINE;ctx.lineWidth=1.5;
      roundRect(ctx,cx,cy,c.w,chipH,chipH/2);ctx.stroke();
      /* dot + icon */
      const dR=chipH*0.36, dX=cx+chipH*0.28+dR, dY=cy+chipH/2;
      ctx.beginPath();ctx.arc(dX,dY,dR,0,Math.PI*2);ctx.fillStyle=c.r.it.color;ctx.fill();
      if(!iconCache[c.r.it.icon])iconCache[c.r.it.icon]=await iconImage(c.r.it.icon,'#ffffff');
      const g=dR*1.15;
      ctx.drawImage(iconCache[c.r.it.icon],dX-g/2,dY-g/2,g,g);
      /* text */
      ctx.textAlign='left';ctx.textBaseline='middle';
      ctx.font=nameF;ctx.fillStyle=PAPER_INK;
      const tX=dX+dR+chipH*0.30;
      ctx.fillText(c.r.it.name,tX,dY+1);
      const nw=ctx.measureText(c.r.it.name).width;
      ctx.font=cntF;ctx.fillStyle=PAPER_DIM;
      ctx.fillText('×'+c.r.q,tX+nw+chipH*0.30,dY+1);
      cx+=c.w+gap;
    }
    ctx.textBaseline='alphabetic';
  }
  return cv;
}
function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();
}

/* ──────────── Cover page ──────────── */
function wrapText(ctx,text,maxW){
  const words=text.split(/\s+/),lines=[];let line='';
  words.forEach(w=>{
    const t=line?line+' '+w:w;
    if(ctx.measureText(t).width>maxW&&line){lines.push(line);line=w;}
    else line=t;
  });
  if(line)lines.push(line);
  return lines;
}
async function renderCover(paper,landscape=false){
  const pw=landscape?paper.long:paper.short;
  const ph=landscape?paper.short:paper.long;
  const cv=document.createElement('canvas');cv.width=pw;cv.height=ph;
  const ctx=cv.getContext('2d');
  ctx.fillStyle='#FFFFFF';ctx.fillRect(0,0,pw,ph);
  const B=Math.min(pw,ph);                 /* proportions follow the short edge */
  const M=Math.round(B*0.11);
  const logo=await loadBrandImg();

  /* logo, top-left */
  drawBrand(ctx,logo,M,M+Math.round(B*0.016),Math.round(B*0.032));

  /* title block, centred on the golden section */
  let y=Math.round(ph*0.42);
  ctx.textAlign='left';ctx.textBaseline='alphabetic';
  try{ctx.letterSpacing=Math.round(B*0.005)+'px';}catch{}
  ctx.font=`500 ${Math.round(B*0.0155)}px 'JetBrains Mono',monospace`;
  ctx.fillStyle=PAPER_HL;
  ctx.fillText('DEVICE LOCATION PLAN  &  BILL OF QUANTITIES',M,y);
  try{ctx.letterSpacing='0px';}catch{}
  y+=Math.round(B*0.038);

  ctx.font=`300 ${Math.round(B*0.060)}px 'Poppins',sans-serif`;
  ctx.fillStyle=PAPER_INK;
  const lines=wrapText(ctx,state.project,pw-2*M);
  const lh=Math.round(B*0.072);
  lines.forEach(l=>{y+=lh;ctx.fillText(l,M,y);});

  y+=Math.round(B*0.040);
  ctx.fillStyle=PAPER_HL;ctx.fillRect(M,y,Math.round(B*0.12),4);
  y+=Math.round(B*0.060);

  if(state.client){
    ctx.font=`500 ${Math.round(B*0.0135)}px 'JetBrains Mono',monospace`;
    ctx.fillStyle=PAPER_DIM;
    ctx.fillText('PREPARED FOR',M,y);
    y+=Math.round(B*0.027);
    ctx.font=`500 ${Math.round(B*0.023)}px 'Poppins',sans-serif`;
    ctx.fillStyle=PAPER_INK;
    ctx.fillText(state.client,M,y);
  }

  /* bottom meta */
  const by=ph-Math.round(B*0.10);
  ctx.strokeStyle=PAPER_LINE;ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(M,by);ctx.lineTo(pw-M,by);ctx.stroke();
  ctx.font=`500 ${Math.round(B*0.013)}px 'JetBrains Mono',monospace`;
  ctx.fillStyle=PAPER_DIM;
  const meta=[state.location,today(),state.reference].filter(Boolean).join('   ·   ').toUpperCase();
  ctx.fillText(meta||today().toUpperCase(),M,by+Math.round(B*0.027));
  ctx.textAlign='right';
  ctx.fillText(preparedByLine(),pw-M,by+Math.round(B*0.027));
  return cv;
}
/* cover matches the orientation of the plans it fronts */
function coverLandscape(){
  const f=activeFloor()||state.floors[0];
  return f ? f.w>=f.h : false;
}

/* ──────────── Save / open project ──────────── */
$('#mSave').addEventListener('click',()=>{
  closeMenu();
  const blob=new Blob([JSON.stringify(state)],{type:'application/json'});
  const a=document.createElement('a');
  a.download=`${safeName()}.ikonplan`;
  a.href=URL.createObjectURL(blob);a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
});
$('#mOpen').addEventListener('click',()=>{closeMenu();$('#fileProject').click();});
$('#fileProject').addEventListener('change',e=>{
  const file=e.target.files[0];e.target.value='';if(!file)return;
  const rd=new FileReader();
  rd.onload=()=>{
    try{
      const s=JSON.parse(rd.result);
      if(!s.items||!s.floors)throw 0;
      state=Object.assign({theme:'light',brandLogo:null,pinScale:1,client:'',location:'',reference:'',preparedBy:'',libDock:'left',libHidden:false,libFloat:null},s);
      armedItem=null;setSelMarker(null);undoStack=[];
      if(cropMode)cancelCrop();
      $('#projName').value=state.project;
      $('#pinSize').value=(state.pinScale||1)*100;
      applyTheme();renderBrand();applyDock();renderLibrary();renderFloors();showFloor();renderBoq();
      dismissOnboard();
      toast('Project loaded.');
    }catch{toast('That file is not a valid project file.');}
  };
  rd.readAsText(file);
});

window.addEventListener('beforeunload',e=>{
  if(state.floors.some(f=>f.placements.length)){e.preventDefault();e.returnValue='';}
});
window.addEventListener('resize',()=>{ if(activeFloor()&&!cropMode) fitZoom(); });

/* ──────────── Onboarding ──────────── */
function dismissOnboard(){ $('#welcome').style.display='none'; $('#setup').style.display='none'; obStopFx(); }
$('#obStart').addEventListener('click',()=>{ $('#welcome').style.display='none'; obStopFx(); $('#setup').style.display='grid'; setTimeout(()=>$('#sName').focus(),60); });
$('#obOpen').addEventListener('click',()=>$('#fileProject').click());
$('#obGo').addEventListener('click',()=>{
  state.project=$('#sName').value.trim()||'Untitled Project';
  state.client=$('#sClient').value.trim();
  state.location=$('#sLocation').value.trim();
  state.preparedBy=$('#sPrepared').value.trim();
  state.reference=$('#sReference').value.trim();
  $('#projName').value=state.project;
  renderStats();dismissOnboard();
});
$('#obSkip').addEventListener('click',dismissOnboard);
$('#obBack').addEventListener('click',()=>{ $('#setup').style.display='none'; $('#welcome').style.display='grid'; obStartFx(); });
$('#setup').addEventListener('keydown',e=>{ if(e.key==='Enter')$('#obGo').click(); });

/* start over: clear the project, keep the device library, return to the start */
$('#btnStartOver').addEventListener('click',()=>{
  if(!confirm('Start over? This clears the current plans, ikons and project details. Your device library is kept.'))return;
  state.project='Untitled Project';state.client='';state.location='';state.reference='';state.preparedBy='';
  state.floors=[];state.activeFloor=null;undoStack=[];
  if(cropMode)cancelCrop();
  armItem(null);setSelMarker(null);
  $('#projName').value=state.project;
  ['sName','sClient','sLocation','sPrepared','sReference'].forEach(i=>$('#'+i).value='');
  $('#drawer').classList.remove('open');
  renderFloors();showFloor();renderLibrary();renderBoq();renderStats();
  $('#setup').style.display='none';$('#welcome').style.display='grid';obStartFx();
});
$('#obTheme').addEventListener('click',()=>{ state.theme=state.theme==='dark'?'light':'dark'; applyTheme(); });

/* ── ambient wave: a web-like mesh flowing along the bottom of the page.
      Rows of nodes ride layered sine waves; lines link each row and its
      neighbours below, giving a woven, modern feel. Cursor proximity lifts
      and warms nearby nodes. Colors follow the live theme variables. ── */
const obFx={raf:null,mx:-9999,my:-9999};
function obResize(){
  const c=$('#obCanvas');if(!c)return;
  c.width=c.offsetWidth*devicePixelRatio;c.height=c.offsetHeight*devicePixelRatio;
}
function obStartFx(){
  if(obFx.raf||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const c=$('#obCanvas');if(!c)return;
  obResize();
  const ctx=c.getContext('2d');
  const ROWS=6;
  const loop=()=>{
    if($('#welcome').style.display==='none'){obStopFx();return;}
    const W=c.width,H=c.height,dpr=devicePixelRatio;
    const t=performance.now()/1000;
    const cs=getComputedStyle(document.documentElement);
    const ink=cs.getPropertyValue('--txt').trim()||'#141414';
    const hl=cs.getPropertyValue('--hl').trim()||'#AE8B5C';
    ctx.clearRect(0,0,W,H);
    const step=26*dpr, lift=150*dpr;
    const rows=[];
    for(let r=0;r<ROWS;r++){
      const base=H*(0.52+r*0.082);            /* wave band spans the bottom half */
      const a1=(22+r*7)*dpr, a2=(9+r*3)*dpr;
      const pts=[];
      for(let x=-step;x<=W+step;x+=step){
        let y=base
          + Math.sin(x*0.0038/dpr + t*(0.55+r*0.06) + r*0.9)*a1
          + Math.sin(x*0.0017/dpr - t*0.38 + r*0.4)*a2;
        const dc=Math.hypot(x-obFx.mx*dpr, y-obFx.my*dpr);
        const near=dc<lift ? (1-dc/lift) : 0;
        y-=near*26*dpr;
        pts.push({x,y,near});
      }
      rows.push(pts);
    }
    /* row polylines — deepest rows faintest, front row warmed with bronze */
    rows.forEach((pts,r)=>{
      ctx.beginPath();
      pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));
      ctx.strokeStyle=r===ROWS-1?hl:ink;
      ctx.globalAlpha=r===ROWS-1?0.28:0.07+r*0.02;
      ctx.lineWidth=dpr*(r===ROWS-1?1.1:0.8);
      ctx.stroke();
    });
    /* weave: vertical links between neighbouring rows every few columns */
    ctx.lineWidth=dpr*0.6;
    for(let r=0;r<ROWS-1;r++){
      const a=rows[r],b=rows[r+1];
      for(let i=0;i<a.length;i+=3){
        ctx.strokeStyle=ink;ctx.globalAlpha=0.05+Math.max(a[i].near,b[i].near)*0.18;
        ctx.beginPath();ctx.moveTo(a[i].x,a[i].y);ctx.lineTo(b[i].x,b[i].y);ctx.stroke();
      }
    }
    /* nodes */
    rows.forEach((pts,r)=>{
      pts.forEach((p,i)=>{
        if(i%2)return;
        ctx.globalAlpha=(0.16+r*0.05)+p.near*0.5;
        ctx.fillStyle=p.near>0.05||r===ROWS-1?hl:ink;
        ctx.beginPath();ctx.arc(p.x,p.y,(1.1+r*0.18+p.near*1.4)*dpr,0,Math.PI*2);ctx.fill();
      });
    });
    ctx.globalAlpha=1;
    obFx.raf=requestAnimationFrame(loop);
  };
  obFx.raf=requestAnimationFrame(loop);
}
function obStopFx(){ if(obFx.raf){cancelAnimationFrame(obFx.raf);obFx.raf=null;} }
window.addEventListener('resize',obResize);
/* the wave reacts to the cursor */
$('#welcome').addEventListener('pointermove',e=>{
  obFx.mx=e.clientX; obFx.my=e.clientY;
});
$('#welcome').addEventListener('pointerleave',()=>{ obFx.mx=-9999; obFx.my=-9999; });

/* ──────────── Init ──────────── */
applyTheme();renderBrand();applyDock();renderLibrary();renderFloors();showFloor();obStartFx();
