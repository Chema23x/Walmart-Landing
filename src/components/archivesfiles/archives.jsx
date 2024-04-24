import Link from 'next/link'

const Archives = ({ icon, pdfAlt, archivetitle, onClick, downloadArchive }) => {
    return (
        <div className="flex justify-between h-10 md:h-16 w-11/12 border-b-2 mt-2">
            <div className="flex items-center w-3/4 h-5/6 gap-3 md:gap-10">
                <div className="flex w-[30px] md:w-[45px] h-5/6 justify-center items-center rounded-full" style={{ backgroundColor: "#004B8D" }}>
                    <img className="w-1/2 h-1/2" src={icon} alt={pdfAlt} />
                </div>
                <div className="flex w-10/12 text-xs md:text-lg">
                    {archivetitle}
                </div>
            </div>

            <div className="flex justify-evenly md:justify-end md:gap-10 items-center w-1/4">
                <div>
                    <Link href={"#"}>
                        <button onClick={onClick}>
                            <img src="assets/icons/viewIcon.png" alt="viewIcon.png" />
                        </button>
                    </Link>
                </div>
                <div>
                    <button
                      onClick={downloadArchive}
                    >
                        <img src="assets/icons/downloadIcon.png" alt="downloadIcon.png" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Archives;
