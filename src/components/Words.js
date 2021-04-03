import {useState, useEffect, useRef} from 'react'
import data from "../words"
import {shuffleArray, getRandomInt} from "../utils"
import Option from "./Option"
import {FaRegThumbsUp, FaRegThumbsDown} from "react-icons/fa"

const Words = () => {
    const [words, setWords] = useState([])
    const [word, setWord] = useState("")
    const [options, setOptions] = useState([])
    const correctAnswer = useRef("")
    const [message, setMessage] = useState("")
    const [gameStatus, setGS] = useState(true)
    const [speedW, setSpeedW] = useState(150)
    
    let displaySpeed = Math.round((60/speedW)*1000)

    useEffect(() => {
        setWords(data);
        alert("В этом задании вам нужно вспомнить последнее слово, которое появиться на экране.");
    }, [])
   
    const deliver = () => {
        let test = words
        let randomNum = getRandomInt(words.length)
        if (randomNum < 10) {randomNum += 10}
        let t = test.slice(0, randomNum)
        shuffleArray(t)

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function demo(speed) {
            for (let i = 0; i < t.length; i++) {
                await sleep(speed);
                setWord(t[i])
                
            }
            
            let result = [t[t.length-2], t[t.length-3], t[3], t[Math.floor(t.length-1/2)]]
            correctAnswer.current = t[t.length-2]
            shuffleArray(result)
            setOptions(result)
            setWord("Какое из нижеприведенных слов было последним?")
            
        }
        demo(displaySpeed)
        
    }
    
    return (
        <div className="container">
            <div className="titleCont">
                <div className="container title">Разминка</div>
            </div>
            <div className="container sph word">
                <p style={{fontSize:"24px"}}>{word}</p>
            </div>
            <div className="container sph">
                <h5 style={{color:"#493323"}}>Выставите кол-во слов в минуту</h5>
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
                
                    <div onClick={() => setSpeedW(speedW-10)} style={{width:"45%"}} className="btn btn-warning">-</div>
                    <input 
                    style={{textAlign:"center"}}
                    className="form-control"
                    value={speedW} readOnly
                    />
                    <div onClick={() => setSpeedW(speedW+10)} style={{width:"45%"}} className="btn btn-warning">+</div>
                </div>
                {(message === "success") && <div className="message">
                    <p>Das ist fantastisch! !!! Если это было легко - увеличьте скорость.</p>
                    <FaRegThumbsUp/>
                </div>}
                {(message === "failure") && <div className="message" style={{backgroundColor:"yellow", color:"black"}}>
                    <p>Неа)) !!!</p>
                    <FaRegThumbsDown/>
                </div>}
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                    {options.map((option, i) => 
                        <Option key={i} option={option} correct={correctAnswer.current} setMessage={setMessage}/>
                    )}
                </div>
                <div style={{textAlign:"center", paddingTop:"20px", paddingBottom:"20px"}}>
                    <button className="btn btn-success btnT" onClick={() => {deliver(); setOptions([]); setMessage("");setGS(false)}}>{gameStatus ? "Начать": "Еще раз"}</button>
                </div>
            </div>
        </div>
    )
}

export default Words
