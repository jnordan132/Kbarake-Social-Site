import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Socials from "./components/Socials"
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div>
        <Header />
      </div>
      <div>
      <Socials />
      </div>
      <div id="footerSection">
        <Footer />
      </div>
    </div>
  );
}

export default App;
