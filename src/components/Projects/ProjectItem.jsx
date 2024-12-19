import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local';
import Azuki from "../../../public/images/AZUKI.png"
import Etoy from "../../../public/images/etoy.png"
import Yukitots from "../../../public/images/Yukitots.png"
import Milo from "../../../public/images/Pillow-Milo.png"

import { FiLink } from "react-icons/fi";


const myFont = localFont({ src: '../../../public/fonts/Bladerounded-Regular.ttf' })


const ProjectItem = (props) => {
    return(
        <div className="bg-peachyblue rounded-xl">
            <Image alt="Azuki Project" src={Azuki} sizes="100%" className="rounded-t-xl" />
            <div className="flex flex-col p-3 gap-5">
                <h3 className="font-extrabold text-peachypeach text-xl uppercase">
                    {props.title}
                </h3>
                <p className="text-peachybeige">
                    {props.paragraph}
                </p>
                <div className="w-full bg-peachymint flex justify-center p-2 rounded-full">
                    <Link href={props.link} target="_blank" className="w-full flex items-center justify-center gap-4">
                        <h4 className="text-peachyblue text-lg font-semibold">Check it</h4>
                        <FiLink fontSize={18} className="text-peachyblue"/>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default ProjectItem;