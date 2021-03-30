import {useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = ({setActivity}) => {
    const [vis, setVis] = useState(false)
    // let style = vis ? {display:"block", zIndex:"10"}: {display:"none"}

    return (    
        <div style={{display:"flex", justifyContent:"space-between", backgroundColor:"rgb(53, 51, 50)"}}>
            <ul className="navbar" >
                <li onClick={() => setActivity("home")} >Главная</li>
                <li onClick={() => setActivity("jumbler")} >Чтение перемешенного текста</li>
                <li onClick={() => setActivity("speedreader")} >Развить скорость</li>
            </ul>
            <div className="navbur">
                <GiHamburgerMenu onClick={() => setVis(!vis)} style={{fontSize:"50px", color:"white", paddingTop:"5px"}}/>
            </div>
        </div>
    )
}   

export default Navbar
