import { useState } from 'react';
import profile from '../assets/letmeandy.svg';
import profileCenter from '../assets/letandycenter.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Hiro() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div
        id="home"
        className="flex flex-col md:flex-row gap-5 items-center justify-center text-white relative"
        style={{ paddingTop: '80px', paddingBottom: '60px' }}
      >
        <div className="md:w-3/6 md:p-4">
          <img
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={profile}
            alt="profile"
            className="hidden md:block"
            onLoad={() => setLoaded(false)}
          />
          <img
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={profileCenter}
            alt="profileCenter"
            className="md:hidden block"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div className="md:w-3/6" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-4xl font-bold">Andy Linnell</h1>
            <p className="text-2xl font-bold text-gray-300">UX/UI Designer, Software Engineer</p>
            <p className="text-2xl font-light text-gray-400">
              Enthusiastic and motivated self-learning in Information Technology. Interested in exploring front end development, UX/UI, Cloud Computing, DevSecops, and project management. I am currently looking for more experience in my field.
            </p>
          </div>
          <a href="https://bocacode.com/candidates/software-engineer/andy-linnell" className="mt-2 block">
            Go to my Candidate Page
            <FontAwesomeIcon className="ml-2" icon={faCircleArrowRight} />
          </a>
        </div>
      </div>
    </>
  );
}
