import React from 'react';
import './App.css';

import UserInterface from "./UserInterface"
import StylesContext from "./StylesContext";


function App() {
  const stylin = {
    background: "#224466",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 5,
    border: "2px solid #1ECD97",
    borderRadius: 30,
    marginLeft:"auto",
    marginRight:"auto",
    textAlign:"center"
  }

  return (
    <main>

      <StylesContext.Provider value={stylin}>
        <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy", 
            fontSize: 50
          }}
        >
          Welcome to Comics Galore!  
        </h1>
        <UserInterface />
      </StylesContext.Provider>
     
    </main> 
  );
}

export default App;
