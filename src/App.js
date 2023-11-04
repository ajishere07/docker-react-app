import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Checkout my portfolio by clicking the link.
        </p>
        <a
          className="App-link"
          href="https://portfolio-anujyadav.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
