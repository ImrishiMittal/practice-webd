import { useEffect, useState } from "react";
function Count2({count, data}){
    function handelcount(){
        console.log("HandelCount was called")
    }
    function handelData(){
        console.log("HandelData was called")
    }
    // useEffect(()=>{
    //     handelcount();
    //     handelData();
    // },[handelcount,handelData])
    useEffect(() => {
        handelcount();
      }, [count]);  // Only runs when 'count' changes
    
      useEffect(() => {
        handelData();
      }, [data]); 
    return(
        <>
        <h1>COUNT2.JAS</h1>
    <h3>{count}</h3>
    <h3>{data}</h3>
        </>
    )
}
export default Count2;