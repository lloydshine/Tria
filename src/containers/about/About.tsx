import "./about.css";

import img from "../../assets/tria-andro.png";
import ameda from "../../assets/ameda.png";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about">
        <div className="comp">
          <img src="/main.png" alt="main" />
          <h3>Tria</h3>
          <p>
            Tria Web Design and Development is a cutting-edge digital agency
            specializing in creating bespoke and innovative online experiences.
            With a commitment to excellence and a passion for technology, Tria
            is dedicated to helping businesses establish a strong online
            presence and achieve their digital goals
          </p>
        </div>
        <img className="about-img" src={img} alt="img" />
        <div className="comp">
          <img src={ameda} alt="main" />
          <h3>Ameda</h3>
          <p>
            Ameda Visuals is a visionary 3D artist company dedicated to pushing
            the boundaries of visual storytelling through stunning
            three-dimensional artistry. With a team of passionate and skilled
            artists, Ameda Visuals specializes in creating immersive and
            captivating 3D visuals that bring ideas to life in the most
            compelling and imaginative ways.
          </p>
        </div>
      </div>
      <div className="about-inno">
        <h2>
          Unlocking Synergy: Collaboration Between{" "}
          <span className="main">Tria</span> and{" "}
          <span className="main2">Ameda</span>
        </h2>
        <ul>
          <li>
            <p>Immersive Web Environments</p>
          </li>
          <li>
            <p>Interactive Product Showcases</p>
          </li>
          <li>
            <p>Architectural Visualization Beyond Boundaries</p>
          </li>
          <li>
            <p>Branding with a Visual Edge</p>
          </li>
          <li>
            <p>Engaging Virtual Reality (VR) Experiences</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
