import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [userInput, setuserInput] = useState({
    Name : " " ,
    Usn : " " ,
    Mob: " ",
    Age: " ",
    Address: " "
  });
  const handleChange = (event) =>
  {
    setuserInput(
      {
      [event.target.value] : (event.target.Name),
      [event.target.value] : (event.target.Usn),
      [event.target.value] : (event.target.Mob),
      [event.target.value] : (event.target.Age),
      [event.target.value] : (event.target.Address)

      })
  }
  const [shouldishowvalue, setshouldishowvalue] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <label>Name</label>
        <input type= "text" onChange = {handleChange} value = {userInput.Name}/>
        <label>Usn</label>
        <input type ="text" onChange = {handleChange} value = {userInput.Usn}/>
        <label>MOB</label>
        <input type= "number" onChange = {handleChange} value = {userInput.Mob}/>
        <label>Age</label>
        <input type = "number" onChange = {handleChange} value = {userInput.Age}/>
        <label>Address</label>
        <input type = "text" onChange = {handleChange} value = {userInput.Address}/>
       <button onClick= {
          
          (
          <h2>userInput.Name</h2>,
          <h2>userInput.Usn</h2>,
          <h2>userInput.Mob</h2>,
          <h2>userInput.Age</h2>,
          <h2>userInput.Address</h2>)
         
          }>
        
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
