import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink } from "@fortawesome/free-solid-svg-icons";
import {  faGithub } from "@fortawesome/free-brands-svg-icons";


export default function ProjectCard(props) {
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-full md:w-2/6 bg-dark-100 rounded-md py-4 px-4">
            {/* <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img> */}
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <p className="font-light md:text-lg">{props.issued}</p>
                <img src={props.img} className="w-100 max-h-100 mx-auto p-5"></img>
                <p className="font-light text-gray-400">{props.desc}</p>
            </div>
            <div>
                <ul className='flex mt-2 gap-4 items-center'>
                    <li>
                        <a href={props.git} rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                    </li>
                    <li>
                        <a href={props.link} rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLink} style={{color: "#ffffff",}} /></a>
                    </li>
                </ul>
            </div>



        </div>
    )
}
