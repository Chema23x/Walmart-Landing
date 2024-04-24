import Link from 'next/link'

const OptionFrame = ({ icon, altIcon, iconText, linkTo, iconClassName }) => {
    return (
        <div className="w-full h-full rounded-md relative" style={{ backgroundColor: "#004B8D" }}>
            <Link href={linkTo} className="w-full h-full block">
                <img className="absolute bottom-0 h-3/6 w-full md:w-11/12" src="assets/bgImages/Vector1.png" alt="Forma incluida en el fondo del componente" />
                <img className={iconClassName} src={icon} alt={altIcon} />
                <h1 className="absolute bottom-2 left-1 md:left-5 md:bottom-4 text-white md:text-2xl">{iconText}</h1>
            </Link>
        </div>
    );
};

export default OptionFrame;