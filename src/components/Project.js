import ProjectCard from "./ProjectCard.js"

import zenpath from "../assets/projects/zenpath.webp"
import toonflix from "../assets/projects/toonflix.webp"
import tetris from "../assets/projects/tetris.webp"



import hr from "../assets/curve-hr.svg"

export default function Project(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of my Projects</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <ProjectCard name="Zen Path" issued="Watch your favorite Cartoons" desc="Developed a meditation website with progressive levels of complexity utilizing Javascript, React, MongoDB and AI." img={zenpath} git="https://github.com/andylinnell/zen-path-react" link="https://zen-path-react.web.app/"/>
                <ProjectCard name="Toonflix" issued="Begginers Guide to Meditation" desc="Developed a Netflix-inspired application with Javascript, React, CSS/HTML, Firestore for database." img={toonflix} git="https://github.com/andylinnell/netflix-react" link="https://netflix-frontend-al.web.app/" />
                <ProjectCard name="Tetris Clone" issued="Tetris Clone" desc="Developed the game tetris using React hooks and Javascript, CSS/HTML." img={tetris} git="https://github.com/andylinnell/tetris-react" link="https://netflix-frontend-al.web.app/"/>

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
