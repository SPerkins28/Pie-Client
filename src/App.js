import {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth'
import './App.css';
import Pies from './Components/Pies/Pies';

function App() {
  // let name = "";
  // let nameFunction = (newName) => {
  //   name = newName;
  // }

  const [name, setName] = useState("");
  const [token, setToken] = useState(undefined);
  // setName("Russell")

  const viewConductor = () => {
    return token === undefined ? <Auth /> : <Pies />
  }

  return (
    <div className="App">
      {/* <p>This is a test of React!</p>
      <p>Hey this is pretty cool!</p>
      <p>{name}</p> */}
      <Navbar />
      {/* <Auth />
      <Pies /> */}
      {viewConductor()}
    </div>
  );
}

export default App;
