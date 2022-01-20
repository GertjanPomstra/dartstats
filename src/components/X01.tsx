import React from "react";
import '../App.css';

export interface IState {
    x01GameList: {
        id: number,
        score: number,
        doubleOut: boolean,
        throws: number,
        doublesAttempts: number,
        scoreLeft: number
    }[]
}

interface Props {
    x01GameList: {
        id: any;
        score: any;
        doubleOut: any;
        throws: any;
        doublesAttempts: any;
        scoreLeft: any;
    }[],
    setX01GameList: React.Dispatch<React.SetStateAction<{
        id: any;
        score: any;
        doubleOut: any;
        throws: any;
        doublesAttempts: any;
        scoreLeft: any;
    }[]>>
}

const X01: React.FC<Props> = ({x01GameList, setX01GameList}) => {
    // const [startGame, setStartGame] = useState(false)
    // const [x01Game, setX01Game] = useState({
    //         id: x01GameList.length + 1,
    //         score: 501,
    //         doubleOut: true,
    //         throws: 0,
    //         doublesAttempts: 0,
    //         scoreLeft: 501
    //     }
    // )

    return (
        <h2>Here comes content</h2>
    )

}

export default X01