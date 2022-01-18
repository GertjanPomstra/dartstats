import React, {useState} from "react";
import '../App.css';

export interface IState {
    atcGameList: {
        id: number,
        throws: number,
        segmentsHit: number
    }[]
}

interface Props {
    atcGameList: {
        id: number,
        throws: number;
        segmentsHit: number;
    }[]
    setAtcGameList: React.Dispatch<React.SetStateAction<{
        id: number,
        throws: number;
        segmentsHit: number;
    }[]>>
}

const AroundTheClock: React.FC<Props> = ({atcGameList, setAtcGameList}) => {
    const [prevHit, setPrevHit] = useState(-1)
    const [newAtcGame, setNewAtcGame] = useState({
        id: atcGameList.length + 1,
        throws: 0,
        segmentsHit: 0
    })
    
    const hitMisFunc = (hitMis: number) => {
        prevSeg = newAtcGame.segmentsHit
        prevSeg += hitMis
        setNewAtcGame({id: newAtcGame.id, throws: ++newAtcGame.throws, segmentsHit: prevSeg })
        setPrevHit(hitMis)
    }

    const resetFunc = () => {
        prevSeg = newAtcGame.segmentsHit
        prevSeg -= prevHit
        setNewAtcGame({id: newAtcGame.id, throws: --newAtcGame.throws, segmentsHit: prevSeg })
        setPrevHit(-1)
    }

    var prevSeg: number

    if (prevHit === -1) {
        return (
            <div>
                <p>Hit segment {newAtcGame.segmentsHit + 1}.</p>
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
    } else if (newAtcGame.segmentsHit < 20) {
        return (
            <div>
                <p>Hit segment {newAtcGame.segmentsHit + 1}.</p>
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
    } else {
        return (
            <div>
                <p>Final Score</p>
                <label>Throws: {newAtcGame.throws}</label>
                <br></br>
                <label>Hits: {newAtcGame.segmentsHit}</label>
                <br></br>
                <label>Hit rate: {(newAtcGame.segmentsHit*100/newAtcGame.throws).toFixed(1)}%</label>
                <br></br>
                <br></br>
                <button className="submitButton" onClick={() => {
                    setAtcGameList([...atcGameList, newAtcGame])
                    setNewAtcGame({id: atcGameList.length + 2, throws: 0, segmentsHit: 0})
                }}></button>
                <button className="undoButton" onClick={() => resetFunc()}></button>
            </div>
        )
    }
}

export default AroundTheClock