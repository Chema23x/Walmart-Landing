
import ButtonToReturn from "@/components/buttonToReturn/buttonToReturn";
import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb";
import { Urls } from "@/utils/constants";
import { cleanString } from "@/utils/constants";


const ContentPage = ({ archiveTitle, section, hide}) => {

    if (!archiveTitle) {
        return null; // O manejar de alguna otra forma el caso de archiveTitle undefined
    }

    // Función para encontrar la URL correspondiente al archiveTitle
    const findUrl = () => {
        const cleanedTitle = cleanString(archiveTitle);
        for (const url of Urls) {
            const cleanedUrl = cleanString(url);
            if (cleanedUrl.includes(cleanedTitle)) {
                return url;
            }
        }
        return null; // Si no se encuentra ninguna coincidencia
    };
    
      // URL correspondiente al archiveTitle
      const url = findUrl();
        console.log("vista: " + url)
    return (
        <section className="flex flex-col items-center h-screen w-screen relative">
            <div className="flex w-full h-1/6 items-center my-5">
                {/* Pasa pdfTitle al componente Arrow */}
                <ButtonToReturn
                    hideCurrent={hide}
                    currentPage={archiveTitle} // Utiliza pdfTitle como currentPage
                />
                <BasicBreadcrumbs 
                     previousPage={section}
                     page={archiveTitle}
                     hidePage={hide}
                />
            </div>

        
      {/* Muestra el contenido si se encontró la URL correspondiente */}
      {url && (
                <div className="h-full w-11/12 mb-2 overflow-auto">
                    <iframe src={url} title={archiveTitle} className="w-full h-full" />
                </div>
            )}
        </section>
    );
};

export default ContentPage;