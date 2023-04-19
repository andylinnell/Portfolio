import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import html from "../assets/skills/html.svg"
import nodejs from "../assets/skills/nodejs.svg"
import mongo from "../assets/skills/mongodb-icon.svg"
import css from "../assets/skills/css-icon.svg"
import gcp from "../assets/skills/google-cloud-icon.svg"
import firebase from "../assets/skills/google-firebase-icon.svg"
import bootstarp from "../assets/skills/bootstrap-5-logo-icon.svg"


import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Python" experience="1 years" img={python} />
                <SkillCard name="Javascript" experience="1 years" img={javascript} />
                <SkillCard name="React" experience="1 years" img={reactIcon} />
                <SkillCard name="Tailwind" experience="1 years" img={tailwind} />
                <SkillCard name="Git" experience="1 years" img={git} />
                <SkillCard name="Express" experience="1 years" img={express} />
                <SkillCard name="HTML 5" experience="1 years" img={html} />
                <SkillCard name="Node.js" experience="1 years" img={nodejs} />
                <SkillCard name="MongoDB" experience="1 years" img={mongo} />
                <SkillCard name="CSS" experience="1 years" img={css} />
                <SkillCard name="Google Cloud" experience="1 years" img={gcp} />
                <SkillCard name="Firebase" experience="1 years" img={firebase} />
                <SkillCard name="Bootstrap" experience="1 years" img={bootstarp} />


                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}


let me = {
    name: "Andy Linnell",
    code: ["Javascript", "Python", "CSS"],
    web: ["React", "Node", "Express", "MongoDB"],
    cloud: ["Google Cloud", "Firebase"],
    agile: ["Scrum", "Kanban", "Jira"],
    message: ["Focused", "Patient", "Team Player"]
}


