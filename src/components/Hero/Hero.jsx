import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local';
import peachLabsLogo from "../../../public/images/peach_labs.svg"

import { BsGlobe } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


const myFont = localFont({ src: '../../../public/fonts/Bladerounded-Regular.ttf' })


const Hero = () => {
    return(
        <div className="bg-peachypeach w-full rounded-t-md h-48 p-3 flex justify-between items-center">
            <div className="flex flex-row justify-start w-1/3 h-4/5">
                <div className="flex justify-center bg-peachyblue w-32 h-32 p-3 rounded-lg border-4 border-white">
                    <Image alt="PeachLabs Logo" src={peachLabsLogo} height={100}/>
                </div>
            </div>
            <div className="flex flex-col w-2/3 h-4/5">
                <div className="flex flex-row justify-end gap-5 w-full h-1/3">
                    <div className="bg-peachyblue h-8 w-12 flex p-3 justify-center items-center rounded-md">
                        <Link href="https://peachlabs.io/" target="_blank">
                            <BsGlobe fontSize={18} className="text-white"/>
                        </Link>
                    </div>
                    <div className="bg-peachyblue h-8 w-12 flex p-3 justify-center items-center rounded-md">
                        <Link href="https://www.instagram.com/peachlabs.io" target="_blank">
                            <BsInstagram fontSize={18} className="text-white"/>
                        </Link>
                    </div>
                    <div className="bg-peachyblue h-8 w-12 flex p-3 justify-center items-center rounded-md">
                        <Link href="https://x.com/ThePeachLabs" target="_blank">
                            <BsTwitter fontSize={18} className="text-white"/>
                        </Link>
                    </div>
                </div>
                <div className="flex items-end justify-end w-full h-2/3">
                    <h1 className={`${myFont.className} text-peachyblue text-4xl`}>Peach Labs</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;