import Link from "next/link";

const Footer = () => {
    return(
        <div className="bg-peachypeach w-full rounded-b-md h-min p-1 mt-2 text-peachyblue">
            <Link href="https://peachlabs.io" target="_blank" className="flex justify-center items-center">
                Powered by PeachLabs
            </Link>
        </div>
    );
};


export default Footer;