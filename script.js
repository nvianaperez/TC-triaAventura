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

let pagina = 0;
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
}

//atención al orden de mostrar página
