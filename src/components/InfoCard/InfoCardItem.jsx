import Image from "next/image";
import Link from "next/link";

import peachLabsLogo from "../../../public/images/peach_labs.svg"

import { BsGlobe } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


function ContactIcon(props) {
    if (props.icon == 'globe') {
        return <BsGlobe fontSize={18} className="text-white"/>;
    } else if (props.icon =='instagram') {
        return <BsInstagram fontSize={18} className="text-white"/>;
    } else if (props.icon =='twitter') {
        return <BsTwitter fontSize={18} className="text-white"/>;
    }
}

const InfoCardItem = (props) => {
    return(
        <div className="bg-peachybeige w-full h-16 flex items-center p-3 rounded-md border-2 border-peachyblue text-peachyblue gap-10">
            <div className="bg-peachyblue h-12 w-12 flex p-3 justify-center items-center rounded-md">
                <Link href={props.link} target="_blank">
                    <ContactIcon icon={props.icon}/>
                </Link>
            </div>
            <h3 className="font-medium">
                <Link href={props.link} target="_blank">
                    {props.text}
                </Link>
            </h3>
        </div>
    );
};

export default InfoCardItem;