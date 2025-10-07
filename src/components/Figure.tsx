import { act, useCallback, useState } from "react";
import styles from "./Figure.module.css";
import type { Symbol } from "../types";

type FigureProps = {
    symbol: Symbol,
    clickable: boolean,
    selected: boolean,
    action?: (symbol:Symbol) =>  void | undefined;
}

const Figure: React.FC<FigureProps> = ({ symbol, clickable = false, selected, action }) => {

    // function setSelected() {
    //     if( select == true) return true
    //     return false
            
    // }
    

    return (
        <div >
            <span 
            className={`${styles.choice} ${styles[symbol]} ${ clickable ? styles.clickable : null }  ${ selected ? styles.selected : null }`} 
             onClick={() => clickable ? action(symbol) :  null}>{symbol} </span>

        </div>
    );
};

export default Figure;