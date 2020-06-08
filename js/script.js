/*
    CONFIGURACIÓN PERSONAL
*/

//PARA REALIZAR EL ELEMENTO DE CAMBIAR DE IDIOMA
let idiomaEsp = document.getElementById('idiomaEsp');
let idiomaIng = document.getElementById('idiomaIng');
let idiomaEspMovil = document.getElementById('idiomaEspMovil');
let idiomaIngMovil = document.getElementById('idiomaIngMovil');

idiomaEsp.addEventListener('click', (e)=>{
    idiomaEsp.style.backgroundColor = "#17A2B8";
    idiomaEsp.style.color = "#fff"
    idiomaIng.style.backgroundColor = "#fff";
    idiomaIng.style.color = "#000"    
});

idiomaIng.addEventListener('click', (e)=>{
    idiomaIng.style.backgroundColor = "#17A2B8";
    idiomaIng.style.color = "#fff"
    idiomaEsp.style.backgroundColor = "#fff";
    idiomaEsp.style.color = "#000"
});

idiomaEspMovil.addEventListener('click', (e)=>{
    idiomaEspMovil.style.backgroundColor = "#17A2B8";
    idiomaEspMovil.style.color = "#fff"
    idiomaIngMovil.style.backgroundColor = "#fff";
    idiomaIngMovil.style.color = "#000"    
});

idiomaIngMovil.addEventListener('click', (e)=>{
    idiomaIngMovil.style.backgroundColor = "#17A2B8";
    idiomaIngMovil.style.color = "#fff"
    idiomaEspMovil.style.backgroundColor = "#fff";
    idiomaEspMovil.style.color = "#000"
});

//DESPLEGAR Y OCULTAR EL BLOQUE RESERVA
let cabezera = document.getElementById('cabezeraID');
let bloqueReserva = document.getElementById('bloqueReservaID');
let btnReserva = document.getElementById('btnReserva');
let flechaCampana = document.querySelector('.flechaCampana');

function ocultarBloqueReserva(){
    bloqueReserva.setAttribute('data-modo', 'arriba');
    bloqueReserva.style.opacity = 0;
    bloqueReserva.style.display = 'none';
    flechaCampana.classList.add('efectoFlecha');
}

function visibilizarBloqueReserva(){
    bloqueReserva.setAttribute('data-modo', 'abajo');
    bloqueReserva.style.opacity = 1;
    bloqueReserva.style.display = 'block';
    flechaCampana.classList.remove('efectoFlecha');
}

btnReserva.addEventListener('click', (e)=>{
    e.preventDefault();
    if(bloqueReserva.getAttribute('data-modo') == "abajo"){
        ocultarBloqueReserva();
    }else{
        visibilizarBloqueReserva();
        ocultarMenuPrincipal();
    }
});


//DESPLEGAR Y OCULTAR EL MENU PRINCIPAL
let btnMenu = document.getElementById('btnMenu');
let menuGrande = document.getElementById('menuPrincipal');
let menuMovil = document.getElementById('menuPrincipalMovil');

function visibilizarMenuPrincipal(){
    menuGrande.setAttribute('data-modo', 'visible');
    menuGrande.style.opacity = 1;
    menuGrande.style.display = 'block';
}

function ocultarMenuPrincipal(){
    menuGrande.setAttribute('data-modo', 'oculto');
    menuGrande.style.opacity = 0;
    menuGrande.style.display = 'none';
}

function visibilizarMenuPrincipalMovil(){
    menuMovil.setAttribute('data-modo', 'visible');
    menuMovil.style.opacity = 1;
    menuMovil.style.display = 'block';
}

function ocultarMenuPrincipalMovil(){
    menuMovil.setAttribute('data-modo', 'oculto');
    menuMovil.style.opacity = 0;
    menuMovil.style.display = 'none';
}

btnMenu.addEventListener('click', (e)=>{
    let anchoPantalla = screen.width;
    if(anchoPantalla < 992){
        if (menuMovil.getAttribute('data-modo') == "oculto") {
            visibilizarMenuPrincipalMovil()
        } else {
            ocultarMenuPrincipalMovil();
        }
    }else{
        if (menuGrande.getAttribute('data-modo') == "oculto") {
            visibilizarMenuPrincipal()
            ocultarBloqueReserva();
        } else {
            ocultarMenuPrincipal();
        }
    }
});

let opcionesMenu = document.querySelectorAll('#menuPrincipal .nav-item a')

opcionesMenu.forEach((opcion)=>{
    opcion.addEventListener('click', (e)=>{
        ocultarMenuPrincipal();
    })
});

let opcionesMenuMovil = document.querySelectorAll('#menuPrincipalMovil .menuDeNavegacionParaMovil ul li a')

opcionesMenuMovil.forEach((opcion)=>{
    opcion.addEventListener('click', (e)=>{
        ocultarMenuPrincipalMovil();
    })
});


//CONFIGURANDO EL MODAL
let btnRegister = document.getElementById('btnRegistrarse');
let btnLogin = document.getElementById('btnLogin')
let formRegister = document.getElementById('formularioRegister');
let formLogin = document.getElementById('formularioLogin');
let bloqueFooterRegister = document.querySelector('.bloqueFooterRegister');
let bloqueFooterLogin = document.querySelector('.bloqueFooterLogin');
let tituloModal = document.getElementById('tituloModal');


btnRegister.addEventListener('click', (e)=>{
    e.preventDefault();
    tituloModal.innerText = "Registrarse";
    formLogin.style.display = 'none';
    bloqueFooterRegister.style.display = 'none';
    bloqueFooterLogin.style.display = 'block';
    formRegister.style.display = 'block';
});

btnLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    tituloModal.innerText = "Ingresar";
    formRegister.style.display = 'none';
    bloqueFooterLogin.style.display = 'none';
    formLogin.style.display = 'block';
    bloqueFooterRegister.style.display = 'block';
});

//CONFIGURANDO LOS EFECTOS DE LOS PLANES
let items = document.querySelectorAll('.contenedor .item');
let bienvenido = document.querySelector('.descripcion .bienvenido');
let romantico = document.querySelector('.descripcion .romantico');
let lunaDeMiel = document.querySelector('.descripcion .lunaDeMiel');
let aventura = document.querySelector('.descripcion .aventura');
let spa = document.querySelector('.descripcion .spa');

items.forEach(item => { 
    //EVENTO CUANDO EL MOUSE INGRESA SOBRE EL AREA DEL ITEM
    item.addEventListener('mouseenter', (e) => {
        item.children[0].style.height = "25%";
        if(item.classList.contains('item2')){
            bienvenido.classList.replace('d-block', 'd-none');
            romantico.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item3')){
            bienvenido.classList.replace('d-block', 'd-none');
            lunaDeMiel.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item4')){
            bienvenido.classList.replace('d-block', 'd-none');
            aventura.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item5')){
            bienvenido.classList.replace('d-block', 'd-none');
            spa.classList.replace('d-none', 'd-block');
        }
    });

    //EVENTO CUANDO EL MOUSE SALE DEL AREA DEL ITEM
    item.addEventListener('mouseleave', (e) => {
        item.children[0].style.height = "100%";
        if(item.classList.contains('item2')){
            romantico.classList.replace('d-block', 'd-none');
            bienvenido.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item3')){
            lunaDeMiel.classList.replace('d-block', 'd-none');
            bienvenido.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item4')){
            aventura.classList.replace('d-block', 'd-none');
            bienvenido.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item5')){
            spa.classList.replace('d-block', 'd-none');
            bienvenido.classList.replace('d-none', 'd-block');
        }
    });
});

//MOSTRAR Y OCULTAR LOS PLATILLOS DEL RESTAURANTE
let btnVerCarta = document.getElementById('btnVerCarta');
let btnVolver = document.querySelector('.restaurante .btnVolver');
let carta = document.querySelector('.restaurante .carta');
let tarjeta = document.querySelector('.restaurante .tarjeta');

if (btnVerCarta) {
    btnVerCarta.addEventListener('click', (e)=>{
        e.preventDefault();
        let anchoPantalla = screen.width;
        if(anchoPantalla < 992){
            tarjeta.style.display = 'none';
            carta.classList.replace('carta', 'cartaMovil');
        }else{
            if(carta.getAttribute('data-modo') == "oculto"){
                carta.style.opacity = 1;
                carta.setAttribute('data-modo', 'visible');
            }else{
                carta.style.opacity = 0;
                carta.setAttribute('data-modo', 'oculto');
            }
        }
    });
    
    btnVolver.addEventListener('click', (e)=>{
        e.preventDefault();
        carta.classList.replace('cartaMovil', 'carta');
        tarjeta.style.display = 'block';
    });
}

//CONFIGURANDO LOS INPUTS DEL FORMULARIO CONTACTANOS
let nombre = document.getElementById('contactanosNombre');
let apellido = document.getElementById('contactanosApellido');
let movil = document.getElementById('contactanosMovil');
let mensaje = document.getElementById('contactanosMensaje');
let correo = document.getElementById('contactanosCorreoElectronico');

if (screen.width < 576) {
    nombre.classList.remove('form-control-lg');
    apellido.classList.remove('form-control-lg');
    movil.classList.remove('form-control-lg');
    mensaje.classList.remove('form-control-lg');
    correo.classList.remove('form-control-lg');
}

/*
    CONFIGURANDO COMPORTAMIENTO AL HACER SCROLL EN LA PAGINA
*/

let scrollUp = document.getElementById('scrollUp');

window.onscroll = () => {
    //PARA OCULTAR O MOSTRAR EL BLOQUE DE RESERVAS
    if (window.scrollY > 100) {
        ocultarBloqueReserva();
    } else {
        visibilizarBloqueReserva();
    }

    //PARA OCULTAR O MOSTRAR LA FLECHA DEL SCROLLUP
    if (window.scrollY < 600) {
        scrollUp.style.display = 'none'
    } else {
        scrollUp.style.display = 'block'
    }

}

/*
    CONFIGURANDO LA PAGINÁ DE HABITACION.HTML
*/

//CONFIGURACIÓN DE LOS BOTONES DE FOTOS Y VIDEOS
let btnFoto = document.getElementById('btnFotos');
let btnVideo = document.getElementById('btnVideo');
let btn360 = document.getElementById('btn360');
let sliderImagen = document.querySelector('.contenidoPrincipalHabitacion .contenidoCentral .multimediaHabitacion .sliderImagenes');
let video = document.querySelector('.contenidoPrincipalHabitacion .contenidoCentral .multimediaHabitacion .video');
let imagen360 = document.querySelector('.contenidoPrincipalHabitacion .contenidoCentral .multimediaHabitacion .imagen360');


function mostrarVideo(){
    video.classList.replace('d-none', 'd-block');
}

function mostrarSliderDeImagenes(){
    sliderImagen.classList.replace('d-none', 'd-block');
}

function mostrarImagen360(){
    imagen360.classList.replace('d-none', 'd-block');
}

function ocultarVideo(){
    video.classList.replace('d-block', 'd-none');
}

function ocultarSliderDeImagenes(){
    sliderImagen.classList.replace('d-block', 'd-none');
}

function ocultarImagen360(){
    imagen360.classList.replace('d-block', 'd-none');
}

if (btnFoto) {
    btnFoto.addEventListener('click', (e)=>{
        e.preventDefault();
        ocultarVideo();
        ocultarImagen360();
        mostrarSliderDeImagenes();
    });
}

if (btnVideo) {
    btnVideo.addEventListener('click', (e)=>{
        e.preventDefault();
        ocultarSliderDeImagenes();
        ocultarImagen360();
        mostrarVideo();
    });
}

if (btn360) {
    btn360.addEventListener('click', (e)=>{
        e.preventDefault();
        ocultarSliderDeImagenes();
        ocultarVideo();
        mostrarImagen360();
    });
}

//CONFIGURACIÓN DEL DESPLIEGUE DE LA SEGUNDA COLUMNA DE LA PAGINA HABITACION.HTML
let columna = document.querySelector('.contenidoPrincipalHabitacion .contenidoLateralDerecho');

function bajarColumnaLateralDerecha(){
   if(columna){
	columna.style.marginTop = '3rem';
    }
}

bajarColumnaLateralDerecha();

/*
    CONFIGURACIÓN DEL DATEPICKER
*/
$('.datepicker').pickadate({
    monthsFull:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    weekdaysFull:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
    weekdaysShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
    today:"Hoy",
    clear:"Borrar",
    close:"Cerrar",
    firstDay:1,
    format:"dddd d !de mmmm !de yyyy",
    formatSubmit:"dd/mm/yyyy",
    selectYears: true,
    selectMonths:true,
    // Accessibility labels
    labelMonthNext: 'Siguiente Mes',
    labelMonthPrev: 'Anterior Mes',
    labelMonthSelect: 'Seleccione un Mes',
    labelYearSelect: 'Seleccione un Año',
    //Fechas minimas y maximas permitidads
    min: true, //Si coloco el valor en true no permitira seleccionar fechas anteriores
    max: 150, //30 es la cantidad de días posteriores a la actual que se podra seleccionar, este valor se puede modificar
});

/*
    PARA CONFIGURAR EL SLIDER CON SWIPER
*/

let mySwiperBanner = new Swiper ('.swiper-container-banner', {
    //PARA QUE SE AUTO INICIE
    autoplay: {
        delay: 3000,
    },
    //PARA CONTROLAR CON LOS BOTONES DEL TECLADO
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    //LOOP INFINITO
    loop: true,
    //EFECTO AL PASAR EL SLIDE
    effect: 'fade',
    //TIEMPO ENTRE CAMBIO DE IMAGEN
    speed: 700,
    //PARA MOFICAR EL CURSOR: PARA QUE APARESCA LA MANITO
    grabCursor: true
});

let ancho = screen.width;

if(ancho < 425){
    let swiperPlanesMovil = new Swiper('.swiper-planes', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination-planes',
          clickable: true,
        }
    });
}else if(ancho < 576){
    let swiperPlanesMovil = new Swiper('.swiper-planes', {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination-planes',
          clickable: true,
        }
    });
}else{
    let swiperPlanesMovil = new Swiper('.swiper-planes', {
        slidesPerView: 3,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination-planes',
          clickable: true,
        }
    });
}

let mySwiperRecorridoPorElPueblo = new Swiper ('.swiper-container-recorridoPueblo', {
    //PARA QUE SE AUTO INICIE
    autoplay: {
        delay: 3000,
    },
    //ACTIVAR LAS FLECHAS DE NAVEGACIÓN
    navigation: {
        nextEl: '.next-recorridoPueblo',
        prevEl: '.prev-recorridoPueblo',
    },
    //ACTIVANDO LA PAGINACION 
    pagination: {
        el: '.swiper-pagination-recorridoPueblo',
        clickable: true,
    },
    //PARA CONTROLAR CON LOS BOTONES DEL TECLADO
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    //LOOP INFINITO
    loop: true,
    //EFECTO AL PASAR EL SLIDE
    effect: 'fade',
    //TIEMPO ENTRE CAMBIO DE IMAGEN
    speed: 750,
    //PARA MOFICAR EL CURSOR: PARA QUE APARESCA LA MANITO
    grabCursor: true
});

let mySwiperHabitacion = new Swiper ('.swiper-container-habitacion', {
    //PARA QUE SE AUTO INICIE
    autoplay: {
        delay: 3000,
    },
    //ACTIVAR LAS FLECHAS DE NAVEGACIÓN
    navigation: {
        nextEl: '.swiper-button-next-habitacion',
        prevEl: '.swiper-button-prev-habitacion',
    },
    //PARA CONTROLAR CON LOS BOTONES DEL TECLADO
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    //LOOP INFINITO
    loop: true,
    //EFECTO AL PASAR EL SLIDE
    effect: 'fade',
    //TIEMPO ENTRE CAMBIO DE IMAGEN
    speed: 700,
    //PARA MOFICAR EL CURSOR: PARA QUE APARESCA LA MANITO
    grabCursor: true
});

/*
    CONFIGURANDO UNIVERSAL PARALLAX   
*/
new universalParallax().init({
	speed: 6.0
});

/*
    CONFIGURACIÓN DE PANO - PARA LAS IMAGENES DE 360°
*/

$("#myPano").pano({
	img: "img/360.jpg"
});

/*
    CONFIGURACIÓN DE FULL CALENDAR
*/

$('#calendar').fullCalendar({
	header: {
    	left: 'prev',
    	center: 'title',
    	right: 'next'
  },
  events: [
    {
      start: '2019-03-12',
      end: '2019-03-15',
      rendering: 'background',
      color: '#847059'
    },
    {
      start: '2019-03-22',
      end: '2019-03-24',
      rendering: 'background',
      color: '#FFCC29'
    }  
  ]


});
