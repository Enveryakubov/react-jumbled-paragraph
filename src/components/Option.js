import {useState} from 'react'

const Option = ({option, correct, setMessage}) => {
    const [bgColor, setBgColor] = useState("white")

    const handleClick = () => {
        if (option === correct) {
            setMessage("success")
            return setBgColor("#96bb7c")
            
        }
        setMessage("failure")
        return setBgColor("#ec4646")
    }

    return (
        <div style={{flexBasis:"45%", textAlign:"center", backgroundColor:bgColor, margin:"1%", height:"50px", paddingTop:'12px', borderRadius:"5px"}}>
            <div onClick={handleClick}>{option}</div>
        </div>
    )
}

export default Option
