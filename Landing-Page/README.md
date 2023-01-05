# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.










The project that I made contains 4 li inside the Ul and i make this [li] and [A] and Class dynamically and [li] if click bootom in section ID  AND gav [section] your-active-class from make background if section active open  and gav [A] active_button  if section say Id 1 A class 1 background black  and i make  Scroll to click li scroll go to section id using scroll TO event 
and make  function make if i scroll header opcity 1 and i show  + ... if i stopp scroll opcity 0  and i not show nav
and i Create the div element in footer if i click the button go  tob 


All  I use and learned from the project

document.querySelector
document.querySelectorAll
forEach
function
createElement
insertAdjacentHTML
appendChild
afterbegin
addEventListener
event
preventDefault
window.scrollTo
behavior:"smooth"
getBoundingClientRect
if + else
classList.add
classList.remove
clearTimeout
setTimeout
 behavior:"smooth"








                                     Explanation of project parts and steps



---------------------------------------------------------------------------------------------------------
                                        
                                         create li and A   

1- i create 2x var... [section] and [navbar__list]  to Create [li] and A 
2- i make function [buildNav] AND inside it function [forEach] 
3- i create const and i make [li] dynamically from document.createElement 
4- i add insertAdjacentHTML in li and i make a href and i add section id + class name and data set 
5- i add li to  ul from appendChild

---------------------------------------------------------------------------------------------------------




                     make  Scroll to click li scroll go to section id using scroll TO event  


1- i make function scrollBehavior
2- in function i add  
navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
  

    ---------------------------------------------------------------------------------------------------------


                                
                             Start of Set the Section class 'your-active-class' when it near to the top of viewport and the A  CLASS active_button

1- make function activeSection 
2- add in function new const  name [navActive] from add class [A] menu__link
3- make  forEach
4- make new const sectionBond = section.getBoundingClientRect(); 
   Definition and usage. The getBoundingClientRect() method returns the size of an element and its position relative to the viewport. The getBoundingClientRect() method returns a DOMRectobject with eight properties: left, top, right, bottom, x, y, width, height.
5- Check if the section is in viewport or not 
6- add 'your-active-class'  to the specific section
7- add 'active_button' class to the specific nav[A]LINK if a  SEE section id  active is open background: #051440   A  i add this background in  file css


    ---------------------------------------------------------------------------------------------------------



                                 i make  function make if i scroll header opcity 1 + Trans... if i stopp opcity 0 

1-  make function toggleNavBar 

2- make  let userScroll;

3- make header.style.cssText = opacity: 1; transition: ease 0.3s 
4- make  window.clearTimeout( userScroll )
5- make tow  function  userScroll = setTimeout(function() {
6- make  header.style.cssText = 'opacity: 0; transition: ease 0.3s 
7- make time 12000


    ---------------------------------------------------------------------------------------------------------
                                                 Start of GO UP Button
                                         Create the div element for the button
1- make new const goUpButton and i add footer and i add in footer new div id  name [return_top]
2- document.getElementById("return_top")
addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"

                                         
    ---------------------------------------------------------------------------------------------------------


