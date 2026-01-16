const translations = {
    English: {
        Selct : "Select Language", 
        title:" Winter Collection",
        pargr: "New Winter",
        pargr2: "Collection 2026",
        pargr3: "There's Nothing like Tren",
        pargr4: "Shop Now"
    },

    Portuguese: {
        Selct : "Selecione o Idioma",
        title : "Coleção de Inverno",
        pargr: "Novo Inverno",
        pargr2: "Coleção 2026",
        pargr3: "Não Há Nada Como Trend",
        pargr4: "Compre Agora"
    }
}

const LanguageSelectop = document.querySelector('Select');

let h5 = document.querySelector('h5');
let h1= document.querySelector('h1');
let par = document.querySelector('par');
let pargr2 = document.querySelector('pargr2');
let pargr3 = document.querySelector('pargr3');
let pargr4 = document.querySelector('pargr4');



LanguageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)

})

const setLanguage = (Language) => {
    if(Languag=="English"){
        h5.innerText = translations.English.Selct;
        title.innerText = translations.English.Selct;
        par.innerText = translations.English.Selct;
        pargr2.innerText = translations.English.Selct;
        pargr3.innerText = translations.English.Selct;
        pargr4.innerText = translations.English.Selct;

        console.log(Language);
} else  if (Language=="Portuguese")
       h5.innerText = translations.Portuguese.Selct
        title.innerText = translations.Portuguese.Selct
        par.innerText = translations.Portuguese.Selct
        pargr2.innerText = translations.Portuguese.Selct
        pargr3.innerText = translations.Portuguese.Selct
        pargr4.innerText = translations.Portuguese.Selct
        console.log(Language);
}

    
