import Jumbler from "./components/Jumbler"
import Speedreader from "./components/Speedreader"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import {useState} from "react"

function App() {
const [activity, setActivity] = useState("home")


  return (
    <div>
      <Navbar setActivity={setActivity}/>
      <div className="container">
        {activity === "home" && <Home/>}
        {activity === "jumbler" && <Jumbler/>}
        {activity === "speedreader" && <Speedreader/>}
      </div>
    </div>
  );
}

export default App;
