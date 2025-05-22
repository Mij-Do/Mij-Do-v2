import { useState, useEffect } from "react";

interface TypingTextProps {
texts: string[];
typingSpeed?: number;     
deletingSpeed?: number;         
}

const TypingText = ({
texts,
typingSpeed = 100,
deletingSpeed = 50,
}: TypingTextProps) => {
const [text, setText] = useState("");          
const [isDeleting, setIsDeleting] = useState(false); 
const [loopNum, setLoopNum] = useState(0);     
const [delta, setDelta] = useState(typingSpeed); 

useEffect(() => {
    const fullText = texts[loopNum % texts.length];

    const timer = setTimeout(() => {
    setText((prev) =>
        isDeleting ? prev.slice(0, -1) : fullText.substring(0, prev.length + 1)
    );

    
    if (!isDeleting && text === fullText) {
        setDelta(deletingSpeed);
        setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setDelta(typingSpeed);
        setLoopNum((prev) => prev + 1);
    }
    }, delta);

    return () => clearTimeout(timer);
}, [text, isDeleting, loopNum, texts, typingSpeed, deletingSpeed]);

return (
    <h1 className="text-white  rounded-md p-2 mb-5 text-3xl">
        {text}
        <span className="inline-block w-1 h-8 bg-white ml-1 animate-pulse"></span>
    </h1>
);
};

export default TypingText;