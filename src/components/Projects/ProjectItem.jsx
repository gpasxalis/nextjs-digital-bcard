import Image from "next/image";
import Link from "next/link";

import { FiLink } from "react-icons/fi";



const ProjectItem = (props) => {
    return(
        <div className="bg-peachyblue rounded-xl">
            <Image alt={props.title} src={props.image} sizes="100%" className="rounded-t-xl" />
            <div className="flex flex-col px-3 py-3.5 gap-3.5">
                <h3 className="font-extrabold text-peachypeach text-xl uppercase">
                    {props.title}
                </h3>
                <p className="text-peachybeige">
                    {props.paragraph}
                </p>
                <div className="w-36 bg-transparent border-2 border-peachymint py-1 rounded-full self-center hover:bg-peachymint text-peachymint hover:text-peachyblue">
                    <Link href={props.link} target="_blank" className="flex items-center justify-center gap-2 uppercase">
                        <FiLink fontSize={16}/>
                        <h4 className="text-md font-semibold">Check it</h4>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default ProjectItem;