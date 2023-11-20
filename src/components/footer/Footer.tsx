import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <img src="/main.png" alt="main" />
      </div>
      <div>© 2023 Tria</div>
      <div className="footer-links">
        <button>Terms of Service</button>
        <button>Privacy Policy</button>
      </div>
    </footer>
  );
}
