import Temperature from './components/temp/temp';
import Humidity from './components/hum/hum';
import GreenLed from './components/green/green';
import RedLed from './components/red/red';
import Gas from './components/gas/gas';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Temperature />
        <Humidity />
        <Gas />
      </header>
        
      <header className="App-header">
        <GreenLed />
        <RedLed />
      </header>
    </div>
  );
}

export default App;
