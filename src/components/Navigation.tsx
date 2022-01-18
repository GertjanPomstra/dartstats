import React from "react";
import '../App.css';
import GameOptions from '../components/GameOptions';
import {IState as IProps} from "../containers/App"

const Navigation: React.FC<IProps> = ({navOption, setNavOption, gameOption, setGameOption}) => {
    if (navOption === 0) {
        setGameOption(0)
        return (
            <div className="navigation">
                <nav>
                    <button className="navButton" onClick={() => setNavOption(0)}>Home</button>
                    <button className="navButton" onClick={() => setNavOption(1)}>Darts</button>
                    <button className="navButton" onClick={() => setNavOption(2)}>Stats</button>
                </nav>
            </div>
        )
    } else {
        return (
            <div className="navigation">
                <nav>
                    <button className="navButton" onClick={() => setNavOption(0)}>Home</button>
                    <button className="navButton" onClick={() => setNavOption(1)}>Darts</button>
                    <button className="navButton" onClick={() => setNavOption(2)}>Stats</button>
                </nav>
                <GameOptions navOption={navOption} setNavOption={setNavOption} gameOption={gameOption} setGameOption={setGameOption} />
            </div>
        )
    }
}

export default Navigation