// PP web — 대문 (초기)

// 8/30 전체모임에서 나온 PP 약자 예시 (새로고침마다 헤더에 하나씩)
const PP_NAMES = [
  // 디자인팀 — 뜻 버전
  "Paju Practice", "Practice Project", "Practice People", "Prism Pool", "Post PaTI Practice",
  "Project Pool", "Parallel People", "Playing People", "Personal Project", "Public Program",
  "Possible Product", "Problem People", "Pixel & Paper", "Print & Publish", "Prototype Process",
  // 디자인팀 — 유머/위트 버전
  "Ping Pong", "Pasta Practice", "Panic Point", "Pajama Place", "Practice Place",
  "Practice Playground", "Poundcake Party", "Purple Pigeon", "Paper Plane", "Potato People",
  "Potato Pancake", "Pink Potato", "Perfect Pizza", "Pocket Picnic", "Portable Party",
  "Potluck Party", "Pepper Party", "Poster Party", "Pencil Practice", "Pickle Punch",
  "Public Pantry", "Printing Poster", "Paper People",
];

// images/pp-photos/ 안의 사진 파일 목록. 사진을 추가/삭제하면 여기도 맞춰줄 것
const PP_PHOTOS = [
  "pp-bag.jpg", "pp-cake.jpg", "pp-cake2.jpg", "pp-can.jpg",
  "pp-coffee.jpg", "pp-lot.jpg", "pp-lot2.png", "pp-neon.jpg", "pp-letters.jpg",
  "pp-planet.jpg",
];

// images/patipati/ 안의 사진 파일 목록 (파티파티=PatiPati 컨테이너). 사진을 추가/삭제하면 여기도 맞춰줄 것
const PATIPATI_PHOTOS = [
  "patipati-space1.jpg", "patipati-space2.jpg", "patipati-space3.jpg", "patipati-space-site.jpg",
  "patipati-design-meeting1.jpg", "patipati-design-meeting2.jpg", "patipati-design-meeting3.jpg",
  "patipati-murugol-carrier.jpg", "patipati-soyo-site.jpg", "patipati-img6695.jpg", "patipati-meal.jpg",
  "patipati-meeting.jpeg", "patipati-woosung-hyundae.jpeg", "patipati-pr-zoom.jpg", "patipati-carry-box.jpg",
];

// personal/우성/아케이드/ 안의 사진 파일 목록 (우성 개인 페이지 "지난 작업"). 사진을 추가/삭제하면 여기도 맞춰줄 것
const WOOSUNG_WORK_PHOTOS = [
  "arcade-inside.jpeg", "arcade-frame.jpeg", "arcade-side.jpeg", "arcade1.jpeg",
  "arcade-encoder.jpeg", "arcade-buttons.jpeg",
];
// personal/우성/시지프스/ 안의 사진 파일 목록
const WOOSUNG_SISYPHUS_PHOTOS = [
  "sisyphus1.jpg", "sisyphus2.jpg", "sisyphus3.jpg",
  "sisyphus4.jpg", "sisyphus5.jpg", "sisyphus6.jpg",
];

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
const SEOYEON_DEOTMARU_PHOTOS = [
  "deotmaru1.jpg", "deotmaru2.jpg", "deotmaru3.jpg",
  "deotmaru4.jpg", "deotmaru5.jpg", "deotmaru6.jpg",
];
const SEOYEON_MEMO_PHOTOS = [
  "memo1.jpg", "memo2.jpg", "memo3.jpg", "memo4.jpg",
  "memo5.jpg", "memo6.jpg", "memo7.jpg",
];
const SEOYEON_PANCAKE_PHOTOS = [
  "pancake1.jpg", "pancake2.jpg", "pancake3.jpg", "pancake4.jpg",
  "pancake5.jpg", "pancake6.jpg", "pancake7.jpg", "pancake8.jpg",
];

// personal/알샴/ 안의 폴더별 사진 목록
const ALSHAM_GUL_PHOTOS = ["gul1.jpg"];
const ALSHAM_VESTIBULAR_PHOTOS = [
  "vestibular1.jpg", "vestibular2.jpg", "vestibular3.jpg", "vestibular4.jpg",
  "vestibular5.jpg", "vestibular6.jpg", "vestibular7.jpg",
];
const ALSHAM_BIRD_LSO_PHOTOS = ["bird-lso1.jpg", "bird-lso2.jpg", "bird-lso3.jpg"];
// personal/소요/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업")
const SOYO_WORK_PHOTOS = ["soyo1.jpg", "soyo2.jpg"];
// personal/서로/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업")
const SEORO_WORK_PHOTOS = ["seoro1.jpg", "seoro2.jpg", "seoro3.jpg", "seoro4.jpg", "seoro5.jpg"];
// personal/바치/텔레마키아/ — 전시 「텔레마키아」 사진 + 영상
const BACCI_TELEMACHIA_MEDIA = [
  "telemachia1.jpg", "telemachia2.jpg", "telemachia3.jpg", "telemachia4.jpg", "telemachia-video1.mp4",
];
// personal/무루골/ 안의 사진 목록 (주제 폴더 이름 미정 → 임시 "작업")
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

// 대문 "PP 사진" 탭 — 폴더별 사진 목록을 전부 섞어서(새로고침마다 랜덤 순서) 정사각형 칸으로 채움.
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
    fig.addEventListener("click", () => openLightbox(src, false));
    grid.appendChild(fig);
  });
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

// grid 안에서 keepFirstEl(예: 영상 임베드)만 맨 앞에 고정하고 나머지 컨테이너는 새로고침마다 랜덤 순서로.
// appendChild는 이미 있는 노드를 옮기는 것이라 iframe/video 등을 다시 만들지 않음
function shuffleGridKeepFirst(grid, keepFirstEl) {
  if (!grid || !keepFirstEl) return;
  const rest = Array.from(grid.children).filter((el) => el !== keepFirstEl);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  const frag = document.createDocumentFragment();
  frag.appendChild(keepFirstEl);
  rest.forEach((el) => frag.appendChild(el));
  grid.appendChild(frag);
}

document.addEventListener("DOMContentLoaded", () => {
  // 대문 일정 탭 iframe 안에서 열린 경우 표시 — 이벤트 페이지 자체의 ←·푸터를 CSS로 숨김
  if (window.self !== window.top) document.body.classList.add("embedded");

  setupPhotoGrid("photo-grid", [
    ["images/pp-photos/", PP_PHOTOS],
    ["images/patipati/", PATIPATI_PHOTOS],
  ]);
  expandPhotos("woosung-past-work", "../images/personal/우성/아케이드/", WOOSUNG_WORK_PHOTOS);
  expandPhotos("woosung-sisyphus", "../images/personal/우성/시지프스/", WOOSUNG_SISYPHUS_PHOTOS);
  expandPhotos("oneuli-structural-kite", "../images/personal/오늘이/구조적-연/", ONEULI_STRUCTURAL_KITE_PHOTOS);
  expandPhotos("oneuli-drawing", "../images/personal/오늘이/드로잉/", ONEULI_DRAWING_PHOTOS);
  expandPhotos("oneuli-biobio", "../images/personal/오늘이/비오비오/", ONEULI_BIOBIO_MEDIA);
  expandPhotos("oneuli-watercolor", "../images/personal/오늘이/수채화/", ONEULI_WATERCOLOR_PHOTOS);
  expandPhotos("oneuli-yeonham", "../images/personal/오늘이/연함/", ONEULI_YEONHAM_PHOTOS);
  expandPhotos("seoyeon-deotmaru", "../images/personal/서연/덧마루/", SEOYEON_DEOTMARU_PHOTOS);
  expandPhotos("seoyeon-memo", "../images/personal/서연/메모/", SEOYEON_MEMO_PHOTOS);
  expandPhotos("seoyeon-pancake", "../images/personal/서연/팬케이크/", SEOYEON_PANCAKE_PHOTOS);
  expandPhotos("alsham-gul", "../images/personal/알샴/굴-붙이기/", ALSHAM_GUL_PHOTOS);
  expandPhotos("alsham-vestibular", "../images/personal/알샴/전정기관/", ALSHAM_VESTIBULAR_PHOTOS);
  expandPhotos("alsham-bird-lso", "../images/personal/알샴/새의-LSO/", ALSHAM_BIRD_LSO_PHOTOS);
  expandPhotos("soyo-work", "../images/personal/소요/작업/", SOYO_WORK_PHOTOS);
  expandPhotos("seoro-work", "../images/personal/서로/작업/", SEORO_WORK_PHOTOS);
  expandPhotos("murugol-work", "../images/personal/무루골/작업/", MURUGOL_WORK_PHOTOS);
  expandPhotos("bacci-telemachia", "../images/personal/바치/텔레마키아/", BACCI_TELEMACHIA_MEDIA);
  shuffleGridKeepFirst(
    document.getElementById("potato-pancake-grid"),
    document.getElementById("potato-pancake-video")
  );
  // 개인·일정 페이지: 비슷한 비율 사진은 하나의 비율로 맞춤 + 누르면 크게 보기 (expandPhotos로 펼친 뒤에)
  document.querySelectorAll(".person-grid").forEach((grid) => setupRatioSnap(grid));
  setupZoomFigures();

  // 헤더: 새로고침마다 다른 피피. 각 단어 첫 P 를 볼드로 강조 (= 약자 PP)
  const nameEl = document.getElementById("pp-name");
  if (nameEl) {
    const pick = PP_NAMES[Math.floor(Math.random() * PP_NAMES.length)];
    nameEl.innerHTML = pick
      .replace(/&/g, "&amp;")
      .replace(/(^|\s)(P)/g, "$1<b>$2</b>"); // 한글 ㅍㅍ 버전 되살릴 땐 별도 처리 필요
  }

  // 대문 탭 + 배우미 4분면 카드 + 일정 탭 안 페이지 표시
  setupSheets();
  setupMemberCards();
  setupEventView();

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
    active = i;
    layout();
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

// 탭 안 페이지 표시 공용 — view(.in-tab-view) 안 iframe에 href를 띄우고, ←로 닫음. 닫을 때 onClose 호출.
// 반환값 open(href)로 띄움
function setupInTabView(view, onClose) {
  const frame = view.querySelector("iframe");
  view.querySelector(".in-tab-back").addEventListener("click", () => {
    view.classList.add("hidden");
    frame.src = "about:blank"; // 재생 중인 영상 정지
    if (onClose) onClose();
  });
  return (href) => {
    frame.src = href;
    view.classList.remove("hidden");
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
    ],
    "people/오늘이.html": [
      ...withBase("images/personal/오늘이/구조적-연/", ONEULI_STRUCTURAL_KITE_PHOTOS),
      ...withBase("images/personal/오늘이/드로잉/", ONEULI_DRAWING_PHOTOS),
      ...withBase("images/personal/오늘이/비오비오/", ONEULI_BIOBIO_MEDIA),
      ...withBase("images/personal/오늘이/수채화/", ONEULI_WATERCOLOR_PHOTOS),
      ...withBase("images/personal/오늘이/연함/", ONEULI_YEONHAM_PHOTOS),
    ],
    "people/서연.html": [
      ...withBase("images/personal/서연/덧마루/", SEOYEON_DEOTMARU_PHOTOS),
      ...withBase("images/personal/서연/메모/", SEOYEON_MEMO_PHOTOS),
      ...withBase("images/personal/서연/팬케이크/", SEOYEON_PANCAKE_PHOTOS),
    ],
    "people/알샴.html": [
      ...withBase("images/personal/알샴/굴-붙이기/", ALSHAM_GUL_PHOTOS),
      ...withBase("images/personal/알샴/전정기관/", ALSHAM_VESTIBULAR_PHOTOS),
      ...withBase("images/personal/알샴/새의-LSO/", ALSHAM_BIRD_LSO_PHOTOS),
    ],
    "people/소요.html": withBase("images/personal/소요/작업/", SOYO_WORK_PHOTOS),
    "people/서로.html": withBase("images/personal/서로/작업/", SEORO_WORK_PHOTOS),
    "people/무루골.html": withBase("images/personal/무루골/작업/", MURUGOL_WORK_PHOTOS),
    "people/바치.html": withBase("images/personal/바치/텔레마키아/", BACCI_TELEMACHIA_MEDIA),
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
}
