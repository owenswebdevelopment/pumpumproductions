const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    breakpoints: {
        0: {
            slidesPerView: 1
    
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 50,
            centeredSlides: true,
    
          },
    
          1024: {
            slidesPerView: 3
          }
        }

  });
//js to change light mode to dark mode
  const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  darkLightToggle = document.querySelector(".dark-light"),
  searchBoxToggle = document.querySelector(".searchBox"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  sidebarClose = document.querySelector(".sidebarClose");

  let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){
  body.classList.add("dark");
} 
//js code to toggle light mode to dark mode
  darkLightToggle.addEventListener("click", () =>{
    darkLightToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
      localStorage.setItem("mode", "dark-mode");
    } else {
      localStorage.setItem("mode", "light-mode");
    }

  });

 searchBoxToggle.addEventListener("click", () =>{
    searchBoxToggle.classList.toggle("active");
  
  });
  

  // js code to toggle sidebar
  sidebarOpen.addEventListener("click", () =>{
    nav.classList.toggle("active");
  });

  sidebarClose.addEventListener("click", () =>{
    nav.classList.toggle("active");
  });

body.addEventListener("click", (e) => {
  let clickedElm = e.target;
   if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("sidebarClose")){
    nav.classList.remove("active");
   }
})