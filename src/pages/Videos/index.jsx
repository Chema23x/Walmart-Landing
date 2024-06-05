
    import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
    import Arrow from "@/components/arrow/arrow";
    import Archives from "@/components/archivesfiles/archives";
    import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb";
    import { videos } from "@/utils/constants";
    import { keys } from "@/utils/constants";
    import { useState } from "react";
    import ContentPage from "../ContentPage/ContentPage";
    import { findUrl } from "@/utils/functions";
    import hero from "../../assets/gifs/sudadera_walmart.gif"
    
    const  VideosPage = () =>{

        const [selectedVideo, setSelectedVideo] = useState(null);
        const [file, setFile] = useState(keys[3])
        
        const handlePdfClick = (archiveTitle) => {
            setSelectedVideo(archiveTitle);
        };
    
    
        return (
        <> 
            <section className={`${selectedVideo === null ? "h-screen w-full relative" : "hidden"}`}>
                <div className="flex w-full items-center my-5">
                    <Arrow
                        currentPage={"Videos"}
                    />
                    <BasicBreadcrumbs
                        previousPage={"Videos"}
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
                {videos.map(archiveTitle => (
                    <Archives 
                        key={archiveTitle}
                        icon={"assets/icons/videosIcon.png"}
                        pdfAlt={"pdfIcon"} 
                        archivetitle={archiveTitle} 
                        onClick={() => handlePdfClick(archiveTitle)}
                        downloadArchive={() => findUrl(archiveTitle)}
                    />
                ))}
                </div>   
                </div>
            </section>

        {selectedVideo && <ContentPage archiveTitle={selectedVideo} section={file}  hide={() => handlePdfClick(null)}/>}
    </>            
        )
    }   

    export default VideosPage;