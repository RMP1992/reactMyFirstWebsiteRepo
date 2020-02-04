import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import './css/App.css';
import Text from './components/Text'
import Logos from './components/Logos';


function App() {
  return (
    
      <div id="bodyDiv">
        
        <Nav/>
        <Home name="Ruben" />
        <Text/>
        <Logos/>
        
      </div>
    
  );
}

export default App;
