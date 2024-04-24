import { cleanString } from "@/utils/constants";
import { Urls } from "@/utils/constants";

 // Función para encontrar la URL correspondiente al archiveTitle
 export const findUrl = (archiveTitle) => {
    const cleanedTitle = cleanString(archiveTitle);
    for (const url of Urls) {
        const cleanedUrl = cleanString(url);
        if (cleanedUrl.includes(cleanedTitle)) {
            const link = document.createElement('a');
            link.href = url;
            if(url.includes("pdf")){
                link.download = `${archiveTitle}.pdf`;
                link.click();
            }else if(url.includes("mp4")){
                link.download = `${archiveTitle}.mp4`;
                link.click();
            }else{
                link.download = `${archiveTitle}.png`;
                link.click();
            }
        }
    }
    return null; // Si no se encuentra ninguna coincidencia
};