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
  'keypad':'<rect x="4.5" y="4" width="15" height="16" rx="1.2"/><rect x="9" y="6.4" width="6" height="2.5" rx="0.6"/><rect x="9" y="10" width="6" height="2.5" rx="0.6"/><rect x="9" y="13.6" width="6" height="2.5" rx="0.6"/><rect x="9" y="17.2" width="6" height="1.6" rx="0.5"/>',
  'keypad-2col':'<rect x="4.5" y="4" width="15" height="16" rx="1.2"/><rect x="7" y="6.8" width="4.2" height="2.6" rx="0.6"/><rect x="12.8" y="6.8" width="4.2" height="2.6" rx="0.6"/><rect x="7" y="10.7" width="4.2" height="2.6" rx="0.6"/><rect x="12.8" y="10.7" width="4.2" height="2.6" rx="0.6"/><rect x="7" y="14.6" width="4.2" height="2.6" rx="0.6"/><rect x="12.8" y="14.6" width="4.2" height="2.6" rx="0.6"/>',
  'keypad-2':'<rect x="4.5" y="4" width="15" height="16" rx="1.2"/><rect x="8" y="7.2" width="8" height="3.6" rx="0.8"/><rect x="8" y="13.2" width="8" height="3.6" rx="0.8"/>',
  'touch':'<rect x="5.5" y="3" width="13" height="18" rx="2"/><path d="M10.3 18.7h3.4"/>',
  'thermostat':'<rect x="4.5" y="4" width="15" height="16" rx="1.2"/><rect x="7.3" y="6.8" width="9.4" height="4.4" rx="0.8"/><circle cx="15.4" cy="7.9" r="0.45" fill="currentColor"/><path d="M8.6 14.6h.01M12 14.6h.01M15.4 14.6h.01M12 17.3h.01"/>',
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
const iconHtml = it => it.iconImg ? `<img src="${it.iconImg}" alt="">` : svgOf(it.icon);
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
  xlsx:{ ready:()=>window.XLSX, srcs:[
    'assets/vendor/xlsx-js-style.min.js',                                    /* styled output (preferred) */
    'https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.min.js',
    'assets/vendor/xlsx.full.min.js',                                        /* plain fallback */
    'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'] },
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
const APP_VERSION='1.13.1';
const isCompact=()=>window.innerWidth<=1160||(window.innerHeight>window.innerWidth&&window.innerWidth<=1280);
const SYS_THEME=()=> (window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';
const uid = () => Math.random().toString(36).slice(2,9);
let state = {
  version:APP_VERSION,
  project:'Untitled Project', client:'', location:'', reference:'', preparedBy:'',
  theme:SYS_THEME(), brandLogo:null, libDock:'left', lastDock:'left', libHidden:false, libFloat:null,
  libSize:{w:324,h:60,fw:288,fh:520}, catOrder:[],
  items:[], floors:[], activeFloor:null, pinScale:1
};
let armedItem=null, selMarker=null, zoom=1, undoStack=[], redoStack=[], ctxTarget=null, draggingCat=null;

const SEED = [
 ['Ceiling Speaker','Audio','ceiling-speaker','#2E5CFF'],['Invisible Speaker','Audio','speaker','#0E7490'],
 ['Soundbar','Audio','soundbar','#2E5CFF'],['Subwoofer','Audio','subwoofer','#141414'],
 ['Outdoor Speaker','Audio','outdoor-speaker','#1F9D55'],
 ['TV Display','Video','tv','#7C4DFF'],['Projector','Video','projector','#D62FA0'],['Projection Screen','Video','screen','#D62FA0'],
 ['Wi-Fi Access Point','Network','wifi','#F4572E'],['Network Rack','Network','rack','#64748B'],
 ['Keypad','Control','keypad','#0FA3A3'],['Keypad (2-Column)','Control','keypad-2col','#0FA3A3'],['Touch Panel','Control','touch','#0FA3A3'],
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
$('#themeToggle').addEventListener('click',()=>{ state.theme=state.theme==='dark'?'light':'dark'; applyTheme(); });
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
  /* categories follow the user's saved order; new ones append */
  const present=[...new Set(items.map(i=>i.cat||'Other'))];
  state.catOrder=state.catOrder||[];
  present.forEach(c=>{ if(!state.catOrder.includes(c)) state.catOrder.push(c); });
  state.extraCats=(state.extraCats||[]).filter(c=>!present.includes(c));   /* filled ones graduate */
  state.extraCats.forEach(c=>{ if(!state.catOrder.includes(c)) state.catOrder.unshift(c); });
  const cats=state.catOrder.filter(c=>present.includes(c)||state.extraCats.includes(c));
  cats.forEach(cat=>{
    const head=el('div','cat-head'+(draggingCat===cat?' dragging':''),
      `<span class="grip">⋮⋮</span><span class="cat-nm">${cat}</span>
       <span class="cat-tools"><button class="ct-btn" data-act="add" title="Add a device to this category">＋</button><button class="ct-btn" data-act="ren" title="Rename category">✎</button><button class="ct-btn" data-act="del" title="Delete category">✕</button></span>`);
    head.dataset.cat=cat; head.title='Drag to reorder categories';
    head.addEventListener('pointerdown',e=>{
      if(e.target.closest('.ct-btn'))return;               /* buttons, not a drag */
      if(e.pointerType!=='touch')e.preventDefault();       /* touch keeps native scroll until the hold arms */
      startCatDrag(cat,e);
    });
    head.querySelector('[data-act="add"]').addEventListener('click',e=>{
      e.stopPropagation();
      openItemModal();
      $('#fCat').value=cat;                       /* pre-filled — just name the device */
      setTimeout(()=>$('#fName').focus(),60);
    });
    head.querySelector('[data-act="ren"]').addEventListener('click',e=>{
      e.stopPropagation();
      const nn=prompt('Rename category',cat);
      if(!nn||!nn.trim()||nn.trim()===cat)return;
      const name=nn.trim();
      state.items.forEach(i=>{ if((i.cat||'Other')===cat)i.cat=name; });
      const oi=state.catOrder.indexOf(cat);
      if(oi>-1)state.catOrder[oi]=name;
      const ei=(state.extraCats||[]).indexOf(cat);
      if(ei>-1)state.extraCats[ei]=name;
      renderLibrary();renderBoq();
    });
    head.querySelector('[data-act="del"]').addEventListener('click',e=>{
      e.stopPropagation();
      const its=state.items.filter(i=>(i.cat||'Other')===cat);
      const placed=its.reduce((a,i)=>a+qtyOf(i.id),0);
      if(!confirm(`Delete category “${cat}” and its ${its.length} device${its.length>1?'s':''}${placed?` (${placed} placed ikon${placed>1?'s':''} will be removed)`:''}?`))return;
      const ids=new Set(its.map(i=>i.id));
      state.items=state.items.filter(i=>!ids.has(i.id));
      state.floors.forEach(f=>f.placements=f.placements.filter(p=>!ids.has(p.itemId)));
      state.catOrder=state.catOrder.filter(c=>c!==cat);
      state.extraCats=(state.extraCats||[]).filter(c=>c!==cat);
      if(ids.has(armedItem))armItem(null);
      renderLibrary();renderMarkers();renderBoq();renderStats();
    });
    list.appendChild(head);
    const inCat=items.filter(i=>(i.cat||'Other')===cat);
    if(!inCat.length){
      const hint=el('div','cat-empty',`<button class="cat-empty-add">＋ Add a device to “${cat}”</button>`);
      hint.querySelector('button').addEventListener('click',()=>{
        openItemModal();$('#fCat').value=cat;setTimeout(()=>$('#fName').focus(),60);
      });
      list.appendChild(hint);
    }
    inCat.forEach(item=>{
      const qty=qtyOf(item.id);
      const row=el('div','item-row'+(armedItem===item.id?' armed':''));
      row.innerHTML=`<span class="item-chip" style="background:${item.color}">${iconHtml(item)}</span>
        <span class="item-meta"><span class="nm">${item.name}</span>${item.model?`<span class="md">${item.model}</span>`:''}</span>
        <span class="item-qty ${qty?'on':''}">${qty||'—'}</span>
        <button class="item-edit" title="Edit"><svg viewBox="0 0 24 24"><path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></svg></button>
        <button class="item-del" title="Delete device"><svg viewBox="0 0 24 24"><path d="M5 7h14M9 7V5h6v2m-8 0l1 13h8l1-13"/></svg></button>`;
      row.addEventListener('click',e=>{
        if(e.target.closest('.item-del')){
          if(!confirm(`Delete “${item.name}”${qty?` and its ${qty} placed ikon${qty>1?'s':''}`:''}?`))return;
          state.items=state.items.filter(i=>i.id!==item.id);
          state.floors.forEach(f=>f.placements=f.placements.filter(p=>p.itemId!==item.id));
          if(armedItem===item.id)armItem(null);
          renderLibrary();renderMarkers();renderBoq();renderStats();
          return;
        }
        if(e.target.closest('.item-edit')){openItemModal(item.id);return;}
        armItem(armedItem===item.id?null:item.id);
        if(armedItem&&isMobile()) closeLib();
      });
      list.appendChild(row);
    });
  });
  $('#libCount').textContent='· '+state.items.length;
  $('#catList').innerHTML=[...new Set([...state.items.map(i=>i.cat),...(state.extraCats||[]),...(state.catOrder||[])].filter(Boolean))].map(c=>`<option value="${c}">`).join('');
  renderStats();
}
$('#libSearch').addEventListener('input',renderLibrary);
$('#libList').addEventListener('contextmenu',e=>{ if(e.target.closest('.cat-head'))e.preventDefault(); });
$('#btnNewCat').addEventListener('click',()=>{
  const n=prompt('New category name');
  if(!n||!n.trim())return;
  const name=n.trim();
  const present=state.items.some(i=>(i.cat||'Other')===name);
  if(present||state.extraCats.includes(name)){toast(`“${name}” already exists.`);return;}
  state.extraCats.push(name);
  state.catOrder=state.catOrder.filter(c=>c!==name);
  state.catOrder.unshift(name);                          /* new categories land on top */
  renderLibrary();
  toast(`Category “${name}” created — add devices to it anytime.`);
});
function startCatDrag(cat,e){
  const id=e.pointerId, sx=e.clientX, sy=e.clientY; let started=false, armed=e.pointerType!=='touch';
  let holdT=null;
  if(!armed){
    /* touch: press & hold ~350ms arms the drag; moving first means scrolling */
    holdT=setTimeout(()=>{armed=true;draggingCat=cat;started=true;
      $('#libList').style.overflow='hidden';
      document.body.style.cursor='grabbing';renderLibrary();
      if(navigator.vibrate)navigator.vibrate(12);
    },350);
  }
  const mv=ev=>{
    if(ev.pointerId!==id)return;
    if(!armed){ if(Math.hypot(ev.clientX-sx,ev.clientY-sy)>8){clearTimeout(holdT);cleanup();} return; }
    if(!started&&Math.hypot(ev.clientX-sx,ev.clientY-sy)<5)return;
    if(!started){started=true;draggingCat=cat;document.body.style.cursor='grabbing';renderLibrary();}
    const under=document.elementFromPoint(ev.clientX,ev.clientY);
    const th=under&&under.closest?under.closest('.cat-head'):null;
    if(th&&th.dataset.cat&&th.dataset.cat!==cat){
      const o=state.catOrder;
      const from=o.indexOf(cat),to=o.indexOf(th.dataset.cat);
      if(from>-1&&to>-1){ o.splice(from,1); o.splice(to,0,cat); renderLibrary(); }
    }
  };
  const cleanup=()=>{
    document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);
  };
  const up=ev=>{
    if(ev.pointerId!==id)return;
    clearTimeout(holdT);cleanup();
    $('#libList').style.overflow='';
    if(started){draggingCat=null;document.body.style.cursor='';renderLibrary();}
  };
  document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
}

/* mobile library sheet */
const openLib=()=>document.body.classList.add('lib-open');
const closeLib=()=>document.body.classList.remove('lib-open');
$('#btnLib').addEventListener('click',()=>{
  if(state.libHidden){ state.libHidden=false; applyDock(); return; }
  document.body.classList.contains('lib-open')?closeLib():openLib();
});
$('#libClose').addEventListener('click',closeLib);
$('#libVeil').addEventListener('click',closeLib);

/* ──────────── Library docking (left / top / bottom / right / float / hidden) ──────────── */
function applySizes(){
  const lp=$('#libPanel');
  const sz=state.libSize||(state.libSize={w:264,h:60,fw:288,fh:520});
  lp.style.width='';lp.style.height='';
  const mob=isCompact();
  const d=state.libDock||'left';
  if((d==='left'||d==='right')&&!mob) lp.style.width=Math.min(480,Math.max(220,sz.w))+'px';
  else if(d==='top'||d==='bottom')    lp.style.height=Math.min(190,Math.max(52,sz.h))+'px';
  else if(d==='float'&&!mob){
    lp.style.width=Math.min(460,Math.max(240,sz.fw))+'px';
    lp.style.height=Math.min(window.innerHeight-140,Math.max(300,sz.fh))+'px';
  }
}
function applyDock(){
  const b=document.body;
  b.classList.toggle('compact',isCompact());
  b.classList.remove('dock-left','dock-right','dock-top','dock-bottom','dock-float','lib-hidden');
  b.classList.add('dock-'+(state.libDock||'left'));
  if(state.libHidden) b.classList.add('lib-hidden');
  applySizes();
  const lp=$('#libPanel');
  if(state.libDock==='float'&&!isCompact()){
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
  btn.addEventListener('click',()=>{
    state.libDock=btn.dataset.dock; state.libHidden=false; applyDock();
    /* on small screens the vertical docks live in the slide-in sheet —
       open it right away so the library doesn't appear to vanish */
    if(isCompact()){
      if(['left','right','float'].includes(btn.dataset.dock)) openLib(); else closeLib();
    }
  });
});
$('#dockHideOpt').addEventListener('click',()=>{ state.libHidden=true; applyDock(); toast('Library hidden — use the Devices button to bring it back.'); });
/* drag an edge (or the floating panel's corner) to resize the library */
$('#libResizer').addEventListener('pointerdown',e=>{
  e.preventDefault();e.stopPropagation();
  const lp=$('#libPanel');const r=lp.getBoundingClientRect();
  const d=state.libDock||'left';const sz=state.libSize;
  const id=e.pointerId;
  const mv=ev=>{
    if(ev.pointerId!==id)return;
    if(d==='left')   sz.w=ev.clientX-r.left;
    if(d==='right')  sz.w=r.right-ev.clientX;
    if(d==='top')    sz.h=ev.clientY-r.top;
    if(d==='bottom') sz.h=r.bottom-ev.clientY;
    if(d==='float'){ sz.fw=ev.clientX-r.left; sz.fh=ev.clientY-r.top; }
    applySizes();
  };
  const up=ev=>{
    if(ev.pointerId!==id)return;
    document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);
    requestAnimationFrame(()=>{ if(activeFloor()&&!cropMode){clampPan();applyView();} });
  };
  document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
});

/* edge drop-zones while carrying the library: hover an edge to preview,
   release to dock there */
function dockZoneAt(x,y){
  const wr=$('#stage').getBoundingClientRect(), m=56;
  if(y>wr.top-40&&y<wr.bottom+40){
    if(x<wr.left+m&&x>wr.left-40)return 'left';
    if(x>wr.right-m&&x<wr.right+40)return 'right';
  }
  if(x>wr.left&&x<wr.right){
    if(y<wr.top+m&&y>wr.top-40)return 'top';
    if(y>wr.bottom-m&&y<wr.bottom+40)return 'bottom';
  }
  return null;
}
function showDockHint(zone){
  let h=document.getElementById('dockHint');
  if(!zone){ if(h)h.remove(); return; }
  if(!h){ h=el('div','dock-hint'); h.id='dockHint'; document.body.appendChild(h); }
  const wr=$('#stage').getBoundingClientRect();
  const pos={
    left:  `left:${wr.left}px;top:${wr.top}px;width:64px;height:${wr.height}px`,
    right: `left:${wr.right-64}px;top:${wr.top}px;width:64px;height:${wr.height}px`,
    top:   `left:${wr.left}px;top:${wr.top}px;width:${wr.width}px;height:60px`,
    bottom:`left:${wr.left}px;top:${wr.bottom-60}px;width:${wr.width}px;height:60px`
  }[zone];
  h.style.cssText=`position:fixed;z-index:94;pointer-events:none;border-radius:10px;${pos}`;
}
function dropDock(zone){
  showDockHint(null);
  if(!zone)return false;
  state.lastDock=zone; state.libDock=zone; applyDock();
  toast(`Library docked ${zone}.`);
  return true;
}

/* the grip in the library header tears the panel off instantly and drags
   it with edge drop-zones — the discoverable sibling of press-and-hold */
$('#libGrip').addEventListener('pointerdown',e=>{
  if(isCompact())return;
  e.preventDefault();e.stopPropagation();
  const lp=$('#libPanel'), id=e.pointerId;
  if(state.libDock!=='float'){
    state.lastDock=state.libDock;
    state.libDock='float';
    state.libFloat={x:Math.max(8,e.clientX-144),y:Math.max(64,e.clientY-18)};
    applyDock();
  }
  lp.classList.add('lifting');
  let zone=null;
  const mv=ev=>{
    if(ev.pointerId!==id)return;
    const x=Math.min(Math.max(8,ev.clientX-144),window.innerWidth-120);
    const y=Math.min(Math.max(64,ev.clientY-18),window.innerHeight-80);
    lp.style.left=x+'px';lp.style.top=y+'px';
    state.libFloat={x,y};
    zone=dockZoneAt(ev.clientX,ev.clientY);showDockHint(zone);
  };
  const up=ev=>{
    if(ev.pointerId!==id)return;
    lp.classList.remove('lifting');
    document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);
    dropDock(zone);
  };
  document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
});

/* press & hold the library panel to tear it off into a floating panel;
   press & hold the floating panel to dock it back to its previous edge.
   Movement cancels the hold, and interactive children are exempt. */
$('#libPanel').addEventListener('pointerdown',e=>{
  if(isCompact())return;                    /* sheets on small screens */
  if(e.button!==0&&e.pointerType==='mouse')return;
  if(e.target.closest('button,input,.item-row,.cat-head,.lib-resizer'))return;
  if(e.target.closest('.lib')&&!e.target.classList.contains('lib'))return;   /* list content scrolls */
  const id=e.pointerId, sx=e.clientX, sy=e.clientY;
  const lp=$('#libPanel');
  let held=false;
  const timer=setTimeout(()=>{
    held=true;
    if(state.libDock!=='float'){
      state.lastDock=state.libDock;
      state.libDock='float';
      state.libFloat={x:Math.max(8,sx-144),y:Math.max(64,sy-20)};
      applyDock();
      lp.classList.add('lifting');
      toast('Library undocked — drag to place it, hold it again to dock back.');
      /* keep dragging until release */
      let zone=null;
      const mv=ev=>{
        if(ev.pointerId!==id)return;
        const x=Math.min(Math.max(8,ev.clientX-144),window.innerWidth-120);
        const y=Math.min(Math.max(64,ev.clientY-20),window.innerHeight-80);
        lp.style.left=x+'px';lp.style.top=y+'px';
        state.libFloat={x,y};
        zone=dockZoneAt(ev.clientX,ev.clientY);showDockHint(zone);
      };
      const up2=ev=>{
        if(ev.pointerId!==id)return;
        lp.classList.remove('lifting');
        document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up2);document.removeEventListener('pointercancel',up2);
        dropDock(zone);
      };
      document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up2);document.addEventListener('pointercancel',up2);
    }else{
      state.libDock=state.lastDock||'left';
      applyDock();
      toast(`Library docked ${state.libDock==='float'?'':state.libDock}.`);
    }
  },550);
  const cancelMv=ev=>{ if(ev.pointerId===id&&Math.hypot(ev.clientX-sx,ev.clientY-sy)>6)cancel(); };
  const cancel=()=>{
    clearTimeout(timer);
    document.removeEventListener('pointermove',cancelMv);document.removeEventListener('pointerup',cancel);document.removeEventListener('pointercancel',cancel);
  };
  document.addEventListener('pointermove',cancelMv);
  document.addEventListener('pointerup',cancel);
  document.addEventListener('pointercancel',cancel);
});

/* drag the floating panel by its grip */
$('#floatGrip').addEventListener('pointerdown',e=>{
  e.preventDefault();
  const lp=$('#libPanel');
  const sx=e.clientX,sy=e.clientY;
  const x0=parseFloat(lp.style.left)||84, y0=parseFloat(lp.style.top)||126;
  const id=e.pointerId;
  let zone=null;
  const mv=ev=>{
    if(ev.pointerId!==id)return;
    const x=Math.min(Math.max(8,x0+(ev.clientX-sx)),window.innerWidth-120);
    const y=Math.min(Math.max(64,y0+(ev.clientY-sy)),window.innerHeight-80);
    lp.style.left=x+'px';lp.style.top=y+'px';
    state.libFloat={x,y};
    zone=dockZoneAt(ev.clientX,ev.clientY);showDockHint(zone);
  };
  const up=ev=>{ if(ev.pointerId!==id)return;
    document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);
    dropDock(zone); };
  document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
});

/* ──────────── Rooms / areas (polygon engine) ──────────── */
let roomMode=false, selRoom=null, hlRoom=null;
const ROOM_COLORS=['#AE8B5C','#2E5CFF','#16B364','#F59E0B','#E5484D','#7C4DFF','#0FA3A3','#64748B'];
/* migrate legacy {x,y,w,h} rectangles to point lists; ensure color/scope */
function migrateRoom(r){
  if(!r.pts){ r.pts=[{x:r.x,y:r.y},{x:r.x+r.w,y:r.y},{x:r.x+r.w,y:r.y+r.h},{x:r.x,y:r.y+r.h}]; delete r.x;delete r.y;delete r.w;delete r.h; }
  r.color=r.color||ROOM_COLORS[0]; r.scope=r.scope||'in';
  return r;
}
const migrateRooms=f=>{(f.rooms=f.rooms||[]).forEach(migrateRoom);};
function pointInPoly(p,pts){
  let inside=false;
  for(let i=0,j=pts.length-1;i<pts.length;j=i++){
    if(((pts[i].y>p.y)!==(pts[j].y>p.y)) &&
       (p.x < (pts[j].x-pts[i].x)*(p.y-pts[i].y)/(pts[j].y-pts[i].y)+pts[i].x)) inside=!inside;
  }
  return inside;
}
const polyArea=pts=>Math.abs(pts.reduce((a,p,i)=>{const q=pts[(i+1)%pts.length];return a+(p.x*q.y-q.x*p.y);},0))/2;
function roomOf(p,f){
  let best=null,bestA=Infinity;
  (f.rooms||[]).forEach(r=>{
    migrateRoom(r);
    if(pointInPoly(p,r.pts)){const a=polyArea(r.pts);if(a<bestA){bestA=a;best=r;}}
  });
  return best;
}
/* Sutherland–Hodgman clip of a polygon to a rect (image px space) */
function clipPolyRect(pts,x0,y0,x1,y1){
  const edges=[
    [p=>p.x>=x0,(a,b)=>({x:x0,y:a.y+(b.y-a.y)*(x0-a.x)/(b.x-a.x)})],
    [p=>p.x<=x1,(a,b)=>({x:x1,y:a.y+(b.y-a.y)*(x1-a.x)/(b.x-a.x)})],
    [p=>p.y>=y0,(a,b)=>({x:a.x+(b.x-a.x)*(y0-a.y)/(b.y-a.y),y:y0})],
    [p=>p.y<=y1,(a,b)=>({x:a.x+(b.x-a.x)*(y1-a.y)/(b.y-a.y),y:y1})]
  ];
  let out=pts;
  for(const [inside,cross] of edges){
    const inp=out;out=[];
    for(let i=0;i<inp.length;i++){
      const a=inp[i],b=inp[(i+1)%inp.length];
      if(inside(a)){out.push(a);if(!inside(b))out.push(cross(a,b));}
      else if(inside(b))out.push(cross(a,b));
    }
    if(!out.length)return [];
  }
  return out;
}
/* snapping: candidate x/y from other rooms' points + plan edges */
function snapCandidates(f,exceptRoom,selfPts){
  const xs=[0,1],ys=[0,1];
  (f.rooms||[]).forEach(r=>{ if(r===exceptRoom)return; r.pts.forEach(p=>{xs.push(p.x);ys.push(p.y);}); });
  if(selfPts)selfPts.forEach(p=>{xs.push(p.x);ys.push(p.y);});   /* align nodes within the room too */
  return {xs,ys};
}
function snapVal(v,cands,tol){ for(const c of cands){ if(Math.abs(v-c)<tol)return c; } return v; }
function setRoomMode(on){
  roomMode=on;
  if(on){ armItem(null); if(cropMode)cancelCrop(); setSelMarker(null); if(hlRoom)highlightRoom(null); }
  selRoom=null;
  $('#btnRooms').classList.toggle('on',on);
  $('#planClick').classList.toggle('rooming',on);
  $('#planHolder').classList.toggle('rooming',on);
  $('#hintbar').style.display=on?'block':'none';
  if(on){
    $('#hintbar').innerHTML='Drag to draw · drag corners to reshape · <b>◦</b> midpoints add corners · dbl-click removes · click name for color & scope · <b>Esc</b> done';
    toast('Rooms — drag on the plan to draw an area.');
  } else closeRoomPop();
  renderRooms();renderMarkers();
}
$('#btnRooms').addEventListener('click',()=>{ if(!activeFloor()){toast('Upload a floor plan first.');return;} setRoomMode(!roomMode); });
/* room edits are undoable */
const roomSnapshot=(f,r)=>({type:'room-edit',floorId:f.id,roomId:r.id,prev:{name:r.name,color:r.color,scope:r.scope,pts:r.pts.map(p=>({...p}))}});
function renderRooms(){
  const holder=$('#planHolder');
  let layer=holder.querySelector('#roomLayer');
  const f=activeFloor();
  if(layer)layer.remove();
  if(!f||!(f.rooms||[]).length&&!roomMode)return;
  migrateRooms(f);
  layer=el('div','room-layer');layer.id='roomLayer';
  const handleR=Math.max(5,8*(f.w/Math.max(1,planRect().width)));
  let svg=`<svg viewBox="0 0 ${f.w} ${f.h}" preserveAspectRatio="none">`;
  svg+=`<defs><pattern id="rhatch" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="8" stroke-width="5.5"/></pattern></defs>`;
  if(roomMode)svg+=`<rect class="rbg" x="0" y="0" width="${f.w}" height="${f.h}"/>`;
  f.rooms.forEach(r=>{
    const d=r.pts.map(p=>`${p.x*f.w},${p.y*f.h}`).join(' ');
    const cls=['rpoly',r.id===selRoom?'sel':'',r.id===hlRoom?'hl':'',r.scope==='out'?'out':''].join(' ');
    svg+=`<g class="${cls}" data-room="${r.id}" style="color:${r.color}">`;
    if(r.scope==='out')svg+=`<polygon class="hatchfill" points="${d}"/>`;
    svg+=`<polygon class="rfill" points="${d}"/>`;
    if((roomMode&&r.id===selRoom)||(!roomMode&&r.id===hlRoom)){
      r.pts.forEach((p,i)=>{
        const q=r.pts[(i+1)%r.pts.length];
        svg+=`<rect class="rmid" data-room="${r.id}" data-after="${i}" x="${(p.x+q.x)/2*f.w-handleR*0.7}" y="${(p.y+q.y)/2*f.h-handleR*0.7}" width="${handleR*1.4}" height="${handleR*1.4}"/>`;
      });
      r.pts.forEach((p,i)=>{
        svg+=`<circle class="rvtx" data-room="${r.id}" data-i="${i}" cx="${p.x*f.w}" cy="${p.y*f.h}" r="${handleR}"/>`;
      });
    }
    svg+=`</g>`;
  });
  svg+=`</svg>`;
  layer.innerHTML=svg;
  /* labels (HTML, clickable both modes) */
  f.rooms.forEach(r=>{
    const lx=Math.min(...r.pts.map(p=>p.x)), ly=Math.min(...r.pts.map(p=>p.y));
    const lab=el('div','rlabel'+(r.id===hlRoom?' hl':''),
      `<span class="rname">${r.name}</span>${r.scope==='out'?'<span class="rtag">OUT</span>':''}${roomMode?'<span class="rx" title="Delete room">✕</span>':''}`);
    lab.dataset.room=r.id;
    lab.style.cssText=`left:${lx*100}%;top:${ly*100}%;border-color:${r.color};color:${r.color}`;
    lab.addEventListener('pointerdown',e=>e.stopPropagation());
    let labTimer=null;
    lab.addEventListener('click',e=>{
      e.stopPropagation();
      if(e.target.classList.contains('rx')){
        pushUndo({type:'room-del',floorId:f.id,room:JSON.parse(JSON.stringify(r))});
        f.rooms=f.rooms.filter(x=>x.id!==r.id);
        if(selRoom===r.id)selRoom=null;
        closeRoomPop();renderRooms();return;
      }
      if(e.detail>=2){                                  /* double-click: edit */
        clearTimeout(labTimer);
        if(roomMode){selRoom=r.id;renderRooms();}
        else if(hlRoom!==r.id)highlightRoom(r.id);
        openRoomPop(r,document.querySelector(`#roomLayer .rlabel[data-room="${r.id}"]`)||lab);
        return;
      }
      clearTimeout(labTimer);
      labTimer=setTimeout(()=>{                         /* single click */
        if(roomMode){ selRoom=r.id; closeRoomPop(); renderRooms(); }
        else{
          const on=hlRoom!==r.id;
          highlightRoom(on?r.id:null);
          if(!on)closeRoomPop();
        }
      },240);
    });
    layer.appendChild(lab);
  });
  $('#planClick').after(layer);          /* above the draw surface; below markers */
  wireRoomPointer(layer,f);
}
/* highlight a room: emphasize its ikons, dim the rest, summarize contents */
function highlightRoom(id){
  hlRoom=id;
  $('#planHolder').classList.toggle('room-hl',!!id);
  renderRooms();renderMarkers();
  if(!id)return;
  const f=activeFloor();const r=f.rooms.find(x=>x.id===id);if(!r)return;
  const counts={};
  f.placements.forEach(p=>{ if(roomOf(p,f)===r){const it=itemById(p.itemId);if(it)counts[it.name]=(counts[it.name]||0)+1;} });
  const parts=Object.entries(counts).map(([n,c])=>`${c}× ${n}`);
  toast(`${r.name} — ${parts.length?parts.join(', '):'no ikons yet'}`);
}
/* update a room's rendered shape without rebuilding the layer — rebuilding
   mid-gesture detaches the pointer-captured node and kills touch drags */
function updateRoomInPlace(layer,f,room){
  const d=room.pts.map(p=>`${p.x*f.w},${p.y*f.h}`).join(' ');
  const g=layer.querySelector(`g[data-room="${room.id}"]`);
  if(g){g.classList.add('editing');g.querySelectorAll('polygon').forEach(pl=>pl.setAttribute('points',d));}
  const lab=layer.querySelector(`.rlabel[data-room="${room.id}"]`);
  if(lab){
    lab.style.left=(Math.min(...room.pts.map(p=>p.x))*100)+'%';
    lab.style.top =(Math.min(...room.pts.map(p=>p.y))*100)+'%';
  }
}
/* pointer interactions on the svg layer (room mode only) */
function wireRoomPointer(layer,f){
  const svg=layer.querySelector('svg');
  if((!roomMode&&!hlRoom)||!svg)return;
  svg.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse'&&e.button!==0)return;  /* middle/right → pan */
    const t=e.target;
    const toFrac=ev=>{const rc=planRect();return{x:(ev.clientX-rc.left)/rc.width,y:(ev.clientY-rc.top)/rc.height};};
    const tol=8/Math.max(1,planRect().width);
    const id=e.pointerId;
    const room=t.dataset.room?f.rooms.find(r=>r.id===t.dataset.room):null;
    if(!roomMode&&(!room||room.id!==hlRoom))return;   /* outside Rooms mode, only the highlighted room is editable */

    if(t.classList.contains('rbg')){ startRoomDraw(e,f); return; }

    if(t.classList.contains('rvtx')||t.classList.contains('rmid')){
      e.preventDefault();e.stopPropagation();
      pushUndo(roomSnapshot(f,room));
      let vi, inserted=false;
      if(t.classList.contains('rmid')){
        vi=+t.dataset.after+1; inserted=true;
        const a=room.pts[+t.dataset.after], b=room.pts[(vi)%room.pts.length];
        room.pts.splice(vi,0,{x:(a.x+b.x)/2,y:(a.y+b.y)/2});
      } else vi=+t.dataset.i;
      const cands=snapCandidates(f,room,room.pts.filter((_,i)=>i!==vi));
      /* the room's own corners are alignment targets too (excluding the
         ones this drag moves) */
      room.pts.forEach((q,qi)=>{
        if(qi===vi)return;
        cands.xs.push(q.x);cands.ys.push(q.y);
      });
      /* angle lock applies to pure 4-corner rectangles only: they resize
         rigidly like rectangles. Once extra corners exist the shape is
         freeform — every corner drags freely. */
      const EPS=0.004, n0=room.pts.length;
      const orig=room.pts.map(p=>({...p}));
      const pi=(vi-1+n0)%n0, ni=(vi+1)%n0;
      const rectLock=!inserted&&n0===4;
      const lockPrev=rectLock&&{v:Math.abs(orig[vi].x-orig[pi].x)<EPS, h:Math.abs(orig[vi].y-orig[pi].y)<EPS};
      const lockNext=rectLock&&{v:Math.abs(orig[vi].x-orig[ni].x)<EPS, h:Math.abs(orig[vi].y-orig[ni].y)<EPS};
      const mv=ev=>{
        if(ev.pointerId!==id)return;
        const p=toFrac(ev);
        const nx=Math.min(1,Math.max(0,snapVal(p.x,cands.xs,tol)));
        const ny=Math.min(1,Math.max(0,snapVal(p.y,cands.ys,tol)));
        showGuides(nx!==p.x?nx:null, ny!==p.y?ny:null);
        room.pts[vi]={x:nx,y:ny};
        if(lockPrev){ if(lockPrev.v)room.pts[pi].x=nx; else if(lockPrev.h)room.pts[pi].y=ny; }
        if(lockNext){ if(lockNext.v)room.pts[ni].x=nx; else if(lockNext.h)room.pts[ni].y=ny; }
        updateRoomInPlace(layer,f,room);
      };
      const up=ev=>{if(ev.pointerId!==id)return;clearGuides();document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);renderRooms();};
      document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
      return;
    }
    if(t.classList.contains('rfill')||t.classList.contains('hatchfill')){
      e.preventDefault();e.stopPropagation();
      selRoom=room.id;closeRoomPop();
      layer.querySelectorAll('.rpoly').forEach(gg=>gg.classList.toggle('sel',gg.getAttribute('data-room')===room.id));
      /* drag body = move whole room, snapping its bounding box */
      pushUndo(roomSnapshot(f,room));
      const start=toFrac(e), orig=room.pts.map(p=>({...p}));
      const cands=snapCandidates(f,room);
      const mv=ev=>{
        if(ev.pointerId!==id)return;
        const p=toFrac(ev);
        let dx=p.x-start.x, dy=p.y-start.y;
        const minx=Math.min(...orig.map(q=>q.x)),maxx=Math.max(...orig.map(q=>q.x));
        const miny=Math.min(...orig.map(q=>q.y)),maxy=Math.max(...orig.map(q=>q.y));
        dx=Math.min(1-maxx,Math.max(-minx,dx));dy=Math.min(1-maxy,Math.max(-miny,dy));
        const sx1=snapVal(minx+dx,cands.xs,tol)-(minx+dx), sx2=snapVal(maxx+dx,cands.xs,tol)-(maxx+dx);
        const sy1=snapVal(miny+dy,cands.ys,tol)-(miny+dy), sy2=snapVal(maxy+dy,cands.ys,tol)-(maxy+dy);
        dx+=Math.abs(sx1)<Math.abs(sx2)?sx1:sx2; dy+=Math.abs(sy1)<Math.abs(sy2)?sy1:sy2;
        room.pts=orig.map(q=>({x:q.x+dx,y:q.y+dy}));
        updateRoomInPlace(layer,f,room);
      };
      const up=ev=>{if(ev.pointerId!==id)return;document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);renderRooms();};
      document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
    }
  });
  svg.addEventListener('dblclick',e=>{
    const t=e.target;
    if(!t.classList.contains('rvtx'))return;
    const room=f.rooms.find(r=>r.id===t.dataset.room);
    if(room.pts.length<=3){toast('A room needs at least 3 corners.');return;}
    pushUndo(roomSnapshot(f,room));
    room.pts.splice(+t.dataset.i,1);
    renderRooms();
  });
}
/* draw a new room by dragging on the layer background */
function startRoomDraw(e,f){
  e.preventDefault();e.stopPropagation();
  closeRoomPop();selRoom=null;
  const r=planRect();
  const fx=v=>Math.min(1,Math.max(0,v));
  const tol=8/Math.max(1,r.width);
  const cands=snapCandidates(f,null);
  const x0=fx(snapVal((e.clientX-r.left)/r.width,cands.xs,tol)), y0=fx(snapVal((e.clientY-r.top)/r.height,cands.ys,tol));
  const prev=el('div','room-draw');$('#planHolder').appendChild(prev);
  let x1=x0,y1=y0;
  const draw=()=>{
    const rx=Math.min(x0,x1),ry=Math.min(y0,y1),rw=Math.abs(x1-x0),rh=Math.abs(y1-y0);
    prev.style.cssText=`left:${rx*100}%;top:${ry*100}%;width:${rw*100}%;height:${rh*100}%`;
    return{rx,ry,rw,rh};
  };
  const id=e.pointerId;
  const mv=ev=>{if(ev.pointerId!==id)return;x1=fx(snapVal((ev.clientX-r.left)/r.width,cands.xs,tol));y1=fx(snapVal((ev.clientY-r.top)/r.height,cands.ys,tol));draw();};
  const up=ev=>{
    if(ev.pointerId!==id)return;
    document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);
    const g=draw();prev.remove();
    if(g.rw<0.015||g.rh<0.015){renderRooms();return;}
    const name=prompt('Room / area name',`Room ${(f.rooms||[]).length+1}`);
    if(name===null){renderRooms();return;}
    const room=migrateRoom({id:uid(),name:(name.trim()||`Room ${(f.rooms||[]).length+1}`),
      pts:[{x:g.rx,y:g.ry},{x:g.rx+g.rw,y:g.ry},{x:g.rx+g.rw,y:g.ry+g.rh},{x:g.rx,y:g.ry+g.rh}]});
    (f.rooms=f.rooms||[]).push(room);
    pushUndo({type:'room-add',floorId:f.id,room:JSON.parse(JSON.stringify(room))});
    selRoom=room.id;
    renderRooms();
    const lab=document.querySelector(`#roomLayer .rlabel[data-room="${room.id}"]`);
    if(lab)openRoomPop(room,lab);
  };
  document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
}
/* room popover: name, color, scope, delete */
function closeRoomPop(){const p=$('#roomPop');if(p)p.remove();}
function openRoomPop(r,anchor){
  closeRoomPop();
  const f=activeFloor();
  /* re-renders replace labels — always anchor to the live one */
  if(!anchor||!anchor.isConnected){
    anchor=document.querySelector(`#roomLayer .rlabel[data-room="${r.id}"]`)||anchor;
  }
  if(!anchor)return;
  const n=f.placements.filter(p=>roomOf(p,f)===r).length;
  const pop=el('div','room-pop');pop.id='roomPop';
  pop.innerHTML=`
    <div class="rp-head"><span class="rp-title">Room</span><span class="rp-count">${n} ikon${n===1?'':'s'} inside</span></div>
    <div class="rp-sec"><label class="rp-lab">Name</label>
      <input class="rp-name" value="${r.name.replace(/"/g,'&quot;')}"></div>
    <div class="rp-sec"><label class="rp-lab">Color</label>
      <div class="rp-colors">${ROOM_COLORS.map(c=>`<button class="rp-c ${c===r.color?'on':''}" data-c="${c}" style="background:${c}"></button>`).join('')}</div></div>
    <div class="rp-sec"><label class="rp-lab">Status</label>
      <label class="rp-scope"><input type="checkbox" class="rp-out" ${r.scope==='out'?'checked':''}> Out of scope — hatched on the plan, tagged in the Excel FD sheet</label></div>
    <div class="rp-row"><button class="rp-del">Delete room</button><button class="rp-done">Done</button></div>`;
  const snap=roomSnapshot(f,r);let changed=false;
  pop.addEventListener('pointerdown',e=>e.stopPropagation());
  pop.querySelector('.rp-name').addEventListener('input',e=>{changed=true;r.name=e.target.value.trim()||r.name;});
  pop.querySelectorAll('.rp-c').forEach(b=>b.addEventListener('click',()=>{changed=true;r.color=b.dataset.c;renderRooms();openRoomPop(r,anchor);}));
  pop.querySelector('.rp-out').addEventListener('change',e=>{changed=true;r.scope=e.target.checked?'out':'in';renderRooms();openRoomPop(r,anchor);});
  pop.querySelector('.rp-del').addEventListener('click',()=>{
    pushUndo({type:'room-del',floorId:f.id,room:JSON.parse(JSON.stringify(r))});
    f.rooms=f.rooms.filter(x=>x.id!==r.id);selRoom=null;closeRoomPop();renderRooms();
  });
  pop.querySelector('.rp-done').addEventListener('click',()=>{if(changed)pushUndo(snap);closeRoomPop();renderRooms();});
  const rc=anchor.getBoundingClientRect(), wr=$('#stage').getBoundingClientRect();
  pop.style.left=Math.min(wr.width-276,Math.max(8,rc.left-wr.left))+'px';
  pop.style.top=Math.min(wr.height-240,rc.bottom-wr.top+8)+'px';
  $('#stage').appendChild(pop);
  /* drag the popover by its header to uncover the plan */
  pop.querySelector('.rp-head').addEventListener('pointerdown',e=>{
    e.preventDefault();
    const id=e.pointerId,sx=e.clientX,sy=e.clientY;
    const x0=parseFloat(pop.style.left),y0=parseFloat(pop.style.top);
    const mv=ev=>{
      if(ev.pointerId!==id)return;
      pop.style.left=Math.min(wr.width-80,Math.max(8-200,x0+(ev.clientX-sx)))+'px';
      pop.style.top =Math.min(wr.height-46,Math.max(4,y0+(ev.clientY-sy)))+'px';
    };
    const up=ev=>{if(ev.pointerId!==id)return;document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);};
    document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
  });
  pop.querySelector('.rp-name').focus();
}

/* ──────────── Arm / place ──────────── */
function armItem(id){
  if(cropMode) cancelCrop();
  if(id&&roomMode) setRoomMode(false);
  armedItem=id; setSelMarker(null);
  $('#planClick').classList.toggle('armed',!!id);
  $('#planHolder').classList.toggle('arming',!!id);
  $('#hintbar').style.display=id?'block':'none';
  if(id){$('#hintbar').innerHTML='Placing <span id="hintName"></span> · click to drop ikons · <b>✕ stop</b>';
    const it=itemById(id);$('#hintName').textContent=it.name;
    $('#chipDot').style.background=it.color;$('#chipDot').innerHTML=iconHtml(it);
    $('#chipName').textContent=it.name;updateChipCount();
  }else $('#chip').style.display='none';
  renderLibrary();renderMarkers();
}
function updateChipCount(){ if(armedItem) $('#chipCnt').textContent='×'+qtyOf(armedItem); }
$('#hintbar').addEventListener('click',()=>{ if(roomMode)setRoomMode(false); else armItem(null); });
document.addEventListener('pointermove',e=>{
  if(!armedItem||e.pointerType==='touch')return;
  const over=e.target.closest&&e.target.closest('#stage');
  const c=$('#chip');c.style.display=over?'flex':'none';
  c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';
});
$('#planClick').addEventListener('contextmenu',e=>{ if(armedItem){e.preventDefault();armItem(null);} });
$('#planClick').addEventListener('click',e=>{
  if(panMoved||roomMode)return;
  const f=activeFloor(); if(!f||cropMode)return;
  if(!armedItem){setSelMarker(null);renderMarkers();return;}
  const r=planRect();
  const x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
  if(x<0||x>1||y<0||y>1)return;
  const p={id:uid(),itemId:armedItem,x,y};
  f.placements.push(p);
  pushUndo({type:'add',floorId:f.id,p});
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
    let hlCls='';
    if(hlRoom){const rr=(f.rooms||[]).find(x=>x.id===hlRoom);hlCls=rr&&roomOf(p,f)===rr?' lit':' dim';}
    const m=el('div','marker'+(selMarker===p.id?' sel':'')+hlCls,iconHtml(it));
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
/* alignment guides: thin bronze lines shown while a drag snaps */
function showGuides(x,y){
  const hold=$('#planHolder');
  let v=hold.querySelector('.align-guide.v'), hg=hold.querySelector('.align-guide.h');
  if(x!=null){ if(!v){v=el('div','align-guide v');hold.appendChild(v);} v.style.left=(x*100)+'%'; }
  else if(v)v.remove();
  if(y!=null){ if(!hg){hg=el('div','align-guide h');hold.appendChild(hg);} hg.style.top=(y*100)+'%'; }
  else if(hg)hg.remove();
}
const clearGuides=()=>showGuides(null,null);

function startDrag(p,m,ev){
  let moved=false;
  const startX=ev.clientX,startY=ev.clientY;
  m.setPointerCapture(ev.pointerId);
  const f0=activeFloor();
  const oxs=f0?f0.placements.filter(q=>q.id!==p.id).map(q=>q.x):[];
  const oys=f0?f0.placements.filter(q=>q.id!==p.id).map(q=>q.y):[];
  const onMove=e=>{
    if(!moved&&Math.hypot(e.clientX-startX,e.clientY-startY)<4)return;
    moved=true;
    const r=planRect();
    let nx=Math.min(1,Math.max(0,(e.clientX-r.left)/r.width));
    let ny=Math.min(1,Math.max(0,(e.clientY-r.top)/r.height));
    /* align with other ikons: snap to their x / y, guides show the line */
    const tx=6/Math.max(1,r.width), ty=6/Math.max(1,r.height);
    const sx=snapVal(nx,oxs,tx), sy=snapVal(ny,oys,ty);
    showGuides(sx!==nx?sx:null, sy!==ny?sy:null);
    p.x=sx;p.y=sy;
    m.style.left=(p.x*100)+'%';m.style.top=(p.y*100)+'%';   // live update without re-render
  };
  const onUp=()=>{
    m.removeEventListener('pointermove',onMove);m.removeEventListener('pointerup',onUp);m.removeEventListener('pointercancel',onUp);
    clearGuides();
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
  if(i>-1){pushUndo({type:'del',floorId:f.id,p:f.placements[i]});f.placements.splice(i,1);}
  if(selMarker===id)setSelMarker(null);
  renderMarkers();renderLibrary();renderBoq();updateChipCount();
}
$('#paRemove').addEventListener('click',()=>deletePlacement(selMarker));
$('#paDone').addEventListener('click',()=>{setSelMarker(null);renderMarkers();});
document.addEventListener('click',()=>$('#ctx').style.display='none');
$('#ctxDelete').addEventListener('click',()=>{if(ctxTarget){deletePlacement(ctxTarget.id);ctxTarget=null;}});

function applyHistory(a,stackFrom,stackTo){
  const f=state.floors.find(fl=>fl.id===a.floorId);if(!f)return;
  if(a.type==='add'){
    if(stackFrom===undoStack){const i=f.placements.findIndex(p=>p.id===a.p.id);if(i>-1)f.placements.splice(i,1);}
    else f.placements.push(a.p);
    stackTo.push(a);
  }
  if(a.type==='del'){
    if(stackFrom===undoStack)f.placements.push(a.p);
    else{const i=f.placements.findIndex(p=>p.id===a.p.id);if(i>-1)f.placements.splice(i,1);}
    stackTo.push(a);
  }
  if(a.type==='room-add'){
    if(stackFrom===undoStack){f.rooms=(f.rooms||[]).filter(r=>r.id!==a.room.id);}
    else (f.rooms=f.rooms||[]).push(a.room);
    stackTo.push(a);renderRooms();
  }
  if(a.type==='room-del'){
    if(stackFrom===undoStack)(f.rooms=f.rooms||[]).push(a.room);
    else f.rooms=(f.rooms||[]).filter(r=>r.id!==a.room.id);
    if(selRoom===a.room.id)selRoom=null;
    stackTo.push(a);renderRooms();
  }
  if(a.type==='room-edit'){
    const r=(f.rooms||[]).find(x=>x.id===a.roomId);
    if(r){
      const cur={name:r.name,color:r.color,scope:r.scope,pts:r.pts.map(p=>({...p}))};
      Object.assign(r,a.prev);
      stackTo.push({type:'room-edit',floorId:f.id,roomId:r.id,prev:cur});
      renderRooms();
    }
  }
  if(a.type==='floor'){                        /* crop / rotate snapshot — swap states */
    const cur=floorSnapshot(f);
    f.img=a.prev.img;f.w=a.prev.w;f.h=a.prev.h;f.placements=a.prev.placements;f.rooms=a.prev.rooms||[];
    stackTo.push(cur);
    if(state.activeFloor===f.id){ if(cropMode)cancelCrop(); showFloor(); }
  }
  renderMarkers();renderLibrary();renderBoq();updateChipCount();
}
function doUndo(){ const a=undoStack.pop(); if(a) applyHistory(a,undoStack,redoStack); }
function doRedo(){ const a=redoStack.pop(); if(a) applyHistory(a,redoStack,undoStack); }
const floorSnapshot=f=>({type:'floor',floorId:f.id,prev:{img:f.img,w:f.w,h:f.h,placements:f.placements.map(p=>({...p})),rooms:(f.rooms||[]).map(r=>({...r}))}});
const pushUndo=a=>{ undoStack.push(a); redoStack=[]; };   /* a fresh action invalidates redo */
$('#btnUndo').addEventListener('click',doUndo);
$('#btnRedo').addEventListener('click',doRedo);

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    const veil=document.querySelector('.veil.open');
    if(veil){veil.classList.remove('open');return;}
    if(cropMode){cancelCrop();return;}
    if(roomMode){setRoomMode(false);return;}
    if(hlRoom){highlightRoom(null);return;}
    if(document.body.classList.contains('lib-open')){closeLib();return;}
    if(armedItem)armItem(null);else{setSelMarker(null);renderMarkers();}
  }
  if((e.key==='Delete'||e.key==='Backspace')&&selMarker&&!e.target.matches('input,select,textarea')){
    deletePlacement(selMarker);
  }
  if((e.ctrlKey||e.metaKey)&&!e.target.matches('input,select,textarea')){
    const k=e.key.toLowerCase();
    if(k==='z'&&!e.shiftKey){e.preventDefault();doUndo();}
    if(k==='y'||(k==='z'&&e.shiftKey)){e.preventDefault();doRedo();}
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
      if(roomMode)setRoomMode(false);
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
  if(f){$('#planImg').src=f.img;requestAnimationFrame(()=>{fitZoom();renderMarkers();renderRooms();});}
}
function addFloor(name,dataUrl,w,h){
  const f={id:uid(),name,img:dataUrl,w,h,placements:[],rooms:[]};
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
    const scale=Math.min(3600/vp1.width,4);     /* high-res render — PNG below keeps it lossless */
    const vp=page.getViewport({scale});
    const cv=document.createElement('canvas');cv.width=vp.width;cv.height=vp.height;
    await page.render({canvasContext:cv.getContext('2d'),viewport:vp}).promise;
    const f=addFloor(`Page ${i}`,cv.toDataURL('image/png'),cv.width,cv.height);
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
  const h=$('#planHolder');
  h.style.transform=`translate(${panX}px, ${panY}px) scale(${zoom})`;
  h.style.setProperty('--zi',1/zoom);          /* labels counter-scale to stay pixel-crisp */
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
  if(roomMode&&onPlan&&e.button!==1&&!spaceHeld)return;   /* left-drag draws; middle or space+drag pans */
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
    /* while cropping, keep the frame visually steady: as the plan zooms,
       the crop region scales inversely about its own centre */
    if(cropMode){
      const f=activeFloor();
      const kz=nz/zoom;
      if(f&&Math.abs(kz-1)>0.0001){
        const cx=crop.x+crop.w/2, cy=crop.y+crop.h/2;
        let nw=crop.w/kz, nh=cropRatio!=null?(crop.w/kz)/cropRatio:crop.h/kz;
        nw=Math.max(60,Math.min(f.w,nw));
        nh=cropRatio!=null?nw/cropRatio:Math.max(60,Math.min(f.h,nh));
        if(nh>f.h){nh=f.h;if(cropRatio!=null)nw=nh*cropRatio;}
        crop.w=nw;crop.h=nh;
        crop.x=Math.min(f.w-nw,Math.max(0,cx-nw/2));
        crop.y=Math.min(f.h-nh,Math.max(0,cy-nh/2));
        renderCropRect();
      }
    }
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
  if(roomMode)setRoomMode(false);
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

/* rotate the active plan 90° in either direction, remapping ikons and rooms */
async function rotateFloor(dir){                       /* 1 = CW, −1 = CCW */
  const f=activeFloor();if(!f){toast('Upload a floor plan first.');return;}
  if(cropMode)cancelCrop();
  if(roomMode)setRoomMode(false);
  toast('Rotating…');
  pushUndo(floorSnapshot(f));
  const img=await loadImg(f.img);
  const cv=document.createElement('canvas');cv.width=f.h;cv.height=f.w;
  const ctx=cv.getContext('2d');
  if(dir>0){ ctx.translate(f.h,0); ctx.rotate(Math.PI/2); }
  else     { ctx.translate(0,f.w); ctx.rotate(-Math.PI/2); }
  ctx.drawImage(img,0,0);
  f.img=cv.toDataURL('image/png');            /* lossless rotation */
  const map=dir>0 ? p=>({x:1-p.y,y:p.x})              /* CW:  (x,y) → (1−y, x) */
                  : p=>({x:p.y,y:1-p.x});             /* CCW: (x,y) → (y, 1−x) */
  f.placements=f.placements.map(p=>({...p,...map(p)}));
  f.rooms=(f.rooms||[]).map(r=>{migrateRoom(r);return {...r,pts:r.pts.map(map)};});
  [f.w,f.h]=[f.h,f.w];
  showFloor();renderLibrary();renderBoq();
  toast(`Rotated 90° ${dir>0?'clockwise':'counter-clockwise'}.`);
}
$('#btnRotate').addEventListener('click',()=>rotateFloor(1));
$('#btnRotateCCW').addEventListener('click',()=>rotateFloor(-1));
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
  const px0=panX,py0=panY;
  const touch=ev.pointerType==='touch';
  const t=ev.currentTarget;t.setPointerCapture(ev.pointerId);
  const mv=e=>{
    if(pinchActive)return;
    const dx=e.clientX-sx, dy=e.clientY-sy;
    if(touch){
      /* photo-cropper feel: the frame stays put on screen while the plan
         slides beneath it — pan the view and counter-shift the frame */
      panX=px0+dx; panY=py0+dy; clampPan(); applyView();
      crop.x=Math.min(f.w-crop.w,Math.max(0,r0.x-dx*k));
      crop.y=Math.min(f.h-crop.h,Math.max(0,r0.y-dy*k));
    }else{
      crop.x=Math.min(f.w-crop.w,Math.max(0,r0.x+dx*k));
      crop.y=Math.min(f.h-crop.h,Math.max(0,r0.y+dy*k));
    }
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
  pushUndo(floorSnapshot(f));
  const img=await loadImg(f.img);
  const cv=document.createElement('canvas');
  cv.width=Math.round(crop.w);cv.height=Math.round(crop.h);
  cv.getContext('2d').drawImage(img,crop.x,crop.y,crop.w,crop.h,0,0,cv.width,cv.height);
  f.img=cv.toDataURL('image/jpeg',0.92);
  f.placements=f.placements.filter(inside).map(p=>({...p,
    x:(p.x*f.w-crop.x)/crop.w,
    y:(p.y*f.h-crop.y)/crop.h
  }));
  /* rooms: clip each polygon to the crop, drop slivers */
  f.rooms=(f.rooms||[]).map(r=>{
    migrateRoom(r);
    const px=r.pts.map(p=>({x:p.x*f.w,y:p.y*f.h}));
    const cl=clipPolyRect(px,crop.x,crop.y,crop.x+crop.w,crop.y+crop.h);
    if(cl.length<3)return null;
    const pts=cl.map(p=>({x:(p.x-crop.x)/crop.w,y:(p.y-crop.y)/crop.h}));
    if(polyArea(pts)<0.0004)return null;
    return {...r,pts};
  }).filter(Boolean);
  f.w=cv.width;f.h=cv.height;
  cancelCrop();showFloor();renderLibrary();renderBoq();
  toast('Plan cropped — Undo (Ctrl+Z or ↩) restores it.');
});

/* ──────────── Item modal ──────────── */
let editingId=null,mIcon='ceiling-speaker',mColor=PALETTE[6],mIconImg=null;
function buildIconGrid(){
  const g=$('#iconGrid');g.innerHTML='';
  Object.keys(ICONS).forEach(k=>{
    const b=el('button','icon-opt'+(k===mIcon&&!mIconImg?' on':''),svgOf(k));b.title=k;
    b.addEventListener('click',()=>{mIcon=k;mIconImg=null;buildIconGrid();renderIconPreview();});
    g.appendChild(b);
  });
}
function renderIconPreview(){
  const p=$('#fIconPreview');
  p.classList.toggle('show',!!mIconImg);
  p.innerHTML=mIconImg?`<img src="${mIconImg}" alt="">`:'';
  $('#fIconClear').style.display=mIconImg?'block':'none';
}
$('#fCatNew').addEventListener('click',()=>{
  const n=prompt('New category name');
  if(n&&n.trim()){$('#fCat').value=n.trim();toast(`Category “${n.trim()}” will be created when you save the device.`);}
});
$('#fIconUpload').addEventListener('click',()=>$('#fileIcon').click());
$('#fIconClear').addEventListener('click',()=>{mIconImg=null;buildIconGrid();renderIconPreview();});
$('#fileIcon').addEventListener('change',e=>{
  const f=e.target.files[0];e.target.value='';if(!f)return;
  const rd=new FileReader();
  rd.onload=()=>{
    const img=new Image();
    img.onload=()=>{
      /* normalize to a compact 96px transparent PNG */
      const cv=document.createElement('canvas');cv.width=cv.height=96;
      const k=Math.min(96/img.width,96/img.height);
      const w=img.width*k,hh=img.height*k;
      cv.getContext('2d').drawImage(img,(96-w)/2,(96-hh)/2,w,hh);
      mIconImg=cv.toDataURL('image/png');
      buildIconGrid();renderIconPreview();
    };
    img.src=rd.result;
  };
  rd.readAsDataURL(f);
});
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
  mIcon=it?.icon||'ceiling-speaker';mColor=it?.color||PALETTE[6];mIconImg=it?.iconImg||null;
  $('#fDelete').style.display=it?'block':'none';
  buildIconGrid();buildColorRow();renderIconPreview();
  $('#itemVeil').classList.add('open');
}
$('#btnNewItem').addEventListener('click',()=>openItemModal(null));
$('#fSave').addEventListener('click',()=>{
  const name=$('#fName').value.trim();if(!name){toast('Give the device a name.');return;}
  const data={name,cat:$('#fCat').value.trim()||'Other',model:$('#fModel').value.trim(),price:parseFloat($('#fPrice').value)||0,icon:mIcon,iconImg:mIconImg||null,color:mColor};
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
    h+=`<tr><td><span class="swatch" style="background:${r.it.color}">${iconHtml(r.it)}</span>${r.it.name}${r.it.model?`<span style="color:var(--dim);font-size:11px"> · ${r.it.model}</span>`:''}</td>
      <td class="num">${r.total}</td>`+
      (hasPrice?`<td class="num">${r.it.price?r.it.price.toLocaleString(undefined,{minimumFractionDigits:2}):'—'}</td><td class="num">${r.amount?r.amount.toLocaleString(undefined,{minimumFractionDigits:2}):'—'}</td>`:'')+'</tr>';
  });
  h+='</tbody><tfoot><tr><td>Total</td><td class="num">'+rows.reduce((a,r)=>a+r.total,0)+'</td>'+
     (hasPrice?'<td></td><td class="num">'+rows.reduce((a,r)=>a+r.amount,0).toLocaleString(undefined,{minimumFractionDigits:2})+'</td>':'')+'</tr></tfoot>';
  t.innerHTML=h;
  renderBoqRooms();
}
/* per-room breakdown: a rooms × devices matrix, like the Excel FD sheet */
function renderBoqRooms(){
  const host=$('#boqRooms');if(!host)return;
  let h='';
  state.floors.forEach(f=>{
    migrateRooms(f);
    if(!f.placements.length&&!(f.rooms||[]).length)return;
    /* devices present on this floor, in library order */
    const devs=state.items.filter(it=>f.placements.some(p=>p.itemId===it.id));
    if(!devs.length&&!(f.rooms||[]).length)return;
    const countIn=(room,itemId)=>f.placements.filter(p=>p.itemId===itemId&&roomOf(p,f)===room).length;
    const rowFor=(label,room,extra='')=>{
      const cells=devs.map(d=>{const c=countIn(room,d.id);return `<td class="num">${c||''}</td>`;}).join('');
      const tot=devs.reduce((a,d)=>a+countIn(room,d.id),0);
      return `<tr><td class="rb-room">${label}${extra}</td>${cells}<td class="num rb-tot">${tot||'—'}</td></tr>`;
    };
    let rowsH='';
    (f.rooms||[]).forEach(r=>{
      rowsH+=rowFor(`<span class="rb-dot" style="background:${r.color}"></span>${r.name}`,r,
                    r.scope==='out'?' <span class="rb-out">OUT</span>':'');
    });
    if(devs.some(d=>countIn(null,d.id)))rowsH+=rowFor('<span style="color:var(--dim)">Unassigned</span>',null);
    if(!rowsH)return;
    const head=devs.map(d=>`<th class="rb-dev" title="${d.name}"><span class="item-chip" style="background:${d.color}">${iconHtml(d)}</span></th>`).join('');
    h+=`<div class="rb-floor">${f.name}</div>
        <div class="rb-scroll"><table class="boq rb"><thead><tr><th>Room</th>${head}<th class="rb-tot">Σ</th></tr></thead><tbody>${rowsH}</tbody></table></div>`;
  });
  host.innerHTML=h?`<div class="rb-head">Breakdown by room</div><div class="rb-hint">Hover a column icon for the device name.</div>${h}`:'';
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
  {id:'a3',label:'A3',sub:'420 × 297 mm · 300 dpi',long:4961,short:3508,mm:[420,297]},
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
    doc.addImage(p.cv.toDataURL('image/png'),'PNG',0,0,w,h,undefined,'FAST');   /* lossless — crisp lines at any zoom */
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
    /* the editable design file, with a note on how to open it */
    folder.file(`${safeName()}.ikonplan`, projJson());
    folder.file('HOW TO OPEN THE DESIGN FILE.txt',
`${state.project} — ikonhouse Pre-Sales package
Generated ${today()}${state.preparedBy?` · Prepared by ${state.preparedBy}`:''}

CONTENTS
- ${safeName()} - Device Location Plan (${paper.label}).pdf — layout sheets & cover
- ${safeName()} - BoQ.xlsx — Field Device sheet (by room) + priced summary
- sheets-png/ — each sheet as a high-resolution image
- ${safeName()}.ikonplan — the editable design file

TO OPEN OR EDIT THE DESIGN
1. Go to  https://ikonhouse-presales-tool.netlify.app
2. Click "Open a project…" on the welcome screen
   (or Export menu → Open project… if already inside)
3. Select  ${safeName()}.ikonplan  from this package

The full project opens exactly as designed — floor plans, ikons, rooms,
device library and pricing — ready to continue editing.

ikonhouse · Pre-Sales Tool`);
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
/* "FD" Field Device Sheet — matches the client's reference workbook:
   devices as rotated column headers, locations as rows, blank = 0,
   and a bold "Total units" row of live SUM formulas. */
/* ── Field Device sheet: floors → numbered room rows × device columns,
      matching the team's quotation reference tab. Zero quantities are left
      blank, as in the reference. (The free SheetJS build cannot write cell
      styling, so the layout carries the fidelity: readable column widths
      instead of the reference's rotated headers.) ── */
function fdSheetName(){
  const d=new Date();
  return `FD ${String(d.getDate()).padStart(2,'0')}${d.toLocaleDateString('en-GB',{month:'long'})}${String(d.getFullYear()).slice(-2)}`;
}
function buildFdSheet(rows){
  const devs=rows.map(r=>r.it);
  const countIn=(f,room,itemId)=>f.placements.filter(p=>p.itemId===itemId&&roomOf(p,f)===room).length;
  const aoa=[['','Field Device Sheet',...devs.map(d=>d.name)],[]];
  state.floors.forEach(f=>{
    aoa.push(['',f.name]);
    let n=1;
    (f.rooms||[]).forEach(room=>{
      aoa.push([n++,room.name+(room.scope==='out'?' (OUT OF SCOPE)':''),...devs.map(d=>countIn(f,room,d.id)||'')]);
    });
    const loose=devs.map(d=>countIn(f,null,d.id));
    if(loose.some(v=>v)||!(f.rooms||[]).length){
      aoa.push([n++,(f.rooms||[]).length?'UNASSIGNED / GENERAL':'GENERAL',...loose.map(v=>v||'')]);
    }
    aoa.push([]);
  });
  const totalRow=aoa.length+1;                       /* 1-based row of 'Total units' */
  aoa.push(['','Total units',...devs.map(()=>0)]);
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  devs.forEach((d,i)=>{
    const col=XLSX.utils.encode_col(2+i);            /* device columns start at C */
    ws[`${col}${totalRow}`]={t:'n',f:`SUM(${col}3:${col}${totalRow-1})`};
  });
  ws['!cols']=[{wch:4.5},{wch:42},...devs.map(d=>({wch:Math.min(24,Math.max(11,d.name.length+2))}))];
  return ws;
}
function buildBoqWorkbook(rows){   /* requires XLSX to be loaded */
  const wb=XLSX.utils.book_new();
  /* Sheet 1 — the FD matrix, the main BoQ reference */
  XLSX.utils.book_append_sheet(wb,buildFdSheet(rows),fdSheetName());
  /* Sheet 2 — priced summary (unit prices & amounts live here) */
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
  XLSX.utils.book_append_sheet(wb,ws,'BoQ Summary');
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
  ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
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
    const key=it.iconImg?('img:'+it.id):it.icon;
    if(!iconCache[key])iconCache[key]=it.iconImg?await loadImg(it.iconImg):await iconImage(it.icon,'#ffffff');
    const g=pin*0.56;
    ctx.drawImage(iconCache[key],x0-g/2,y0-g/2,g,g);
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
  ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
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
/* ── Save / Save as: writes back to the same file where the browser allows
      (File System Access API — Chrome/Edge); elsewhere falls back to a
      download. Opening via the picker also links the file for Ctrl+S. ── */
let projHandle=null;
const projJson=()=>JSON.stringify(state);
function downloadProject(){
  const blob=new Blob([projJson()],{type:'application/json'});
  const a=document.createElement('a');
  a.download=`${safeName()}.ikonplan`;
  a.href=URL.createObjectURL(blob);a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  toast('Project downloaded.');
}
async function writeProject(handle){
  const w=await handle.createWritable();
  await w.write(projJson());await w.close();
}
async function saveProjectAs(){
  if(!window.showSaveFilePicker){downloadProject();return;}
  try{
    projHandle=await showSaveFilePicker({
      suggestedName:`${safeName()}.ikonplan`,
      types:[{description:'ikonhouse project',accept:{'application/json':['.ikonplan']}}]
    });
    await writeProject(projHandle);
    toast('Saved.');
  }catch(err){ if(err&&err.name!=='AbortError')downloadProject(); }
}
async function saveProject(){
  if(projHandle){
    try{ await writeProject(projHandle); toast('Saved.'); return; }
    catch(err){ /* permission lost or file moved — fall through to Save as */ }
  }
  saveProjectAs();
}
$('#mSave').addEventListener('click',()=>{closeMenu();saveProject();});
$('#mSaveAs').addEventListener('click',()=>{closeMenu();saveProjectAs();});
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'){e.preventDefault();saveProject();}
});
async function openViaPicker(){
  try{
    const [h]=await showOpenFilePicker({types:[{description:'ikonhouse project',accept:{'application/json':['.ikonplan','.json']}}]});
    const file=await h.getFile();
    const txt=await file.text();
    if(loadProjectText(txt))projHandle=h;      /* Ctrl+S now writes back here */
  }catch(err){ if(err&&err.name!=='AbortError')$('#fileProject').click(); }
}
$('#mOpen').addEventListener('click',()=>{closeMenu();window.showOpenFilePicker?openViaPicker():$('#fileProject').click();});
function loadProjectText(txt){
  try{
    const s=JSON.parse(txt);
    if(!s.items||!s.floors)throw 0;
    s.floors&&s.floors.forEach(f=>{f.rooms=f.rooms||[];});
    state=Object.assign({version:APP_VERSION,theme:SYS_THEME(),brandLogo:null,pinScale:1,client:'',location:'',reference:'',preparedBy:'',libDock:'left',lastDock:'left',libHidden:false,libFloat:null,libSize:{w:324,h:60,fw:288,fh:520},catOrder:[]},s);
    projHandle=null;                            /* re-linked by the picker path */
    armedItem=null;setSelMarker(null);undoStack=[];redoStack=[];
    if(cropMode)cancelCrop();
    if(roomMode)setRoomMode(false);
    $('#projName').value=state.project;
    $('#pinSize').value=(state.pinScale||1)*100;
    applyTheme();renderBrand();applyDock();renderLibrary();renderFloors();showFloor();renderBoq();
    dismissOnboard();
    toast('Project loaded.');
    return true;
  }catch{toast('That file is not a valid project file.');return false;}
}
$('#fileProject').addEventListener('change',e=>{
  const file=e.target.files[0];e.target.value='';if(!file)return;
  const rd=new FileReader();
  rd.onload=()=>loadProjectText(rd.result);
  rd.readAsText(file);
});

window.addEventListener('beforeunload',e=>{
  if(state.floors.some(f=>f.placements.length)){e.preventDefault();e.returnValue='';}
});
window.addEventListener('resize',()=>{ applyDock(); if(activeFloor()&&!cropMode) fitZoom(); });

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
  state.floors=[];state.activeFloor=null;undoStack=[];redoStack=[];projHandle=null;
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
applyTheme();renderBrand();applyDock();closeLib();renderLibrary();renderFloors();showFloor();obStartFx();
if(!isCompact())setTimeout(()=>toast('Tip: drag the ⠿ grip on the device library to dock it left, right, top or bottom.'),1600);
