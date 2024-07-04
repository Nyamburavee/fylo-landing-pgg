import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sectionone from './components/Sectionone';
import Sectiontwo from './components/Sectiontwo';
import Sectionthree from './components/Sectionthree';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Footer />
    </div>
  );
}

export default App;
