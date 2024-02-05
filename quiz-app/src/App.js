import {createContext, useState} from "react"
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";

import './App.css'

export const DataContext = createContext() /* สร้างตัวแปรชื่อcontext ที่เป็นตัวแปรกลาง เป็นตัวแปรที่ใช้ร่วมกับcomponentอื่นๆเช่น menu, quiz */

function App() {
  const [appState, setAppState] = useState("menu")
  const [score, setScore] = useState(0)
  return (
    <DataContext.Provider value={{appState, setAppState,score, setScore}}> {/* ใช้Providerเพื่อคลุม */}
    <div className="App">
      <h1>Web Development Quiz</h1>
      {appState === "menu" && <Menu/>} {/* เช็คสถานะ State ว่าเป็น menu ไหมถ้าเป็นดึงcomponent menu มา */}
      {appState === "quiz" && <Quiz/>} {}
      {appState === "score" && <Score/>} {}
    </div>
    </DataContext.Provider>
  );
}

export default App;
