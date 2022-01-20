import React, { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import Body from '../components/Body'
import Navigation from '../components/Navigation';

export interface IState {
  navOption: number
  setNavOption: React.Dispatch<React.SetStateAction<number>>
  gameOption: number
  setGameOption: React.Dispatch<React.SetStateAction<number>>
}

function App() {
  const [navOption, setNavOption] = useState(0)
  const [gameOption, setGameOption] = useState(0)

  return (
    <div className="App">
      <Header />
      <Navigation navOption={navOption} setNavOption={setNavOption} gameOption={gameOption} setGameOption={setGameOption} />
      <Body navOption= {navOption} gameOption={gameOption}/>
    </div>
  );
}

export default App;
