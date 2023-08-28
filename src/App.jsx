import './App.css';

import BestSellingTv from "./components/BestSellingTv.jsx";
import BestSellingTvArray from "./components/BestSellingTvArray.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ThreeButtons from "./components/ThreeButtons.jsx";


function App() {

  return (
      <div className={"main-container"}>
          <Dashboard/>
          <BestSellingTv/>
          <BestSellingTvArray/>
          <ThreeButtons/>
      </div>
  )
}


export default App
