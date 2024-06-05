import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import Arrow from "@/components/arrow/arrow";
import Archives from "@/components/archivesfiles/archives";
import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb";
import { imgs } from "@/utils/constants";
import { keys } from "@/utils/constants";
import { useState } from "react";
import ContentPage from "../ContentPage/ContentPage";
import { findUrl } from "@/utils/functions";
import hero from "../../assets/gifs/sudadera_walmart.gif"

const ImagesPage = () =>{
    const [selectedImg, setSelectedImg] = useState(null);
    const [file, setFile] = useState(keys[1])
    
    const handlePdfClick = (archiveTitle) => {
        setSelectedImg(archiveTitle);
    };


    return (

    <> 
     <section className={`${selectedImg === null ? "h-screen w-full relative" : "hidden"}`}>
            <div className="flex w-full items-center my-5">
                <Arrow
                    currentPage={"Preguntas frecuentes"}
                />
                <BasicBreadcrumbs
                        previousPage={"Preguntas frecuentes"}
                        page={""}
                />
            </div>

            <div className="flex flex-col items-center h-5/6 w-full gap-4">
            <FrameFullWidth 
                 titleFrameFull={"¡Sorprendete!"}
                 textFrameFull={"PDF, imagenes, videos e historietas"}
                 imageSource={hero}
                 imageAlt={"hero page 1"}
                 textClassname="text-center text-xs md:text-2xl mt-3 lg:text-3xl "
                />
           <div className="flex flex-col w-11/12 items-center mt-5">
                {imgs.map(archiveTitle => (
                    <Archives 
                        key={archiveTitle}
                        icon={""}
                        pdfAlt={""} 
                        archivetitle={archiveTitle} 
                        onClick={() => handlePdfClick(archiveTitle)}
                        downloadArchive={() => findUrl(archiveTitle)}
                    >
                         <svg stroke="white" strokeWidth={20} fill="none" width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                         </svg>
                    </Archives>
                ))}
            </div>  

            </div>
        </section>
        {selectedImg && <ContentPage archiveTitle={selectedImg} section={file}  hide={() => handlePdfClick(null)}/>}

    </>  
    )
}

export default ImagesPage;