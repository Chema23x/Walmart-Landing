// Pdfs
export const pdfs = [
    "Preciador WM",
    "Bitácora Ventas",
    "Call Center"  
]

//Images

export const imgs = [
    "Preguntas frecuentes"
]


//Comics
export const contract = [
    "TripticoWalmart2023Salida"
]

//Videos
export const videos = [
    "Video Corporativo"
]

//Tops
export const tops = [
    "RECONOCIMIENTOS HTS importe",
    "RECONOCIMIENTOS HTS conv",
    "RECONOCIMIENTOS HTS contratos",
    "RECONOCIMIENTOS HTS dtto"
]


//Pages

export const pages = {
    Herramientas_de_trabajo: "/documentsPage",
    Preguntas_frecuentes: "/imagesPage",
    Contrato: "/comicsPage",
    Videos: "/videosPage",
    Reconocimientos_HTS_2024: "/TopPage"
};

// Función para formatear las claves
function formatPageName(name) {
    return name.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

//Keys

export const keys = Object.keys(pages).map(key => formatPageName(key));


//Urls

export const Urls = [
    "/assets/imagenes/preguntasfrecuentes.pdf",
    "/assets/pdfs/PreciadorWM.pdf",
    "/assets/pdfs/Bitácora Ventas.pdf",
    "/assets/pdfs/Callcenter.pdf",
    "/assets/contrato/TripticoWalmart2023Salida.pdf",
    "/assets/videos/VideoCorporativo.mp4",
    "/assets/tops/RECONOCIMIENTOS HTS importe.pdf",
    "/assets/tops/RECONOCIMIENTOS HTS conv.pdf",
    "/assets/tops/RECONOCIMIENTOS HTS contratos.pdf",
    "/assets/tops/RECONOCIMIENTOS HTS dtto.pdf",
]

//Function

  // Función para limpiar el título y la URL para hacer coincidir
 export const cleanString = (str) => {
    // Reemplazar caracteres acentuados con sus equivalentes no acentuados
    const withoutAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return withoutAccents.toLowerCase().replace(/\s+/g, ''); // Elimina espacios y convierte a minúsculas
};

// Generar OptionsFrames

export const components = [
    {icon: "assets/icons/pdfIcon.png", altIcon: "icono pdf", iconText:"Herramientas de trabajo",linkTo: "/Herramientas_de_trabajo"},
    {icon: "assets/icons/imageIcon.png",altIcon:"icono imagen", iconText:"Preguntas frecuentes",linkTo:"/Preguntas_frecuentes"},
    {icon: "assets/icons/videosIcon.png",altIcon:"icono video",iconText:"Videos",linkTo:"/Videos"},
    {icon: "assets/icons/bookIcon.png",altIcon:"icono book", iconText:"Contrato",linkTo:"/Contrato"},
    {icon: "",altIcon:"", iconText:"Reconocimientos HTS 2024",linkTo:"/TopPage"}
]