import { useState } from "react";

function useCounter(intialValue,step){
    const [count,setCount] = useState(intialValue)

    // function for increment 
    const increment = () =>{
        setCount(count+step);
    }

    // function for decrement
    const decrement = () =>{
        setCount(count-step)
    }

    // function for reset counter
    const reset = () =>{
        setCount(intialValue);
    }

    return{
        count,
        increment,
        decrement,
        reset
    };
}

export default useCounter