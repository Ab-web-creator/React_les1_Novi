import {inventory} from "../constants/inventory.js";
import itemsPurchased from "../Helpers/itemsPurchased.js";
import itemsLeft from "../Helpers/itemsLeft.js";
import itemsSold from "../Helpers/itemsSold.js";

const Dashboard = () => {
    return (
        <>
            <h1>Tech IT easy dashboard</h1>
            <h3>Verkoopoverzicht</h3>
            <div className={"box-container"}>
                <div>
                    <h2 className={"box"}>The number of TVs already sold:  </h2>
                    <p className={"soldTVs"}> {  itemsSold(inventory) }  </p>
                </div>
                <div>
                    <h2>The number of TVs acquired:  </h2>
                    <p className={"acquiredTVS"}>
                        {  itemsPurchased(inventory) } </p>
                </div>
                <div>
                    <h2>The number still needs to sell:   </h2>
                    <p className={"needToSell"}>
                        {itemsLeft(inventory)}
                    </p>
                </div>

            </div>
        </>
    )

}

export default Dashboard;