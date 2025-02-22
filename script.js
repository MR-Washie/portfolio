// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});



const ageCal = document.querySelector('#age-calculator');
ageCal.addEventListener("click" ,() => {
    open("https://mr-washie.github.io/Age-Calculator/")
});

const todolist = document.querySelector("#to-do-list");
todolist.addEventListener("click", () => {
    open("https://mr-washie.github.io/To-Do-List/")
});

const randomImage = document.querySelector("#random-image-generator");
randomImage.addEventListener("click", () => {
    open("https://mr-washie.github.io/Random-Image-Generator/")
});

const analogClock = document.querySelector("#analog-clock");
analogClock.addEventListener("click", () => {
    open("https://mr-washie.github.io/Analog-Clock/")
});

const Ecommerce = document.querySelector("#E-commerce");
Ecommerce.addEventListener("click", () => {
    open("https://mr-washie.github.io/E-commerce-website-SR-Market/")
});

const weather = document.querySelector("#weather");
weather.addEventListener("click", () => {
    open("https://mr-washie.github.io/Weather/")
});    
    
