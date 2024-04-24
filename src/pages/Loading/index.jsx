import Image from "next/image";
import LoginPage from "../Home";
import { useState, useEffect } from "react";


const LoadingPage = () =>{
    const [isShowLoadingPage, setShowLoadingPage] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowLoadingPage(false);
        }, 2000);
    
        // Limpiar el temporizador al desmontar el componente
        return () => clearTimeout(timeout);
      }, []); // Se ejecuta solo una vez al montar el componente
      
    return(
        <>
        <section className= {`${isShowLoadingPage ? "h-screen w-screen relative" : "hidden"}`} style={{backgroundColor: "#004B8D"}}>
             <img className="h-4/6 w-full absolute" src="assets/bgImages/loginBg.png" alt="fondo" />
             <div className="flex flex-col justify-start h-full w-full gap-10">
                 <div className="flex justify-center items-center z-10 h-1/6 w-full relative">  
                     <img className="w-8/12 lg:w-5/12 absolute top-10 lg:top-15 xl:left-[400px] 2xl:left-[500px]" src="assets/bgImages/Walmart Logo.png" alt="Walmart Logo" />
                 </div>
                 <div className="flex justify-center items-center z-10 h-4/6 w-full">   
                     <Image className="animation" src="/assets/hoodies/loginHoodie.png" alt="hoodie inicio" width={290} height={250} />
                 </div>
                 {/* <div className="flex justify-center items-center z-10 h-1/6 w-full relative">    
                     <CustomizedProgressBar classname={"absolute left-20"} />
                 </div> */}
             </div>
         </section>
             {!isShowLoadingPage && <LoginPage />}
        </>
         )
}

export default LoadingPage;