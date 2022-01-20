import React, {useState} from "react";
import '../App.css';

export interface IState {
    atcGameList: {
        id: number,
        type: string,
        lives: number,
        throws: number,
        segmentsHit: number,
        segmentsMis: number
    }[]
}

interface Props {
    atcGameList: {
        id: number,
        type: string,
        lives: number,
        throws: number,
        segmentsHit: number,
        segmentsMis: number
    }[]
    setAtcGameList: React.Dispatch<React.SetStateAction<{
        id: number,
        type: string,
        lives: number,
        throws: number,
        segmentsHit: number,
        segmentsMis: number
    }[]>>
}

const typeArr: string[] = ["Standard", "Lives", "Tries"]

const AroundTheClock: React.FC<Props> = ({atcGameList, setAtcGameList}) => {
    const [startGame, setStartGame] = useState(false)
    const [gameType, setGameType] = useState(typeArr[0])
    const [gameLives, setGameLives] = useState(0)
    const [currentSeg, setCurrentSeg] = useState(1)
    const [prevHit, setPrevHit] = useState(-1)
    const [prevLives, setPrevLives] = useState(0)
    const [newAtcGame, setNewAtcGame] = useState({
        id: atcGameList.length + 1,
        type: typeArr[0],
        lives: 0,
        throws: 0,
        segmentsHit: 0,
        segmentsMis: 0
    })
    
    const hitMisFunc = (hitMis: number) => {
        let newArr = newAtcGame
        newArr.throws++
        newArr.segmentsHit += hitMis
        setCurrentSeg(newArr.segmentsHit + 1)
        setNewAtcGame(newArr)
        setPrevHit(hitMis)
    }
    
    const hitMisLives = (hitMis: number) => {
        let newArr = newAtcGame
        newArr.throws++
        setPrevLives(gameLives)
        if (hitMis === 0) {
            if (gameLives === 1) {
                if (currentSeg !== 1) {
                    setGameLives(newAtcGame.lives)
                    setCurrentSeg(currentSeg - 1)
                } else {
                    setGameLives(0)
                }
            } else {
                setGameLives(gameLives - 1)
            }
        } else {
            setGameLives(newArr.lives)
            setCurrentSeg(currentSeg + 1)
            newArr.segmentsHit++
        }
        setNewAtcGame(newArr)
        setPrevHit(hitMis)
    }
    
    const hitMisTries = (hitMis: number) => {
        let newArr = newAtcGame
        newArr.throws++
        newArr.segmentsHit += hitMis
        if (gameLives === 1) {
            setCurrentSeg(currentSeg + 1)
            setGameLives(newAtcGame.lives)
        } else {
            setGameLives(gameLives - 1)
        }
        setNewAtcGame(newArr)
        setPrevHit(hitMis)
    }

    const resetFunc = () => {
        switch (gameType) {
            case typeArr[0]: {
                let newArr = newAtcGame
                newArr.throws--
                newArr.segmentsHit -= prevHit
                setNewAtcGame(newArr)
                setPrevHit(-1)
                break
            }
            case typeArr[1]: {
                let newArr = newAtcGame
                newArr.throws--
                if (prevHit === 0) {
                    if (gameLives === newAtcGame.lives) {
                        setGameLives(1)
                        setCurrentSeg(currentSeg + 1)
                    } else {
                        setGameLives(prevLives)
                    }
                } else {
                    setGameLives(prevLives)
                    setCurrentSeg(currentSeg - 1)
                    newArr.segmentsHit--
                }
                setNewAtcGame(newArr)
                setPrevHit(-1)
                break
            }
            case typeArr[2]: {
                let newArr = newAtcGame
                newArr.throws--
                newArr.segmentsHit -= prevHit
                if (gameLives === 1) {
                    setCurrentSeg(currentSeg - 1)
                    setGameLives(newAtcGame.lives)
                } else {
                    setGameLives(gameLives + 1)
                }
                setNewAtcGame(newArr)
                setPrevHit(-1)
            }
        }
    }

    const setGame = () => {
        let newArr = newAtcGame
        newArr.type = gameType
        newArr.lives = gameLives
        setNewAtcGame(newArr)
        setStartGame(true)
    }

    if (!startGame) {
        if (gameType === typeArr[0]) {
            return (
                <div>
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
                    <br></br>
                    <br></br>
                    <select onChange={(e) => {
                        let changeType = e.target.value
                        if (changeType !== typeArr[0]) setGameLives(1)
                        setGameType(changeType)
                        }}>
                        <option value={typeArr[0]}>{typeArr[0]}</option>
                        <option value={typeArr[1]}>{typeArr[1]}</option>
                        <option value={typeArr[2]}>{typeArr[2]}</option>
                    </select>
                    <br></br>
                    <br></br>
                    <button className="startButton" onClick={() => {setGame()}}></button>
                </div>
            )
        } else {
            return (
                <div>
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
                    <br></br>
                    <br></br>
                    <select onChange={(e) => {
                        let changeType = e.target.value
                        if (changeType === typeArr[0]) setGameLives(0)
                        setGameType(changeType)
                        }}>
                        <option value={typeArr[0]}>{typeArr[0]}</option>
                        <option value={typeArr[1]}>{typeArr[1]}</option>
                        <option value={typeArr[2]}>{typeArr[2]}</option>
                    </select>
                    <input type='number' value={gameLives} min={1} max={9} onChange={(e) => {
                        let changeLives = parseInt(e.target.value)
                        setGameLives(changeLives)
                    }}></input>
                    <br></br>
                    <br></br>
                    <button className="startButton" onClick={() => setGame()}></button>
                </div>
            )
        }    
    } else if (prevHit === -1) {
        switch (gameType) {
            case typeArr[0]: {
                return (
                    <div>
                        <p>Hit segment {newAtcGame.segmentsHit + 1}.</p>
                        <br></br>
                        <label>Throws: {newAtcGame.throws}</label>
                        <br></br>
                        <label>Hits: {newAtcGame.segmentsHit}</label>
                        <br></br>
                        <label>Hit rate: {(newAtcGame.segmentsHit*100/newAtcGame.throws).toFixed(1)}%</label>
                        <br></br>
                        <br></br>
                        <button className="misButton" onClick={() => hitMisFunc(0)}></button>
                        <button className="hitButton" onClick={() => hitMisFunc(1)}></button>
                    </div>
                )
            }
            case typeArr[1]: {
                return (
                    <div>
                        <p>Hit segment {currentSeg}.</p>
                        <label>Lives: {gameLives}</label>
                        <br></br>
                        <label>Throws: {newAtcGame.throws}</label>
                        <br></br>
                        <label>Hits: {newAtcGame.segmentsHit}</label>
                        <br></br>
                        <label>Hit rate: {(newAtcGame.segmentsHit*100/newAtcGame.throws).toFixed(1)}%</label>
                        <br></br>
                        <br></br>
                        <button className="misButton" onClick={() => hitMisLives(0)}></button>
                        <button className="hitButton" onClick={() => hitMisLives(1)}></button>
                    </div>
                )
            }
            case typeArr[2]: {
                return (
                    <div>
                        <p>Hit segment {currentSeg}.</p>
                        <label>Tries left: {gameLives}</label>
                        <br></br>
                        <label>Throws: {newAtcGame.throws}</label>
                        <br></br>
                        <label>Hits: {newAtcGame.segmentsHit}</label>
                        <br></br>
                        <label>Hit rate: {(newAtcGame.segmentsHit*100/newAtcGame.throws).toFixed(1)}%</label>
                        <br></br>
                        <br></br>
                        <button className="misButton" onClick={() => hitMisTries(0)}></button>
                        <button className="hitButton" onClick={() => hitMisTries(1)}></button>
                    </div>
                )
            }
            default: return <></>
        }
    } else if (currentSeg < 21) {
        switch (gameType) {
            case typeArr[0]: {
                return (
                    <div>
                        <p>Hit segment {newAtcGame.segmentsHit + 1}.</p>
                        <br></br>
                        <label>Throws: {newAtcGame.throws}</label>
                        <br></br>
                        <label>Hits: {newAtcGame.segmentsHit}</label>
                        <br></br>
                        <label>Hit rate: {(newAtcGame.segmentsHit*100/newAtcGame.throws).toFixed(1)}%</label>
                        <br></br>
                        <br></br>
                        <button className="misButton" onClick={() => hitMisFunc(0)}></button>
                        <button className="hitButton" onClick={() => hitMisFunc(1)}></button>
                        <button className="undoButton" onClick={() => resetFunc()}></button>
                    </div>
                )
            }
            case typeArr[1]: {
                return (
                    <div>
                        <p>Hit segment {currentSeg}.</p>
                        <label>Lives: {gameLives}</label>
                        <br></br>
                        <label>Throws: {newAtcGame.throws}</label>
                        <br></br>
                        <label>Hits: {newAtcGame.segmentsHit}</label>
                        <br></br>
                        <label>Hit rate: {(newAtcGame.segmentsHit*100/newAtcGame.throws).toFixed(1)}%</label>
                        <br></br>
                        <br></br>
                        <button className="misButton" onClick={() => hitMisLives(0)}></button>
                        <button className="hitButton" onClick={() => hitMisLives(1)}></button>
                        <button className="undoButton" onClick={() => resetFunc()}></button>
                    </div>
                )
            }
            case typeArr[2]: {
                return (
                    <div>
                        <p>Hit segment {currentSeg}.</p>
                        <label>Tries left: {gameLives}</label>
                        <br></br>
                        <label>Throws: {newAtcGame.throws}</label>
                        <br></br>
                        <label>Hits: {newAtcGame.segmentsHit}</label>
                        <br></br>
                        <label>Hit rate: {(newAtcGame.segmentsHit*100/newAtcGame.throws).toFixed(1)}%</label>
                        <br></br>
                        <br></br>
                        <button className="misButton" onClick={() => hitMisTries(0)}></button>
                        <button className="hitButton" onClick={() => hitMisTries(1)}></button>
                        <button className="undoButton" onClick={() => resetFunc()}></button>
                    </div>
                )
            }
            default: return <></>
        }
    } else {
        return (
            <div>
                <p>Final Score</p>
                <br></br>
                <label>Throws: {newAtcGame.throws}</label>
                <br></br>
                <label>Hits: {newAtcGame.segmentsHit}</label>
                <br></br>
                <label>Hit rate: {(newAtcGame.segmentsHit*100/newAtcGame.throws).toFixed(1)}%</label>
                <br></br>
                <br></br>
                <button className="submitButton" onClick={() => {
                    setAtcGameList([...atcGameList, newAtcGame])
                    setNewAtcGame({
                        id: atcGameList.length + 2,
                        type: typeArr[0],
                        lives: 0,
                        throws: 0,
                        segmentsHit: 0,
                        segmentsMis: 0
                    })
                    setGameType(typeArr[0])
                    setGameLives(1)
                    setCurrentSeg(1)
                    setStartGame(false)
                }}></button>
                <button className="undoButton" onClick={() => resetFunc()}></button>
            </div>
        )
    }
}

export default AroundTheClock