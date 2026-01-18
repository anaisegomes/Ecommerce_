const translations = {
    
    English: {

        Selct : "Select Language", 
        h1: "About Us (Kumon)",
        h4: "How did Kumon start?",
        pargr2: "Kumon was born from the creativity of a fashion student living in Brazil. /n In 2021, her dream moved forward with the help of her mother /n Since then, the store has been selling clothes for women to feel good about themselves."
    },

    Portuguese: {

        Selct : "Selecione o idioma",
        h1 : "Sobre Nós (Kumon)",
        h4: "Como a Kumon começou?",
        pargr2: "A Kumon surgiu da criatividade de uma estudante de moda que mora no brasil, /n Kate amava desenhar roupas desde pequenas e viu uma oportunidade da sua criatividade sair do papel /n Desde então a loja vende roupa para mulheres se sentirem bem consigo mesmas"
    }
}


const LanguageSelectop = document.querySelector('Select');

let h1 = document.querySelector('h1');
let h4= document.querySelector('h4');
let pargr2 = document.querySelector('p.parqr2');

LanguageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)

})

const setLanguage = (Language) => {
    if(Language=="English"){

        h1.innerText = translations.English.h1;
        h4.innerText = translations.English.h4;
        par.innerText = translations.English.pargr2;
        return;

} else  if (Language=="Portuguese")
        h1.innerText = translations.Portuguese.h1;
        h4.innerText = translations.Portuguese.h4;
        par.innerText = translations.Portuguese.pargr2;
    
        
}



