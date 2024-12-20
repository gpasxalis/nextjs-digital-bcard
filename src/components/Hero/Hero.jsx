import HeroButtons from "./HeroButtons";
import Image from "next/image";
import peachLabsLogo from "../../../public/images/peach_labs.svg"



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
                    <HeroButtons link="https://peachlabs.io/" icon="globe" />
                    <HeroButtons link="https://www.instagram.com/peachlabs.io" icon="instagram" />
                    <HeroButtons link="https://x.com/ThePeachLabs" icon="twitter" />
                </div>
                <div className="flex items-end justify-end w-full h-2/3">
                    <h1 className="font-bladeRounded text-peachyblue text-4xl">Peach Labs</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;