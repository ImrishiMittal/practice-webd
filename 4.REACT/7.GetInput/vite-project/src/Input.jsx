import { useState } from "react";
function Input(){
    const [current_text, set_text] = useState("");

    function Onchange(e){
        set_text(e.target.value);
    }
    function clear(e){
        set_text(" ");
    }
    return(
        <>
        <input type="text" placeholder="ENTER YOUR TEXT HERE" value={current_text} onChange={Onchange}/>
        <div>
            <h3>{current_text}</h3>
            <button onClick={clear}>CLEAR</button>
        </div>
        </>
    )
}
export default Input;