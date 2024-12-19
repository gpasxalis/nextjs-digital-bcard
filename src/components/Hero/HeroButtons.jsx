import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


const HeroIcon = (props) => {
    if (props.icon == 'globe') {
        return <BsGlobe fontSize={18} className="text-white"/>;
    } else if (props.icon =='instagram') {
        return <BsInstagram fontSize={18} className="text-white"/>;
    } else if (props.icon =='twitter') {
        return <BsTwitter fontSize={18} className="text-white"/>;
    }
};

const HeroButtons = (props) => {
    return(
        <div className="bg-peachyblue h-8 w-12 flex p-3 justify-center items-center rounded-md">
            <Link href={props.link} target="_blank">
                <HeroIcon icon={props.icon} />
            </Link>
        </div>
    );
};

export default HeroButtons;