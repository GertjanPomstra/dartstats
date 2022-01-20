import React from "react";
import '../App.css';
import {IState as IProp} from './AroundTheClock';

const Statistics: React.FC<IProp> = ({atcGameList}) => {
    
    let totThrows = 0
    let totHits = 0
    let livesStr: string

    for (let i = 0; i < atcGameList.length; i++) {
        totThrows += atcGameList[i].throws;
        totHits += atcGameList[i].segmentsHit
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Game</th>
                    <th>Type</th>
                    <th>Lives/Tries</th>
                    <th>Throws</th>
                    <th>Hits</th>
                    <th>Hit Rate</th>
                </tr>
                <tr>
                    <td>Average</td>
                    <td></td>
                    <td></td>
                    <td>{(totThrows / atcGameList.length).toFixed(1)}</td>
                    <td>{(totHits / atcGameList.length).toFixed(1)}</td>
                    <td>{(totHits*100 / totThrows).toFixed(1)}%</td>
                </tr>
                {
                        atcGameList.map((game) => {
                            if (game.lives === 0) livesStr = ''
                            else livesStr = String(game.lives)
                            return (
                                <tr key={game.id}>
                                    <td>{game.id}</td>
                                    <td>{game.type}</td>
                                    <td>{livesStr}</td>
                                    <td>{game.throws}</td>
                                    <td>{game.segmentsHit}</td>
                                    <td>{(game.segmentsHit * 100 / game.throws).toFixed(1)}%</td>
                                </tr>
                            )
                        })
                }
            </table>
        </div>
    )
}


export default Statistics