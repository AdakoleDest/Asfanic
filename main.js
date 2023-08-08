const navBtn = document.querySelector(".mobile-nav-btn");
const categoriesMobile = document.querySelector(".categories-mobile");
const cancelBtn = document.querySelector(".cancel-btn");

navBtn.onclick = function(){
    categoriesMobile.style.display = "block";
    navBtn.style.display = "none";
    cancelBtn.style.display = "block";
}
cancelBtn.onclick = function(){
    categoriesMobile.style.display = "none";
    navBtn.style.display = "block";
    cancelBtn.style.display = "none";
}

