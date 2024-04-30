import logo from './logo.svg';
import PopUpNeoMorph from './Components/ModalNeoMorph/PopUpNeoMorph';
import PopUpGlass from './Components/ModalGlass/PopUpGlass';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PopUpNeoMorph />
        <PopUpGlass />
      </header>
    </div>
  );
}

export default App;
