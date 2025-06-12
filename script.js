// 샘플 데이터
const posts = [
    {
        title: "빛의 이중성에 대한 탐구",
        date: "2025-06-12",
        abstract: "본 보고서에서는 빛의 파동성과 입자성에 대한 실험 및 이론적 고찰을 통해 이중성의 본질을 탐구하였다."
    },
    {
        title: "화학 평형에 대한 실험적 접근",
        date: "2025-06-10",
        abstract: "화학 평형 상태에서의 농도 변화와 평형 이동을 실험적으로 관찰하였다."
    }
];

// 페이지 로드 시 게시글 출력
window.onload = function() {
    const postList = document.getElementById("post-list");
    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        
        postDiv.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-date">업로드: ${post.date}</div>
            <div class="post-abstract">${post.abstract}</div>
        `;
        postList.appendChild(postDiv);
    });
}
