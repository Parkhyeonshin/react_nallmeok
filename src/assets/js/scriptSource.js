// setTimeout(() => {
//     document.querySelector(".swiper-button-prev").innerHTML = "Nope!";
//     document.querySelector(".swiper-button-next").innerHTML = "Good!";

//     // swiper 버튼 css용 js
//     let animateButton = function (e) {
//         e.preventDefault;
//         //reset animation
//         e.target.classList.remove("animate");

//         e.target.classList.add("animate");
//         setTimeout(function () {
//             e.target.classList.remove("animate");
//         }, 700);
//     };

//     let bubblyButtons = document.getElementsByClassName("swiper-button-next");
//     let bubblyButtons2 = document.getElementsByClassName("swiper-button-prev");

//     for (let i = 0; i < bubblyButtons.length; i++) {
//         bubblyButtons[i].addEventListener("click", animateButton, false);
//     }
//     for (let i = 0; i < bubblyButtons2.length; i++) {
//         bubblyButtons2[i].addEventListener("click", animateButton, false);
//     }
// }, 200);
