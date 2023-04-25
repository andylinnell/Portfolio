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


// import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-4xl font-bold flex items-center sm:justify-center" style={{ height: '40px' }}>Skills</h1>
            <p className="font-light text-gray-400 sm:text-center text-left ">Here are some of my strongest skills</p>


            <div className="mt-4" style={{ paddingBottom: "50px" }}>
                <Slider {...settings}>
                <SkillCard name="Python"  img={python} />
                <SkillCard name="Javascript"  img={javascript} />
                <SkillCard name="React"  img={reactIcon} />
                <SkillCard name="Tailwind"  img={tailwind} />
                <SkillCard name="Git"  img={git} />
                <SkillCard name="Express"  img={express} />
                <SkillCard name="HTML 5"  img={html} />
                <SkillCard name="Node.js"  img={nodejs} />
                <SkillCard name="MongoDB"  img={mongo} />
                <SkillCard name="CSS"  img={css} />
                <SkillCard name="Google Cloud"  img={gcp} />
                <SkillCard name="Firebase"  img={firebase} />
                <SkillCard name="Bootstrap"  img={bootstarp} />


                </Slider>
            </div>
            {/* <img src={hr} className="w-full mt-8 md:h-3" alt="hr" /> */}
        </div>
    )
}

