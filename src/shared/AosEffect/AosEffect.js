import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AosEffect = () => {
  useEffect(() => {
    Aos.init({
    });
  }, []);
};

export default AosEffect;
