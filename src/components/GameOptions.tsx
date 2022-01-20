import React from "react";
import '../App.css';
import {IState as IProps} from "../containers/App"

const GameOptions: React.FC<IProps> = ({gameOption, setGameOption}) => {
    return (
        <nav>
            {/* <button className="gameButton" onClick={() => setGameOption(1)}>X01</button> */}
            <button className="gameButton" onClick={() => setGameOption(2)}>Around the Clock</button>
            <button className="gameButton" onClick={() => setGameOption(3)}>JDC Challenge</button>
        </nav>
    )
}

export default GameOptions
