import Navbar from "./components/navbar/Navbar";
import Hero from "./containers/hero/Hero";
import About from "./containers/about/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
