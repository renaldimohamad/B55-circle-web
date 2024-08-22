import { Link } from "react-router-dom";
import TItle from "../components/About/Title";

const About = () => {
  return (
    <div>
      <TItle title="About" />

      <Link
        to="/"
        style={{
          color: "black",
          textDecoration: "black",
        }}
      >
        Back To Home
      </Link>
    </div>
  );
};

export default About;
