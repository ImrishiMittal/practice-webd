import { useEffect, useState } from "react";
import Count2 from "../Count2";
function Count(){
    const[count, setCount] = useState(0);
    const[data, setdata] = useState(0);
    function counter(){
        setCount(count + 1)
    }
    function dataer(){
        setdata(data + 1)
    }
return(
    <>
    <h1>COUNT.JSX</h1>
    <button onClick={counter}>{count}</button>
    <button onClick={dataer}>{data}</button>
    <Count2 count = {count} data = {data}/>
    </>
)
}
export default Count;