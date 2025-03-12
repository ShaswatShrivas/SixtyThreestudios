import Canvas from "./Canvas";
import "./index.css";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, { top: e.clientY, left: e.clientX });
          gsap.to("body", {
            color: "#000",
            backgroundColor: "#ff6600",
            duration: 1.2,
            ease: "power2.inOut",
          });
          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, { scale: 0, clearProps: "all" });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }
        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    if (headingElement) {
      headingElement.addEventListener("click", handleClick);
    }

    return () => {
      if (headingElement) {
        headingElement.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <span ref={growingSpan} className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5 "></span>
      <div className="w-full min-h-screen relative font-[Helvetica_Now_Display] flex flex-col items-center">
        {showCanvas && data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        <div className="w-full h-screen px-4 lg:px-20">
          <nav className="w-full p-4 lg:p-8 flex justify-between z-50">
            <div className="brand text-2xl font-regular mt-[-40px]">Sixtyʒstudios</div>
            <div id="home" className="links flex gap-4 lg:gap-10 mt-[-40px] ">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a
                  key={link.toLowerCase()}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm md:text-md hover:text-gray-300"
                  onClick={handleClick}
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer px-[5%] md:px-[20%]">
            <div className="text w-full md:w-[60%]">
              <h3 className="text-3xl md:text-4xl leading-[1.5]">
                An immersive digital experience website.
              </h3>
              <p className="text-base md:text-lg w-full md:w-[80%] mt-4 md:mt-10 font-normal">
                As a web developer, I specialize in digital design, motion graphics, and creative technology.
              </p>
              <p className="text-lg mt-6"><i>Click on <b>Sixtyʒstudios</b> to trigger Animation!</i></p>
            </div>
          </div>

          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[10rem] md:text-[14rem] lg:text-[17rem] font-normal tracking-tight leading-none pl-5"
            >
              Sixtyʒstudios
            </h1>
          </div>
        </div>
      </div>

      <div id="about" className="w-full relative z-[1] min-h-screen px-4 md:px-10 mt-32">
        {showCanvas && data[1].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        <h1 className="text-5xl md:text-8xl tracking-tighter">About</h1>
        <p className="text-2xl md:text-4xl leading-[1.5] w-full md:w-[80%] mt-10 font-light">
        Welcome to my digital portfolio—a reflection of my journey as a web developer. This website showcases my skills in frontend development, emphasizing innovative digital design, motion graphics, and creative technology. My goal is to continuously enhance user experiences and expand my expertise through practical and thoughtful approaches. Through this project, I aim to diversify my skills in frontend development and demonstrate my ability to craft seamless and engaging digital solutions.
        </p>
      </div>

      <div id="projects" className="w-full relative z-[1] min-h-screen px-4 md:px-10">
        {showCanvas && data[2].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        <h1 className="text-5xl md:text-8xl tracking-tighter">Projects</h1>
        <p className="text-2xl md:text-4xl leading-[1.5] w-full md:w-[80%] mt-10 font-light">
          Here are some of my recent projects that showcase my skills and creativity in web development.
        </p>
        <ul className="mt-10 mb-20 space-y-2">
          <li><a href="https://shaswatshrivasportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-300">1. Modern Style Next.js Portfolio</a></li>
          <li><a href="https://shazverse-themovieverse.vercel.app" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-300">2. Shazverse</a></li>
          <li><a href="https://beatdhacker.vercel.app" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-300">3. BeatDHacker</a></li>
          <li><a href="https://github.com/ShaswatShrivas/forecastify" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-300">4. Forcastǐfy</a></li>
          <li><a href="https://imageinfinity.vercel.app" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-300">5. ImageInfinity</a></li>
        </ul>

        <div id="contact">
          <h1 className="text-5xl md:text-8xl tracking-tighter mt-[32px]">Contact</h1>
          <p className="text-2xl md:text-4xl leading-[1.5] w-full md:w-[80%] mt-10 font-light">
            If you would like to get in touch, feel free to <a href="mailto:your-email@example.com" className="font-bold">send me an email</a>.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
