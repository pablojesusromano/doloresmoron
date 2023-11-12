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

    { path: carpetaCuadros + "comunicandonos-hoy.jpg", name: "COMUNICANDONOS HOY", shortName: "comunicandonos", number: "" },
    { path: carpetaCuadros + "253-bigbang.jpg", name: "EXPLOSIÓN DEL BIG BANG", shortName: "bigbang", number: "253" },

    { path: carpetaCuadros + "529-kona-ta-iell.jpg", name: "KONÁ TÁ IELL (CANTO PARA ENVIAR ENERGÍA)", shortName: "kona-ta-iell", number: "529" },
    { path: carpetaCuadros + "maria-adela.jpg", name: "MARÍA ADELA", shortName: "maria-adela", number: "" },

    { path: carpetaCuadros + "552-pillan-kushe.jpg", name: "PILLÁN KUSHÉ (LA ANCIANA SAGRADA)", shortName: "pillan-kushe", number: "552" },
    { path: carpetaCuadros + "618-entre-el-cielo-y-la-tierra.jpg", name: "ENTRE EL CIELO Y LA TIERRA", shortName: "entre-el-cielo-y-la-tierra", number: "618" },

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
        carouselCuadros.innerHTML = pair;
    }
    //console.log(pair);

    counter++;
});

cuadros.forEach(function (img) {
    
});


var carpetaMurales = "./assets/img/murales/";

var murales = [
    { path: carpetaMurales + "80-todas-las-manos-altar-catedral.jpg", name: '"TODAS LAS MANOS" (CATEDRAL COMODORO)', shortName: "todas-manos", number: "80" },
    { path: carpetaMurales + "53-unp-rectorado.jpg", name: '"COMODORO" (RECTORADO UNIVERSIDAD NACIONAL DE LA PATAGONIA)', shortName: "rectorado", number: "53" },
    { path: carpetaMurales + "75-la-vision-de-don-bosco-detalle.jpg", name: '"LA VISIÓN DE DON BOSCO" (CATEDRAL COMODORO)', shortName: "cristo", number: "75" },
    { path: carpetaMurales + "79-la-anunciacion-ambon-catedral.jpg", name: '"LA ANUNCIACIÓN" (CATEDRAL COMODORO)', shortName: "anunciacion", number: "79" },
    { path: carpetaMurales + "81-pescadores-de-hombres-altar-catedral.jpg", name: '"PESCADORES DE HOMBRES" (ALTAR CATEDRAL COMODORO)', shortName: "pescadores", number: "81" },
    { path: carpetaMurales + "82-el-trigo-y-el-pan-de-vida.jpg", name: '"EL TRIGO Y EL PAN DE LA VIDA" (CATEDRAL COMODORO)', shortName: "trigo-pan", number: "82" },
    { path: carpetaMurales + "83-las-vides-y-el-vino-altar-catedral.jpg", name: '"LAS VIDES Y EL VINO" (ALTAR CATEDRAL COMODORO)', shortName: "vino", number: "83" },
    { path: carpetaMurales + "94-campo-y-trabajo-sociedad-rural.jpg", name: '"CAMPO Y TRABAJO" (SOCIEDAD RURAL)', shortName: "campo-trabajo", number: "94" },
    { path: carpetaMurales + "95-vida-y-trabajo-municipalidad.jpg", name: '"VIDA Y TRABAJO" (MUNICIPALIDAD)', shortName: "vida-trabajo", number: "95" },
    { path: carpetaMurales + "433-patagonia-tu-destino-es-levantar-vuelo-aeropuerto.jpg", name: '"PATAGONIA TU DESTINO ES LEVANTAR VUELO" (AEROPUERTO COMODORO)', shortName: "aeropuerto", number: "433" },
    { path: carpetaMurales + "687-patagonia-tierra-generosa-2.jpg", name: '"PATAGONIA TIERRA GENEROSA" (SAN JULIÁN)', shortName: "patagonia-tierra", number: "687" },
];



let pairMurales = '';
let flagMurales = ' active';

murales.forEach(function (imgMural) {

    pairMurales = pairMurales + `
        <div style="height:auto;" class="carousel-item${flagMurales} w-100">
            <div class="row justify-content-center align-items-center d-flex">
                <div class="div-img-mural div-imagen div-imagen-${imgMural.shortName} col-lg-6 col-md-12 col-sm-12 d-flex" style="min-width: 100%;max-width: 100%;">
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

