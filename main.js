const translations = {
    
    English: {

        Selct : "Select Language", 
        title: "Winter Collection",
        pargr: "New Winter \n Collection 2026",
        pargr2: "There's Nothing like Trend!",
        pargr3: "Shop Now"
    },

    Portuguese: {

        Selct : "Selecione o Idioma",
        title : "Coleção de Inverno",
        pargr: "Novo Inverno \n Coleção 2026",
        pargr2: "Não Há Nada Como Uma Tendência!",
        pargr3: "Compre Agora"
    }
}


const LanguageSelectop = document.querySelector('Select');

let h5 = document.querySelector('h5');
let h1= document.querySelector('h1');
let par = document.querySelector('p.parq');
let Shop = document.querySelector('div.teste');

LanguageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)

})

const setLanguage = (Language) => {
    if(Language=="English"){

        h5.innerText = translations.English.title;
        h1.innerText = translations.English.pargr;
        par.innerText = translations.English.pargr2;
        Shop.innerText = translations.English.pargr3;
        return;

} else  if (Language=="Portuguese")
        h5.innerText = translations.Portuguese.title;
        h1.innerText = translations.Portuguese.pargr;
        par.innerText = translations.Portuguese.pargr2;
        Shop.innerText = translations.Portuguese.pargr3;

        
}



