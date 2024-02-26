import { logo } from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex w-full justify-between items-center mb-10 pt-3">
            <img src={logo} alt="sumz-logo" className="w-28 object-contain"/>

            <button 
                type="button" 
                onClick={() => {window.open('https://github.com/...')}}
                className="black_btn"
            >
                    Github
            </button>

        </nav>
    </header>
  )
}

export default Hero;