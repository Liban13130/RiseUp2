const toggleMenuBtn = document.querySelector('#menu-btn')
const toggleMenuImg = document.querySelector('#menu-btn img')
const toggledMenu = document.querySelector('#toggled-menu')
const menuLinks = document.querySelector('#main-nav ul a')

toggleMenuBtn.addEventListener('click', toggledNav)

function toggledNav(){
    toggledMenu.classList.toggle("-translate-y-full")

    if(toggledMenu.classList.contains("-translate-y-full")){
        toggleMenuImg.setAttribute("src", "src/images/menu.svg")
        toggleMenuBtn.setAttribute("aria-expanded", "false")
    } 
    else{
        toggleMenuImg.setAttribute("src", "src/images/cross.svg")
        toggleMenuBtn.setAttribute("aria-expanded", "true")
    }

}

const temoignages = [
    {
        avis:`Molestias voluptatum voluptas aliquam. Reprehenderit optio consequatur odio, dolorum adipisci ipsum ad libero dignissimos omnis 
            rem ipsam accusamus ducimus ex perferendis, esse totam culpa tempora rerum. 
            Modi sapiente itaque eaque magni ipsa fuga laborum consequuntur maxime!`,
        nom: "Martin",
        provenance: "Sapeur pompier de paris"
    },
    {
        avis:`Molestias voluptatum voluptas aliquam. Reprehenderit optio consequatur odio, dolorum adipisci ipsum ad libero dignissimos omnis 
            rem ipsam accusamus ducimus ex perferendis, esse totam culpa tempora rerum. 
            Modi sapiente itaque eaque magni ipsa fuga laborum consequuntur maxime!`,
        nom: "Caroline",
        provenance: "DRH chez Jeff de Bruges"
    },
    {
        avis:`Molestias voluptatum voluptas aliquam. Reprehenderit optio consequatur odio, dolorum adipisci ipsum ad libero dignissimos omnis 
            rem ipsam accusamus ducimus ex perferendis, esse totam culpa tempora rerum. 
            Modi sapiente itaque eaque magni ipsa fuga laborum consequuntur maxime!`,
        nom: "Ahmed",
        provenance: "Directeur de Ecolasia"
    },

]

// temoignages.forEach(temoignage => {
//     console.log(temoignage.nom);
// })

const titleHome = "RISEUP COMMUNICATION";
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
    typeLetter()
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