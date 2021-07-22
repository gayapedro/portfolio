import './App.css';
import SideBar from './components/SideBar';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <ScrollToTop />
      <Header />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
