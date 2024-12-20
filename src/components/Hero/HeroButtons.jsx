import ContainerIcons from "../Misc/ContainerIcons";
import Link from "next/link";


const HeroButtons = (props) => {
    return(
        <div className="bg-peachyblue h-8 w-12 flex p-3 justify-center items-center rounded-md" id={props.id}>
            <Link href={props.link} target="_blank">
                <ContainerIcons icon={props.icon} />
            </Link>
        </div>
    );
};

export default HeroButtons;