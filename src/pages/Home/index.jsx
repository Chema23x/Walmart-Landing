
// import CustomizedProgressBar from "@/components/circularProgress";
import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import OptionFrame from "@/components/optionFrame/optionFrame";
import { components } from "@/utils/constants";
import Image from "next/image";
import walmartLogo from "../../assets/img/walmart-logo.png"
const LoginPage = () => {


    return(
     <>   
        <section className="h-screen w-full flex flex-col md:gap-4">
            <header className="flex justify-center items-center w-full h-[90px] md:h-1/6 lg:mt-2">
                <Image src={walmartLogo}/>
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
                        >
                              <svg stroke='white' strokeWidth={16} fill='none' className='absolute left-[50%] top-[50%] -translate-y-[70%] -translate-x-[50%]' width={50}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        </OptionFrame>
                    ))}
                </div>
                </div>

                <div className="hidden md:flex md:justify-center md:items-center md:w-10/12 md:h-3/6 md:gap-10">
                    <div className="w-4/12 h-full">
                        <OptionFrame 
                                icon={"assets/icons/pdfIcon.png"} 
                                altIcon={"icono pdf"}
                                iconText={"Herramientas de trabajo"}
                                linkTo={"/Herramientas_de_trabajo"}
                                iconClassName={"h-[90px] absolute top-[20%] left-[38%]"}
                        />
                    </div>
                    <div className="grid grid-cols-2 w-8/12 h-full gap-7">
                            <OptionFrame 
                                icon={""} 
                                altIcon={"icono imagen"} 
                                iconText={"Preguntas frecuentes"}
                                linkTo={"/Preguntas_frecuentes"}
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
                                linkTo={"/Videos"}
                                iconClassName={"h-2/6 absolute top-[20%] right-[10%]"}
                            />
                            <OptionFrame 
                                icon={"assets/icons/bookIcon.png"} 
                                altIcon={"icono book"}
                                iconText={"Contrato"}
                                linkTo={"/Contrato"}
                                iconClassName={"h-3/6 absolute top-[25%] right-[5%]"}
                            />
                            <OptionFrame 
                                icon={""} 
                                altIcon={"icono phone"}
                                iconText={"Datos de contacto"}
                                linkTo={"/Datos_de_contacto"}
                                iconClassName={"h-3/6 absolute top-[25%] right-[5%]"}
                            >
                              <svg stroke='white' strokeWidth={20} fill='none' className='absolute top-[20%] right-6' width={60} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>

                              </OptionFrame>
                    
                    </div>
                </div>
                
            </div>
        </section>

    </>
    )
}

export default LoginPage;