import Image from "next/image"
const FrameFullWidth = ({titleFrameFull, textFrameFull,textClassname,  imageSource, imageAlt}) => {
    return(
        <section className="flex w-10/12 md:w-10/12 h-[190px] md:h-2/6 rounded-md relative" style={{backgroundColor: "#004B8D"}}>
        {imageSource !== "" &&    
        <div className="flex justify-center w-5/12 lg:w-5/12 relative">
            <Image className="w-[8rem] h-[14rem] absolute left-0 -translate-y-3" src={imageSource} alt={imageAlt} />
         </div>
         }
         <div className="flex flex-col items-center justify-center md:justify-center w-full h-5/6 text-white relative">
            <h1 className="text-xl md:text-5xl text-center leading-10 font-medium">{titleFrameFull}</h1>
            <h2 className={textClassname}>{textFrameFull}</h2>
         </div>
        </section>
    )
}

export default FrameFullWidth;
