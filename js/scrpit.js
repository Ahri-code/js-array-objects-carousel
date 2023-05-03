// --- Object ---

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// --- JS ---

    let i = 0;
    create();

// --- FUNCTIONS ---

function create() {
    const img = images[i];
    let printImg = `<div id="imgContainer">`;
    printImg += `<button class="fa-solid fa-angle-right button" id="next"></button>`;
    printImg += `<div id="image">`;
    printImg += `<img id="zoommed" src="./${img.image}" alt="${img.title}">`;
    printImg += `</div>`;
    printImg += `<p>${img.title}</p>`;
    printImg += `<p>${img.text}</p>`;
    printImg += `<button class="fa-solid fa-angle-left button" id="prev"></button>`;
    printImg += `</div>`;
    document.getElementById("contained").innerHTML = printImg;

    button = document.getElementById("next");
    button.addEventListener("click", next);

    button = document.getElementById("prev");
    button.addEventListener("click", prev);
}

function next() {
    if (i == images.length - 1) {
        i = 0;
        create();
    }
    else {
        i++;
        create();
    }
}

function prev() {
    if (i == 0) {
        i = images.length - 1;
        create();
    }
    else {
        i--;
        create();
    }
}