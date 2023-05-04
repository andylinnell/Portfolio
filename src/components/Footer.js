// import hr from '../assets/curve-hr.svg'
import {  faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';



export default function Footer() {
  return (
    <div className="mt-4 bg-black-200 rounded-md text-white px-8 py-4">
      <ul className='flex mt-2 gap-4 items-center justify-center pb-3'>

        <li>
          <a href='https://github.com/andylinnell' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2x' icon={faGithub} /></a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/andylinnell/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2x' icon={faLinkedinIn} /></a>
        </li>

      </ul>
      <ul className="flex justify-center gap-4">
        <li><a href="#home" className="hover:underline">About</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#honors" className="hover:underline">Projects</a></li>
        <li><a href="#certs" className="hover:underline">Certificates</a></li>
      </ul>

      
      {/* <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" /> */}

      <p className="text-sm font-light text-center">Copyright © 2023 Andy Linnell. All Right Reserved</p>

    </div>
  )
}
