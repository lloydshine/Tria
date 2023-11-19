import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <img src="/main.png" alt="main" />
      </div>
      <div>© 2023 Tria</div>
      <div className="footer-links links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
      </div>
    </footer>
  );
}
