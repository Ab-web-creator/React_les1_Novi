import Dashboard from "./Dashboard.jsx";
import Dashboard2 from "./Dashboard2.jsx";
import itemsSold from "../Helpers/itemsSold.js";
import itemsPurchased from "../Helpers/itemsPurchased.js";
import itemsLeft from "../Helpers/itemsLeft.js";

const DashboardJSX = () => {
   return (
       <>
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

       </>
   )
}

export default DashboardJSX;