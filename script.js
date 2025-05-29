// script.js
const papers = [
  {
    title: "급식실 에어컨을 효율적으로 사용하는 방법",
    author: "홍길동, 김철수",
    abstract: "급식실에서의 에어컨 사용을 최적화하기 위해 다양한 위치의 온도 측정 및 에어컨 용량 비교 분석을 실시한 프로젝트입니다.",
    link: "01_급식실_에어컨_효율_완전.pdf"
  },
  // 다른 주제 추가 가능
];

const container = document.getElementById("papers");
const searchInput = document.getElementById("searchInput");

function renderPapers(filter = "") {
  container.innerHTML = "";
  const filtered = papers.filter(p =>
    p.title.includes(filter) || p.author.includes(filter) || p.abstract.includes(filter)
  );

  if (filtered.length === 0) {
    container.innerHTML = '<p>검색 결과가 없습니다.</p>';
    return;
  }

  filtered.forEach(paper => {
    const div = document.createElement("div");
    div.className = "paper";
    div.innerHTML = `
      <h2>${paper.title}</h2>
      <p><strong>작성자:</strong> ${paper.author}</p>
      <p>${paper.abstract}</p>
      <a href="${paper.link}" target="_blank">PDF 보기</a>
    `;
    container.appendChild(div);
  });
}

searchInput.addEventListener("input", (e) => {
  renderPapers(e.target.value.trim());
});

// 초기 렌더링
renderPapers();
