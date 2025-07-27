import { useState } from "react";
import styles from "./State.module.css"
function State(){
    const[currentNum, ChangeTheNum] = useState(0);
    const handelClick = () =>{ChangeTheNum(currentNum + 1)};
    return(
        <>
        <h1>STATES</h1>
        <h3>{currentNum}</h3>
        <button onClick={handelClick}>INCREASE</button>
        {currentNum < 10 ? (<p className={styles.less}>THE NUMBER IS LESS THAN 10</p>) : (<p className={styles.greater}>THE NUMBER IS GREATER THAN 10</p> )}
        </>
    )
}
export default State