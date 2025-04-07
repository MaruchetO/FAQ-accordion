const btns = document.querySelectorAll(".btn");
const questions = document.querySelectorAll(".question-section");
const answers = document.querySelectorAll(".answer");

demo();

function demo() {
  const btn = document.querySelector(".btn");
  const answer = document.querySelector(".answer");
  btn.classList.remove("hidden");
  btn.setAttribute("src", "./assets/images/icon-minus.svg");
  btn.classList.add("shown");
  answer.style.display = "block";
}

// click questions and buttons
questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    // closest() - https://www.w3schools.com/jsref/met_element_closest.asp
    const btn = event.target.closest(".question-section").querySelector(".btn");
    const closestAnswer = event.target.closest(".qna").querySelector(".answer");
    if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden");
      btn.setAttribute("src", "./assets/images/icon-minus.svg");
      btn.classList.add("shown");
      closestAnswer.style.display = "block";
    } else if (btn.classList.contains("shown")) {
      btn.classList.remove("shown");
      btn.setAttribute("src", "./assets/images/icon-plus.svg");
      btn.classList.add("hidden");
      closestAnswer.style.display = "none";
    }
  });
});

// click buttons
// btns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const closestAnswer = event.target.closest(".qna").querySelector('.answer');

//     if (btn.classList.contains("hidden")) {
//       btn.classList.remove("hidden");
//       btn.setAttribute("src", "./assets/images/icon-minus.svg");
//       btn.classList.add("shown");
//       closestAnswer.style.display = "block";
//     } else if (btn.classList.contains("shown")) {
//       btn.classList.remove("shown");
//       btn.setAttribute("src", "./assets/images/icon-plus.svg");
//       btn.classList.add("hidden");
//       closestAnswer.style.display = "none";
//     }
//   });
// });
