import Navbar from "./components/navbar/Navbar";
import Hero from "./containers/hero/Hero";
import About from "./containers/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
