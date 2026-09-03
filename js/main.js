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
  "pp-coffee.jpg", "pp-lot.jpg", "pp-lot2.png", "pp-neon.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
  // 사진: 새로고침마다 pp-photos/ 에서 랜덤 한 장. 칸을 클릭하면 다음 사진
  const photoFig = document.getElementById("pp-photo");
  const photoImg = photoFig && photoFig.querySelector("img");
  if (photoImg && PP_PHOTOS.length) {
    let pi = Math.floor(Math.random() * PP_PHOTOS.length);
    const showPhoto = () => { photoImg.src = "pp-photos/" + PP_PHOTOS[pi]; };
    showPhoto();
    photoFig.addEventListener("click", () => {
      pi = (pi + 1) % PP_PHOTOS.length;
      showPhoto();
    });
  }

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

  function frame() {
    if (!down) {         // 누르고 있는 동안엔 자동 드리프트 정지
      if (!reduce) vp.scrollLeft += AUTO;
      wrap();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

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
