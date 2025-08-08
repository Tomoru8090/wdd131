// 機能1: 挨拶メッセージ（ページ読み込み時）
document.addEventListener("DOMContentLoaded", () => {
    const hour = new Date().getHours();
    const greeting =
        hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
    const main = document.querySelector("main");
    if (main) {
        const p = document.createElement("p");
        p.textContent = greeting;
        p.style.fontWeight = "bold";
        main.prepend(p);
    }
});

// 機能2: 画像クリックでメッセージ
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => alert("You clicked the image!"));
});

// 機能3: フッターの今年＆最終更新日（あれば）
const footer = document.querySelector("footer p");
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Tomoru Aoki · WDD 131`;
}
  