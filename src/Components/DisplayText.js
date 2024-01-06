import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = -1;
    const typingInterval = setTimeout(() => {setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed)},500)

    return () => {
        clearInterval(typingInterval);
        const timeout = setTimeout(() => {
        setDisplayText("")
        }, 500);
    };
  }, [text, speed]);

  return displayText;
};


const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);
    return <p>{displayText}</p>;
  };
  
  export default Typewriter;