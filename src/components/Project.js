import ProjectCard from "./ProjectCard.js"

import zenpath from "../assets/projects/zenpath.webp"
import toonflix from "../assets/projects/toonflix.webp"
import tetris from "../assets/projects/tetris.webp"
import todo from "../assets/projects/todo.webp"
import calc from "../assets/projects/calc.webp"
import beau from "../assets/projects/beau.webp"




// import hr from "../assets/curve-hr.svg"

export default function Project() {
    return (
        <div id="honors" className="mt-4 text-white" style={{ paddingBottom: "50px" }}>
            <h1 className="text-4xl font-bold flex items-center sm:justify-center ">Projects</h1>
            <p className="font-light text-gray-400 sm:text-center text-left">Here are some of my favorite projects I've worked on</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5 ">
                <ProjectCard name="Zen Path" issued="Watch your favorite Cartoons" desc="Developed a meditation website with progressive levels of complexity utilizing Javascript, React, MongoDB and AI." img={zenpath} git="https://github.com/andylinnell/zen-path-react" link="https://zen-path-react.web.app/" />
                <ProjectCard name="Toonflix" issued="Begginers Guide to Meditation" desc="Developed a Netflix-inspired application with Javascript, React, CSS/HTML, Firestore for database." img={toonflix} git="https://github.com/andylinnell/netflix-react" link="https://netflix-frontend-al.web.app/" />
                <ProjectCard name="Tetris Clone" issued="Tetris Clone" desc="Developed the game tetris using React hooks and Javascript, CSS/HTML." img={tetris} git="https://github.com/andylinnell/tetris-react" link="https://tetris-clone-al.web.app/" />


            </div>
            <div className="flex flex-col md:flex-row mt-4 gap-5 ">
                <ProjectCard name="To-Do List" issued=" Task manager and to-do list app" desc="Developed a to do app that marks tasks as complete as well as ability to delete and edit tasks utilizing Javascript, React, HTML and CSS." img={todo} git="https://github.com/andylinnell/To-do-App" link="https://todo-list-al.web.app/" />
                <ProjectCard name="Beau Café" issued="Hot and Cold Coffee Menu" desc="Developed a coffe menu utilizing React hooks useState and useEffect, CSS/HTML" img={beau} git="https://github.com/andylinnell/beau-cafe" link="https://andy-coffee-react.web.app/" />
                <ProjectCard name="Calculator" issued="Calculator app" desc="Developed a calculaotr app using React, Typescript,  and Material UI." img={calc} git="https://github.com/andylinnell/calculator-app" link="https://calculator-app-al.web.app/" />


            </div>
            {/* <img src={hr} className="w-full mt-8 md:h-2" alt="hr" /> */}
        </div>
    )
}



