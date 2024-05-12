// ======= Change bg Header ===========
function scrollHeader(){
    const header=document.getElementById('header')
    if(this.scrollY>=50){
        header.classList.add('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader)



// ========Swiper Popular===========
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// =======Value Accordion
const accordionItems=document.querySelectorAll('.value__accordian__item')
accordionItems.forEach((item)=>{
  const accordionHeader=item.querySelector('.value__accordian-header')
  accordionHeader.addEventListener('click',()=>{
    const openItem=document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem!=item){
      toggleItem(openItem)
    }
  })
})

const toggleItem=(item)=>{
  const accordionContent=item.querySelector('.value__accordion-content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{
    accordionContent.style.height=accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}



// ========SCROLL SECTIONS ACTIVE LINK============
const sections=document.querySelectorAll('section[id]')
// This line selects all section elements with an id attribute on the page and stores them in the sections 
// variable as a NodeList.

function scrollActive(){
  const scrollY=window.scrollY  // This line gets the number of pixels that the document is currently scrolled vertically.

  sections.forEach(current=>{
    const sectionHeight=current.offsetHeight,  
    //This part calculates the height of the current 
    // section (current is the current section element in the loop) using the offsetHeight property. 
    // offsetHeight represents the height of an element, including its padding and border but not its margin.
    
          sectionTop=current.offsetTop-58,  
          //This part calculates the top offset of the current section. offsetTop 
          // gives the distance of the current element's top edge relative to the top edge of the offset parent 
          // container (usually the nearest positioned ancestor). In this case, it subtracts 58 pixels, possibly to 
          // adjust for a fixed navigation bar or other elements.

          sectionId=current.getAttribute('id')
          // This part retrieves the id attribute of the current section using getAttribute('id')

    if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' +  sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' +  sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)



// =======SHOW SCROLL UP==========
function scrollUp(){
  const scrollUp=document.querySelector('#scroll-up')
  if(this.scrollY>=350){
    scrollUp.classList.add('show-scroll');
  }else{
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll',scrollUp);



// ==========DARK LIGHT THEME==========
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='bx-sun'

// localStorage: This is a web storage object that allows you to store key/value pairs in a web browser. It provides
// a way for web applications to store data persistently across sessions.

// So, if there is a value stored in the local storage under the key 'selected-theme', it will be assigned to the 
// selectedTheme variable. This is commonly used in web applications to remember user preferences or settings across
// different visits to the site.

// Previously selected topic (if user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme=()=>{
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
}
const getCurrentIcon=()=>{
  themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'
}

// We evaluate if user previously chose a topic
if(selectedTheme){
  document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon==='bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate/deactivate the theme manually with button
themeButton.addEventListener('click',()=>{
  // Add or remove dark/icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // Saving the theme and icon chose by user
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())
})


// =========Scroll Reveal Animation=========
const sr=ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`)
sr.reveal(`.home__description, .footer__description`,{delay:500})
sr.reveal(`.home__search`,{delay:600})
sr.reveal(`.home__value`,{delay:700})
sr.reveal(`.home__images`,{delay:800, origin:'bottom'})
sr.reveal(`.logos__img`,{interval: 100})
sr.reveal(`.value__images, .contact__content`,{origin: 'left'})
sr.reveal(`.value__content, .contact__images`,{origin: 'right'})