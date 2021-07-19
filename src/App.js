import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import SideBar from './components/SideBar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <ScrollToTop />
      <Header />
      <About />
      <Education />
    </div>
  );
}

export default App;
