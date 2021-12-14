import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Button from './Button';
import Employee from './Employee';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<a
          className="App-link"
          href="https://youtu.be/XCs7FacjHQY"
          target="_blank"
          rel="noopener noreferrer"
        >
          kunwari di babagsak
        </a>
		
        <p>
          ano yan kapatid
        </p>
		
		<Greet/>
		<Button/>
		
      </header>
    </div>
  );
}

export default Home;
