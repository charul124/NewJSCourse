import { useState } from "react";

export default function Counter(){
    let [counter, setCounter] = useState(0);
        
        function addvalue(){
            counter = counter + 1;
            setCounter(counter++);
        }
    
        function removevalue(){
            counter = counter - 1;
            setCounter(counter);
        }
        return(
            <div>
        <h1>Simple Counter</h1>
            <h1>Value is : {counter}</h1>
        <button 
        onClick={addvalue}>
            Add Value
        </button>
        <br />
        <button
        onClick={removevalue}>
            Subtract Value
        </button>
    </div>
        )
    
}