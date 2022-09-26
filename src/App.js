import logo from './logo.svg';
import './App.css';
import One from './Components/One/One';
import Tow from './Components/Tow/Tow';
import Five from './Components/Five/Five';
import Four from './Components/Four/Four';

function App() {
  return (
    <div className="App">
      <h1 style={{ margin: '0px', color: 'white', padding: '10px', backgroundColor: 'gray' }}>This is the Start.</h1>
      <br />
      <Four></Four>

      

      {/* <One></One>
      <Tow></Tow> */}
    </div>
  );
}

export default App;
