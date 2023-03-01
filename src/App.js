import Contato from "./components/Contato";
import Header from "./components/Header";
import Home from "./components/Home";
import Portifolio from "./components/Portifolio";
import Skills from "./components/Skills";
import Sobre from "./components/Sobre";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
     <SocialLinks/>
      <Header />
      <Home />
      <Sobre />
     <Portifolio />
     <Skills />
     <Contato />
    </div>
  )
}

export default App;
