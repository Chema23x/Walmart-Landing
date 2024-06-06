import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import Arrow from "@/components/arrow/arrow";
import Archives from "@/components/archivesfiles/archives";
import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb";
import { tops } from "@/utils/constants";
import { keys } from "@/utils/constants";
import { useState } from "react";
import ContentPage from "../ContentPage/ContentPage";
import { findUrl } from "@/utils/functions";
import hero from "../../assets/gifs/sudadera_walmart.gif"

const TopPage = () =>{

    const [selectedTop, setSelectedTop] = useState(null);
    const [file, setFile] = useState(keys[4])
    
    const handlePdfClick = (archiveTitle) => {
        setSelectedTop(archiveTitle);
    };

    return (
    <> 
        <section className={`${selectedTop === null ? "h-screen w-full relative" : "hidden"}`}>
            <div className="flex w-full items-center my-5">
                <Arrow
                    currentPage={"Reconocimientos HTS 2024"}
                />
                <BasicBreadcrumbs
                        previousPage={"Reconocimientos HTS 2024"}
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
                {tops.map(archiveTitle => (
                    <Archives 
                        key={archiveTitle}
                        icon={""}
                        pdfAlt={""} 
                        archivetitle={archiveTitle} 
                        onClick={() => handlePdfClick(archiveTitle)}
                        downloadArchive={() => findUrl(archiveTitle)}
                    >
                        <svg stroke='white' strokeWidth={20} fill='none' width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/>
                        </svg>
                    </Archives>
                ))}
            </div>    
            </div>
        </section>
        {selectedTop && <ContentPage archiveTitle={selectedTop} section={file}  hide={() => handlePdfClick(null)}/>}
    </>
    )
}

export default TopPage;