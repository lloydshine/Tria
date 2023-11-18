import "./about.css";

import img from "../../assets/tria-andro.png";

export default function About() {
  return (
    <div className="about">
      <div className="comp">
        <h3>Tria</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
          sunt, dolores molestiae laborum itaque eum minima quisquam. Dolore
          voluptas unde tenetur assumenda odio fugit temporibus ex voluptate
          doloribus et.
        </p>
      </div>
      <img src={img} alt="img" />
      <div className="comp">
        <h3>Ameda</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta
          corporis inventore neque dolore officiis ea voluptatibus possimus esse
          blanditiis, vel odit sapiente. Aspernatur at quidem odit suscipit quo
          nostrum.
        </p>
      </div>
    </div>
  );
}
