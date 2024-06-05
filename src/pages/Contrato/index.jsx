import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import Arrow from "@/components/arrow/arrow";
import Archives from "@/components/archivesfiles/archives";
import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb";
import { contract } from "@/utils/constants";
import { keys } from "@/utils/constants";
import { useState } from "react";
import ContentPage from "../ContentPage/ContentPage";
import { findUrl } from "@/utils/functions";
import hero from "../../assets/gifs/sudadera_walmart.gif"

const ComicsPage = () =>{

    const [selectedContract, setSelectedContract] = useState(null);
    const [file, setFile] = useState(keys[2])
    
    const handlePdfClick = (archiveTitle) => {
        setSelectedContract(archiveTitle);
    };

    return (
    <> 
        <section className={`${selectedContract === null ? "h-screen w-full relative" : "hidden"}`}>
            <div className="flex w-full items-center my-5">
                <Arrow
                    currentPage={"Contrato"}
                />
                <BasicBreadcrumbs
                        previousPage={"Contrato"}
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
                {contract.map(archiveTitle => (
                    <Archives 
                        key={archiveTitle}
                        icon={"assets/icons/bookIcon.png"}
                        pdfAlt={"pdfIcon"} 
                        archivetitle={archiveTitle} 
                        onClick={() => handlePdfClick(archiveTitle)}
                        downloadArchive={() => findUrl(archiveTitle)}
                    />
                ))}
            </div>    
            </div>
        </section>
        {selectedContract && <ContentPage archiveTitle={selectedContract} section={file}  hide={() => handlePdfClick(null)}/>}
    </>
    )
}

export default ComicsPage;