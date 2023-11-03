// Selecciona todos los elementos de navegación
let navItems = document.querySelectorAll('.nav-item');

// Itera sobre cada elemento
navItems.forEach((item) => {
    // Agrega un event listener para el evento 'click'
    item.addEventListener('click', (event) => {
        // Elimina la clase 'active' de todos los elementos
        navItems.forEach((item) => {
            item.classList.remove('active');
        });
        // Agrega la clase 'active' al elemento clickeado
        event.currentTarget.classList.add('active');
    });
});

/* // Obtén una referencia al elemento div por su ID
var miDiv = document.getElementById("miDiv");

// Asigna una imagen de fondo al div
miDiv.style.backgroundImage = "url('ruta/a/tu/imagen.jpg')"; */

let carousel = document.querySelector('.carousel-inner');

var carpeta = "./assets/img/";
var images = [
    { path: carpeta + "la-senadora.jpg", name: "LA SENADORA", shortName: "senadora", number: "544" },
    { path: carpeta + "los-ninos-nos-miran.jpg", name: "LOS NIÑOS NOS MIRAN", shortName: "ninos", number: "115" },
    { path: carpeta + "que-bueno-sentirnos-hermanos.jpg", name: "QUE BUENO SENTIRNOS HERMANOS", shortName: "hermanos", number: "68" },
    { path: carpeta + "llegada-la-tarde-el-señor-dijo.jpg", name: "LLEGADA LA TARDE, EL SEÑOR DIJO: CRUCEMOS A LA OTRA ORILLA", shortName: "tarde", number: "705" },
    { path: carpeta + "comunicandonos-hoy.jpg", name: "COMUNICANDONOS HOY", shortName: "comunicandonos", number: "" },
    { path: carpeta + "bigbang.jpg", name: "EXPLOSIÓN DEL BIG BANG", shortName: "bigbang", number: "253" },
];

let counter = 1;
let pair = '';
let flag = ' active';

images.forEach(function (img) {
    //console.log(img);
    if (counter > 2) {
        counter = 1;
    }
    if (counter == 1) {
        //console.log(img.path)
        pair = pair + `
        <div class="carousel-item${flag}">
        <div class="row-nombre row justify-content-center mx-3 my-5 align-items-center d-flex">
        <div class="div-img div-imagen div-imagen-${img.shortName} col-lg-6 col-md-12 col-sm-12 d-flex rounded-4 m-3" style="min-width: 320px;max-width: 600px;">
            <div class="sombra-img position-absolute w-100 h-45 rounded-4"></div>
            <a href="${img.path}" class="sin-estilo position-relative d-flex w-100" data-fancybox data-caption='"${img.name}"'>
                <div class="texto-img position-absolute text-white m-2">
                    <strong>"${img.name}"</strong>
                </div>
            </a>
        </div>
        `;
        flag = '';
    }
    //console.log(pair);
    if (counter == 2) {
        pair = pair + `
        <div class="div-img div-imagen div-imagen-${img.shortName} col-lg-6 col-md-12 col-sm-12 d-flex rounded-4 m-3" style="min-width: 320px;max-width: 600px;">
            <div class="sombra-img position-absolute w-100 h-45 rounded-4"></div>
            <a href="${img.path}" class="sin-estilo position-relative d-flex w-100" data-fancybox data-caption='"${img.name}"'>
                <div class="texto-img position-absolute text-white m-2">
                    <strong>"${img.name}"</strong>
                </div>
            </a>
        </div>
        </div>
        </div>
        `;
        carousel.innerHTML = pair;
    }
    //console.log(pair);

    counter++;
});

