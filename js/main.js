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

// pp-photos/ 안의 사진 파일 목록. 사진을 추가/삭제하면 여기도 맞춰줄 것
const PP_PHOTOS = [
  "pp-bag.jpg", "pp-cake.jpg", "pp-cake2.jpg", "pp-can.jpg",
  "pp-coffee.jpg", "pp-lot.jpg", "pp-lot2.png", "pp-neon.jpg", "pp-letters.jpg",
];

// images/patipati/ 안의 사진 파일 목록 (파티파티=PatiPati 컨테이너). 사진을 추가/삭제하면 여기도 맞춰줄 것
const PATIPATI_PHOTOS = [
  "patipati-space1.jpg", "patipati-space2.jpg", "patipati-space3.jpg", "patipati-space-site.jpg",
  "patipati-design-meeting1.jpg", "patipati-design-meeting2.jpg", "patipati-design-meeting3.jpg",
  "patipati-murugol-carrier.jpg", "patipati-soyo-site.jpg", "patipati-img6695.jpg", "patipati-meal.jpg",
  "patipati-meeting.jpeg", "patipati-woosung-hyundae.jpeg", "patipati-pr-zoom.jpg", "patipati-carry-box.jpg",
];

// personal/우성/ 안의 사진 파일 목록 (우성 개인 페이지 "지난 작업"). 사진을 추가/삭제하면 여기도 맞춰줄 것
const WOOSUNG_WORK_PHOTOS = [
  "arcade-inside.jpeg", "arcade-frame.jpeg", "arcade-side.jpeg", "arcade1.jpeg", "arcade2.jpeg",
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

// 지정한 figure 안에 "크게 보기" 버튼(iframe embed-open과 같은 스타일)을 만들어 붙임.
// 이미 있으면 그거 재사용. 클릭하면 라이트박스로 현재 사진/영상을 같은 탭에서 크게 보여줌.
// 버튼 클릭이 figure의 "다음 사진" 클릭으로 안 번지게 막음
function ensureOpenButton(fig) {
  let btn = fig.querySelector(".embed-open");
  if (btn) return btn;
  btn = document.createElement("button");
  btn.type = "button";
  btn.className = "embed-open";
  btn.title = "크게 보기";
  btn.setAttribute("aria-label", "크게 보기");
  btn.textContent = "⧉";
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    openLightbox(btn.dataset.src, btn.dataset.video === "1");
  });
  fig.appendChild(btn);
  return btn;
}

function setupRandomPhoto(figureId, basePath, photos, showOpenButton = true) {
  const fig = document.getElementById(figureId);
  const img = fig && fig.querySelector("img");
  if (!img || !photos.length) return;
  let i = Math.floor(Math.random() * photos.length);
  const openBtn = showOpenButton ? ensureOpenButton(fig) : null;
  const showPhoto = () => {
    const src = basePath + photos[i];
    img.src = src;
    if (openBtn) openBtn.dataset.src = src;
  };
  showPhoto();
  fig.addEventListener("click", () => {
    i = (i + 1) % photos.length;
    showPhoto();
  });
}

// setupRandomPhoto와 동일하지만 사진·영상이 섞인 목록용. 확장자로 판단해 <img> 또는
// <video>(자동재생·무음·반복)를 그때그때 만들어 넣음. 칸을 클릭하면 다음 항목
function setupRandomMedia(figureId, basePath, items) {
  const fig = document.getElementById(figureId);
  if (!fig || !items.length) return;
  let i = Math.floor(Math.random() * items.length);
  const openBtn = ensureOpenButton(fig);
  const showItem = () => {
    const name = items[i];
    const src = basePath + name;
    const isVideo = /\.(mp4|mov|webm)$/i.test(name);
    const old = fig.querySelector("img, video");
    if (old) old.remove();
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
      el.decoding = "async";
      el.src = src;
    }
    fig.insertBefore(el, fig.firstChild);
    openBtn.dataset.src = src;
    openBtn.dataset.video = isVideo ? "1" : "0";
  };
  showItem();
  fig.addEventListener("click", () => {
    i = (i + 1) % items.length;
    showItem();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupRandomPhoto("pp-photo", "pp-photos/", PP_PHOTOS, false);
  setupRandomPhoto("patipati-photo", "images/patipati/", PATIPATI_PHOTOS, false);
  setupRandomPhoto("woosung-past-work", "../personal/우성/", WOOSUNG_WORK_PHOTOS);
  setupRandomPhoto("oneuli-structural-kite", "../personal/오늘이/구조적-연/", ONEULI_STRUCTURAL_KITE_PHOTOS);
  setupRandomPhoto("oneuli-drawing", "../personal/오늘이/드로잉/", ONEULI_DRAWING_PHOTOS);
  setupRandomMedia("oneuli-biobio", "../personal/오늘이/비오비오/", ONEULI_BIOBIO_MEDIA);
  setupRandomPhoto("oneuli-watercolor", "../personal/오늘이/수채화/", ONEULI_WATERCOLOR_PHOTOS);
  setupRandomPhoto("oneuli-yeonham", "../personal/오늘이/연함/", ONEULI_YEONHAM_PHOTOS);

  // 헤더: 새로고침마다 다른 피피. 각 단어 첫 P 를 볼드로 강조 (= 약자 PP)
  const nameEl = document.getElementById("pp-name");
  if (nameEl) {
    const pick = PP_NAMES[Math.floor(Math.random() * PP_NAMES.length)];
    nameEl.innerHTML = pick
      .replace(/&/g, "&amp;")
      .replace(/(^|\s)(P)/g, "$1<b>$2</b>"); // 한글 ㅍㅍ 버전 되살릴 땐 별도 처리 필요
  }

  // 배우미 — 가로 무한 슬라이드
  setupPeopleMarquee();

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

function setupPeopleMarquee() {
  const people = document.querySelector(".people");
  const vp = people && people.querySelector(".people-viewport");
  const track = vp && vp.querySelector(".people-track");
  if (!track) return;

  const GAP = 20;         // .people-track 의 gap
  const AUTO = 0.35;      // px/frame 자동 드리프트 (≈ 21px/s). 낮출수록 천천히
  const DRAG_THRESHOLD = 6;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 원본을 한 벌 복제해 뒤에 붙임 → 이음새 없는 무한 루프
  Array.from(track.children).forEach((node) => {
    const clone = node.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("a").forEach((a) => (a.tabIndex = -1));
    track.appendChild(clone);
  });

  let shift = (track.scrollWidth + GAP) / 2;   // 한 세트 폭 (+이음 gap)
  window.addEventListener("resize", () => {
    shift = (track.scrollWidth + GAP) / 2;
  });

  vp.scrollLeft = 0;

  // 한 세트(shift)만큼 이동하면 복제본이 원본 자리에 옴 → [0, shift) 안으로 되감기
  const wrap = () => {
    if (vp.scrollLeft >= shift) vp.scrollLeft -= shift;
    else if (vp.scrollLeft < 0) vp.scrollLeft += shift;
  };

  let down = false;      // 포인터 눌림 (클릭 후보)
  let dragging = false;  // 임계값 넘어 실제 드래그 중
  let hovering = false;  // 마우스가 스트립 위에 있음

  function frame() {
    if (!down && !hovering) {   // 누르고 있거나 마우스 호버 중이면 자동 드리프트 정지
      if (!reduce) vp.scrollLeft += AUTO;
      wrap();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // 마우스 호버 시 정지 (mouseenter/leave 는 마우스에서만 발생 → 터치엔 영향 없음)
  vp.addEventListener("mouseenter", () => (hovering = true));
  vp.addEventListener("mouseleave", () => (hovering = false));

  // 드래그로 슬라이드. 포인터 캡처는 "실제로 드래그가 시작된 뒤"에만 잡는다
  // (mousedown 마다 캡처하면 click 이 카드가 아니라 뷰포트로 잡혀서 카드 클릭이 씹힘)
  let startX = 0;
  let startScroll = 0;
  let moved = 0;

  vp.addEventListener("pointerdown", (e) => {
    if (e.button && e.button !== 0) return;
    down = true;
    dragging = false;
    moved = 0;
    startX = e.clientX;
    startScroll = vp.scrollLeft;
  });
  vp.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    moved = Math.max(moved, Math.abs(dx));
    if (!dragging && moved > DRAG_THRESHOLD && e.pointerType === "mouse") {
      dragging = true;
      vp.setPointerCapture(e.pointerId);
      vp.classList.add("dragging");
    }
    if (dragging) {
      vp.scrollLeft = startScroll - dx;
      wrap();
      e.preventDefault();
    }
  });
  const endDrag = (e) => {
    if (!down) return;
    down = false;
    if (dragging) {
      vp.classList.remove("dragging");
      try { vp.releasePointerCapture(e.pointerId); } catch (_) {}
    }
  };
  vp.addEventListener("pointerup", endDrag);
  vp.addEventListener("pointercancel", endDrag);

  // 드래그였다면 뒤이어 오는 click 을 캡처 단계에서 무효화
  vp.addEventListener(
    "click",
    (e) => {
      if (moved > DRAG_THRESHOLD) {
        e.preventDefault();
        e.stopPropagation();
        moved = 0;
      }
    },
    true
  );

  // 카드 클릭 → 해당 배우미 페이지 (인스타 등 내부 링크는 그대로 동작)
  vp.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const card = e.target.closest(".block[data-href]");
    if (card) window.location.href = card.dataset.href;
  });
}
