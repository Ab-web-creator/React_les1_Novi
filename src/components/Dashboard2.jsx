import {inventory} from "../constants/inventory.js";

function Dashboard2 ({divClassNaam, h2Text, pClassNaam, pFunction }) {
    return (
                <div className={divClassNaam}>
                    <h2> {h2Text} </h2>
                    <p className={pClassNaam}> { pFunction(inventory) }  </p>
                </div>
    )
}

export default Dashboard2;