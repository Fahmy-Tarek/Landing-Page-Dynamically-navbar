/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* 
 * This code was written, tested, debugged, and operated by me only Famhy Tarek, all rights reserved only to me and Udacity.
 * Everything done in the code has its own comment above it.
*/

// Start Global Variables
   
    //   make new var and i add Ul
const navList = document.querySelector('#navbar__list');
    //   make new var and i add  all section
const sections = document.querySelectorAll('section');
    //   make new var and i add footr from I will use it to bring the arrow at the bottom of the page to the top of the page this var And this is what I will use in the future to make the push button to go to the first page
const footer = document.querySelector('footer');
    //   make new var and i add  page__header from i make   header.style.cssText = 'opacity: 1; transition: ease 0.3s ;' and after   header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
const header = document.querySelector('.page__header');
// End Global Variables


// Start build the nav
function buildNav(){
    sections.forEach(section => {
        //Create li
        const navButton = document.createElement('li');
        //add Insert in li and i make a href and i add section id + class name and data set 
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        //add  li to  ul
        navList.appendChild(navButton);

        // Make Her scrollBehavior Function from i make In the future if click  the li you see start scrool to id section 
        scrollBehavior(navButton, section);
    });
 

}

//  Invoke Function Nav careat li and A href and make class from li and data set and i add  li to ul  
buildNav();

//End build the nav


// make  Scroll to click li scroll go to section id using scroll TO event 
// Note that I am a user  function navButton, section
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
// End of Scroll to anchor ID using scrollTO event


// Start of Set the Section class 'active' when it near to the top of viewport
function activeSection (){
    // i  creat new var.. and i add all [A] CLassname menu__link
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
        //Get the boundingrect for each section 
        const sectionBond = section.getBoundingClientRect();

        //Check if the section is in viewport or not 
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            //section in viewport accourding to top and bottom boundings
            //add 'your-active-class'  to the specific section
            section.classList.add("your-active-class");
            //add 'active_button' class to the specific nav[A]LINK if a  SEE section id  active is open background: #051440   A  i add this background in  file css
            navActive[i].classList.add("active_button");

            // If the condition is fulfilled, this condition is executed Meaning that if you do not see the section remove your-active-class SEction + remove active__button 
        } else{
            //Remove both section and navButton active classes when section is off sight
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}
// End of Set the Section class 'active' when it near to the top of viewport



// this function make if i scroll header opcity 1  i see header ... if i stopp opcity 0 
// Start of Toggle the NavBar According to User Scroll Activity
function toggleNavBar(){
    let userScroll;
    //Default Settings for NavBar while scrolling
    header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
    // Cleartimeout throughout the scrolling
    window.clearTimeout( userScroll );
    //The Timeout to run after scrolling ends
    userScroll = setTimeout(function() {
        //The Settings Executed on NavBar after Timeout finished
        header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
        // time opcity
    }, 13000);
}
// End of Toggle the NavBar According to User Scroll Activity



//Start of the Scroll Event to execute the functions of activeSection and toggleNavBar  

// ################################################################################################################
// The addEventListener() method allows you to add event listeners on any HTML DOM object such as HTML elements,
//  the HTML document, the window object, or other objects that support events, like the xmlHttpRequest object.
// ###############################################################################################################
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})
//End of the Scroll Event to execute the functions of activeSection and toggleNavBar 


// Start of GO UP Button
//Create the div element for the button 
// i style  this butoon from css this code in line 170 in css file  
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
// Scroll to top of the Landing Page using scrollTO event
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
// End of GO UP Button

