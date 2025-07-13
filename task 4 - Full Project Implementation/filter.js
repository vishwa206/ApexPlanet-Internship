const filterBtns = document.querySelectorAll('.filter-btn button'); 
const filtercard = document.querySelectorAll('.filter-card .card'); 

function filter(e){
  document.querySelector(".active")?.classList.remove("active");
  e.target.classList.add("active");

  filtercard.forEach(card => {
    card.classList.add("hide");
    if (card.dataset.name == e.target.dataset.name || e.target.dataset.name == "all") {
      card.classList.remove("hide");
    }
  });
}

filterBtns.forEach(button => button.addEventListener("click", filter));
