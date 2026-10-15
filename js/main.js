// PP web — 대문 (초기)

// 8/30 전체모임에서 나온 PP 약자 예시 (새로고침마다 헤더에 하나씩)
const PP_NAMES = [
  "Paju Practice", "Practice Project", "Personal Project", "Post Production", 
  "Pixel & Paper", "Print & Publish", "Prototype Process", "Ping Pong", 
  "Panic Point", "Pajama Party", "Purple Pigeon", "Potato Pancake", "Pink Pigeon", 
  "Pineapple Pizza", "Printing Poster", "Profile Picture", "Piano Player", "Pay Phone",
  "Party Popper", "Pet Peeve", "Perfect Pitch", "Pumpkin Pie", "Pablo Picasso", "Peter Pan" 
];

// images/pp-photos/ 안의 사진 파일 목록. 사진을 추가/삭제하면 여기도 맞춰줄 것
const PP_PHOTOS = [
  "pp-bag.jpg", "pp-cake.jpg", "pp-cake2.jpg", "pp-can.jpg",
  "pp-coffee.jpg", "pp-lot.jpg", "pp-lot2.png", "pp-neon.jpg", "pp-letters.jpg", "pp-origami.jpg",
];

// images/patipati/ 안의 사진 파일 목록 (파티파티=PatiPati 컨테이너). 사진을 추가/삭제하면 여기도 맞춰줄 것
const PATIPATI_PHOTOS = [
  "patipati-space1.jpg", "patipati-space2.jpg", "patipati-space3.jpg", "patipati-space-site.jpg",
  "patipati-design-meeting1.jpg", "patipati-design-meeting2.jpg", "patipati-design-meeting3.jpg",
  "patipati-murugol-carrier.jpg", "patipati-soyo-site.jpg", "patipati-meal.jpg",
  "patipati-meeting.jpeg", "patipati-woosung-hyundae.jpeg", "patipati-pr-zoom.jpg", "patipati-carry-box.jpg",
  "patipati-studio.jpg", "patipati-planet.jpg", "patipati-selfie.jpg",
  "patipati-sunlight.jpg", "patipati-sunglasses.jpg",
  "patipati-silkscreen.jpg", "patipati-knitting.jpg", "patipati-board.jpg", "patipati-gathering.jpg",
  "patipati-postit1.jpg", "patipati-postit2.jpg", "patipati-postit3.jpg",
  "patipati-night1.jpg", "patipati-night2.jpg", "patipati-night3.jpg",
  "patipati-night-tree.jpg", "patipati-meeting2.jpg", // 2026-10-14 추가
];

// personal/우성/아케이드/ 안의 사진 파일 목록 (우성 개인 페이지 "지난 작업"). 사진을 추가/삭제하면 여기도 맞춰줄 것
const WOOSUNG_WORK_PHOTOS = [
  "arcade-inside.jpeg", "arcade-frame.jpeg", "arcade1.jpeg",
  "arcade-encoder.jpeg", "arcade-buttons.jpeg",
];
// personal/우성/시지프스/ 안의 사진 파일 목록
const WOOSUNG_SISYPHUS_PHOTOS = [
  "sisyphus1.jpg", "sisyphus2.jpg", "sisyphus3.jpg",
  "sisyphus4.jpg",
];
// personal/우성/작업/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업")
const WOOSUNG_ETC_PHOTOS = ["woosung-work1.jpg", "woosung-work2.jpg"];
const WOOSUNG_OHHYUK_PHOTOS = ["ohhyuk1.jpg", "ohhyuk2.jpg", "ohhyuk3.jpg", "ohhyuk4.jpg"];
const WOOSUNG_MOBO_MEDIA = ["mobo1.jpg", "mobo-video1.mp4", "mobo-video2.mp4"];

// personal/오늘이/ 안의 폴더별 사진(+영상) 목록. 개인 페이지 이미지는 personal/<이름>/<폴더>/ 에 정리
const ONEULI_STRUCTURAL_KITE_PHOTOS = [
  "structural-kite-process1.jpg", "structural-kite-process2.jpg",
  "structural-kite-site1.jpg", "structural-kite-site2.jpg",
];
const ONEULI_DRAWING_PHOTOS = ["drawing-research1.jpg", "drawing-research2.jpg"];
const ONEULI_BIOBIO_MEDIA = ["biobio1.jpg", "biobio2.jpg", "biobio-video1.mp4", "biobio-video2.mp4"];
const ONEULI_WATERCOLOR_PHOTOS = [
  "watercolor1.jpg", "watercolor2.jpg", "watercolor3.jpg", "watercolor4.jpg", "watercolor5.jpg",
  "watercolor6.jpg", "watercolor7.jpg", "watercolor8.jpg", "watercolor9.jpg",
];
const ONEULI_YEONHAM_PHOTOS = ["yeonham1.jpg", "yeonham2.jpg", "yeonham3.jpg"];

// personal/서연/ 안의 폴더별 사진 목록
// 2026-10-14 전체 교체 (이전 덧마루·메모·팬케이크 사진은 내림). 1차·2차에 똑같이 있던 사진 8장은 1차에만 넣음
const SEOYEON_1ST_PHOTOS = Array.from({ length: 21 }, (_, i) => `seoyeon-1st${i + 1}.jpg`);
const SEOYEON_2ND_PHOTOS = Array.from({ length: 21 }, (_, i) => `seoyeon-2nd${i + 1}.jpg`);

// personal/알샴/ 안의 폴더별 사진 목록
const ALSHAM_GUL_PHOTOS = ["gul1.jpg"];
const ALSHAM_VESTIBULAR_PHOTOS = [
  "vestibular1.jpg", "vestibular2.jpg", "vestibular3.jpg", "vestibular4.jpg",
  "vestibular5.jpg", "vestibular6.jpg", "vestibular7.jpg",
];
const ALSHAM_BIRD_LSO_PHOTOS = ["bird-lso1.jpg", "bird-lso2.jpg", "bird-lso3.jpg"];
const ALSHAM_WORK_PHOTOS = ["alsham-work1.jpg"]; // 주제 폴더 이름 미정 → 임시 "작업"
// personal/소요/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업")
const SOYO_WORK_PHOTOS = ["soyo1.jpg", "soyo2.jpg"];
// personal/서로/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업")
const SEORO_WORK_PHOTOS = [ // 2026-10-14 전체 교체 — 원본 파일명 순서, 영상 2개 포함
  "seoro1.jpg", "seoro2.jpg", "seoro3.jpg", "seoro4.jpg", "seoro5.jpg", "seoro6.jpg", "seoro7.jpg", "seoro8.jpg",
  "seoro-video1.mp4", "seoro-video2.mp4", "seoro9.jpg", "seoro10.jpg", "seoro11.jpg",
];
// personal/바치/ 안의 폴더별 사진·영상 (2026-10-15 전체 교체 — 받은 폴더 구조 그대로, 폴더 없이 있던 건 "작업")
const numbered = (prefix, count) => Array.from({ length: count }, (_, i) => `${prefix}${i + 1}.jpg`);
const BACCI_WORK_MEDIA = [...numbered("bacci", 6), "bacci-video1.mp4", "bacci7.jpg", "bacci8.jpg", "bacci9.jpg",
  "bacci10.jpg", "bacci11.jpg", "bacci12.jpg", "bacci13.jpg"]; // 7~13 = 참가한 행사 포스터
const BACCI_HANDWRITING_PHOTOS = numbered("handwriting", 11);                                   // 손글씨 수집
const BACCI_TELEMACHIA_MEDIA = ["telemachia1.jpg", "telemachia2.jpg", "telemachia-video1.mp4", "telemachia3.jpg"]; // 전시 「텔레마키아」
const BACCI_TUMBLBUG_PHOTOS = ["tumblbug4.jpg", "tumblbug1.jpg", "tumblbug2.jpg", "tumblbug3.jpg",                 // 텀블벅 프로젝트 (대표사진 → 2·3·4 → 굿즈)
  "tumblbug5.jpg", "tumblbug6.jpg", "tumblbug7.jpg", "tumblbug8.jpg"];
const BACCI_REVERSE_HANGUL_PHOTOS = numbered("reverse-hangul", 28);                              // 한글 거꾸로 쓰기
// personal/무루골/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업")
// personal/희주/ 안의 폴더별 사진 목록 (원본은 투명 PNG → 페이지 배경색 #F5F5F5 깔고 JPG)
const HEEJU_DRAWING_PHOTOS = [
  "heeju-drawing1.jpg", "heeju-drawing2.jpg", "heeju-drawing3.jpg",
  "heeju-drawing4.jpg", "heeju-drawing5.jpg", "heeju-drawing6.jpg",
];
const HEEJU_MOTION_PHOTOS = [
  "heeju-motion1.jpg", "heeju-motion2.jpg", "heeju-motion3.jpg", "heeju-motion4.jpg",
  "heeju-motion5.jpg", "heeju-motion6.jpg", "heeju-motion7.jpg", "heeju-motion8.jpg",
];
// personal/현/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업". 원본 투명 PNG는 #F5F5F5 깔고 JPG)
const HYUN_WORK_PHOTOS = ["hyun1.jpg", "hyun2.jpg", "hyun3.jpg", "hyun4.jpg", "hyun5.jpg"];
// personal/지원/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업")
const JIWON_WORK_PHOTOS = ["jiwon1.jpg", "jiwon2.jpg", "jiwon3.jpg", "jiwon4.jpg", "jiwon5.jpg"];
// personal/휘/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업". 원본 PNG는 JPG로)
const HWI_WORK_PHOTOS = ["hwi1.jpg", "hwi2.jpg", "hwi3.jpg", "hwi4.jpg", "hwi5.jpg", "hwi6.jpg", "hwi7.jpg"];
// personal/승민/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업". 원본 투명 PNG 2장은 #F5F5F5 깔고 JPG)
const SEUNGMIN_WORK_PHOTOS = Array.from({ length: 19 }, (_, i) => `seungmin${i + 1}.jpg`);
// personal/도노/ 안의 폴더별 목록 (관계도·PDF 페이지는 글씨가 읽히게 긴 변 2400, PDF는 쪽마다 JPG)
const DONO_GRAPHIC_MEDIA = ["dono-graphic1.jpg", "dono-graphic-video1.mp4"];
const DONO_RESEARCH_PHOTOS = [
  "dono-research1.jpg", "dono-research2.jpg", "dono-research3.jpg", "dono-research4.jpg",
  "dono-research-pdf1.jpg", "dono-research-pdf2.jpg", "dono-research-pdf3.jpg",
];
const DONO_ALPS_PHOTOS = [
  "dono-alps1.jpg", "dono-alps2.jpg", "dono-alps3.jpg", "dono-alps4.jpg", "dono-alps5.jpg", "dono-alps6.jpg",
];
const MURUGOL_WORK_PHOTOS = [
  "murugol1.jpg", "murugol2.jpg", "murugol3.jpg", "murugol4.jpg",
  "murugol5.jpg", "murugol6.jpg", "murugol7.jpg",
];

// 사진/영상을 같은 탭 안에서 크게 보여주는 라이트박스. 오버레이는 최초 호출 때 한 번만
// 만들어서 재사용. 배경 클릭·닫기 버튼·Esc로 닫힘
function openLightbox(src, isVideo) {
  let overlay = document.getElementById("lightbox-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.className = "lightbox-overlay hidden";
    overlay.innerHTML = '<button type="button" class="lightbox-close" title="닫기" aria-label="닫기">×</button><div class="lightbox-media"></div>';
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.classList.contains("lightbox-close")) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
    document.body.appendChild(overlay);
  }
  const mediaWrap = overlay.querySelector(".lightbox-media");
  mediaWrap.innerHTML = "";
  let el;
  if (isVideo) {
    el = document.createElement("video");
    el.src = src;
    el.controls = true;
    el.autoplay = true;
    el.loop = true;
    el.playsInline = true;
  } else {
    el = document.createElement("img");
    el.src = src;
    el.alt = "";
  }
  mediaWrap.appendChild(el);
  overlay.classList.remove("hidden");
}
function closeLightbox() {
  const overlay = document.getElementById("lightbox-overlay");
  if (!overlay) return;
  overlay.classList.add("hidden");
  overlay.querySelector(".lightbox-media").innerHTML = ""; // 재생 중인 영상 정지
}

// 개인 페이지 — 사진 폴더 자리표시 figure(id)를 폴더 안 사진·영상 한 장당 한 칸(figure.block-image)씩으로 펼침.
// 펼친 칸은 자리표시가 있던 위치에 순서대로 들어감. 클릭하면 라이트박스로 크게 보기. 영상은 자동재생·무음·반복
function expandPhotos(figureId, basePath, items) {
  const holder = document.getElementById(figureId);
  if (!holder || !items.length) return;
  const frag = document.createDocumentFragment();
  items.forEach((name) => {
    const src = basePath + name;
    const isVideo = /\.(mp4|mov|webm)$/i.test(name);
    const fig = document.createElement("figure");
    fig.className = "block-image";
    let el;
    if (isVideo) {
      el = document.createElement("video");
      el.muted = true;
      el.setAttribute("muted", ""); // 자동재생 허용 조건: 속성으로도 명시해야 확실히 통과
      el.autoplay = true;
      el.loop = true;
      el.playsInline = true;
      el.src = src; // src는 마지막에 — 앞의 설정이 로드 시작 전에 반영되도록
    } else {
      el = document.createElement("img");
      el.alt = "";
      el.loading = "lazy";
      el.decoding = "async";
      el.src = src;
    }
    fig.appendChild(el);
    fig.dataset.zoom = "1"; // 크게 보기 연결됨 (setupZoomFigures가 중복 연결 안 하게)
    fig.addEventListener("click", () => openLightbox(src, isVideo));
    frag.appendChild(fig);
  });
  holder.replaceWith(frag);
}

// 대문 "PP 사진" 탭 — 폴더별 사진 목록을 전부 섞어서(새로고침마다 랜덤 순서) 칸으로 채움.
// 칸은 개인 페이지처럼 원본 비율(masonry, setupMasonry는 DOMContentLoaded에서) + setupRatioSnap으로 비슷한 비율끼리 맞춤.
// 칸을 누르면 개인 페이지처럼 라이트박스로 전체 화면 크게 보기. sources = [[폴더 경로, 파일 목록], ...]
function setupPhotoGrid(gridId, sources) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const srcs = sources.flatMap(([basePath, photos]) => photos.map((name) => basePath + name));
  for (let i = srcs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [srcs[i], srcs[j]] = [srcs[j], srcs[i]];
  }
  srcs.forEach((src) => {
    const fig = document.createElement("figure");
    fig.className = "block-image";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    fig.appendChild(img);
    fig.dataset.zoom = "1";
    fig.addEventListener("click", () => openLightbox(src, false));
    grid.appendChild(fig);
  });
  setupRatioSnap(grid);
  // 탭을 닫았다 다시 열 때마다 순서와 넓은 칸(.wide)을 새로 랜덤 (2026-10-14 요청). 맨 위부터 보이게
  const sheet = grid.closest(".sheet");
  if (sheet) sheet.addEventListener("sheet:open", () => {
    const figs = Array.from(grid.children);
    for (let i = figs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [figs[i], figs[j]] = [figs[j], figs[i]];
    }
    figs.forEach((f) => grid.appendChild(f));
    grid.dispatchEvent(new Event("masonry:reroll"));
    const body = grid.closest(".sheet-body");
    if (body) body.scrollTop = 0;
  });
}

// 소개 탭 왼쪽 아래 PP 그림 한 장 — 탭을 열 때마다(setupSheets의 "sheet:open") 랜덤, 누르면 다음 랜덤 (직전과 안 겹치게)
function setupAboutPhoto(figId, basePath, photos) {
  const fig = document.getElementById(figId);
  const img = fig && fig.querySelector("img");
  if (!img || !photos.length) return;
  let current = -1;
  const next = () => {
    let i = Math.floor(Math.random() * photos.length);
    if (photos.length > 1 && i === current) i = (i + 1) % photos.length;
    current = i;
    img.src = basePath + photos[i];
  };
  next();
  fig.addEventListener("click", next);
  const sheet = fig.closest(".sheet");
  if (sheet) sheet.addEventListener("sheet:open", next);
}

// 일정 페이지처럼 HTML에 직접 넣은 사진·영상 칸(.person-grid 안 figure)도 누르면 라이트박스로 크게 보기
function setupZoomFigures() {
  document.querySelectorAll(".person-grid figure.block-image").forEach((fig) => {
    if (fig.dataset.zoom) return;
    const media = fig.querySelector("img, video");
    if (!media) return;
    fig.dataset.zoom = "1";
    fig.addEventListener("click", () => {
      const isVideo = media.tagName === "VIDEO";
      openLightbox(media.currentSrc || media.src, isVideo);
    });
  });
}

// 개인·일정 페이지(.person-grid) 사진 비율 스냅 — 서로 ±10% 안쪽인 사진끼리 무리를 지어 무리마다 하나의 비율로 맞춤
// (가운데 기준 살짝 크롭). 어느 무리에도 안 드는 사진은 원본 비율 유지.
// 사진이 로드될 때마다 로드된 것들로 기준을 다시 계산 (lazy 로딩이어도 동작)
function setupRatioSnap(grid, tolerance = 0.1) {
  const imgs = Array.from(grid.querySelectorAll("figure.block-image > img"));
  if (imgs.length < 2) return;
  const maxDiff = Math.log(1 + tolerance);
  const close = (a, b) => Math.abs(Math.log(a / b)) <= maxDiff;

  function apply() {
    const loaded = imgs.filter((img) => img.complete && img.naturalWidth);
    const ratios = loaded.map((img) => img.naturalWidth / img.naturalHeight);
    const base = new Array(loaded.length).fill(null);
    // 무리 나누기: 비슷한 비율끼리 가장 많이 모인 무리부터 기준(무리의 중앙값)을 정하고, 남은 사진으로 반복.
    // 예: 세로 3:4 무리와 가로 4:3 무리가 섞여 있으면 각자 자기 무리 기준으로 맞춤. 2장 미만 무리는 원본 비율
    let left = ratios.map((_, i) => i);
    while (left.length >= 2) {
      let best = [];
      left.forEach((i) => {
        const group = left.filter((j) => close(ratios[j], ratios[i]));
        if (group.length > best.length) best = group;
      });
      if (best.length < 2) break;
      const sorted = best.map((i) => ratios[i]).sort((a, b) => a - b);
      const b = sorted[Math.floor(sorted.length / 2)];
      best.forEach((i) => (base[i] = b));
      left = left.filter((i) => base[i] === null);
    }
    loaded.forEach((img, i) => {
      const fig = img.parentElement;
      fig.classList.toggle("ratio-snap", base[i] !== null);
      fig.style.aspectRatio = base[i] !== null ? String(base[i]) : "";
    });
  }

  imgs.forEach((img) => {
    if (!(img.complete && img.naturalWidth)) img.addEventListener("load", apply);
  });
  apply();
}

// 개인·일정 페이지(.person-grid)·PP 사진 탭(.photo-grid) masonry 쌓기 — 그리드 행이 1px 단위라
// 칸마다 실제 높이 + 세로 간격만큼 행을 차지하게(grid-row-end: span N) 맞춤 (style.css .person-grid 주석 참고).
// 가로 사진(영상 포함)은 대략 wideChance 확률로 2열 폭(.wide) — 칸마다 한 번만 뽑아서 새로고침 전까지 유지.
// 사진 로드·비율 스냅·창 크기·탭 열림(숨김 → 보임) 등 크기가 바뀔 때마다 ResizeObserver로 다시 계산
function setupMasonry(grid, wideChance = 1 / 3) {
  if (!grid) return;
  let wish = new WeakMap();
  let blocked = new WeakMap(); // 칸 → 넓히면 빈자리가 생겼던 열 개수들 (그 열 개수에선 다시 안 넓힘)
  let queued = false;

  function layout() {
    queued = false;
    const items = Array.from(grid.children);
    const cols = getComputedStyle(grid).gridTemplateColumns.split(" ").length;
    // 1) 넓힐 칸 정하기 (원본 비율을 알아야 해서 로드된 사진·영상만)
    items.forEach((el) => {
      if (!wish.has(el)) wish.set(el, Math.random() < wideChance);
      const media = el.matches("figure.block-image") && el.querySelector("img, video");
      const w = media ? media.naturalWidth || media.videoWidth : 0;
      const h = media ? media.naturalHeight || media.videoHeight : 0;
      const ok = !(blocked.get(el) && blocked.get(el).has(cols));
      el.classList.toggle("wide", !!(w && h && w / h > 1.05 && wish.get(el) && ok));
    });
    // 2) 높이 재서 행 차지 (읽기를 한 번에 몰아서 → 그다음 쓰기)
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
    const spans = items.map((el) => Math.max(1, Math.ceil(el.getBoundingClientRect().height + gap)));
    items.forEach((el, i) => (el.style.gridRowEnd = "span " + spans[i]));
    // 3) 넓은 칸은 두 열 중 긴 쪽 아래에 놓이므로, 짧은 열 쪽에 빈자리가 생김 (모바일 2열에서 특히 눈에 띔).
    //    빈자리가 생긴 넓은 칸은 (위에서부터 하나씩) 이 열 개수에선 넓히지 않고 다시 계산
    const gridTop = grid.getBoundingClientRect().top;
    const rects = items.map((el) => el.getBoundingClientRect());
    const holeAbove = (left, right, top) => {
      let bottom = gridTop - gap; // 위에 아무것도 없으면 그리드 맨 위가 기준
      rects.forEach((r) => {
        if (r.left < right - 1 && r.right > left + 1 && r.bottom <= top + 1) bottom = Math.max(bottom, r.bottom);
      });
      return top - (bottom + gap);
    };
    const bad = items.find((el, i) => {
      if (!el.classList.contains("wide")) return false;
      const r = rects[i];
      const half = (r.width - gap) / 2;
      return Math.max(holeAbove(r.left, r.left + half, r.top), holeAbove(r.right - half, r.right, r.top)) > 4;
    });
    if (bad) {
      if (!blocked.has(bad)) blocked.set(bad, new Set());
      blocked.get(bad).add(cols);
      schedule();
    }
  }
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(layout);
  };

  // 칸 순서를 다시 섞었을 때(PP 사진 탭) 넓은 칸도 새로 뽑음
  grid.addEventListener("masonry:reroll", () => {
    wish = new WeakMap();
    blocked = new WeakMap();
    schedule();
  });
  const ro = new ResizeObserver(schedule);
  ro.observe(grid);
  Array.from(grid.children).forEach((el) => ro.observe(el));
  // 가로/세로 판정은 로드 후에야 가능 — 로드 직후 높이가 그대로인 경우(스냅 등)도 확실히 다시 계산
  grid.querySelectorAll("img, video").forEach((m) => {
    m.addEventListener("load", schedule);
    m.addEventListener("loadedmetadata", schedule);
  });
  layout();
}

// grid 안에서 keepFirstEl(예: 영상 임베드, 없으면 null)만 맨 앞에 고정하고 나머지 컨테이너는 새로고침마다 랜덤 순서로.
// appendChild는 이미 있는 노드를 옮기는 것이라 iframe/video 등을 다시 만들지 않음
function shuffleGridKeepFirst(grid, keepFirstEl) {
  if (!grid) return;
  const rest = Array.from(grid.children).filter((el) => el !== keepFirstEl);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  const frag = document.createDocumentFragment();
  if (keepFirstEl) frag.appendChild(keepFirstEl);
  rest.forEach((el) => frag.appendChild(el));
  grid.appendChild(frag);
}

document.addEventListener("DOMContentLoaded", () => {
  // 대문 일정 탭 iframe 안에서 열린 경우 표시 — 이벤트 페이지 자체의 ←·푸터를 CSS로 숨김
  if (window.self !== window.top) document.body.classList.add("embedded");

  setupPhotoGrid("photo-grid", [
    ["images/patipati/", PATIPATI_PHOTOS],
    ["images/event/potato-pancake/", ["potato30.jpg", "potato31.jpg", "potato32.jpg"]], // Potato Pancake 일정 사진 중 일상 사진에도 (2026-10-14)
  ]);
  setupAboutPhoto("about-pp-photo", "images/pp-photos/", PP_PHOTOS);
  expandPhotos("woosung-past-work", "../images/personal/우성/아케이드/", WOOSUNG_WORK_PHOTOS);
  expandPhotos("woosung-sisyphus", "../images/personal/우성/시지프스/", WOOSUNG_SISYPHUS_PHOTOS);
  expandPhotos("woosung-etc", "../images/personal/우성/작업/", WOOSUNG_ETC_PHOTOS);
  expandPhotos("woosung-ohhyuk", "../images/personal/우성/OHHYUK/", WOOSUNG_OHHYUK_PHOTOS);
  expandPhotos("woosung-mobo", "../images/personal/우성/모보페스티벌/", WOOSUNG_MOBO_MEDIA);
  expandPhotos("oneuli-structural-kite", "../images/personal/오늘이/구조적-연/", ONEULI_STRUCTURAL_KITE_PHOTOS);
  expandPhotos("oneuli-drawing", "../images/personal/오늘이/드로잉/", ONEULI_DRAWING_PHOTOS);
  expandPhotos("oneuli-biobio", "../images/personal/오늘이/비오비오/", ONEULI_BIOBIO_MEDIA);
  expandPhotos("oneuli-watercolor", "../images/personal/오늘이/수채화/", ONEULI_WATERCOLOR_PHOTOS);
  expandPhotos("oneuli-yeonham", "../images/personal/오늘이/연함/", ONEULI_YEONHAM_PHOTOS);
  expandPhotos("seoyeon-1st", "../images/personal/서연/1차/", SEOYEON_1ST_PHOTOS);
  expandPhotos("seoyeon-2nd", "../images/personal/서연/2차/", SEOYEON_2ND_PHOTOS);
  expandPhotos("alsham-gul", "../images/personal/알샴/굴-붙이기/", ALSHAM_GUL_PHOTOS);
  expandPhotos("alsham-vestibular", "../images/personal/알샴/전정기관/", ALSHAM_VESTIBULAR_PHOTOS);
  expandPhotos("alsham-bird-lso", "../images/personal/알샴/새의-LSO/", ALSHAM_BIRD_LSO_PHOTOS);
  expandPhotos("alsham-work", "../images/personal/알샴/작업/", ALSHAM_WORK_PHOTOS);
  expandPhotos("soyo-work", "../images/personal/소요/작업/", SOYO_WORK_PHOTOS);
  expandPhotos("seoro-work", "../images/personal/서로/작업/", SEORO_WORK_PHOTOS);
  expandPhotos("murugol-work", "../images/personal/무루골/작업/", MURUGOL_WORK_PHOTOS);
  expandPhotos("heeju-drawing", "../images/personal/희주/드로잉/", HEEJU_DRAWING_PHOTOS);
  expandPhotos("heeju-motion", "../images/personal/희주/모션/", HEEJU_MOTION_PHOTOS);
  expandPhotos("hyun-work", "../images/personal/현/작업/", HYUN_WORK_PHOTOS);
  expandPhotos("jiwon-work", "../images/personal/지원/작업/", JIWON_WORK_PHOTOS);
  expandPhotos("hwi-work", "../images/personal/휘/작업/", HWI_WORK_PHOTOS);
  expandPhotos("seungmin-work", "../images/personal/승민/작업/", SEUNGMIN_WORK_PHOTOS);
  expandPhotos("dono-graphic", "../images/personal/도노/그래픽-작업/", DONO_GRAPHIC_MEDIA);
  expandPhotos("dono-research", "../images/personal/도노/리서치/", DONO_RESEARCH_PHOTOS);
  expandPhotos("dono-alps", "../images/personal/도노/북알프스/", DONO_ALPS_PHOTOS);
  expandPhotos("bacci-work", "../images/personal/바치/작업/", BACCI_WORK_MEDIA);
  expandPhotos("bacci-handwriting", "../images/personal/바치/손글씨-수집/", BACCI_HANDWRITING_PHOTOS);
  expandPhotos("bacci-telemachia", "../images/personal/바치/텔레마키아/", BACCI_TELEMACHIA_MEDIA);
  expandPhotos("bacci-tumblbug", "../images/personal/바치/텀블벅-프로젝트/", BACCI_TUMBLBUG_PHOTOS);
  expandPhotos("bacci-reverse-hangul", "../images/personal/바치/한글-거꾸로-쓰기/", BACCI_REVERSE_HANGUL_PHOTOS);
  // 일정 페이지(images/event/*.html): 열 때마다 사진·영상 순서를 랜덤으로 (2026-10-14 — 전엔 Potato Pancake만).
  // 대문 일정 탭에서 항목을 누를 때마다 페이지를 새로 불러오므로 다시 들어가도 순서가 바뀜. 맨 앞 유튜브 영상은 고정
  if (/\/images\/event\/[^/]+\.html$/.test(decodeURI(location.pathname))) {
    document.querySelectorAll(".person-grid").forEach((grid) => {
      const first = grid.firstElementChild;
      shuffleGridKeepFirst(grid, first && first.classList.contains("video-embed") ? first : null);
    });
  }
  // 개인·일정 페이지: 비슷한 비율 사진은 하나의 비율로 맞춤 + 누르면 크게 보기 (expandPhotos로 펼친 뒤에)
  document.querySelectorAll(".person-grid").forEach((grid) => setupRatioSnap(grid));
  setupZoomFigures();
  // 개인·일정 페이지·PP 사진 탭: masonry 쌓기 + 가로 사진 일부 2열 폭 (순서 섞기·펼치기·스냅 설정이 다 끝난 뒤에)
  document.querySelectorAll(".person-grid, .photo-grid").forEach((grid) => setupMasonry(grid));

  // 헤더: 새로고침마다 다른 피피. 각 단어 첫 P 를 볼드로 강조 (= 약자 PP)
  const nameEl = document.getElementById("pp-name");
  const firstName = PP_NAMES[Math.floor(Math.random() * PP_NAMES.length)];
  if (nameEl) nameEl.innerHTML = ppNameHTML(firstName);

  // 대문 탭 + 배우미 4분면 카드 + 일정 탭 안 페이지 표시
  setupSheets();
  const memberPreviews = setupMemberCards();
  setupEventView();
  setupPathMap();

  // 첫 화면 로딩 (index.html #loader) — 대문에서 쓰는 사진을 전부 미리 받음: 화면에 있는 img + PP 그림 전부 + 배우미 호버 사진
  const preload = [
    ...Array.from(document.querySelectorAll("img[src]")).map((img) => img.getAttribute("src")),
    ...PP_PHOTOS.map((n) => "images/pp-photos/" + n),
    ...Object.values(memberPreviews || {}).flat(),
  ];
  setupLoader(firstName, preload, (name) => { if (nameEl) nameEl.innerHTML = ppNameHTML(name); });

  // 이메일 복사 버튼
  const btn = document.getElementById("copy-btn");
  if (btn) {
    const EMAIL = "hello@example.com"; // TODO: 실제 이메일로 교체
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        const original = btn.textContent;
        btn.textContent = `복사됨 · ${EMAIL}`;
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1800);
      } catch (e) {
        window.prompt("복사할 이메일:", EMAIL);
      }
    });
  }
});

// 오시는 길 지도 (MapLibre + OpenFreeMap 벡터 타일, 키 없음). 구글 지도 느낌으로 색·글씨·핀·버튼을 맞춤.
// 강조한 길 = 회동길을 따라 북동쪽으로 와서 뜨인돌 앞 블록(PaTI)을 한 바퀴 — 모양이 p.
// 회동길 방향(북동 약 60°)이 화면 위로 오게 지도를 돌려서 p가 똑바로 서 보이게 함. 글씨는 돌려도 똑바로 섬.
// 좌표는 OpenStreetMap 도로 노드(회동길 way 499654689 + 뜨인돌 옆 골목 way 472159393) 그대로 ([경도, 위도] 순서)
const PATH_BEARING = 60;
const PATH_PLACES = [
  { name: "뜨인돌출판", at: [126.6916719, 37.7160375] },                 // 구글 지도 공유 링크 좌표
  { name: "파주타이포그라피배곳 PaTI", at: [126.6915625, 37.7155625] },  // 구글 지도 플러스코드 8Q98PM8R+6J
];
const PATH_ROUTE = [
  [126.6902209, 37.7151737], [126.690415, 37.7153272], [126.6907062, 37.7154693], // 회동길 (p의 세로 획)
  [126.6912921, 37.7156852], [126.6919537, 37.715964],                            // 책마을1사거리 → 동쪽 교차로
  [126.6921514, 37.7156275], [126.6921596, 37.7154733], [126.6921141, 37.7153404], // 골목을 따라 내려가
  [126.692038, 37.7152324], [126.69173, 37.7150811], [126.6916436, 37.7151932],     // 아래에서 돌아
  [126.6912921, 37.7156852],                                                       // 책마을1사거리로 (p의 동그라미)
];
// OSM 도로 데이터에 이름이 없는 골목 (way 472159393 / 472159395 / 472159398) — [이름, 좌표]
const PATH_EXTRA_ROAD_NAMES = [
  ["회동길", [[126.6904253, 37.7169905], [126.6907569, 37.7165211], [126.6912921, 37.7156852], [126.6916436, 37.7151932], [126.69173, 37.7150811],
    [126.692038, 37.7152324], [126.6921141, 37.7153404], [126.6921596, 37.7154733], [126.6921514, 37.7156275], [126.6919537, 37.715964],
    [126.691648, 37.7164134], [126.6913871, 37.7167957]]],
  ["회동길", [[126.6920084, 37.7175944], [126.6919066, 37.7172795], [126.6918398, 37.7171444], [126.6917507, 37.7170334], [126.6916278, 37.7169309],
    [126.6913871, 37.7167957], [126.6907569, 37.7165211]]],
  ["회동길", [[126.691648, 37.7164134], [126.6922114, 37.7166309], [126.6923179, 37.7166791], [126.6924613, 37.7167282], [126.6925829, 37.7167354],
    [126.6927211, 37.7167291], [126.6929682, 37.7166823]]],
];
// 구글 지도 기본(컬러) 색 — 2026-10-14 "흑백일 필요 없음"
const G = {
  land: "#f8f9fa", green: "#ceead6", water: "#9fd3f7", building: "#e8eaed", buildingLine: "#dadce0",
  road: "#ffffff", roadLine: "#dadce0", major: "#fde293", majorLine: "#f2c84b", rail: "#bdc1c6", text: "#5f6368",
};
// 장소 종류별 핀 색 (구글: 음식 주황, 쇼핑 파랑, 교통 파랑, 문화 청록, 공원 초록, 숙박 분홍, 병원 빨강, 그 외 회색)
const POI_COLOR = ["match", ["get", "class"],
  ["restaurant", "cafe", "fast_food", "bar", "beer", "ice_cream", "bakery", "food"], "#f29900",
  ["shop", "grocery", "clothing_store", "convenience", "department_store", "books", "furniture", "jewelry", "hardware", "alcohol_shop", "music", "gift"], "#1a73e8",
  ["bus", "railway", "ferry_terminal", "aerialway", "car", "fuel", "parking", "bicycle"], "#4285f4",
  ["museum", "art_gallery", "attraction", "theatre", "cinema", "library", "castle", "monument"], "#12b5cb",
  ["park", "garden", "playground", "campsite", "zoo"], "#34a853",
  ["lodging"], "#e8467c",
  ["hospital", "doctors", "pharmacy", "dentist"], "#ea4335",
  "#7b8085"];
// 도로 폭 배율 — OpenFreeMap 기본 도로는 구글보다 가늘어서 굵게 (줌별 폭 값만 곱함). 3.5 = 구글 스크린샷과 같은 축척에서 폭(약 30px)이 비슷해지는 값
const PATH_ROAD_SCALE = 3.5;
function scaleWidth(v, f) {
  if (typeof v === "number") return v * f;
  if (!Array.isArray(v)) return v;
  if (v[0] === "interpolate") return v.map((x, i) => (i >= 4 && i % 2 === 0 ? scaleWidth(x, f) : x));
  if (v[0] === "step") return v.map((x, i) => (i >= 2 && i % 2 === 0 ? scaleWidth(x, f) : x));
  return v;
}
function googleize(map) {
  for (const layer of map.getStyle().layers) {
    const { id, type } = layer;
    const sl = layer["source-layer"];
    if (type === "background") map.setPaintProperty(id, "background-color", G.land);
    else if (type === "raster" || type === "fill-extrusion" || id.includes("shield") || id.includes("one_way")) map.setLayoutProperty(id, "visibility", "none");
    else if (type === "fill") {
      const green = sl === "park" || (sl === "landcover" && /wood|grass/.test(id)) || /pitch|track|cemetery/.test(id);
      const c = sl === "building" ? G.building : sl === "water" ? G.water : green ? G.green : G.land;
      map.setPaintProperty(id, "fill-color", c);
      map.setPaintProperty(id, "fill-opacity", 1);
      map.setPaintProperty(id, "fill-outline-color", sl === "building" ? G.buildingLine : c);
      if (layer.paint && layer.paint["fill-pattern"]) map.setLayoutProperty(id, "visibility", "none");
    } else if (type === "line") {
      if (sl === "transportation") {
        const rail = /rail/.test(id), casing = /casing/.test(id), path = /path|pedestrian/.test(id);
        const major = /motorway|trunk|primary/.test(id); // 큰 도로는 구글처럼 노란색
        map.setPaintProperty(id, "line-color", rail ? G.rail : path ? "#ffffff" : major ? (casing ? G.majorLine : G.major) : casing ? G.roadLine : G.road);
        if (!rail) {
          for (const prop of ["line-width", "line-gap-width"]) {
            const w = layer.paint && layer.paint[prop];
            if (w !== undefined) map.setPaintProperty(id, prop, scaleWidth(w, PATH_ROAD_SCALE));
          }
        }
      } else if (sl === "boundary") map.setLayoutProperty(id, "visibility", "none");
      else map.setPaintProperty(id, "line-color", sl === "waterway" ? G.water : sl === "park" ? G.green : G.land);
    } else if (type === "symbol") {
      if (layer.layout && layer.layout["text-field"] !== undefined) {
        map.setLayoutProperty(id, "text-field", ["coalesce", ["get", "name:ko"], ["get", "name"]]);
        map.setPaintProperty(id, "text-color", G.text);
        map.setPaintProperty(id, "text-halo-color", "#ffffff");
        map.setPaintProperty(id, "text-halo-width", 1.5);
        if (sl === "transportation_name") map.setLayoutProperty(id, "text-size", 13);
      }
      // 장소(POI): 아이콘 대신 구글처럼 종류별 색 동그라미 + 같은 색 이름
      if (sl === "poi") {
        map.setPaintProperty(id, "icon-opacity", 0);
        map.setPaintProperty(id, "text-color", POI_COLOR);
        map.setLayoutProperty(id, "text-anchor", "left");
        map.setLayoutProperty(id, "text-offset", [1.1, 0]);
        map.setLayoutProperty(id, "text-justify", "left");
        const dot = { id: id + "-dot", type: "circle", source: layer.source, "source-layer": "poi",
          paint: { "circle-radius": 6, "circle-color": POI_COLOR, "circle-stroke-color": "#fff", "circle-stroke-width": 1.5 } };
        if (layer.filter) dot.filter = layer.filter;
        if (layer.minzoom !== undefined) dot.minzoom = layer.minzoom;
        map.addLayer(dot, id);
      }
    }
  }
}
function setupPathMap() {
  const el = document.getElementById("path-map");
  if (!el || !window.maplibregl) return;
  const center = PATH_ROUTE.reduce((a, p) => [a[0] + p[0] / PATH_ROUTE.length, a[1] + p[1] / PATH_ROUTE.length], [0, 0]);
  const map = new maplibregl.Map({
    container: el,
    style: "https://tiles.openfreemap.org/styles/liberty",
    center, zoom: 17.4, bearing: PATH_BEARING, pitch: 0,
    dragRotate: false, pitchWithRotate: false, touchPitch: false,
    attributionControl: { compact: true, customAttribution: "건물 © Overture Maps" },
    localIdeographFontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
  });
  map.touchZoomRotate.disableRotation();
  map.keyboard.disableRotation();
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "bottom-right");
  // 스타일(JSON)만 받으면 바로 색을 바꿈 — "load"는 타일·아이콘까지 다 받아야 떠서 원래 색이 잠깐 보임
  map.once("style.load", () => {
    googleize(map);
    const orange = getComputedStyle(document.documentElement).getPropertyValue("--riso-orange").trim() || "#FF6C2F";
    map.addSource("path-route", { type: "geojson", data: { type: "Feature", geometry: { type: "LineString", coordinates: PATH_ROUTE } } });
    // 강조 길은 글씨 층 아래에 — 구글처럼 길 이름이 오렌지 선 위로 보이게
    const firstLabel = (map.getStyle().layers.find((l) => l.type === "symbol") || {}).id;
    // 건물 윤곽 (js/path-buildings.js, Overture Maps) — 타일 건물 위에 겹쳐 그림
    if (typeof PATH_BUILDINGS !== "undefined") {
      map.addSource("path-buildings", { type: "geojson", data: PATH_BUILDINGS });
      map.addLayer({ id: "path-buildings", type: "fill", source: "path-buildings",
        paint: { "fill-color": G.building, "fill-outline-color": G.buildingLine } }, firstLabel);
    }
    map.addLayer({ id: "path-route-casing", type: "line", source: "path-route", layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": "#ffffff", "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 5, 17, 14, 20, 40] } }, firstLabel);
    map.addLayer({ id: "path-route", type: "line", source: "path-route", layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": orange, "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 14, 3, 17, 10, 20, 32] } }, firstLabel);
    // OSM에 이름이 비어 있는 뜨인돌 주변 골목 — 구글 지도엔 모두 "회동길"로 나와서 이름을 직접 붙임
    map.addSource("path-road-names", { type: "geojson", data: { type: "FeatureCollection", features: PATH_EXTRA_ROAD_NAMES.map(([name, coordinates]) => (
      { type: "Feature", properties: { name }, geometry: { type: "LineString", coordinates } })) } });
    map.addLayer({ id: "path-road-names", type: "symbol", source: "path-road-names",
      layout: { "symbol-placement": "line", "text-field": ["get", "name"], "text-font": ["Noto Sans Regular"], "text-size": 13, "text-rotation-alignment": "map" },
      paint: { "text-color": G.text, "text-halo-color": "#ffffff", "text-halo-width": 1.5 } });
  });
  // 구글식 핀 + 이름 (지도를 돌려도 똑바로 섬)
  for (const p of PATH_PLACES) {
    const m = document.createElement("div");
    m.className = "path-pin";
    m.innerHTML = '<svg viewBox="0 0 24 34" width="27" height="38" aria-hidden="true"><path d="M12 33s11-12.2 11-20.5A11 11 0 0 0 1 12.5C1 20.8 12 33 12 33z" fill="#ea4335" stroke="#fff" stroke-width="1.5"/><circle cx="12" cy="12.5" r="4" fill="#a50e0e"/></svg><span></span>';
    m.querySelector("span").textContent = p.name;
    new maplibregl.Marker({ element: m, anchor: "bottom-left", offset: [-13.5, 0] }).setLngLat(p.at).addTo(map);
  }
  new ResizeObserver(() => map.resize()).observe(el);
}

// 대문 탭 (sonayong.com 식). 시트 i 는 펼쳐진 탭(active)보다 앞이면 왼쪽으로 밀려 오른쪽 끝 띠만 보이고,
// 뒤면 제자리(i × 띠 폭)에서 앞 시트에 덮여 오른쪽 끝 띠만 보임. 앞 시트가 항상 위에 쌓이도록 z-index 는 역순.
// 주소 해시(#people 등)로 탭을 기억 — 새로고침·뒤로가기해도 같은 탭
function setupSheets() {
  const sheets = Array.from(document.querySelectorAll(".sheet"));
  if (!sheets.length) return;
  document.body.style.setProperty("--sheet-count", sheets.length);

  const tabW = () => parseFloat(getComputedStyle(document.body).getPropertyValue("--tab-w")) || 72;
  let active = 0;

  // body.tabs-overlay (패널 버전) — 첫 시트(PP 평면)는 늘 바닥에 깔리고, 나머지 탭은 오른쪽에서 패널로 미끄러져 들어와 덮음.
  // 탭 버튼은 헤더 오른쪽(.site-nav)으로 옮겨 알약 모양으로. 위치 계산 없이 .active 클래스만으로 CSS가 처리
  const overlay = document.body.classList.contains("tabs-overlay");
  if (overlay) {
    const nav = document.querySelector(".site-nav");
    sheets.forEach((sheet, i) => {
      const btn = sheet.querySelector(".sheet-tab");
      if (i === 0) btn.hidden = true; // 바닥 평면(PP)은 버튼 없음 — 패널을 닫으면 보임
      nav.appendChild(btn);
    });
    // 패널이 열려 있을 때 드러난 평면을 누르면 패널만 닫힘(카드 클릭·드래그로 이어지지 않게 캡처 단계에서 막음)
    sheets[0].addEventListener("click", (e) => {
      if (active === 0) return;
      e.preventDefault();
      e.stopPropagation();
      show(0);
    }, true);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && active !== 0) show(0);
    });
  }
  const tabOf = (sheet) => (overlay ? document.querySelectorAll(".site-nav .sheet-tab")[sheets.indexOf(sheet)] : sheet.querySelector(".sheet-tab"));

  // body.tabs-horizontal 이면 가로 띠 — 띠가 각 시트 위쪽 끝. 펼친 탭까지는 위에서부터 띠로 쌓이고(펼친 탭은 그 아래로 내용),
  // 뒤 탭들은 화면 아래에 띠로 모임. 뒤 시트가 앞 시트를 덮도록 z-index는 순서대로.
  // 아니면 세로 띠(왼→오른쪽, 앞 시트가 위)
  function layout() {
    if (overlay) {
      sheets.forEach((sheet, i) => {
        sheet.classList.toggle("active", i === active);
        tabOf(sheet).setAttribute("aria-expanded", i === active ? "true" : "false");
      });
      document.body.classList.toggle("panel-open", active !== 0);
      return;
    }
    const t = tabW();
    const horizontal = document.body.classList.contains("tabs-horizontal");
    const headerH = parseFloat(getComputedStyle(document.body).getPropertyValue("--header-h")) || 0;
    const span = horizontal ? window.innerHeight - headerH : window.innerWidth;
    const sheetLen = span - (sheets.length - 1) * t;
    sheets.forEach((sheet, i) => {
      if (horizontal) {
        const pos = i <= active ? i * t : span - (sheets.length - i) * t;
        sheet.style.top = headerH + pos + "px";
        sheet.style.zIndex = i + 1;
      } else {
        sheet.style.left = (i < active ? (i + 1) * t - sheetLen : i * t) + "px";
        sheet.style.zIndex = sheets.length - i;
      }
      sheet.classList.toggle("active", i === active);
      sheet.querySelector(".sheet-tab").setAttribute("aria-expanded", i === active ? "true" : "false");
    });
  }

  function show(i, updateHash = true) {
    const changed = i !== active;
    active = i;
    layout();
    if (changed) sheets[i].dispatchEvent(new CustomEvent("sheet:open")); // 탭이 새로 열림 (소개 탭 랜덤 그림 등)
    // file:// 로 열면 브라우저에 따라 replaceState가 보안 오류를 냄 — 주소 기록만 포기하고 탭 전환은 그대로
    if (updateHash) {
      try { history.replaceState(null, "", "#" + sheets[i].id); } catch (_) {}
    }
  }

  sheets.forEach((sheet, i) => {
    tabOf(sheet).addEventListener("click", () => {
      if (i !== active) show(i);
      else if (overlay && i !== 0) show(0); // 패널 버전: 열린 탭 버튼을 다시 누르면 닫힘
    });
  });

  const fromHash = () => {
    const i = sheets.findIndex((s) => "#" + s.id === location.hash);
    return i >= 0 ? i : 0;
  };
  // 첫 배치는 애니메이션 없이
  sheets.forEach((s) => (s.style.transition = "none"));
  show(fromHash(), false);
  requestAnimationFrame(() => sheets.forEach((s) => (s.style.transition = "")));

  window.addEventListener("resize", layout);
  window.addEventListener("hashchange", () => show(fromHash(), false));
}

// 헤더·로딩 화면의 PP 이름 — 약자 P 두 글자만 굵게 (한글 ㅍㅍ 버전 되살릴 땐 별도 처리 필요)
function ppNameHTML(name) {
  return name.replace(/&/g, "&amp;").replace(/(^|\s)(P)/g, "$1<b>$2</b>");
}

// 첫 화면 인트로 (index.html #loader, 2026-10-14) — 사진을 미리 받는 동안 PP 이름 하나를 보여줌.
// 움직임: PP 두 글자만 붙어서 나타남 → 가운데를 기준으로 이름 길이만큼 벌어짐 → 벌어진 자리에 나머지 글자가
// 아래에서 위로 올라옴 → 잠시 머문 뒤 글자가 제자리에서 위→아래로 지워짐 → PP로 모임 → 페이드 아웃.
// 한 바퀴 약 4초 (2026-10-14 20% 빠르게). 그때 사진을 다 받았으면 걷고, 아직이면 다른 이름으로 한 바퀴 더 (느린 회선 대비 최대 20초).
// 첫 입장에서만 — 같은 탭에서 새로고침하면 안 뜸(sessionStorage). index.html <head>의 한 줄이 미리 숨겨서 깜빡임 없음.
// 마지막에 나온 이름이 그대로 헤더 이름이 됨 (onName)
function setupLoader(firstName, srcs, onName) {
  const loader = document.getElementById("loader");
  if (!loader) return;
  if (document.documentElement.classList.contains("intro-seen")) { loader.remove(); return; }
  try { sessionStorage.setItem("pp-intro-seen", "1"); } catch (_) {}
  const nameEl = loader.querySelector(".loader-name");
  const MAX_MS = 20000;
  const t0 = performance.now();
  const unique = Array.from(new Set(srcs.filter(Boolean)));
  let left = unique.length;
  let ready = left === 0;
  unique.forEach((src) => {
    const img = new Image();
    img.onload = img.onerror = () => { if (--left <= 0) ready = true; };
    img.src = src;
  });
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  // "Pixel & Paper" → [P + "ixel & "] [P + "aper"] — P로 시작하는 단어마다 한 묶음, 나머지 글자·띄어쓰기는 앞 묶음 꼬리로
  function build(name) {
    const groups = [];
    name.split(" ").forEach((tok) => {
      if (tok[0] === "P" || !groups.length) groups.push({ p: tok[0], rest: tok.slice(1) });
      else groups[groups.length - 1].rest += " " + tok;
    });
    nameEl.textContent = "";
    return groups.map((g, i) => {
      const wrap = document.createElement("span");
      wrap.className = "lg";
      const p = document.createElement("b");
      p.className = "lp";
      p.textContent = g.p;
      const rest = document.createElement("span");
      rest.className = "lr";
      const inner = document.createElement("span");
      inner.className = "lr-in";
      inner.textContent = g.rest + (i < groups.length - 1 ? "\u00a0" : "");
      rest.append(inner);
      wrap.append(p, rest);
      nameEl.appendChild(wrap);
      return { rest, inner };
    });
  }

  async function play(name) {
    const parts = build(name);
    onName(name);
    // 재기: 나머지 글자 폭, 글자 칸 높이(글자를 그만큼 아래로 내려놨다가 올림)
    parts.forEach((q) => {
      q.w = q.inner.scrollWidth;
      q.rest.style.setProperty("--drop", q.rest.getBoundingClientRect().height.toFixed(1) + "px");
    });
    await frame();
    nameEl.classList.add("show");                                     // PP 나타남
    await wait(720);
    parts.forEach((q) => (q.rest.style.width = q.w + "px"));         // 가운데 기준으로 벌어짐
    await wait(600);
    parts.forEach((q) => q.inner.classList.add("up"));               // 글자가 아래에서 올라옴
    await wait(520 + 720);                                           // 올라오는 시간 + 머묾
    parts.forEach((q) => q.rest.classList.add("wipe"));              // 거꾸로: 글자는 제자리, 위에서 아래로 지워지며 사라짐
    await wait(440);                                                 // (내려가며 사라지면 P보다 한참 밑에서 없어져 보였음)
    parts.forEach((q) => (q.rest.style.width = "0px"));              // PP로 모임
    await wait(640);
    nameEl.classList.remove("show");                                 // 페이드 아웃
    await wait(480);
  }

  (async () => {
    try { await document.fonts.ready; } catch (_) {} // 글꼴이 늦게 오면 글자 폭을 잘못 잼
    let name = firstName;
    for (;;) {
      await play(name);
      if (ready || performance.now() - t0 > MAX_MS) break;
      let next = name;
      while (PP_NAMES.length > 1 && next === name) next = PP_NAMES[Math.floor(Math.random() * PP_NAMES.length)];
      name = next;
    }
    loader.classList.add("done");
    await wait(560);
    loader.remove();
  })();
}

// 탭 안 페이지 표시 공용 — view(.in-tab-view) 안 iframe에 href를 띄우고, ←로 닫음. 닫을 때 onClose 호출.
// 반환값 open(href)로 띄움.
// 브라우저 뒤로가기(모바일 스와이프 포함)도 ←처럼 목록/4분면으로 바로 돌아가게 — 띄울 때 기록을 하나 쌓고(pushState)
// 뒤로가기(popstate)가 오면 닫음. iframe 주소는 location.replace로 바꿔서 iframe 자체엔 기록이 안 쌓이게
// (frame.src를 바꾸면 기록이 쌓여, 뒤로가기가 iframe 안에서만 한 칸 물러나고 개인 페이지가 안 닫혔음 — 2026-10-14 수정)
function setupInTabView(view, onClose) {
  const frame = view.querySelector("iframe");
  let pushed = false;
  const load = (href) => {
    try { frame.contentWindow.location.replace(new URL(href, location.href).href); }
    catch (_) { frame.src = href; }
  };
  const close = () => {
    if (view.classList.contains("hidden")) return;
    view.classList.add("hidden");
    load("about:blank"); // 재생 중인 영상 정지
    if (onClose) onClose();
  };
  view.querySelector(".in-tab-back").addEventListener("click", () => {
    if (pushed) history.back(); // → popstate에서 닫힘
    else close();
  });
  window.addEventListener("popstate", () => {
    pushed = false;
    close();
  });
  return (href) => {
    load(href);
    view.classList.remove("hidden");
    // file:// 에선 브라우저에 따라 pushState가 막힘 — 그땐 ←로만 닫힘
    try { history.pushState({ inTab: view.id }, "", location.href); pushed = true; } catch (_) { pushed = false; }
  };
}

// 일정 탭 — 항목(a.event)을 누르면 페이지 이동 대신 탭 안에 그 페이지를 띄움(목록은 숨김). ←로 목록 복귀.
// cmd/ctrl/shift 클릭(새 탭 등)은 브라우저 기본 동작 그대로
function setupEventView() {
  const list = document.getElementById("event-list");
  const view = document.getElementById("event-view");
  if (!list || !view) return;
  const open = setupInTabView(view, () => list.classList.remove("hidden"));
  list.addEventListener("click", (e) => {
    const link = e.target.closest("a.event[href]");
    if (!link || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    list.classList.add("hidden");
    open(link.getAttribute("href"));
  });
}

// 셔플 백 — 목록을 섞어 두고 한 장씩 꺼냄. 한 바퀴 다 꺼내기 전엔 같은 항목이 다시 안 나오고,
// 다시 섞을 때도 직전 항목이 바로 첫 번째로 오지 않게 함. 반환값 draw()를 부를 때마다 다음 항목
function makeShuffleBag(items) {
  let bag = [];
  let last = null;
  return () => {
    if (!bag.length) {
      bag = items.slice();
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
      if (bag.length > 1 && bag[bag.length - 1] === last) [bag[0], bag[bag.length - 1]] = [bag[bag.length - 1], bag[0]];
    }
    last = bag.pop();
    return last;
  };
}

// 배우미 4분면 카드 클릭 → 탭 안에 해당 배우미 페이지
// + 개인 페이지에 사진이 있는 배우미는 카드에 마우스를 올리면 그 사진 중 랜덤 한 장이 탭 배경(.quad-photo)에 옅게 깔림.
// 목록은 개인 페이지가 쓰는 폴더별 목록을 그대로 재사용(영상 제외) — 개인 페이지에 사진을 추가하면 여기도 추가할 것
function setupMemberCards() {
  const withBase = (base, names) => names.filter((n) => !/\.(mp4|mov|webm)$/i.test(n)).map((n) => base + n);
  const MEMBER_PREVIEWS = {
    "people/우성.html": [
      ...withBase("images/personal/우성/아케이드/", WOOSUNG_WORK_PHOTOS),
      ...withBase("images/personal/우성/시지프스/", WOOSUNG_SISYPHUS_PHOTOS),
      ...withBase("images/personal/우성/작업/", WOOSUNG_ETC_PHOTOS),
      ...withBase("images/personal/우성/OHHYUK/", WOOSUNG_OHHYUK_PHOTOS),
      ...withBase("images/personal/우성/모보페스티벌/", WOOSUNG_MOBO_MEDIA),
    ],
    "people/오늘이.html": [
      ...withBase("images/personal/오늘이/구조적-연/", ONEULI_STRUCTURAL_KITE_PHOTOS),
      ...withBase("images/personal/오늘이/드로잉/", ONEULI_DRAWING_PHOTOS),
      ...withBase("images/personal/오늘이/비오비오/", ONEULI_BIOBIO_MEDIA),
      ...withBase("images/personal/오늘이/수채화/", ONEULI_WATERCOLOR_PHOTOS),
      ...withBase("images/personal/오늘이/연함/", ONEULI_YEONHAM_PHOTOS),
    ],
    "people/서연.html": [
      ...withBase("images/personal/서연/1차/", SEOYEON_1ST_PHOTOS),
      ...withBase("images/personal/서연/2차/", SEOYEON_2ND_PHOTOS),
    ],
    "people/알샴.html": [
      ...withBase("images/personal/알샴/굴-붙이기/", ALSHAM_GUL_PHOTOS),
      ...withBase("images/personal/알샴/전정기관/", ALSHAM_VESTIBULAR_PHOTOS),
      ...withBase("images/personal/알샴/새의-LSO/", ALSHAM_BIRD_LSO_PHOTOS),
      ...withBase("images/personal/알샴/작업/", ALSHAM_WORK_PHOTOS),
    ],
    "people/소요.html": withBase("images/personal/소요/작업/", SOYO_WORK_PHOTOS),
    "people/서로.html": withBase("images/personal/서로/작업/", SEORO_WORK_PHOTOS),
    "people/무루골.html": withBase("images/personal/무루골/작업/", MURUGOL_WORK_PHOTOS),
    "people/희주.html": [
      ...withBase("images/personal/희주/드로잉/", HEEJU_DRAWING_PHOTOS),
      ...withBase("images/personal/희주/모션/", HEEJU_MOTION_PHOTOS),
    ],
    "people/현.html": withBase("images/personal/현/작업/", HYUN_WORK_PHOTOS),
    "people/지원.html": withBase("images/personal/지원/작업/", JIWON_WORK_PHOTOS),
    "people/휘.html": withBase("images/personal/휘/작업/", HWI_WORK_PHOTOS),
    "people/승민.html": withBase("images/personal/승민/작업/", SEUNGMIN_WORK_PHOTOS),
    "people/도노.html": [
      ...withBase("images/personal/도노/그래픽-작업/", DONO_GRAPHIC_MEDIA),
      ...withBase("images/personal/도노/리서치/", DONO_RESEARCH_PHOTOS),
      ...withBase("images/personal/도노/북알프스/", DONO_ALPS_PHOTOS),
    ],
    "people/바치.html": [
      ...withBase("images/personal/바치/작업/", BACCI_WORK_MEDIA),
      ...withBase("images/personal/바치/손글씨-수집/", BACCI_HANDWRITING_PHOTOS),
      ...withBase("images/personal/바치/텔레마키아/", BACCI_TELEMACHIA_MEDIA),
      ...withBase("images/personal/바치/텀블벅-프로젝트/", BACCI_TUMBLBUG_PHOTOS),
      ...withBase("images/personal/바치/한글-거꾸로-쓰기/", BACCI_REVERSE_HANGUL_PHOTOS),
    ],
  };

  const bgPhoto = document.querySelector(".quad-photo");
  // 배우미마다 사진 셔플 백 — 호버·모바일 자동 순환 둘 다 여기서 꺼냄(같은 사진이 금방 또 나오지 않게)
  const photoBags = {};
  const drawPhoto = (href) => (photoBags[href] ||= makeShuffleBag(MEMBER_PREVIEWS[href]))();
  let hoverToken = 0; // 호버 배경 사진 — 마지막으로 호버한 카드만 반영
  // 카드를 누르면 페이지 이동 대신 배우미 탭 안(#member-view)에 그 배우미 페이지를 띄움. ←로 4분면 복귀
  const view = document.getElementById("member-view");
  const openInTab = view ? setupInTabView(view) : null;
  const rand = (min, max) => min + Math.random() * (max - min);
  document.querySelectorAll(".member[data-href]").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      if (card.dataset.dragged === "1") { card.dataset.dragged = ""; return; } // 드래그였으면 열지 않음
      if (!openInTab || e.metaKey || e.ctrlKey || e.shiftKey) {
        window.location.href = card.dataset.href;
        return;
      }
      if (bgPhoto) bgPhoto.classList.remove("show");
      openInTab(card.dataset.href);
    });

    // 끌면 살짝 딸려오고(멀리 끌수록 덜 따라오는 고무줄), 놓으면 원래 자리로 튕기듯 복귀 — style.css .member / .member.dragging
    let startX = 0, startY = 0, pressing = false;
    card.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      pressing = true;
      startX = e.clientX;
      startY = e.clientY;
      card.dataset.dragged = "";
    });
    card.addEventListener("pointermove", (e) => {
      if (!pressing) return;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      const d = Math.hypot(dx, dy);
      if (!card.classList.contains("dragging")) {
        if (d < 5) return; // 5px 미만은 클릭으로 봄
        card.classList.add("dragging");
        card.setPointerCapture(e.pointerId);
      }
      const k = 0.3 / (1 + d / 300); // 멀리 끌수록 따라오는 비율이 줄어듦
      card.style.setProperty("--dx", (dx * k).toFixed(1) + "px");
      card.style.setProperty("--dy", (dy * k).toFixed(1) + "px");
    });
    const release = (e) => {
      if (!pressing) return;
      pressing = false;
      if (!card.classList.contains("dragging")) return;
      card.dataset.dragged = "1"; // 바로 뒤따르는 click 한 번만 무시 — 클릭이 안 생기는 경우(카드 밖에서 놓음) 대비해 곧 해제
      setTimeout(() => { card.dataset.dragged = ""; }, 50);
      card.classList.remove("dragging");
      try { card.releasePointerCapture(e.pointerId); } catch (_) {}
      card.style.setProperty("--dx", "0px"); // transition(튕김)으로 제자리 복귀
      card.style.setProperty("--dy", "0px");
    };
    card.addEventListener("pointerup", release);
    card.addEventListener("pointercancel", release);
    // 포인터가 카드 밖에서 놓이거나 캡처가 풀린 경우에도 확실히 복귀
    card.addEventListener("lostpointercapture", release);
    window.addEventListener("pointerup", release);

    // 둥실 모션 — 카드마다 방향·거리(4~9px)·속도(4~7초)·시작 시점을 달리해서 서로 엇갈리게 떠다님 (style.css member-float)
    const angle = rand(0, Math.PI * 2);
    const dist = rand(4, 9);
    card.style.setProperty("--fx", (Math.cos(angle) * dist).toFixed(1) + "px");
    card.style.setProperty("--fy", (Math.sin(angle) * dist).toFixed(1) + "px");
    const dur = rand(4, 7);
    card.style.setProperty("--float-dur", dur.toFixed(2) + "s");
    card.style.setProperty("--float-delay", (-rand(0, dur)).toFixed(2) + "s");

    const photos = MEMBER_PREVIEWS[card.dataset.href];
    if (!photos || !photos.length || !bgPhoto) return;
    // 새 사진을 먼저 다 불러온 뒤에 바꿔 끼우고 보여줌 — 바로 src를 바꾸면 로딩 동안 직전 카드 사진이 잠깐 보였음.
    // 불러오는 사이 다른 카드로 옮기거나 마우스를 떼면(hoverToken 바뀜) 늦게 도착한 사진은 무시
    card.addEventListener("mouseenter", () => {
      const src = drawPhoto(card.dataset.href);
      const token = ++hoverToken;
      const pre = new Image();
      pre.src = src;
      pre.decode().catch(() => {}).then(() => {
        if (token !== hoverToken) return;
        bgPhoto.src = src;
        bgPhoto.classList.add("show");
      });
    });
    card.addEventListener("mouseleave", () => {
      hoverToken++;
      bgPhoto.classList.remove("show");
    });
  });

  // 모바일(마우스 호버가 없는 기기) 전용 — 화면을 안 만지고 있으면 사진 있는 배우미를 번갈아 배경에 띄우고,
  // 그 사람 카드를 호버 색(.spotlight)으로 바꿔 누구 사진인지 보이게. 화면을 만지면 멈췄다가 잠시 뒤 다시 시작.
  // 패널이 열려 있거나 개인 페이지가 떠 있으면 쉼
  if (bgPhoto && window.matchMedia("(hover: none)").matches) {
    const STEP_MS = 3500;   // 한 사람당 보여주는 시간
    const IDLE_MS = 4000;   // 만진 뒤 다시 시작하기까지
    const FADE_MS = 250;    // 사진 바꿀 때 잠깐 꺼졌다 켜지는 시간 (style.css .quad-photo transition과 비슷하게)
    const cards = Array.from(document.querySelectorAll(".member[data-href]"))
      .filter((c) => (MEMBER_PREVIEWS[c.dataset.href] || []).length);
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    let idx = -1, timer = null, current = null;
    const setSpotlight = (card) => {
      if (current) current.classList.remove("spotlight");
      current = card;
      if (card) card.classList.add("spotlight");
    };
    const clear = () => {
      hoverToken++;
      setSpotlight(null);
      bgPhoto.classList.remove("show");
    };
    const busy = () =>
      document.hidden || document.body.classList.contains("panel-open") || (view && !view.classList.contains("hidden"));
    const step = () => {
      if (busy() || !cards.length) {
        clear();
      } else {
        idx = (idx + 1) % cards.length;
        const card = cards[idx];
        const src = drawPhoto(card.dataset.href);
        const token = ++hoverToken;
        const pre = new Image();
        pre.src = src;
        pre.decode().catch(() => {}).then(() => {
          if (token !== hoverToken) return;
          bgPhoto.classList.remove("show");
          setTimeout(() => {
            if (token !== hoverToken) return;
            bgPhoto.src = src;
            bgPhoto.classList.add("show");
            setSpotlight(card);
          }, FADE_MS);
        });
      }
      timer = setTimeout(step, STEP_MS);
    };
    const pause = () => {
      clearTimeout(timer);
      clear();
      timer = setTimeout(step, IDLE_MS);
    };
    document.getElementById("people").addEventListener("pointerdown", pause);
    timer = setTimeout(step, 1500);
  }
  return MEMBER_PREVIEWS; // 첫 화면 로딩에서 미리 받을 사진 목록으로도 씀
}
