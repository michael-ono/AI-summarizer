import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Home = () => {

  return (
    <section className="h-[100vh] text-gray-600 body-font bg-black overflow-hidden" style={{backgroundImage: `url(${HomeBg})`}}>
        <div className="mx-auto flex px-5 pt-28 items-center flex-col sticky overflow-hidden">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font text-[2rem] leading-[2.8rem] md:text-[3.5rem] mb-16 font-extrabold text-white sm:leading-[4.0rem]">
              Find your mentor <br /> Unleash your potential
            </h1>
            <p className="text-[1.1rem] md:text-[1.5rem] mb-8 md:mb-16 leading-8 tracking-wider text-gray-400 font-semibold">
              HOLA is a user-friendly mentorship platform designed to connect
              mentors and mentees, foster meaningful connections, and enhance professional growth opportunities among the tech community.
            </p>
            <div className="flex justify-center items-center">
              <button className="ml-4 inline-flex text-white bg-[#9c6927] rounded-full font-semibold border border-black py-3 px-8 hover:bg-transparent hover:border-[#955d21] text-lg items-center" onClick={handleStarted}>
                Get Started
                <FaArrowRight className="ml-4" />
              </button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Home;
