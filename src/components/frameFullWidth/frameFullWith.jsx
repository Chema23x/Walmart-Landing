
const FrameFullWidth = ({titleFrameFull, textFrameFull,textClassname,  imageSource, imageAlt, bgImage}) => {
    return(
        <section className="flex w-10/12 md:w-10/12 h-[190px] md:h-2/6 rounded-md relative" style={{backgroundColor: "#004B8D"}}>
        <div className="flex justify-center w-5/12 lg:w-5/12">
            <img className="lg:object-cover ml-3  h-full z-20" src={imageSource} alt={imageAlt} />
         </div>
         <div className="flex flex-col items-center justify-center md:justify-evenly w-7/12 lg:w-7/12 h-5/6 text-white relative">
            <h1 className="text-xl md:text-5xl lg:text-6xl leading-10 font-medium">{titleFrameFull}</h1>
            <h2 className={textClassname}>{textFrameFull}</h2>
         </div>
         {bgImage &&
         <img className="h-4/6 w-full absolute z-10 bottom-0 " src={bgImage} alt="imagen para el fondo" />
        }
        </section>
    )
}

export default FrameFullWidth;