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


function App() {

  return (
      <>
      <div className={"main-container"}>
          {/*//hardcoded dashboard, see the components folder  */}
          <Dashboard/>

          <h3>Verkoopoverzicht (component-based) </h3>

          {/*// soft-coded dashboard2.jsx, using components */}
          <div className={"box-container"}>
              <Dashboard2
                divClassNaam="division1"
                h2Text={"The number of TVs already sold:"}
                pClassNaam={"soldTVs"}
                pFunction={itemsSold}
              />
              <Dashboard2
                  divClassNaam="division2"
                  h2Text={"The number of TVs acquired:"}
                  pClassNaam={"acquiredTVS"}
                  pFunction={itemsPurchased}
              />
              <Dashboard2
                  divClassNaam="division3"
                  h2Text={"The number still needs to sell:"}
                  pClassNaam={"needToSell"}
                  pFunction={itemsLeft}
              />
          </div>

          <BestSellingTv/>
          <BestSellingTvArray/>
          <ThreeButtons/>
      </div>
      </>
  )
}


export default App
