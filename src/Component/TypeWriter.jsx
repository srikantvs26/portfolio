import Typewriter from "typewriter-effect";
import './TypeWriter.css'


function TypeWriter() {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(25)
            .typeString("Senior Software Engineer")
            .pauseFor(30)
            .deleteChars(24)
            .typeString("Full Stack Developer")
            .pauseFor(30)
            .deleteChars(20)
            .typeString("Computer Science")
            .pauseFor(30)
            .deleteChars(16)
            .start();
        }}
        options={{ loop: true, autoStart: true }}
      />
    </>
  );
}

export default TypeWriter;
