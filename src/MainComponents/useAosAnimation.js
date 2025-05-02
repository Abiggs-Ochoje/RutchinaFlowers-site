// useAosAnimation.js
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const useAosAnimation = (duration = 1000, easing ='ease-in-out', once='true') => {

    useEffect(() => {
        AOS.init({
            duration, // Animation duration in milliseconds
            easing, // Easing function
            once, 
        });


        const handleScroll = () => {
            document.querySelectorAll('[data-aos]').forEach((element) => {
                const rect = element.getBoundingClientRect();
            

                // Check if the element has scrolled out of view
                if ( rect.top > window.innerHeight || rect.bottom < 0) {
                    element.classList.add("slideOut");
                } else {
                    element.classList.remove("slideOut")
                }
            })
            };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [duration, easing, once]);
  }
export default useAosAnimation;
