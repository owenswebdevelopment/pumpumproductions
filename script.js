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
  searchBoxToggle = document.querySelector(".searchBox");


  darkLightToggle.addEventListener("click", ()=> {
    darkLightToggle.classList.toggle("active");
    body.classList.toggle("dark");

  }),

 searchBoxToggle.addEventListener("click", ()=> {
    searchBoxToggle.classList.toggle("active");
  })