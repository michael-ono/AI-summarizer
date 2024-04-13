import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleStarted = () => {
      let path = "/signup";
      navigate(path);
    }

    return (
        <section className="h-[100vh] text-gray-600 body-font bg-[#3b5d7e] overflow-hidden">
            <div className="mx-auto flex px-5 pt-28 items-center flex-col sticky overflow-hidden">

                {/* Section */}
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font text-[2rem] leading-[2.8rem] md:text-[3.5rem] mb-16 font-extrabold text-white sm:leading-[4.0rem]">
                        Your Digital <br /> AI Summarizer
                    </h1>
                    <p className="text-[1.1rem] md:text-[1.5rem] px-3 mb-8 md:mb-16 leading-8 tracking-wider text-gray-300 font-semibold">
                        Unleash the true potential of words in clean, concise yet powerful tone.
                    </p>
                    <div className="flex justify-center items-center">
                        <button className="ml-4 inline-flex text-white bg-[#9c6927] rounded-2xl font-semibold border border-black py-3 px-14 hover:bg-transparent hover:border-[#955d21] text-lg items-center" onClick={handleStarted}>
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
