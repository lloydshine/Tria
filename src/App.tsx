import { Navbar, Footer } from "./components";
import { Hero, About } from "./containers";

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
