// Pdfs
export const pdfs = [
    "Preciador WM",
    "Tríptico Walmart 2023 Salida",  
]

//Images

export const imgs = [
    "Preguntas Frecuentes",
]


//Comics
export const comics = [

]

//Videos
export const videos = [
    "Video Garantía General"
]

//Pages

export const pages = {
    Documentos: "/documentsPage",
    Imagenes: "/imagesPage",
    Historietas: "/comicsPage",
    Videos: "/videosPage"
};

//Keys

export const keys = Object.keys(pages)


//Urls

export const Urls = [
    "/assets/imagenes/preguntasfrecuentes.png",
    "/assets/pdfs/PreciadorWM.pdf",
    "/assets/pdfs/TripticoWalmart2023Salida.pdf",
    "/assets/videos/VideoGarantiaGeneral.mp4"
]

//Function

  // Función para limpiar el título y la URL para hacer coincidir
 export const cleanString = (str) => {
    // Reemplazar caracteres acentuados con sus equivalentes no acentuados
    const withoutAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return withoutAccents.toLowerCase().replace(/\s+/g, ''); // Elimina espacios y convierte a minúsculas
};