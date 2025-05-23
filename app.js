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
const titleHome = "RISE UP|COMMUNICATION";
const text = document.getElementById("text");
const cursor = document.getElementById("cursor");
const element = document.getElementById("typewritter");
let index = 0

function typeLetter() {
    if (index < titleHome.length) {
        const char = titleHome.charAt(index);

        text.innerHTML += (char === "|" ? "<br>" : char);
        index++;
        setTimeout(typeLetter, 100);
    }else{
        cursor.remove()
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
        note: 5,
        svg: `./src/images/lesetoiles.svg`
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
        note: 3,
    },

]


testimonyContent.textContent = temoignages[0].avis
testimonyClient.textContent = temoignages[0].nom
testimonyFrom.textContent = temoignages[0].provenance
ratingBlock.textContent = temoignages[0].svg



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
            star.classList.add("h-16");
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
            star.src = "./src/images/lesetoiles.svg";
            star.classList.add("h-16");
            ratingBlock.appendChild(star);
        }
    })
});



// Envoi de mail 
const form = document.getElementById('contact-form');
const email = document.getElementById('user_object');

(function(){
      emailjs.init({
        publicKey: "VeQfgWQDCzwidBq15",
      });
   })();


const success = document.getElementById('success_message')

form.addEventListener('submit',(e) => {
    e.preventDefault()

    const formData = new FormData(form)
    // console.log(formData);
    
    
    emailjs.sendForm("service_1mm13t8", "template_98o7ln9", form)
    .then(response =>  {
        document.body.classList.add('overflow-hidden', 'h-screen');
        success.classList.remove("hidden")
        success.classList.add("flex")
        setTimeout(() => {
            document.body.classList.remove('overflow-hidden', 'h-screen');
            success.classList.add('hidden')
            success.classList.remove('flex')
        }, 3000);
        form.reset()
    }, error => {
        alert("Oups, quelque chose à mal tourné...")
    })

})

// Personnalisation du formulaire en fonction du service demandé
const services = document.getElementById('user_object')
const displayingTextile = document.getElementById('displayTextile')
const displayingPrint = document.getElementById('displayPrint')
const infoTextArea = document.getElementById('info_supplementaire')
const selects = document.querySelectorAll('select[data-service]')


services.addEventListener('change', () => {

    const selected = services.value.toLowerCase()

    selects.forEach(select => {
    const belongsTo = select.getAttribute('data-service');
    select.disabled = (belongsTo !== selected);
  });

    if(services.value === "textile"){
        // Transition sur le select
        displayingTextile.classList.remove("opacity-0", "scale-95", "max-h-0", "overflow-hidden")
        displayingTextile.classList.add("opacity-1", "scale-100", "max-h-[1000px]",)
        displayingPrint.classList.add("opacity-0", "scale-95", "max-h-0", "overflow-hidden")
        displayingPrint.classList.remove("opacity-1", "scale-100", "max-h-[1000px]",)

        //Transition sur le formulaire
        form.classList.add("max-h-[1000px]")
        form.classList.remove("max-h-[760px]")

        // Transition sur info en bas du textarea
        infoTextArea.classList.remove("opacity-0", "scale-95", "max-h-0", "overflow-hidden")
        infoTextArea.classList.add("opacity-1", "scale-100", "max-h-[1000px]",)
    }
    else if(services.value === "support"){
        // Transition sur le select
        displayingPrint.classList.remove("opacity-0", "scale-95", "max-h-0", "overflow-hidden")
        displayingPrint.classList.add("opacity-1", "scale-100", "max-h-[1000px]",)
    
        displayingTextile.classList.remove("opacity-1", "scale-100", "max-h-[1000px]",)
        displayingTextile.classList.add("opacity-0", "scale-95", "max-h-0", "overflow-hidden")

         //Transition sur le formulaire
        

        // Transition sur info en bas du textarea
        infoTextArea.classList.remove("opacity-0", "scale-95", "max-h-0", "overflow-hidden")
        infoTextArea.classList.add("opacity-1", "scale-100", "max-h-[1000px]",)
    }
    else{
        // Transition sur le select
        displayingTextile.classList.add("opacity-0", "scale-95", "max-h-0", "overflow-hidden")
        displayingTextile.classList.remove("opacity-1", "scale-100", "max-h-[1000px]",)
        displayingPrint.classList.add("opacity-0", "scale-95", "max-h-0", "overflow-hidden")
        displayingPrint.classList.remove("opacity-1", "scale-100", "max-h-[1000px]",)

        //Transition sur le formulaire
        form.classList.remove("max-h-[1000px]")
        form.classList.add("max-h-[760px]")

        // Transition sur info en bas du textarea
        infoTextArea.classList.add("opacity-0", "scale-95", "max-h-0", "overflow-hidden")
        infoTextArea.classList.remove("opacity-1", "scale-100", "max-h-[1000px]",)
    }
})



// QUantité personalisation textile
// de 1 a 9 
// de 10 a 24
// 25 - 49
// 50 - 100
// 100 - plus