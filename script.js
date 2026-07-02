// Mobile Menu
const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {
nav.classList.toggle("show");
};

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
}
else{
themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
}
};

// Scroll Animation

function reveal(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;

const revealTop=reveals[i].getBoundingClientRect().top;

const revealPoint=150;

if(revealTop<windowHeight-revealPoint){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll",reveal);

reveal();
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            message
        })
    });

    const data = await response.json();

    alert(data.message);

    form.reset();
});