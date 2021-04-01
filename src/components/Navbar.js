
import {FiBookOpen} from "react-icons/fi"
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = ({setActivity}) => {
  
    

    return (
        <nav style={{paddingLeft:"20px", backgroundColor:"#7c9473"}} className="navbar navbar-light pt-10">
            <div className="container-fluid p-0">
                <div className="navbar-brand pt-0" style={{ fontSize:"40px"}}>
                    <div onClick={() => setActivity("home")} style={{display:"flex", justifyContent:"space-between"}}>
                        <FiBookOpen />
                        <h4 style={{paddingLeft:"10px", paddingTop:"5px"}}>Чтение</h4>
                   </div>
                </div>
                <div onClick={() => setActivity("home")}>
                    <GiHamburgerMenu style={{fontSize:"40px", marginRight:"20px"}}/>
                </div>
            </div>
        </nav>
        
         /* // <div style={{display:"flex", justifyContent:"space-between", backgroundColor:"rgb(53, 51, 50)", marginBottom:"20px"}}>
        //     <ul className="navbar" >
        //         <li onClick={() => setActivity("home")} >Главная</li>
        //         <li onClick={() => setActivity("jumbler")} >Чтение перемешенного текста</li>
        //         <li onClick={() => setActivity("speedreader")} >Развить скорость</li>
        //     </ul>
        // 
        // </div> */  
       
    )
}   

export default Navbar
