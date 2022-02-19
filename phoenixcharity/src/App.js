import './App.css';
import Navigation from './components/navigation/Navigation';

import homeImg from './resources/homepg.png';

function App() {
  return (
    <div className="App">
      <Navigation/>

      <div class="grid-50-50-layout">
        <div class="image container">
          <img src={homeImg} alt="child"></img>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
