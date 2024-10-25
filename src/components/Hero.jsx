import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [showScrollButton, setShowScrollButton] = useState(true); // State to track button visibility
  const [isButtonClicked, setIsButtonClicked] = useState(false); // Track if the button is clicked

  // Scroll up handler
  const scrollUp = () => {
    setIsButtonClicked(true); // Mark button as clicked
    window.scrollBy({
      top: window.innerHeight, // Scroll up by one screen height
      behavior: "smooth", // Smooth scroll
    });
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Hide button with transition if user scrolls manually or if clicked
      if (scrollPosition > 100) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
        setIsButtonClicked(false); // Reset the button state when scrolled up
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[64px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#F5B301]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#F5B301]">Oussama</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            At OZMO Studio, creativity knows no bounds. <br className="sm:block hidden" />
            Let's transform your imagination into reality!
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll to top button */}
      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        {showScrollButton && (
          <a
            onClick={scrollUp}
            style={{
              opacity: showScrollButton && !isButtonClicked ? 1 : 0,
              transition: "opacity 0.5s ease-in-out", // Add fade transition
            }}
          >
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
