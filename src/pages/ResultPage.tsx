
type ResultPageProps = {
    playerScore: number;
    computerScore: number;
    onReset: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ playerScore, computerScore, onReset }) => {
    return (
        <div>
            <h1>Results</h1>
            <p>Player</p>
            <p>{playerScore}</p>
            <p>Computer</p>
            <p>{computerScore}</p>
            <button className="button" onClick={onReset}>RESET</button>
        </div>
    )
};

export default ResultPage;