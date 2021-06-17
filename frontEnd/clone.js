const togleBtn = document.querySelector(".navbar__togleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

togleBtn.addEventListener("click",()=>{
    //active 클래스가 없다면 추가해줌
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});
