// Custom  Main js file starts build by JeanDoe

// Declaration of global variables
let body = document.body

/* 
    Active link when window is scrolled
*/

/*----------- scroll sections active link -----------*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollY = window.pageYOffset
	
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')
		
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.header .navBar a[href*=' + sectionId + ']').classList.add('active')
		}else{
			document.querySelector('.header .navBar a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/* 
    Reviews swiper bundle
*/

let swiper = new Swiper('.reviews .box_container', {
    // Optional parameters
    cssMode: true,
    loop: true,

    //Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});


/* 
    show Back to top icon when window is scrolled!
*/
let backtoTop = document.querySelector('.footer .back')

window.addEventListener('scroll', () => {
    backtoTop.classList.toggle('active', scrollY > 200)
})

/* 
    show service description when view More is clicked
*/

let servicesBox = document.querySelectorAll('.services .box')

servicesBox.forEach(box => {
    let viewMore = box.children[2]
    viewMore.addEventListener('click', () => {
        if(hasThisClassName(box, 'show')){
            box.classList.remove('show')
        }else{
            removeClassOnNodeElement(servicesBox, 'show')
            box.classList.add('show')
        }
    })
})




/* 
    when window is scrolled active header
*/

let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('active', scrollY > 0)
})
/* 
    When clicked on navlink active each link
*/

let navLinks = document.querySelectorAll('.navBar a');

if(navLinks){
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            removeClassOnNodeElement(navLinks, 'active')
            link.classList.add('active')
            // hide navBar when link is clicked on small devices
            hideNavBar()
        })
    })
}

/*
    Enable or disable dark Mode when themeIcon is cliqued
*/

let themeIcon = document.querySelector('#themeIcon');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   themeIcon.classList.replace('bx-moon', 'bx-sun');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   themeIcon.classList.replace('bx-sun', 'bx-moon');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

themeIcon.onclick = () =>{
   let darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

/*
    Show or Hide navBar when closeIcon is cliqued
*/

let menuIcon = document.querySelector('#menuIcon')
let closeIcon = document.querySelector('#closeIcon')

if(menuIcon){
    menuIcon.addEventListener('click', () => {
        showNavBar()
    })
}

if(closeIcon){
    closeIcon.addEventListener('click', () => {
        hideNavBar()
    }) 
}

/*
    Show or Hide navBar when windows is scrolled
*/

window.onscroll = () => {
    if(window.innerWidth < 768){
        hideNavBar()
    }
}

/* 

    Tools functions Build by JeanDoe

*/

// Function to Hide navBar
let navBar = document.querySelector('.header .navBar')

const showNavBar = () => {
    navBar.classList.add('show')
}

const hideNavBar = () => {
    navBar.classList.remove('show')
}

/* 

    Functions Build by JeanDoe

*/

// function to remove class name on a node list element
// NB: It's only works on Node List and tag element

function removeClassOnNodeElement(list, name){
    if(list.length){
        list.forEach((element) => {
            if(hasThisClassName(element, name)){
                element.classList.remove(name)
            }
        })
    }else{
        if(hasThisClassName(list, name)){
            list.classList.remove(name)
        }
    }
}



// Function to check if a tag have a class name

function hasThisClassName (tag, name){
    let result = false
    for(let elm of tag.classList){
        if(elm === name){
            result = true
            break;
        }
    }
    return result
}