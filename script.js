const links = document.querySelectorAll(".nav-links li");
const pages = document.querySelectorAll(".page");

let currentPage = document.querySelector(".page.active");

links.forEach(link => {

link.addEventListener("click", () => {

const target = link.dataset.page;
const nextPage = document.getElementById(target);

if(currentPage === nextPage) return;

let tl = gsap.timeline();

tl.to(currentPage,{
opacity:0,
y:-50,
duration:0.4
})

.add(()=>{

currentPage.classList.remove("active");
nextPage.classList.add("active");

})

.fromTo(nextPage,
{opacity:0, y:50},
{opacity:1, y:0, duration:0.5}
)

currentPage = nextPage;

});

});
// GSAP ANIMATION FOR NAV BAR
gsap.from(".logo",{
x:-100,
opacity:0,
duration:1
})

gsap.from(".nav-links li",{
y:-40,
opacity:0,
stagger:0.2,
duration:0.6
})

gsap.from(".cta",{
scale:0,
duration:0.6,
delay:0.6
})