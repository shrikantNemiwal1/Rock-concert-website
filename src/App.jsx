import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors/Sponsors";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Events />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
