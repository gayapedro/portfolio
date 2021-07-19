import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Header />
      <About />
      <Education />
    </div>
  );
}

export default App;
