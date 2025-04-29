const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    
    // Change icon between menu and close
    menuBtn.innerHTML = navLinks.classList.contains("open") 
        ? '<i class="ri-close-line"></i>' 
        : '<i class="ri-menu-line"></i>';
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
});
