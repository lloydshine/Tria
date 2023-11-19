import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import "./hero.css";
export default function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-text">
        <h1>
          You <span>Decide</span>
        </h1>
        <h2>
          We <span>Create</span>
        </h2>
        <div className="hero-action">
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>
      <div className="hero-image">
        <img src="/logo.png" alt="logo" />
      </div>
    </main>
  );
}
