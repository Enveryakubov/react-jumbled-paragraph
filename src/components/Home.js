import React, {useState, useEffect, useRef, useCallback} from 'react'   
import Quote from "./Quote"
import data from "../data"


const Home = ({setActivity}) => {
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState({})
    const ref = useRef(0)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const random = useCallback(() => {
        let num = getRandomInt(quotes.length)
        ref.current = num
        setQuote(quotes[ref.current])
    }, [quotes])
    

    useEffect(() => {
        setQuotes(data)
        setQuote(quotes[ref.current])
        let interval = setInterval(() => random(), 4000)
        return () => clearInterval(interval)
    }, [quotes, random])

    return (
        <>
            <div className="container" style={{backgroundColor:"white", marginTop:"40px", textAlign:"center", padding:"10px", width:"80%", borderRadius:'5px', marginBottom:"20px"}}>
                <h3>Тренажеры</h3>
                <div className="container" style={{marginTop:"10%"}}>
                    <button onClick={() => setActivity("speedreader")} className="btn btn-secondary mb-2 homeBtn" >Скорочтение</button>
                    <button onClick={() => setActivity("jumbler")} className="btn btn-secondary mb-2 homeBtn">Размешалка</button>
                    <button onClick={() => alert("Скоро будет еще)")} className="btn btn-warning mb-2 homeBtn" >Eще ...</button>
                </div>
            </div>
            {quote && <div className="container" style={{backgroundColor:"white", marginTop:"5px", padding:"10px", width:"80%", borderRadius:'5px', marginBottom:"10px"}}>
                <Quote quote={quote}/>
            </div>}
        </>
    )
}

export default Home
