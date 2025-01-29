import { useState } from "react"
import './bgchnager.css';

export default function Bgchanger(){
    let [color, setcolor] = useState("olive");

    return (
        <div className="main" style={{backgroundColor: color}}>
            <div className="drawer">
                <button className="red" onClick={() => setcolor("red")}
                style={{backgroundColor : "red"}}>Red</button>
                <button className="green" onClick={() => setcolor("green")}
                style={{backgroundColor : "green"}}>Green</button>
                <button className="black" onClick={() => setcolor("black")}
                style={{backgroundColor : "black"}}>Black</button>
                <button className="blue" onClick={() => setcolor("blue")}
                style={{backgroundColor : "blue"}}>Blue</button>
                <button className="white" onClick={() => setcolor("white")}
                style={{backgroundColor : "white"}}>White</button>
            </div>
        </div>
    )
}