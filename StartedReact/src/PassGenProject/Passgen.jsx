import { useState, useRef, useCallback, useEffect } from "react";
import './passgen.css'
export default function Passgen(){
    let [length, setlength] = useState(8);
    let [numb, setnumb] = useState(false);
    let [charc, setcharc] = useState(false);
    let [password, setpassword] = useState("")
    const passref = useRef(null);

    const passwordgen = useCallback(() => {
        let pass= ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numb){
            str = str + "0123456789"
        }
        if(charc){
            str = str + "!@#$%^&*()_+-=[]{};':|,.<>?/~"
        }
        for(let i = 0; i< length; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setpassword(pass);
    }, [numb, charc, length, setpassword])
    

    const copytoclip = useCallback(() => {
        passref.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])


    useEffect(()=>{
        passwordgen()
    }, [numb, charc, length, passwordgen])


    return(
        <div className="main">
            <div className="pass">
                <div className="upper">
                <input 
                    id="passtext" 
                    type="text"
                    value = {password}
                    readOnly
                    placeholder="password"
                    ref={passref} />
                <button 
                    onClick={copytoclip}
                    style={{backgroundColor : "blue", color: "whitesmoke"}} 
                    >Copy</button>
                </div>
                
                <div className="lower">
                    <input 
                        type="range" 
                        name="length" 
                        id="length"
                        min={6}
                        max={20}
                        value={length}
                        onChange={(e) => setlength(e.target.value)} /> 
                        Length : ({length})
                    <input 
                        type="checkbox" 
                        name="numbers" 
                        defaultChecked = {numb}
                        id="numbers"
                        value={false}
                        onClick={() => setnumb((prev) => !prev)} /> 
                        Number
                    <input 
                        type="checkbox" 
                        name="charachters" 
                        id="charachters"
                        defaultChecked={charc}
                        onClick={()=> setcharc((prev) => !prev)} /> 
                        Charachters
                </div>
            </div>
        </div>
    )
}