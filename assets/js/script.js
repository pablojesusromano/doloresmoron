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

let carouselCuadros = document.querySelector('.carousel-inner-cuadros');
let carouselMurales = document.querySelector('.carousel-inner-murales');

var carpetaCuadros = "./assets/img/cuadros/";
var cuadros = [
    { path: carpetaCuadros + "544-la-senadora.jpg", name: "LA SENADORA", shortName: "senadora", number: "544" },
    { path: carpetaCuadros + "115-los-ninos-nos-miran.jpg", name: "LOS NIÑOS NOS MIRAN", shortName: "ninos", number: "115" },

    { path: carpetaCuadros + "68-que-bueno-sentirnos-hermanos.jpg", name: "QUE BUENO SENTIRNOS HERMANOS", shortName: "hermanos", number: "68" },
    { path: carpetaCuadros + "705-llegada-la-tarde-el-señor-dijo.jpg", name: "LLEGADA LA TARDE, EL SEÑOR DIJO: CRUCEMOS A LA OTRA ORILLA", shortName: "tarde", number: "705" },

    { path: carpetaCuadros + "comunicandonos-hoy.jpg", name: "COMUNICANDONOS HOY", shortName: "comunicandonos", number: "0" },
    { path: carpetaCuadros + "253-bigbang.jpg", name: "EXPLOSIÓN DEL BIG BANG", shortName: "bigbang", number: "253" },

    { path: carpetaCuadros + "529-kona-ta-iell.jpg", name: "KONÁ TÁ IELL (CANTO PARA ENVIAR ENERGÍA)", shortName: "kona-ta-iell", number: "529" },
    { path: carpetaCuadros + "maria-adela.jpg", name: "MARÍA ADELA", shortName: "maria-adela", number: "0" },

    { path: carpetaCuadros + "552-pillan-kushe.jpg", name: "PILLÁN KUSHÉ (LA ANCIANA SAGRADA)", shortName: "pillan-kushe", number: "552" },
    { path: carpetaCuadros + "618-entre-el-cielo-y-la-tierra.jpg", name: "ENTRE EL CIELO Y LA TIERRA", shortName: "entre-el-cielo-y-la-tierra", number: "618" },

    { path: carpetaCuadros + "662-los-angeles-traviesos.jpg", name: "LOS ANGELES TRAVIESOS", shortName: "los-angeles-traviesos", number: "662" },
    { path: carpetaCuadros + "716-al-cielo-en-patineta.jpg", name: "AL CIELO EN PATINETA", shortName: "al-cielo-en-patineta", number: "716" },

    { path: carpetaCuadros + "634-jugando-al-gallito-ciego.jpg", name: "JUGANDO AL GALLITO CIEGO", shortName: "jugando-al-gallito-ciego", number: "634" },
    { path: carpetaCuadros + "732-descubriendo-otros-fantasmas.jpg", name: "DESCUBRIENDO OTROS FANTASMAS", shortName: "descubriendo-otros-fantasmas", number: "732" },
    
    { path: carpetaCuadros + "677-el-senor-con-las-manos-sucias.jpg", name: "EL SEÑOR CON LAS MANOS SUCIAS", shortName: "el-senor-con-las-manos-sucias", number: "677" },
    { path: carpetaCuadros + "678-el-senor-con-las-manos-en-la-masa.jpg", name: "EL SEÑOR CON LAS MANOS EN LA MASA", shortName: "el-senor-con-las-manos-en-la-masa", number: "678" },
    
    { path: carpetaCuadros + "733-cabeceando-jugadas.jpg", name: "CABECEANDO JUGADAS", shortName: "cabeceando-jugadas", number: "733" },
    { path: carpetaCuadros + "734-desde-lo-profundo-de-la-tierra.jpg", name: "DESDE LO PROFUNDO DE LA TIERRA", shortName: "desde-lo-profundo-de-la-tierra", number: "734" },
    
    { path: carpetaCuadros + "742-tangentes-de-miami-a-comodoro.jpg", name: "TANGENTES DE MIAMI A COMODORO", shortName: "tangentes-de-miami-a-comodoro", number: "742" },
    { path: carpetaCuadros + "746-la-otra-cara-olla-popular.jpg", name: "LA OTRA CARA... LA OLLA POPULAR", shortName: "la-otra-cara-olla-popular", number: "746" },
    
    { path: carpetaCuadros + "767-los-corredores-del-olvido.jpg", name: "LOS CORREDORES DEL OLVIDO", shortName: "los-corredores-del-olvido", number: "767" },
    { path: carpetaCuadros + "807-los-ninos-nos-miran.jpg", name: "LOS NIÑOS NOS MIRAN", shortName: "los-ninos-nos-miran", number: "807" },
    
    { path: carpetaCuadros + "829-2-x-4-callejero.jpg", name: "2 X 4 CALLEJERO", shortName: "2-x-4-callejero", number: "829" },
    { path: carpetaCuadros + "840-volver-a-empezar.jpg", name: "VOLVER A EMPEZAR", shortName: "volver-a-empezar", number: "840" },
    
    /*     { path: carpetaCuadros + ".jpg", name: "", shortName: "", number: "" },
        { path: carpetaCuadros + ".jpg", name: "", shortName: "", number: "" }, */

];

let counter = 1;
let pair = '';
let flag = ' active';


cuadros.forEach(function (img) {
    //console.log(img);
    if (counter > 2) {
        counter = 1;
    }
    if (counter == 1) {
        //console.log(img.path)
        pair = pair + `
        <div class="carousel-item${flag}" data-bs-interval="4000">
        <div class="row-nombre row justify-content-center mx-3 my-5 align-items-center d-flex">
        <div class="div-img div-imagen div-imagen-${img.shortName} col-lg-6 col-md-12 col-sm-12 d-flex rounded-4 m-3" style="min-width: 300px;max-width: 600px;">
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
        carouselCuadros.innerHTML = pair;
    }
    //console.log(pair);

    counter++;
});

cuadros.forEach(function (img) {
    
});


var carpetaMurales = "./assets/img/murales/";

var murales = [
    { path: carpetaMurales + "80-todas-las-manos-altar-catedral.jpg", name: '"TODAS LAS MANOS" (CATEDRAL COMODORO)', shortName: "todas-manos", number: "80", position:"center" },
    { path: carpetaMurales + "53-unp-rectorado.jpg", name: '"COMODORO" (RECTORADO UNIVERSIDAD NACIONAL DE LA PATAGONIA)', shortName: "rectorado", number: "53", position:"center" },
    { path: carpetaMurales + "75-la-vision-de-don-bosco-detalle.jpg", name: '"LA VISIÓN DE DON BOSCO" (CATEDRAL COMODORO)', shortName: "cristo", number: "75", position:"top" },
    { path: carpetaMurales + "79-la-anunciacion-ambon-catedral.jpg", name: '"LA ANUNCIACIÓN" (CATEDRAL COMODORO)', shortName: "anunciacion", number: "79", position:"top" },
    { path: carpetaMurales + "81-pescadores-de-hombres-altar-catedral.jpg", name: '"PESCADORES DE HOMBRES" (ALTAR CATEDRAL COMODORO)', shortName: "pescadores", number: "81", position:"center" },
    { path: carpetaMurales + "82-el-trigo-y-el-pan-de-vida.jpg", name: '"EL TRIGO Y EL PAN DE LA VIDA" (CATEDRAL COMODORO)', shortName: "trigo-pan", number: "82", position:"center" },
    { path: carpetaMurales + "83-las-vides-y-el-vino-altar-catedral.jpg", name: '"LAS VIDES Y EL VINO" (ALTAR CATEDRAL COMODORO)', shortName: "vino", number: "83", position:"center" },
    { path: carpetaMurales + "94-campo-y-trabajo-sociedad-rural.jpg", name: '"CAMPO Y TRABAJO" (SOCIEDAD RURAL)', shortName: "campo-trabajo", number: "94", position:"top" },
    { path: carpetaMurales + "95-vida-y-trabajo-municipalidad.jpg", name: '"VIDA Y TRABAJO" (MUNICIPALIDAD)', shortName: "vida-trabajo", number: "95", position:"center" },
    { path: carpetaMurales + "433-patagonia-tu-destino-es-levantar-vuelo-aeropuerto.jpg", name: '"PATAGONIA TU DESTINO ES LEVANTAR VUELO" (AEROPUERTO COMODORO)', shortName: "aeropuerto", number: "433", position:"center" },
    { path: carpetaMurales + "687-patagonia-tierra-generosa-2.jpg", name: '"PATAGONIA TIERRA GENEROSA" (SAN JULIÁN)', shortName: "patagonia-tierra", number: "687", position:"center" },
];



let pairMurales = '';
let flagMurales = ' active';

murales.forEach(function (imgMural) {

    pairMurales = pairMurales + `
        <div style="height:auto;" class="carousel-item${flagMurales} w-100"  data-bs-interval="4000">
            <div class="row justify-content-center align-items-center d-flex">
                <div class="div-img-mural div-imagen div-imagen-${imgMural.shortName} col-lg-6 col-md-12 col-sm-12 d-flex" style="min-width: 100%;max-width: 100%;background-position: center ${imgMural.position};">
                    <div class="sombra-img position-absolute w-100"></div>
                    <a style="height:auto;" href="${imgMural.path}" class="sin-estilo position-relative d-flex w-100" data-fancybox data-caption='${imgMural.name}'>
                        <div class="texto-img-mural text-white m-2">
                            <strong>${imgMural.name}</strong>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `;
    flagMurales = '';


});
carouselMurales.innerHTML = pairMurales;

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar-collapse');

    navbar.addEventListener('shown.bs.collapse', function () {
        var closeButton = document.getElementById('close-button');
        closeButton.style.display = 'block';
    });

    navbar.addEventListener('hidden.bs.collapse', function () {
        var closeButton = document.getElementById('close-button');
        closeButton.style.display = 'none';
    });
});