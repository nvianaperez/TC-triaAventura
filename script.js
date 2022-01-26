
const historia = [
    {
        pregunta: "¿Funciona?",
        s: "No lo toques. Sin problema",
        n: 1,
    },
    {
        pregunta: "¿Lo has tocado?",
        s: 2,
        n: 3,
    },
    {
        pregunta: "¡Burro! ¿Lo sabe alguien?",
        s: 4,
        n: "Escóndelo. Sin problema",
    },
    {
        pregunta: "¿Nos dará problemas?",
        s: 4,
        n: "Lánzalo. Sin problema",
    },
    {
        pregunta: "La has cagao. ¿Puedes culpar a otro?",
        s: "Sin problema",
        n: "La has cagao",
    }
];

//declaro variables
let pagina = 0;
let paginasArray=[];

//crear variable usuari i recollir-la amb un prompt
let user = prompt('Quin és el teu nom?', 'aventurer');
//mostrar variable user al document
let nom = document.querySelector('#articleOne p');
nom.textContent = user;
//crear variable text i mostrar-la al document amb el contingut
let text = document.querySelector('.main-text p');
text.textContent = historia[pagina].pregunta;

function continuarSi() {
    if (!Number.isInteger(historia[pagina].s)) {
        mostrarPagina(pagina);
        pagina = historia[pagina].s;
        text.textContent = pagina;
    } else {
        pagina = historia[pagina].s;
        text.textContent = historia[pagina].pregunta;
        mostrarPagina(pagina);
    }
}

function continuarNo() {
    if (!Number.isInteger(historia[pagina].n)) {
        mostrarPagina(pagina);
        pagina = historia[pagina].n;
        text.textContent = pagina;
    } else {
        pagina = historia[pagina].n;
        text.textContent = historia[pagina].pregunta;
        mostrarPagina(pagina);
    }
}

function mostrarPagina(pagina) {
    let numPagina = document.querySelector('.home p');
    numPagina.textContent = `Número de pàgina: ${pagina}`;
    mostrarCami(pagina);
}

function mostrarCami(pagina) {
    paginasArray.push(pagina);
    let cami = document.querySelector('#cami');
    cami.textContent = paginasArray;
}


//atención al orden de mostrar página
//probar de crear un array con 11 objetos, índices de 0 a 10, y que todas las respuestas sean los índices de la página donde voy

/*
historia = [
    0 : { text: 'Funciona', s:5, n:1 },
    1 : { text: '¿Lo haas tocado', s:6, n:2 },
    2 : { text: '¿Nos dará problemas?', s:3, n:9 },
    3 : { text: 'La has cagado', s:4, n:3 },
    4 : { text: '¿Puedes culpar a otro?', s:10, n:3 },
    5 : { text: 'No lo toques', s:10, n:10 },
    6 : { text: '¡Burro!', s:7, n:7 },
    7 : { text: '¿Alguien lo sabe?', s:3, n:8 },
    8 : { text: '¡Escóndelo!', s:10, n:10 },
    9 : { text: '¡Lánzalo!', s:10, n:10 },
    10 : { text: 'Sin problemas', s:10, n:10 },
]
*/
