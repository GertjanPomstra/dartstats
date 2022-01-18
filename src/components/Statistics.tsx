import React from "react";
import '../App.css';
import {IState as IAtcState} from './AroundTheClock';
import {IState as IJdcState} from "./JdcChallenge";

interface IState {
    atcGameList: IAtcState["atcGameList"],
    jdcGameList: IJdcState["jdcGameList"]}

const Statistics: React.FC<IState> = ({atcGameList, jdcGameList}) => {
    return(
        <p>Input output</p>
    )
}


export default Statistics