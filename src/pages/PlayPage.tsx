import Choices from '../components/Choices';
import ResultPage from "./ResultPage";
import '../App.css';
import { useState } from "react";
import type { Symbol, Result, Screen } from "../types";


const PlayPage = () => {

    const [player, setPlayer] = useState<Symbol | null>(null);
    const [computer, setComputer] = useState<Symbol | null>(null);

    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const resetGame = () => {
        setPlayer(null);
        setComputer(null);
        setPlayerScore(0);
        setComputerScore(0);
        setCurrent("Play");
    };


    const handleAction = (s: Symbol) => {
        setPlayer(s)

        const c = Math.round(Math.random() * 2);
        const list: Array<Symbol> = ["Rock", "Paper", "Scissors"]
        console.log(list[c])
        setComputer(list[c])

        const result = getResult(list[c], s);
        if (result === "Win") setPlayerScore(playerScore + 1);
        else if (result === "Lose") setComputerScore(computerScore + 1);
    }


    const getResult = (computer: Symbol, player: Symbol): Result => {

        if (player === null || player === null) {
            return "Not Played"
        }
        if (computer === player) return "Draw";
        else if (
            computer === "Rock" && player === "Paper" ||
            computer === "Paper" && player === "Scissors" ||
            computer === "Scissors" && player === "Rock") return "Win";
        else return "Lose";
    }

    const [current, setCurrent] = useState<Screen>()
    const switchPage = (scr: Screen) => {
        setCurrent(scr);
    };



    const result = computer && player ? getResult(computer, player) : "Not Played";
    let resultText = "";
    if (result === "Draw") resultText = "Its a draw!";
    else if (result === "Win") resultText = "Player wins!";
    else if (result === "Lose") resultText = "Computer wins!";

    if (current === "Result") {
        return (
            <ResultPage
                playerScore={playerScore}
                computerScore={computerScore}
                onReset={resetGame}
            />
        );
    }

    if (playerScore === 3 || computerScore === 3) {
        return (
            <ResultPage
                playerScore={playerScore}
                computerScore={computerScore}
                onReset={resetGame}
            />
        );
    }

    return (
        <div>

            <p>Player</p>
            <p>{playerScore}</p>
            <Choices clickable={true} activeSymbol={player} action={handleAction} />

            <p>Computer</p>
            <p>{computerScore}</p>
            <Choices clickable={false} activeSymbol={computer} />
            <p>{resultText}</p>

            <button className="button" onClick={() => switchPage("Result")} >Cancel</button>


        </div>
    )
};

export default PlayPage;