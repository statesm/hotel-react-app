import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          THIS IS SEREM LEARNING REACT JS
        </p>
        <a
          className="App-link"
          href="https://twitter.com/dickson_kemoi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on twitter
        </a>
      </header>
    </div>
  );
}

export default App;
