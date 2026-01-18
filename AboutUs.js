const translations = {
    
    English: {

        Selct : "Select Language", 
        h1: "About Us (Kumon)",
        h1: "How did Kumon start?",
        h4: "Kumon was born from the creativity of a fashion student living in Brazil. /n In 2021, her dream moved forward with the help of her mother /n Since then, the store has been selling clothes for women to feel good about themselves.",
        par: "Kate loved designing clothes since she was little and saw an opportunity for her creativity to come to life.",
        par2: "In 2021, her dream moved forward with the help of her mother.",
        par3: "Since then, the store has been selling clothes for women to feel good about themselves.",
    },

    Portuguese: {

        Selct : "Selecione o idioma",
        h1 : "Sobre Nós (Kumon)",
        h1: "Como a Kumon começou?",
        h4: "A Kumon surgiu da criatividade de uma estudante de moda que mora no brasil, /n Kate amava desenhar roupas desde pequenas e viu uma oportunidade da sua criatividade sair do papel /n Desde então a loja vende roupa para mulheres se sentirem bem consigo mesmas"
    }
}


const LanguageSelectop = document.querySelector('Select');

let h1 = document.querySelector('h1');
let h1= document.querySelector('h1.h1');
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



