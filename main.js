const navBtn = document.querySelector(".mobile-nav-btn");
const categoriesMobile = document.querySelector(".categories-mobile");
const cancelBtn = document.querySelector(".cancel-btn");

navBtn.onclick = function(){
   
    categoriesMobile.style.transform = "translateX(0%)";
    navBtn.style.display = "none";
    cancelBtn.style.display = "block";
}

cancelBtn.onclick = function(){
    categoriesMobile.style.transform = "translateX(-100%)";
    navBtn.style.display = "block";
    cancelBtn.style.display = "none";
}

