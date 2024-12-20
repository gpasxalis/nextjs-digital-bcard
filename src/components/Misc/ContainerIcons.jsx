import { BsGlobe } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


const ContainerIcons = (props) => {
    if (props.icon == 'globe') {
        return <BsGlobe fontSize={18} className="text-white"/>;
    } else if (props.icon =='instagram') {
        return <BsInstagram fontSize={18} className="text-white"/>;
    } else if (props.icon =='twitter') {
        return <BsTwitter fontSize={18} className="text-white"/>;
    }
};


export default ContainerIcons;
