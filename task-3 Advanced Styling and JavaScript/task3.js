const btn = document.querySelectorAll(".btn");
const container = document.querySelector(".container"); 
const img = ["1", "2", "3", "4"];
let ind = 0;


btn.forEach((button) => {
    button.addEventListener("click", function () {
        if (button.classList.contains('left')) {
            ind--;
            if (ind < 0) {
                ind = img.length - 1;
            }
        } else {
            ind++;
            if (ind > img.length - 1) {
                ind = 0;
            }
        }

        container.style.backgroundImage = `url("${img[ind]}.jpg")`;
    });
});
var btn1=document.querySelector(".btn1")
btn1.addEventListener("click", () => {
  const jokeElement = document.querySelector(".create_joke");
  jokeElement.innerHTML = "Loading... 🤖";

  fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(res => res.json())
    .then(msg => {
      jokeElement.innerHTML = `${msg[0].setup}<br><strong>${msg[0].punchline}</strong>`;
    })
    .catch(err => {
      jokeElement.innerHTML = "Failed to fetch joke 😢";
      console.error("Error fetching joke:", err);
    });
});

