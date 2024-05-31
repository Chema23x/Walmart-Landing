import Link from 'next/link'

const OptionFrame = ({ icon, altIcon, iconText, linkTo, iconClassName, children }) => {
    return (
        <div className="w-full h-full rounded-md relative" style={{ backgroundColor: "#004B8D" }}>
            <Link href={linkTo} className="w-full h-full block">
                <img className="absolute bottom-0 h-3/6 w-full md:w-11/12" src="assets/bgImages/Vector1.png" alt="Forma incluida en el fondo del componente" />
                {icon !== "" ?
                <img className={iconClassName} src={icon} alt={altIcon} />
                :
                children
                }
                <h1 className="absolute bottom-1 left-1 md:left-2 text-white md:text-xl">{iconText}</h1>
            </Link>
        </div>
    );
};

export default OptionFrame;