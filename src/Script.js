import Typewriter from "./typewriter";
import { FaBeer } from "react-icons/fa";

const Script = () => {
  return (
    <div class="type">
      <h1>
        Hi there,<br></br>My name is <Typewriter text="Dhruv Chaudhary" delay={200} />
      </h1>
      <h3>I'm a Software developer</h3><br></br>
      Hold a <FaBeer /> and Scroll to know me better      
    </div>

  );
};

export default Script;