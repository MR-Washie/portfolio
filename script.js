// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Message sent successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
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
    open("https://mr-washie.github.io/HackSlash-clone/")
});



