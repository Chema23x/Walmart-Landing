
// import CustomizedProgressBar from "@/components/circularProgress";
import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import OptionFrame from "@/components/optionFrame/optionFrame";


const LoginPage = () => {


    return(
     <>   
    
  <section className="h-screen w-screen flex flex-col gap-4">
    <div className="flex justify-center items-center w-full h-1/6 lg:mt-2">
        <img className="w-6/12 lg:w-[250px]" src="assets/bgImages/Walmart Logo.png" alt="Walmart Logo" />
    </div>
    <div className="flex flex-col items-center justify-start h-full w-full gap-4 md:gap-7">
        <FrameFullWidth 
            titleFrameFull={"¡Sorprendente!"} 
            textFrameFull={"PDF, imagenes, videos e historietas"}
            imageSource={"assets/hoodies/hoodiePage2.png"}
            imageAlt={"hoodie page 2"}
            textClassname="text-end md:text-center w-10/12 text-xs md:text-2xl mr-5"
            bgImage={""} 
        />
        <div className="flex justify-center items-center w-full h-3/6 md:hidden">

            <div className="grid grid-cols-2 w-10/12 h-full gap-2">
                <OptionFrame 
                    icon={"assets/icons/pdfIcon.png"} 
                    altIcon={"icono pdf"}
                    iconText={"Documentos"}
                    linkTo={"/DocumentsPage"}
                    iconClassName={"absolute top-[20%] left-[35%]"}
                />
                <OptionFrame 
                    icon={"assets/icons/imageIcon.png"} 
                    altIcon={"icono imagen"} 
                    iconText={"Imagenes"}
                    linkTo={"/ImagesPage"}
                    iconClassName={"absolute top-[20%] left-[35%]"}
                />
                <OptionFrame 
                    icon={"assets/icons/videosIcon.png"} 
                    altIcon={"icono video"} 
                    iconText={"Videos"}
                    linkTo={"/VideosPage"}
                    iconClassName={"absolute top-[20%] left-[35%]"}
                />
                <OptionFrame 
                    icon={"assets/icons/bookIcon.png"} 
                    altIcon={"icono book"}
                    iconText={"Historietas"}
                    linkTo={"/ComicsPage"}
                    iconClassName={"absolute top-[20%] left-[35%]"}
                />
            </div>
        </div>

        <div className="hidden md:flex md:justify-center md:items-center md:w-10/12 md:h-3/6 md:gap-10">
            <div className="w-4/12 h-full">
                <OptionFrame 
                        icon={"assets/icons/pdfIcon.png"} 
                        altIcon={"icono pdf"}
                        iconText={"Documentos"}
                        linkTo={"/DocumentsPage"}
                        iconClassName={"h-[90px] absolute top-[20%] left-[38%]"}
                />
            </div>
            <div className="grid grid-rows-2 w-8/12 h-full gap-7">
                <div className="grid grid-cols-2 gap-7">
                    <OptionFrame 
                        icon={"assets/icons/imageIcon.png"} 
                        altIcon={"icono imagen"} 
                        iconText={"Imagenes"}
                        linkTo={"/ImagesPage"}
                        iconClassName={"h-2/6 absolute top-[20%] right-[10%]"}
                    />
                    <OptionFrame 
                        icon={"assets/icons/videosIcon.png"} 
                        altIcon={"icono video"} 
                        iconText={"Videos"}
                        linkTo={"/VideosPage"}
                        iconClassName={"h-2/6 absolute top-[20%] right-[10%]"}
                    />
                </div>
            
                    <OptionFrame 
                        icon={"assets/icons/bookIcon.png"} 
                        altIcon={"icono book"}
                        iconText={"Historietas"}
                        linkTo={"/ComicsPage"}
                        iconClassName={"h-3/6 absolute top-[25%] right-[5%]"}
                    />
        
            </div>
        </div>
        
    </div>
</section>

    </>
    )
}

export default LoginPage;