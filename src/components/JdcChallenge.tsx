import React, {useState} from "react";
import '../App.css';

export interface IState {
    jdcGameList: {
        id: number,
        a10: number,
        a11: number,
        a12: number,
        a13: number,
        a14: number,
        a15: number,
        d123: number,
        d456: number,
        d789: number,
        d101112: number,
        d131415: number,
        d161718: number,
        d1920b: number,
        b15: number,
        b16: number,
        b17: number,
        b18: number,
        b19: number,
        b20: number
    }[]
}

const totalScore = (jdcGame: {
    id: number,
    a10: number,
    a11: number,
    a12: number,
    a13: number,
    a14: number,
    a15: number,
    d123: number,
    d456: number,
    d789: number,
    d101112: number,
    d131415: number,
    d161718: number,
    d1920b: number,
    b15: number,
    b16: number,
    b17: number,
    b18: number,
    b19: number,
    b20: number
}) => {
    let totScore = 0
    totScore += trueScore(jdcGame.a10, 10)
    totScore += trueScore(jdcGame.a11, 11)
    totScore += trueScore(jdcGame.a12, 12)
    totScore += trueScore(jdcGame.a13, 13)
    totScore += trueScore(jdcGame.a14, 14)
    totScore += trueScore(jdcGame.a15, 15)
    totScore += doubleScore(jdcGame.d123)
    totScore += doubleScore(jdcGame.d456)
    totScore += doubleScore(jdcGame.d789)
    totScore += doubleScore(jdcGame.d101112)
    totScore += doubleScore(jdcGame.d131415)
    totScore += doubleScore(jdcGame.d161718)
    totScore += doubleScore(jdcGame.d1920b, true)
    totScore += trueScore(jdcGame.b15, 15)
    totScore += trueScore(jdcGame.b16, 16)
    totScore += trueScore(jdcGame.b17, 17)
    totScore += trueScore(jdcGame.b18, 18)
    totScore += trueScore(jdcGame.b19, 19)
    totScore += trueScore(jdcGame.b20, 20)
    return totScore
}
const trueScore = (score: number, seg: number) => {
    if (score === -1) {score = 0}
    let trueScore = 0
    let shanghai = 0
    let singles = score % 10
    if (singles !== 0) {
        trueScore += singles * seg
        shanghai++
    }
    let doubles = ((score - singles) / 10 ) % 10
    if (doubles !== 0) {
        trueScore += doubles * 2 * seg
        shanghai++
    }
    let triples = ((score - doubles * 10 - singles) / 100)
    if (triples !== 0) {
        trueScore += triples * 3 * seg
        shanghai++
    }
    if (shanghai === 3) {
        trueScore += 100
    }
    return trueScore
}
const doubleScore = (score: number, bull: boolean = false) => {
    if (score === -1) {score = 0}
    let doubleScore: number
    if (score === 111) {doubleScore = 3}
    else {doubleScore = score % 3}
    doubleScore *= 50
    if (score >= 100 && bull) {
        doubleScore += 50
    }
    return doubleScore
}

interface Props {
    jdcGameList: {
        id: number,
        a10: number,
        a11: number,
        a12: number,
        a13: number,
        a14: number,
        a15: number,
        d123: number,
        d456: number,
        d789: number,
        d101112: number,
        d131415: number,
        d161718: number,
        d1920b: number,
        b15: number,
        b16: number,
        b17: number,
        b18: number,
        b19: number,
        b20: number
    }[]
    setJdcGameList: React.Dispatch<React.SetStateAction<{
        id: number,
        a10: number,
        a11: number,
        a12: number,
        a13: number,
        a14: number,
        a15: number,
        d123: number,
        d456: number,
        d789: number,
        d101112: number,
        d131415: number,
        d161718: number,
        d1920b: number,
        b15: number,
        b16: number,
        b17: number,
        b18: number,
        b19: number,
        b20: number
    }[]>>
}

const JdcChallenge: React.FC<Props> = ({jdcGameList, setJdcGameList}) => {
    const [count, setCount] = useState(1)
    const [score, setScore] = useState(0)
    const [newJdcGame, setNewJdcGame] = useState({
        id: jdcGameList.length + 1,
        a10: -1,
        a11: -1,
        a12: -1,
        a13: -1,
        a14: -1,
        a15: -1,
        d123: -1,
        d456: -1,
        d789: -1,
        d101112: -1,
        d131415: -1,
        d161718: -1,
        d1920b: -1,
        b15: -1,
        b16: -1,
        b17: -1,
        b18: -1,
        b19: -1,
        b20: -1
    })

    let turnCount: number;
    let turnScore: number;
    let strD: string;

    const resetFunc = () => {
        turnCount = 1
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
    }
    
    const a10undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.a10 = -1
        setNewJdcGame(newArr)
    }
    const a11undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.a11 = -1
        setNewJdcGame(newArr)
    }
    const a12undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.a12 = -1
        setNewJdcGame(newArr)
    }
    const a13undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.a13 = -1
        setNewJdcGame(newArr)
    }
    const a14undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.a14 = -1
        setNewJdcGame(newArr)
    }
    const a15undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.a15 = -1
        setNewJdcGame(newArr)
    }
    const d123undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.d123 = -1
        setNewJdcGame(newArr)
    }
    const d456undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.d456 = -1
        setNewJdcGame(newArr)
    }
    const d789undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.d789 = -1
        setNewJdcGame(newArr)
    }
    const d101112undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.d101112 = -1
        setNewJdcGame(newArr)
    }
    const d131415undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.d131415 = -1
        setNewJdcGame(newArr)
    }
    const d161718undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.d161718 = -1
        setNewJdcGame(newArr)
    }
    const d1920bundo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.d1920b = -1
        setNewJdcGame(newArr)
    }
    const b15undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.b15 = -1
        setNewJdcGame(newArr)
    }
    const b16undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.b16 = -1
        setNewJdcGame(newArr)
    }
    const b17undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.b17 = -1
        setNewJdcGame(newArr)
    }
    const b18undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.b18 = -1
        setNewJdcGame(newArr)
    }
    const b19undo = () => {
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.b19 = -1
        setNewJdcGame(newArr)
    }
    const b20undo = () => {
        let firstDart = false
        if (turnCount === 1) {firstDart = true}
        turnCount = 0
        turnScore = 0
        setCount(turnCount)
        setScore(turnScore)
        let newArr = newJdcGame
        newArr.b20 = -1
        setNewJdcGame(newArr)
        if (firstDart) {}
    }

    const a10func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.a10 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const a11func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.a11 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const a12func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.a12 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const a13func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.a13 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const a14func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.a14 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const a15func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.a15 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const d123func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        switch (turnCount) {
            case 1: {
                if (seg === 1) turnScore += seg; break;
            }
            case 2: {
                if (seg === 10) turnScore += seg; break;
            }
            default: {
                if (seg === 100) turnScore += seg;
                let newArr = newJdcGame
                newArr.d123 = turnScore
                setNewJdcGame(newArr)
                turnCount = 0
                turnScore = 0
            }
        }
        setCount(++turnCount)
        setScore(turnScore)
    }
    const d456func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        switch (turnCount) {
            case 1: {
                if (seg === 1) turnScore += seg; break;
            }
            case 2: {
                if (seg === 10) turnScore += seg; break;
            }
            default: {
                if (seg === 100) turnScore += seg;
                let newArr = newJdcGame
                newArr.d456 = turnScore
                setNewJdcGame(newArr)
                turnCount = 0
                turnScore = 0
            }
        }
        setCount(++turnCount)
        setScore(turnScore)
    }
    const d789func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        switch (turnCount) {
            case 1: {
                if (seg === 1) turnScore += seg; break;
            }
            case 2: {
                if (seg === 10) turnScore += seg; break;
            }
            default: {
                if (seg === 100) turnScore += seg;
                let newArr = newJdcGame
                newArr.d789 = turnScore
                setNewJdcGame(newArr)
                turnCount = 0
                turnScore = 0
            }
        }
        setCount(++turnCount)
        setScore(turnScore)
    }
    const d101112func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        switch (turnCount) {
            case 1: {
                if (seg === 1) turnScore += seg; break;
            }
            case 2: {
                if (seg === 10) turnScore += seg; break;
            }
            default: {
                if (seg === 100) turnScore += seg;
                let newArr = newJdcGame
                newArr.d101112 = turnScore
                setNewJdcGame(newArr)
                turnCount = 0
                turnScore = 0
            }
        }
        setCount(++turnCount)
        setScore(turnScore)
    }
    const d131415func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        switch (turnCount) {
            case 1: {
                if (seg === 1) turnScore += seg; break;
            }
            case 2: {
                if (seg === 10) turnScore += seg; break;
            }
            default: {
                if (seg === 100) turnScore += seg;
                let newArr = newJdcGame
                newArr.d131415 = turnScore
                setNewJdcGame(newArr)
                turnCount = 0
                turnScore = 0
            }
        }
        setCount(++turnCount)
        setScore(turnScore)
    }
    const d161718func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        switch (turnCount) {
            case 1: {
                if (seg === 1) turnScore += seg; break;
            }
            case 2: {
                if (seg === 10) turnScore += seg; break;
            }
            default: {
                if (seg === 100) turnScore += seg;
                let newArr = newJdcGame
                newArr.d161718 = turnScore
                setNewJdcGame(newArr)
                turnCount = 0
                turnScore = 0
            }
        }
        setCount(++turnCount)
        setScore(turnScore)
    }
    const d1920bfunc = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        switch (turnCount) {
            case 1: {
                if (seg === 1) turnScore += seg; break;
            }
            case 2: {
                if (seg === 10) turnScore += seg; break;
            }
            default: {
                if (seg === 100) turnScore += seg;
                let newArr = newJdcGame
                newArr.d1920b = turnScore
                setNewJdcGame(newArr)
                turnCount = 0
                turnScore = 0
            }
        }
        setCount(++turnCount)
        setScore(turnScore)
    }
    const b15func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.b15 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const b16func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.b16 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const b17func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.b17 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const b18func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.b18 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const b19func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.b19 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }
    const b20func = (seg: number) => {
        turnCount = count
        turnScore = score
        if (turnCount === 0) {turnCount++}
        turnScore += seg
        if (turnCount === 3){
            let newArr = newJdcGame
            newArr.b20 = turnScore
            setNewJdcGame(newArr)
            turnCount = 1
            turnScore = 0
        } else {
            turnCount++
        }
        setCount(turnCount)
        setScore(turnScore)
    }

    switch (-1) {
        case newJdcGame.a10: return (
            <div>
                <p>Hit segment 10.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 10)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 10)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => a10func(0)}></button>
                <button className="singleB" onClick={() => a10func(1)}></button>
                <button className="doubleR" onClick={() => a10func(10)}></button>
                <button className="tripleR" onClick={() => a10func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
            </div>
        )
        case newJdcGame.a11: return (
            <div>
                <p>Hit segment 11.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 11)}</label>
                <br></br>
                <label>Total Score: {totalScore(newJdcGame) + trueScore(score, 11)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => a11func(0)}></button>
                <button className="singleW" onClick={() => a11func(1)}></button>
                <button className="doubleG" onClick={() => a11func(10)}></button>
                <button className="tripleG" onClick={() => a11func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => a10undo()}></button>
            </div>
        )
        case newJdcGame.a12: return (
            <div>
                <p>Hit segment 12.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 12)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 12)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => a12func(0)}></button>
                <button className="singleB" onClick={() => a12func(1)}></button>
                <button className="doubleR" onClick={() => a12func(10)}></button>
                <button className="tripleR" onClick={() => a12func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => a11undo()}></button>
            </div>
        )
        case newJdcGame.a13: return (
            <div>
                <p>Hit segment 13.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 13)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 13)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => a13func(0)}></button>
                <button className="singleB" onClick={() => a13func(1)}></button>
                <button className="doubleR" onClick={() => a13func(10)}></button>
                <button className="tripleR" onClick={() => a13func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => a12undo()}></button>
            </div>
        )
        case newJdcGame.a14: return (
            <div>
                <p>Hit segment 14.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 14)}</label>
                <br></br>
                <label>Total score total: {totalScore(newJdcGame) + trueScore(score, 14)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => a14func(0)}></button>
                <button className="singleB" onClick={() => a14func(1)}></button>
                <button className="doubleR" onClick={() => a14func(10)}></button>
                <button className="tripleR" onClick={() => a14func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => a13undo()}></button>
            </div>
        )
        case newJdcGame.a15: return (
            <div>
                <p>Hit segment 15.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 15)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 15)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => a15func(0)}></button>
                <button className="singleW" onClick={() => a15func(1)}></button>
                <button className="doubleG" onClick={() => a15func(10)}></button>
                <button className="tripleG" onClick={() => a15func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => a14undo()}></button>
            </div>
        )
        case newJdcGame.d123: return (
            <div>
                <p>Hit double {count}.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Double scores: {doubleScore(score)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + doubleScore(score)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => d123func(0)}></button>
                <button className="d1" onClick={() => d123func(1)}></button>
                <button className="d2" onClick={() => d123func(10)}></button>
                <button className="d3" onClick={() => d123func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => a15undo()}></button>
            </div>
        )
        case newJdcGame.d456: return (
            <div>
                <p>Hit double {count + 3}.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Double scores: {doubleScore(score)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + doubleScore(score)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => d456func(0)}></button>
                <button className="d4" onClick={() => d456func(1)}></button>
                <button className="d5" onClick={() => d456func(10)}></button>
                <button className="d6" onClick={() => d456func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => d123undo()}></button>
            </div>
        )
        case newJdcGame.d789: return (
            <div>
                <p>Hit double {count + 6}.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Double scores: {doubleScore(score)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + doubleScore(score)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => d789func(0)}></button>
                <button className="d7" onClick={() => d789func(1)}></button>
                <button className="d8" onClick={() => d789func(10)}></button>
                <button className="d9" onClick={() => d789func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => d456undo()}></button>
            </div>
        )
        case newJdcGame.d101112: return (
            <div>
                <p>Hit double {count + 9}.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Double scores: {doubleScore(score)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + doubleScore(score)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => d101112func(0)}></button>
                <button className="d10" onClick={() => d101112func(1)}></button>
                <button className="d11" onClick={() => d101112func(10)}></button>
                <button className="d12" onClick={() => d101112func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => d789undo()}></button>
            </div>
        )
        case newJdcGame.d131415: return (
            <div>
                <p>Hit double {count + 12}.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Double scores: {doubleScore(score)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + doubleScore(score)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => d131415func(0)}></button>
                <button className="d13" onClick={() => d131415func(1)}></button>
                <button className="d14" onClick={() => d131415func(10)}></button>
                <button className="d15" onClick={() => d131415func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => d101112undo()}></button>
            </div>
        )
        case newJdcGame.d161718: return (
            <div>
                <p>Hit double {count + 15}.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Double scores: {doubleScore(score)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + doubleScore(score)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => d161718func(0)}></button>
                <button className="d16" onClick={() => d161718func(1)}></button>
                <button className="d17" onClick={() => d161718func(10)}></button>
                <button className="d18" onClick={() => d161718func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => d131415undo()}></button>
            </div>
        )
        case newJdcGame.d1920b: {
            if (count === 1) strD = "double 19"
            else if (count === 2) strD = "double 20"
            else strD = "the bullseye"
            return (
            <div>
                <p>Hit {strD}.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Double scores: {doubleScore(score)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + doubleScore(score)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => d1920bfunc(0)}></button>
                <button className="d19" onClick={() => d1920bfunc(1)}></button>
                <button className="d20" onClick={() => d1920bfunc(10)}></button>
                <button className="db" onClick={() => d1920bfunc(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => d161718undo()}></button>
            </div>
        )}
        case newJdcGame.b15: return (
            <div>
                <p>Hit segment 15.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 15)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 15)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => b15func(0)}></button>
                <button className="singleW" onClick={() => b15func(1)}></button>
                <button className="doubleG" onClick={() => b15func(10)}></button>
                <button className="tripleG" onClick={() => b15func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => d1920bundo()}></button>
            </div>
        )
        case newJdcGame.b16: return (
            <div>
                <p>Hit segment 16.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 16)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 16)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => b16func(0)}></button>
                <button className="singleW" onClick={() => b16func(1)}></button>
                <button className="doubleG" onClick={() => b16func(10)}></button>
                <button className="tripleG" onClick={() => b16func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => b15undo()}></button>
            </div>
        )
        case newJdcGame.b17: return (
            <div>
                <p>Hit segment 17.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 17)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 17)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => b17func(0)}></button>
                <button className="singleW" onClick={() => b17func(1)}></button>
                <button className="doubleG" onClick={() => b17func(10)}></button>
                <button className="tripleG" onClick={() => b17func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => b16undo()}></button>
            </div>
        )
        case newJdcGame.b18: return (
            <div>
                <p>Hit segment 18.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 18)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 18)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => b18func(0)}></button>
                <button className="singleB" onClick={() => b18func(1)}></button>
                <button className="doubleR" onClick={() => b18func(10)}></button>
                <button className="tripleR" onClick={() => b18func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => b17undo()}></button>
            </div>
        )
        case newJdcGame.b19: return (
            <div>
                <p>Hit segment 19.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 19)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 19)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => b19func(0)}></button>
                <button className="singleW" onClick={() => b19func(1)}></button>
                <button className="doubleG" onClick={() => b19func(10)}></button>
                <button className="tripleG" onClick={() => b19func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => b18undo()}></button>
            </div>
        )
        case newJdcGame.b20: return (
            <div>
                <p>Hit segment 20.</p>
                <label>Dart: {count}</label>
                <br></br>
                <label>Segment score: {trueScore(score, 20)}</label>
                <br></br>
                <label>Total score: {totalScore(newJdcGame) + trueScore(score, 20)}</label>
                <br></br>
                <br></br>
                <button className="misButton" onClick={() => b20func(0)}></button>
                <button className="singleB" onClick={() => b20func(1)}></button>
                <button className="doubleR" onClick={() => b20func(10)}></button>
                <button className="tripleR" onClick={() => b20func(100)}></button>
                <br></br>
                <button className="undoButton" onClick={() => resetFunc()}></button>
                <button className="resetButton" onClick={() => b19undo()}></button>
            </div>
        )
        default: return (
            <div>
                <h3>Final score: {totalScore(newJdcGame)} points.</h3>
                <tr>
                    <th>First segments</th>
                    <th>Doubles section</th>
                    <th>Second segments</th>
                </tr>
                <tr>
                    <td>10: {trueScore(newJdcGame.a10, 10)}</td>
                    <td>d01-d03: {doubleScore(newJdcGame.d123)} </td>
                    <td>15: {trueScore(newJdcGame.b15, 15)}</td>
                </tr>
                <tr>
                    <td>11: {trueScore(newJdcGame.a11, 11)}</td>
                    <td>d04-d06: {doubleScore(newJdcGame.d456)} </td>
                    <td>16: {trueScore(newJdcGame.b16, 16)}</td>
                </tr>
                <tr>
                    <td>12: {trueScore(newJdcGame.a12, 12)}</td>
                    <td>d07-d09: {doubleScore(newJdcGame.d789)} </td>
                    <td>17: {trueScore(newJdcGame.b17, 17)}</td>
                </tr>
                <tr>
                    <td>13: {trueScore(newJdcGame.a13, 13)}</td>
                    <td>d10-d12: {doubleScore(newJdcGame.d101112)} </td>
                    <td>18: {trueScore(newJdcGame.b18, 18)}</td>
                </tr>
                <tr>
                    <td>14: {trueScore(newJdcGame.a14, 14)}</td>
                    <td>d13-d15: {doubleScore(newJdcGame.d131415)} </td>
                    <td>19: {trueScore(newJdcGame.b19, 19)}</td>
                </tr>
                <tr>
                    <td>15: {trueScore(newJdcGame.a15, 15)}</td>
                    <td>d16-d18: {doubleScore(newJdcGame.d161718)} </td>
                    <td>20: {trueScore(newJdcGame.b20, 20)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>d19-dbu: {doubleScore(newJdcGame.d1920b, true)} </td>
                    <td></td>
                </tr>
                <br></br>
                <button className="resetButton" onClick={() => b20undo()}></button>
                <button className="submitButton" onClick={() => {
                    setJdcGameList([...jdcGameList, newJdcGame])
                    setNewJdcGame({
                        id: jdcGameList.length + 2,
                        a10: -1,
                        a11: -1,
                        a12: -1,
                        a13: -1,
                        a14: -1,
                        a15: -1,
                        d123: -1,
                        d456: -1,
                        d789: -1,
                        d101112: -1,
                        d131415: -1,
                        d161718: -1,
                        d1920b: -1,
                        b15: -1,
                        b16: -1,
                        b17: -1,
                        b18: -1,
                        b19: -1,
                        b20: -1
                    })
                }}
                ></button>
            </div>
        )
    }
}

export default JdcChallenge 