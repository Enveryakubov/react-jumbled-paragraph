import React from 'react'
import {FaQuoteRight} from "react-icons/fa"


const Quote = ({quote}) => {
    return (
        <>
            <div className="container">
                <div style={{display:"flex", textAlign:"center", flexDirection:"column", backgroundColor:"white", borderRadius:"5px"}}>
                    <div style={{width:"200px", margin:"auto"}}>
                        <img src={quote.image} alt="problems?"/>
                    </div>
                    <div>
                        <h3 style={{textTransform:"uppercase", color:" rgb(180, 104, 4)"}}>{quote.name}</h3>
                        <p style={{textTransform:"capitalize", fontSize:"1.1rem", color:"black"}}>{quote.title}</p>
                        <div>
                            <p>{quote.quote}</p>
                        </div>
                        <FaQuoteRight  className="fa"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quote
