import React from "react";
import '../App.css';
import {IState as IProp} from './AroundTheClock';

const Statistics: React.FC<IProp> = ({atcGameList}) => {
    
    var totThrows = 0

    for (let i = 0; i < atcGameList.length; i++) {
        totThrows += atcGameList[i].throws;
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Game</th>
                    <th>Throws</th>
                    <th>Hit Rate</th>
                </tr>
                <tr>
                    <td>Average</td>
                    <td>{(totThrows / atcGameList.length).toFixed(1)}</td>
                    <td>{(atcGameList.length*2000 / totThrows).toFixed(1)}%</td>
                </tr>
                {
                        atcGameList.map((game) => {
                            return (
                                <tr key={game.id}>
                                    <td>{game.id}</td>
                                    <td>{game.throws}</td>
                                    <td>{(2000 / game.throws).toFixed(1)}%</td>
                                </tr>
                            )
                        })
                }
            </table>
        </div>
    )
}


export default Statistics