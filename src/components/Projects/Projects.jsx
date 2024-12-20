import ProjectItem from "./ProjectItem";

import NftProject from "../../../public/images/AZUKI.png"
import Etoy from "../../../public/images/etoy.png"
import Yukitots from "../../../public/images/Yukitots.png"
import Milo from "../../../public/images/Pillow-Milo.png"



const Projects = () => {
    return(
        <div className="w-full rounded-t-md h-max px-3 py-5 flex flex-col justify-between gap-6">
            <h2 className="font-bladeRounded font-bold text-peachyblue text-2xl uppercase">Projects</h2>

            <ProjectItem 
                image = {NftProject}

                title="NFT Project" 
            
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris scelerisque mi malesuada rhoncus vulputate. 
                        Quisque neque arcu, iaculis id gravida eu, vulputate et augue."
                
                link="https://peachlabs.io"
            />

            <ProjectItem 
                image = {Yukitots}

                title="Yukitots" 
            
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris scelerisque mi malesuada rhoncus vulputate. 
                        Quisque neque arcu, iaculis id gravida eu, vulputate et augue."
                
                link="https://peachlabs.io"
            />

            <ProjectItem 
                image = {Milo}

                title="Pillow & Milo" 
            
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris scelerisque mi malesuada rhoncus vulputate. 
                        Quisque neque arcu, iaculis id gravida eu, vulputate et augue."
                
                link="https://peachlabs.io"

            />

            <ProjectItem 
                image = {Etoy}

                title="Etoy" 
            
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris scelerisque mi malesuada rhoncus vulputate. 
                        Quisque neque arcu, iaculis id gravida eu, vulputate et augue."
                
                link="https://etoy.gr"
            />
        </div>
        
    );
};

export default Projects;