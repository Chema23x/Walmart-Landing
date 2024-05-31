
// import CustomizedProgressBar from "@/components/circularProgress";
import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import OptionFrame from "@/components/optionFrame/optionFrame";
import { components } from "@/utils/constants";

const LoginPage = () => {


    return(
     <>   
    
        <section className="h-screen w-full flex flex-col md:gap-4">
            <header className="flex justify-center items-center w-full h-[90px] md:h-1/6 lg:mt-2">
                <img className="w-6/12 lg:w-[250px]" src="assets/bgImages/Walmart Logo.png" alt="Walmart Logo" />
            </header>
            <div className="flex flex-col items-center justify-start h-full w-full gap-4 md:gap-7">
                <FrameFullWidth 
                    titleFrameFull={"¡Encuentra todo lo que necesitas en un solo lugar!"} 
                    textClassname="text-end md:text-center w-10/12 text-xs md:text-2xl mr-5"
                    bgImage={""}
                    imageSource={""} 
                />
                <div className="flex justify-center items-center w-full h-3/6 md:hidden">

                <div className="grid grid-cols-2 w-10/12 h-full gap-2">
                    {components.map(component =>  (
                        <OptionFrame
                            key={component} 
                            icon={component.icon} 
                            altIcon={component.altIcon}
                            iconText={component.iconText}
                            linkTo={component.linkTo}
                            iconClassName={"absolute top-[20%] left-[35%]"}
                        />
                    ))}
                </div>
                </div>

                <div className="hidden md:flex md:justify-center md:items-center md:w-10/12 md:h-3/6 md:gap-10">
                    <div className="w-4/12 h-full">
                        <OptionFrame 
                                icon={"assets/icons/pdfIcon.png"} 
                                altIcon={"icono pdf"}
                                iconText={"Herramientas de trabajo"}
                                linkTo={"/DocumentsPage"}
                                iconClassName={"h-[90px] absolute top-[20%] left-[38%]"}
                        />
                    </div>
                    <div className="grid grid-cols-2 w-8/12 h-full gap-7">
                            <OptionFrame 
                                icon={""} 
                                altIcon={"icono imagen"} 
                                iconText={"Preguntas frecuentes"}
                                linkTo={"/ImagesPage"}
                                iconClassName={"h-2/6 absolute top-[20%] right-[10%]"}
                            >
                                <svg stroke="white" strokeWidth={20} fill="none" className='absolute top-5 right-8 border-2 p-2 rounded-full w-[60px] h-[60px]' width={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                                </svg>
                            </OptionFrame>    
                            <OptionFrame 
                                icon={"assets/icons/videosIcon.png"} 
                                altIcon={"icono video"} 
                                iconText={"Videos"}
                                linkTo={"/VideosPage"}
                                iconClassName={"h-2/6 absolute top-[20%] right-[10%]"}
                            />
                            <OptionFrame 
                                icon={"assets/icons/bookIcon.png"} 
                                altIcon={"icono book"}
                                iconText={"Contrato"}
                                linkTo={"/ComicsPage"}
                                iconClassName={"h-3/6 absolute top-[25%] right-[5%]"}
                            />
                            <OptionFrame 
                                icon={""} 
                                altIcon={"icono book"}
                                iconText={"Reconocimientos HTS 2024"}
                                linkTo={"/TopPage"}
                                iconClassName={"h-3/6 absolute top-[25%] right-[5%]"}
                            >
                              <svg stroke='white' strokeWidth={20} fill='none' className='absolute top-[20%] right-6' width={75} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/>
                              </svg>

                              </OptionFrame>
                    
                    </div>
                </div>
                
            </div>
        </section>

    </>
    )
}

export default LoginPage;