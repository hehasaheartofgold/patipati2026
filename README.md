# PP web

PP(PaTI 한배곳 4학년 콜렉티브)의 온라인 공간. 아카이빙·관람용. (인스타는 홍보·노출용 — 홍보-아카이빙팀)
extrapractice.space 의 비주얼 언어(점선 블록 / 납작한 타이포 / 오프화이트 / hover 색)를 참고한 정적 사이트.

- **콜렉티브 이름**: PP (뜻은 열려 있음 — Paju Practice / 파티파티 / 포동포동 포포 / Purple Pigeon …)
- **전시 이름**: 파티파티 (PP가 여는 전시, 대략 2026.12.13–27, 미확정)
- **공식 인스타**: [@pp.can.be___](https://www.instagram.com/pp.can.be___) (홍보-아카이빙팀)
- **담당**: 웹사이트 TF, 우성 중심
- **방향 메모**: 개인 홍보 아님 → 콜렉티브 과정(같이 작업·회의·노는 모습)에 무게. 위키형(배우미별 페이지·하이퍼링크)은 **보류**, 지금은 대문 디자인만.

## 구조
```
index.html          대문 한 장
style.css           스타일 (대문 + 배우미 하위 페이지 공용)
js/main.js          헤더 랜덤 PP 약자 · 랜덤 사진(클릭 시 다음) · 배우미 슬라이드 · 이메일 복사
images/             placeholder.svg
pp-photos/          랜덤으로 뜨는 'PP' 사진들 — 추가/삭제 시 js/main.js 의 PP_PHOTOS 목록도 갱신
people/<이름>.html   배우미별 하위 페이지 (17명). 카드 클릭 시 이동. 메인과 같은 .grid-3 로 3×3 컨테이너 9개
people/_template.html  새 배우미 추가용 템플릿 ({{NAME}} 치환)
```
프레임워크·빌드 없음. `index.html` 을 브라우저로 열면 끝.

## 미리보기
```
open "index.html"
# 또는 로컬 서버 (clipboard API는 localhost/https에서만)
python3 -m http.server 8000   # → http://localhost:8000
```

## 대문 섹션
헤더(새로고침마다 랜덤 PP 약자, 첫 P 볼드) · PP 소개 · 파티파티(전시) · 랜덤 사진(pp-photos/) · 배우미(가로 무한 슬라이드, 이름 카드 17개 → 클릭 시 `people/<이름>.html`, 드래그·터치·휠) · 기록(일상 사진 스트립) · 물음(Q&A) · 연락처 · 오시는 길(지도) · 푸터

## 채워야 할 것 (전부 `<!-- TODO -->`)
- PP 소개문 확정
- 기록 스트립 사진 (`images/` 에 넣고 img src 교체) — 랜덤 사진은 `pp-photos/` + `PP_PHOTOS` 목록으로 관리
- 파티파티 때·곳 확정 (9/11 답사 후) + 오시는 길 지도 bbox·marker 좌표
- 배우미 명단·별명·작업링크·인스타 확정 (현재 8/30 전체모임 기준 17명 임시)
- 각 `people/<이름>.html` 9개 컨테이너 내용 (소개 / 지난 작업 / 사소한 이야기 / 링크 + 5~9 미정) — 배우미별로 채우기
- Q&A 질문·답변 (민구홍 매뉴팩처링 FAQ식)
- 문의 이메일 (`index.html` + `js/main.js` 의 `EMAIL`) — 인스타는 @pp.can.be___ 로 연결됨
- 배우미별 인스타 링크 (카드·`people/*.html` 의 `href="#"`)

## 논의 남은 것
- Arial Narrow(응축형) → Pretendard 대체라 응축 질감 손실. 대안(다른 국문 폰트 / 영문만 응축 등) 논의 가능.
- extrapractice의 "정사각형 행" 그리드(`height: 33vw`)는 뺐음. 원하면 되살림.
- 위키형(다페이지) 구조는 보류 상태.
- 레포: 별도 레포 예정(공동 웹이므로 개인 계정 말고). 호스팅은 마지막에.
