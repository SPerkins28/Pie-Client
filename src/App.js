import {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth'
import './App.css';

function App() {
  // let name = "";
  // let nameFunction = (newName) => {
  //   name = newName;
  // }

  const [name, setName] = useState("");
  // setName("Russell")

  return (
    <div className="App">
      {/* <p>This is a test of React!</p>
      <p>Hey this is pretty cool!</p>
      <p>{name}</p> */}
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;
