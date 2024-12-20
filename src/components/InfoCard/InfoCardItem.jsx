import ContainerIcons from "../Misc/ContainerIcons";
import Link from "next/link";


const InfoCardItem = (props) => {
    return(
        <div className="bg-peachybeige w-full h-16 flex items-center p-3 rounded-md border-2 border-peachyblue text-peachyblue gap-10">
            <div className="bg-peachyblue h-12 w-12 flex p-3 justify-center items-center rounded-md">
                <Link href={props.link} target="_blank">
                    <ContainerIcons icon={props.icon}/>
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