// const toggleMenuBtn = document.querySelector('#menu-btn')
// const toggleMenuImg = document.querySelector('#menu-btn img')
// const toggledMenu = document.querySelector('#toggled-menu')
// const menuLinks = document.querySelector('#main-nav ul a')

// // toggleMenuBtn.addEventListener('click', toggledNav)

// function toggledNav(){
//     toggledMenu.classList.toggle("-translate-y-full")

//     if(toggledMenu.classList.contains("-translate-y-full")){
//         toggleMenuImg.setAttribute("src", "src/images/menu.svg")
//         toggleMenuBtn.setAttribute("aria-expanded", "false")
//     } 
//     else{
//         toggleMenuImg.setAttribute("src", "src/images/cross.svg")
//         toggleMenuBtn.setAttribute("aria-expanded", "true")
//     }

// }

console.log("Script chargé 🎉");


// MENU RESPONSIVE
const menuBtn = document.getElementById('menu-btn');
const menuImg = document.querySelector('#menu-btn img');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener("click", () => {
  console.log("Click détecté ✅");

  menuBtn.classList.toggle("active");

  if (menuBtn.classList.contains("active")) {
    menuImg.setAttribute("src", "./src/images/cercle-xmark.png");
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
    // Animation a l'ouverture
    mobileMenu.classList.add("animate-fadeRight");
    

  } else {
    menuImg.setAttribute("src", "./src/images/menu.png");
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    // Animation à la fermeture
    mobileMenu.classList.remove("animate-fadeRight");
  }
});


// Titre animation
const titleHome = "RISE UP COMMUNICATION";
const element = document.getElementById("typewritter");
let index = 0

function typeLetter(){
    if(index < titleHome.length){
        element.textContent += titleHome.charAt(index);
        index++
        setTimeout(typeLetter, 100)
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeLetter, 2000)
})




// Animation de la navbar au scrollY
const navbar = document.getElementById('navbar');
const navbarList = document.getElementById('liste-navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        navbar.classList.add('bg-white', 'shadow-md');
        navbarList.classList.add('text-black');
        navbarList.classList.remove('text-white');
        navbar.classList.remove('bg-transparent');
    }else{
        navbar.classList.remove('bg-white', 'shadow-md');
        navbarList.classList.remove('text-black');
        navbarList.classList.add('text-white');
        navbar.classList.add('bg-transparent',);
    }
})


window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-left, .fade-right');

    elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
    })
})



// SLIDER AVIS
const testimonyContent = document.getElementById('testimony')
const testimonyClient = document.getElementById('client')
const testimonyFrom = document.getElementById('from')
const rightArrowIcon = document.querySelectorAll("#slider-right")
const leftArrowIcon = document.querySelectorAll("#slider-left")
const ratingBlock = document.getElementById("rating")


const temoignages = [
    {
        avis:`Nous avons bien reçu les tee-shirts et sweats, tout est parfait !
            Les produits sont vraiment très beaux et de qualité.
            Le travail est soigné et conforme à nos attentes.
            Merci pour votre professionnalisme !`,
        nom: "Florent Hibon",
        provenance: "Sapeur pompier de paris",
        note: 3,
    },
    {
        avis:`Hellal voluptatum voluptas aliquam. Reprehenderit optio consequatur odio, dolorum adipisci ipsum ad libero dignissimos omnis 
            rem ipsam accusamus ducimus ex perferendis, esse totam culpa tempora rerum.`,
        nom: "Caroline",
        provenance: "DRH chez Jeff de Bruges",
        note: 4,
    },
    {
        avis:`Nabolm voluptatum voluptas aliquam. Reprehenderit optio consequatur odio, dolorum adipisci ipsum ad libero dignissimos omnis. 
            Modi sapiente itaque eaque magni ipsa fuga laborum consequuntur maxime!`,
        nom: "Ahmed",
        provenance: "Directeur de Ecolasia",
        note: 5,
    },

]


testimonyContent.textContent = temoignages[0].avis
testimonyClient.textContent = temoignages[0].nom
testimonyFrom.textContent = temoignages[0].provenance
ratingBlock.textContent = temoignages[0].note



let position = 0;

rightArrowIcon.forEach(icon => {
    icon.addEventListener("click", () =>{
        if(position < temoignages.length -1){
            position++
        }else{
            position = 0
        }
        testimonyContent.textContent = temoignages[position].avis
        testimonyClient.textContent = temoignages[position].nom
        testimonyFrom.textContent = temoignages[position].provenance
        ratingBlock.innerHTML = ""

        for (let index = 0; index < temoignages[position].note; index++) {
            let star = document.createElement('img');
            star.src = "./src/images/lesetoiles.svg";
            star.classList.add("w-6", "h-6"); // optionnel : taille adaptée
            ratingBlock.appendChild(star);
        }
    })
});


leftArrowIcon.forEach(icon => {
    icon.addEventListener('click', () =>{
        if(position > 0){
            position--
        }else{
            position = temoignages.length -1
        }
    
        testimonyContent.textContent = temoignages[position].avis
        testimonyClient.textContent = temoignages[position].nom
        testimonyFrom.textContent = temoignages[position].provenance
        ratingBlock.innerHTML = ""
        for (let index = 0; index < temoignages[position].note; index++) {
            let star = document.createElement('img');
            star.style.background = "red"
            star.src = "./src/images/lesetoiles.svg";
            star.classList.add("w-10", "h-10", "mx-0.5");
            ratingBlock.appendChild(star);
        }
    })
});

console.log(+{});
