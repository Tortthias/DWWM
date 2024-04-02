//Variables et Opérations Mathémtiques de Base
const btn_add = document.querySelector(".add")
btn_add.addEventListener("click", (event) => {
    const a = prompt('Entrer un chiffre');
    const b = prompt('Entrer un autre chiffre');
    const h1 = document.createElement('h1');

    h1.innerText =`Addition : ${a} + ${b} = ${(a+b)}`; //probleme addition
    document.querySelector(".Operation").appendChild(h1);
    // console.log(`Addition : ${a} + ${b} = ${(a+b)}`);
});

const btn_sub = document.querySelector(".sub")
btn_sub.addEventListener("click", (event) => {
    const a = prompt('Entrer un chiffre');
    const b = prompt('Entrer un autre chiffre');
    const h1 = document.createElement('h1');

    h1.innerText =`Soustraction : ${a} - ${b} = ${(a-b)}`;
    document.querySelector(".Operation").appendChild(h1);
    // console.log(`Soustraction : ${a} - ${b} = ${(a-b)}`);
});

const btn_mult = document.querySelector(".mult")
btn_mult.addEventListener("click", (event) => {
    const a = prompt('Entrer un chiffre');
    const b = prompt('Entrer un autre chiffre');
    const h1 = document.createElement('h1');

    h1.innerText =`Multiplication : ${a} * ${b} = ${(a*b)}`;
    document.querySelector(".operation").appendChild(h1);
    // console.log(`Multiplication : ${a} * ${b} = ${(a*b)}`);
});


// --------------------------------------------------------------------------------------
//Concaténation de chaînes
const btn_nom_prenom = document.querySelector(".nom_prenom")
btn_nom_prenom.addEventListener("click", (event) => {
    const nom = prompt('Entrez un nom :');
    const prenom = prompt('Entrez un prénom :');
    const concatenation = `Nom et prénom : ${prenom} ${nom}`;
    const h1 = document.createElement('h1');

    h1.innerText =`Concaténation : \n ${concatenation}`;
    document.querySelector(".concatenation").appendChild(h1);
    // console.log(`Nom et prénom : ${prenom} ${nom}`);
});


const btn_phrase = document.querySelector(".phrase")
btn_phrase.addEventListener("click", (event) => {
    const sujet=prompt('Entrez un sujet :'), verbe=prompt('Entrez un verbe :'), complement=prompt('Entrez un complément :');
    const phrase = `La phrase : ${sujet} ${verbe} ${complement}`;
    const h1 = document.createElement('h1');

    h1.innerText =`Concaténation : \n ${phrase}`;
    document.querySelector(".concatenation").appendChild(h1);
    // console.log(`La phrase : ${sujet} ${verbe} ${complement}`);
});


// --------------------------------------------------------------------------------------
//Création de fonctions
const btn_saluer = document.querySelector(".saluer")
btn_saluer.addEventListener("click", (event) => {
    function saluer(nom) {
        const h1 = document.createElement('h1');
        h1.innerText =`Bonjour : ${nom}`;
        document.querySelector(".fonction").appendChild(h1);
        // console.log(`Bonjour : ${nom}`);
    }
    saluer(prompt('Entrez un nom :'));
});

const btn_func_mult = document.querySelector(".func_mult")
btn_func_mult.addEventListener("click", (event) => {
    function mutiplication(a,b){
        const h1 = document.createElement('h1');
        h1.innerText =`${a} * ${b} = ${(a*b)}`;
        document.querySelector(".fonction").appendChild(h1);
        // console.log(`${a} * ${b} = ${(a*b)}`);
    }
    mutiplication(prompt('Entrez un chiffre :'),prompt('Entrez un autre chiffre :'));
});


// --------------------------------------------------------------------------------------
//Création de Tableaux et Manipulation

const btn_tab_1 = document.querySelector(".tab_1")
btn_tab_1.addEventListener("click", (event) => {
    const tab_1 = [1,2,3,4,5];
    tab_1.forEach(element => {
        const h1 = document.createElement('h1');
        h1.innerText =`Tableau 1 : ` + element;
        document.querySelector(".tableau").appendChild(h1);
        // console.log(tab_1);
    });
});


const btn_tab_2 = document.querySelector(".tab_2")
btn_tab_2.addEventListener("click", (event) => {
    const tab_2 = [];
    tab_2.push(10,20,30);
    tab_2.shift();
    
    const h1 = document.createElement('h1');
    h1.innerText =`Tableau_2 = ${tab_2}`;
    document.querySelector(".tableau").appendChild(h1);
    // console.log(tab_2);
});

// --------------------------------------------------------------------------------------
//Création d'Objet et Manipulation

const btn_pers = document.querySelector(".pers")
btn_pers.addEventListener("click", (event) => {
    const personne = {
        nom: 'Alice',
        age: 25,
        ville: 'Paris' 
    };
    const h1 = document.createElement('h1');
    h1.innerText =`Personne : ${personne}`;
    document.querySelector(".objet").appendChild(h1);
    // console.log(personne);
});

const btn_bank = document.querySelector(".bank")
btn_bank.addEventListener("click", (event) => {
    const compte_bancaire = {
        proprietaire: 'John Deo',
        solde: 1000
    };
    const h1 = document.createElement('h1');
    h1.innerText =`Banque : ${compte_bancaire}`;
    document.querySelector(".objet").appendChild(h1);
    //console.log(compte_bancaire);
    compte_bancaire.solde += 500;
    //console.log(compte_bancaire);
    const h1_2 = document.createElement('h1');
    h1_2.innerText =`Banque : ${compte_bancaire}`;
    document.querySelector(".objet").appendChild(h1);
});