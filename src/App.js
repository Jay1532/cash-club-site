import './App.css';
import Home from './components/Home';
import Clubs from './components/Clubs';
import Donate from './components/Donate';
import About from './components/About';
import Events from './components/Events';

function App() {
  return (
    <div>
      <Home/>
      <Clubs/>
      <Donate/>
      <About/>
      <Events/>
    </div>
  );
}

export default App;