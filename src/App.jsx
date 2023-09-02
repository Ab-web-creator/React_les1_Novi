import './App.css';

import BestSellingTv from "./components/BestSellingTv.jsx";
import BestSellingTvArray from "./components/BestSellingTvArray.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Dashboard2 from "./components/Dashboard2.jsx";
import ThreeButtons from "./components/ThreeButtons.jsx";
import itemsSold from "./Helpers/itemsSold.js";
import {inventory} from "./constants/inventory.js";
import itemsPurchased from "./Helpers/itemsPurchased.js";
import itemsLeft from "./Helpers/itemsLeft.js";
import ThreeButtonsBversion from "./components/ThreeButtonsBversion.jsx";
import Opdracht1a from "./components/partTwoAssignment1a.jsx";
import Part2Assignment1b from "./components/Part2Assignment1b.jsx";
import OnChangeHandler from "./components/OnChangeHandler.jsx";
import DashboardJSX from "./components/DashboardJSX.jsx";
import PartTwoAssignment1a from "./components/partTwoAssignment1a.jsx";
import Part2Assignment1c from "./components/Part2Assignment1c.jsx";
import Part2Assignment1d from "./components/Part2Assignment1d.jsx";
import Part2Assignment1e from "./components/Part2Assignment1e.jsx";
import Part2Assignment1f from "./components/Part2Assignment1f.jsx";


function App() {

  return (
      <>
          <div className={"main-container"}>
              <DashboardJSX/>
              {/*//hardcoded dashboard, see the components folder  */}
              <hr className={"spacer40"}/>
              <BestSellingTv/>
              <hr className={"spacer40"}/>
              <BestSellingTvArray/>
              <hr className={"spacer40"}/>
              <ThreeButtonsBversion/>

              <hr className={"spacer40"}/>
              {/*The following one I did only for my own exercise, so do not pay attention to this*/}
              {/*<ThreeButtons/>*/}

              <hr className={"spacer40"}/>
              <p>I added "id" property to the inventory array in order to assign "key"  </p>
              <PartTwoAssignment1a/>
              <hr className={"spacer40"}/>
              <Part2Assignment1b/>
              <hr className={"spacer40"}/>
              <Part2Assignment1c/>
              <hr className={"spacer40"}/>
              <Part2Assignment1d/>
              <hr className={"spacer40"}/>
              <Part2Assignment1e/>
              <hr className={"spacer40"}/>
              <Part2Assignment1f/>
      </div>
      </>
  )
}


export default App;
