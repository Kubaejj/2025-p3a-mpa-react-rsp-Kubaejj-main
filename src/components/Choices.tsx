import Figure from "./Figure";
import styles from "./Choices.module.css";
import type { Symbol } from "../types";

type ChoicesProps = {
    choice?: Symbol,
    clickable: boolean;
    action?: (symbol:Symbol) => void | undefined;
    activeSymbol: Symbol | null;
}

const Choices: React.FC<ChoicesProps> = ({clickable = true, action, activeSymbol}) => {


    return (
        <div className={styles.container}>
            <Figure symbol="Rock" clickable = {clickable}  selected = {activeSymbol === "Rock" } action={action} />
            <Figure symbol="Paper" clickable = {clickable} selected = {activeSymbol === "Paper"}  action={action } />
            <Figure symbol="Scissors" clickable = {clickable} selected = {activeSymbol === "Scissors"} action={action } />


        </div>
    )
};

export default Choices;