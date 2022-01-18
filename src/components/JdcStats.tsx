import React from "react";
import '../App.css';
import {IState as IProp} from "./JdcChallenge";

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
const segHits = (jdcGame: {
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
    let stScore: [number, number, number, number] = [0,0,0,0]
    let totScore = stScore.map((a, i) => {
        return (
        a + trueSegHits(jdcGame.a10)[i]
        + trueSegHits(jdcGame.a11)[i]
        + trueSegHits(jdcGame.a12)[i]
        + trueSegHits(jdcGame.a13)[i]
        + trueSegHits(jdcGame.a14)[i]
        + trueSegHits(jdcGame.a15)[i]
        + trueSegHits(jdcGame.b15)[i]
        + trueSegHits(jdcGame.b16)[i]
        + trueSegHits(jdcGame.b17)[i]
        + trueSegHits(jdcGame.b18)[i]
        + trueSegHits(jdcGame.b19)[i]
        + trueSegHits(jdcGame.b20)[i]
    )}) 
    return totScore
}
const doubleHits = (jdcGame: {
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
    totScore += trueDoubleHits(jdcGame.d123)
    totScore += trueDoubleHits(jdcGame.d456)
    totScore += trueDoubleHits(jdcGame.d789)
    totScore += trueDoubleHits(jdcGame.d101112)
    totScore += trueDoubleHits(jdcGame.d131415)
    totScore += trueDoubleHits(jdcGame.d161718)
    totScore += trueDoubleHits(jdcGame.d1920b)
    return totScore
}
const trueSegHits = (score: number) => {
    if (score === -1) {score = 0}
    let trueScore: [number,number,number,number] = [0,0,0,0]
    if (score === 111) {trueScore[3] = 1}
    trueScore[0] = score % 10
    trueScore[1] = ((score - trueScore[0]) / 10 ) % 10
    trueScore[2] = ((score - trueScore[1] * 10 - trueScore[0]) / 100)
    return trueScore
}
const trueDoubleHits = (score: number) => {
    let hitScore: number
    if (score === 111) {hitScore = 3}
    else {hitScore = score % 3}
    return hitScore
}
const Statistics: React.FC<IProp> = ({jdcGameList}) => {
    
    var totScore = 0
    var totSegSHits = 0
    var totSegDHits = 0
    var totSegTHits = 0
    var totSegShHits = 0
    var totDoubleHits = 0

    for (let i = 0; i < jdcGameList.length; i++) {
        totScore += totalScore(jdcGameList[i])
        totSegSHits += segHits(jdcGameList[i])[0]
        totSegDHits += segHits(jdcGameList[i])[1]
        totSegTHits += segHits(jdcGameList[i])[2]
        totSegShHits += segHits(jdcGameList[i])[3]
        totDoubleHits += doubleHits(jdcGameList[i])
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Game</th>
                    <th>Total score</th>
                    <th>Segment Hit Rate</th>
                    <th>Segment Single Rate</th>
                    <th>Segment Double Rate</th>
                    <th>Segment Triple Rate</th>
                    <th>Segment Shanghai Rate</th>
                    <th>Double Hit Rate</th>
                </tr>
                <tr>
                    <td>Average</td>
                    <td>{(totScore / jdcGameList.length).toFixed(1)}</td>
                    <td>{((totSegSHits + totSegDHits + totSegTHits) * 100 / 36 / jdcGameList.length).toFixed(1)}%</td>
                    <td>{(totSegSHits * 100 / 36 / jdcGameList.length).toFixed(1)}%</td>
                    <td>{(totSegDHits * 100 / 36 / jdcGameList.length).toFixed(1)}%</td>
                    <td>{(totSegTHits * 100 / 36 / jdcGameList.length).toFixed(1)}%</td>
                    <td>{(totSegShHits * 100 / 12 / jdcGameList.length).toFixed(1)}%</td>
                    <td>{(totDoubleHits * 100 / 21 / jdcGameList.length).toFixed(1)}%</td>
                </tr>
                {
                        jdcGameList.map((game) => {
                            return (
                                <tr key={game.id}>
                                    <td>{game.id}</td>
                                    <td>{totalScore(game)}</td>
                                    <td>{((segHits(game)[0] + segHits(game)[1] + segHits(game)[2]) * 100 / 36).toFixed(1)}%</td>
                                    <td>{(segHits(game)[0] * 100 / 36).toFixed(1)}%</td>
                                    <td>{(segHits(game)[1] * 100 / 36).toFixed(1)}%</td>
                                    <td>{(segHits(game)[2] * 100 / 36).toFixed(1)}%</td>
                                    <td>{(segHits(game)[3] * 100 / 12).toFixed(1)}%</td>
                                    <td>{(doubleHits(game) * 100 / 21).toFixed(1)}%</td>
                                </tr>
                            )
                        })
                }
            </table>
        </div>
    )
}


export default Statistics