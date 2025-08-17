import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Properties from "./Component/Properties";
import Agents from "./Component/Agents";
import CTA from "./Component/CTA";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  const navItems = ["Home", "About", "Properties", "Agents", "Contact"];
  return (
    <>
      <Header label={navItems} />
      <Home />
      <About />
      <Properties />
      <Agents />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
