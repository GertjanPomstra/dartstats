import React, {useState} from "react";
import '../App.css';
import X01, {IState as IX01State} from "./X01";
import AroundTheClock, {IState as IAtcState} from "./AroundTheClock";
import JdcChallenge, {IState as IJdcState} from "./JdcChallenge";
import AtcStats from './AtcStats';
import JdcStats from './JdcStats';

interface Props {
    navOption: number,
    gameOption: number
}

const Body: React.FC<Props> = ({navOption, gameOption}) => {
    
    const [atcGameList, setAtcGameList] = useState<IAtcState['atcGameList']>([])
    const [jdcGameList, setJdcGameList] = useState<IJdcState['jdcGameList']>([])
    const [x01GameList, setX01GameList] = useState<IX01State['x01GameList']>([])

    switch(navOption){
        case 0: {
            return (
                <div className="body">
                    <h2>Welcome to DartStats.</h2>
                    <p>You throw the darts and we show the stats.</p>
                    This application does not (yet) have a database. Therefore, data will be lost when the page is refreshed. Currently, there are two games available:
                    <ul>
                        <li>Around the Clock</li>
                        <li>JDC Challenge</li>
                    </ul>
                    A short description of each game is shown below.
                    <p>Around the Clock</p>
                    The goal of Around the Clock is to hit every segment of the board in the least number of throws possible. You can make this practice routine harder by only allowing the singles or the inner or outer part of the single. You can also choose to hit doubles or triples.
                    Around the Clock can be played in three variants. Standard, lives and tries.
                    <br></br>
                    <br></br>
                    <b>Lives-variant</b>
                    <br></br>
                    With the lives-variant, you can set a number of lives. The goal is to hit every segment within a number of throws equal to the set number of lives. When this the segment within this number of throws, you proceed to the next segment. Otherwise you fall back to the previous segment. After both cases, your lives will reset. You can't go further down then the first segment and your lives can become zero and then negative, indecating this situation.
                    <br></br>
                    <br></br>
                    <b>Tries-variant</b>
                    <br></br>
                    With the tries-variant, you can set a number of tries for each segment. The goal is get as many hits as possible within the number of tries. It does not matter if you don't hit it or if you hit it multiple times, you will proceed to the next segment after the set number of tries. 
                    <p>JDC Challenge</p>
                    The goal of the JDC Challenge is to get the highest amount of points possible. You get three throws for each segment in the segment sections and one throw per double in the doubles section.
                    In the segment sections, points are earned by hitting the right section. The number of the segment determines the amount of points. A double doubles that amount and a triple triples it. For example, when you need to throw 10's and you throw a single 10, a single 15 and a triple 10, you score 10 + 0 + 30 = 40 points. If you manage to throw a single, a double and a triple within one segment (that is called a shanghai), you get 100 bonus points.
                    In the doubles section, you get one dart per double, starting with the double 1 and ending with the bullseye. For each hit you get 50 points, except for the bullseye, which give 100 points.
                </div>
            )
        }
        case 1: {
            switch(gameOption){
                case 0: {
                    return (
                        <div className="body">
                            <h2>Darts</h2>
                            Ready for a game of darts? We offer not one, but two practice games to up your game!
                        </div>
                    )
                }
                case 1: {
                    return (
                        <div className="body">
                            <h2>X01</h2>
                            <X01 x01GameList={x01GameList} setX01GameList={setX01GameList}/>
                        </div>
                    )
                }
                case 2: {
                    return (
                        <div className="body">
                            <h2>Around the Clock</h2>
                            <AroundTheClock atcGameList={atcGameList} setAtcGameList={setAtcGameList}/>
                        </div>
                    )
                }
                case 3: {
                    return (
                        <div className="body">
                            <h2>JDC Challenge</h2>
                            <JdcChallenge jdcGameList={jdcGameList} setJdcGameList={setJdcGameList}/>
                        </div>
                    )
                }
                default: {
                    return (
                        <div className="body">
                            <h2>GameField</h2>
                            No option is selected. Some how.
                        </div>
                    )
                }
            }
        }
        case 2: {
            switch(gameOption){
                case 0: {
                    return (
                        <div className="body">
                            <h2>Stats</h2>
                            Want to see your statistics? Pick the game for which you want to see your statistics.
                        </div>
                    )
                }
                case 1: {
                    return (
                        <div className="body">
                            <h2>X01 statistics</h2>
                            {/* <X01Stats x01GameList={x01GameList}/> */}
                            Not yet here.
                        </div>
                    )
                }
                case 2: {
                    return (
                        <div className="body">
                            <h2>Around the Clock statistics</h2>
                            <AtcStats atcGameList={atcGameList}/>
                        </div>
                    )
                }
                case 3: {
                    return (
                        <div className="body">
                            <h2>JDC Challenge statistics</h2>
                            <JdcStats jdcGameList={jdcGameList}/>
                        </div>
                    )
                }
                default: {
                    return (
                        <div className="body">
                            <h2>GameField</h2>
                            No option is selected. Some how.
                        </div>
                    )
                }
            }
        }
        default: {
            return (
                <div className="body">
                    <h2>There are more options?</h2>
                    No option is selected. Some how.
                </div>
            )
        }
    }
    
}

export default Body