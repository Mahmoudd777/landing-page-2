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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const NavList = document.getElementById("navbar__list");
const sections =Array.from(document.querySelectorAll("section"));
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function creatListItem(){
    for(sec of sections){
        ListItem = document.createElement("li");
        ListItem.innerHTML = `<li><a herf="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`;
        NavList.appendChild(ListItem);
    }
}
NavList.addEventListener("click",(soc)=>{
    soc.preventDefault();
    if(soc.target.dataset.nav) {
        document
        .getElementById(`${soc.target.dataset.nav}`)
        .scrollIntoView({behavior : "smooth"});
        setTimeout(()=>{
            location.hash = `${soc.target.dataset.nav}`;
        },240);
    }
});
creatListItem();
window.onscroll = function(){
    document.querySelectorAll("section").forEach(function(active){
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ){
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


