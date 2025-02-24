// // Анимация при прокрутке
// document.addEventListener("DOMContentLoaded", () => {
//     const cards = document.querySelectorAll(".movie-card");

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.style.animationPlayState = "running";
//                 }
//             });
//         },
//         { threshold: 0.3 }
//     );

//     cards.forEach((card) => {
//         card.style.animationPlayState = "paused"; // Останавливаем анимацию до прокрутки
//         observer.observe(card);
//     });

//     // Интерактивность карточек
//     cards.forEach((card) => {
//         card.addEventListener("click", () => {
//             card.classList.toggle("active");
//             if (card.classList.contains("active")) {
//                 card.style.transform = "scale(1.05)";
//                 card.style.background = "#007aff";
//             } else {
//                 card.style.transform = "translateY(0)";
//                 card.style.background = "#2c2c2c";
//             }
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    console.log("Movie Library Loaded");
});