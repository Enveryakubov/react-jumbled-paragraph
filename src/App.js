import Jumbler from "./components/Jumbler"
import Speedreader from "./components/Speedreader"
import Navbar from "./components/Navbar"
import Words from "./components/Words"
import Home from "./components/Home"
import {useState} from "react"

function App() {
const [activity, setActivity] = useState("home")


  return (
    <div>
      <Navbar setActivity={setActivity} activity={activity}/>
      <div className="container">
        {activity === "home" && <Home setActivity={setActivity}/>}
        {activity === "jumbler" && <Jumbler/>}
        {activity === "speedreader" && <Speedreader/>}
        {activity === "words" && <Words/>}
      </div>
    </div>
  );
}

export default App;
