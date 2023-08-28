import mostSoldArray from "../Helpers/mostSoldArray.js";
import cheapestFirstArray from "../Helpers/cheapestFirstArray.js";
import sportsFirstArray from "../Helpers/sportsFirstArray.js";

const ThreeButtons = () => {
    return (
        <>
            <h3>Alle TVs</h3>
            <div className={"flexed20"}>
                <div className={"firstButton"}>
                    <button onClick={mostSoldArray} type="button">Most sold first</button>
                </div>
                <div className={"firstButton"}>
                    <button onClick={cheapestFirstArray} type="button">Cheapest first</button>
                </div>
                <div className={"firstButton"}>
                    <button onClick={sportsFirstArray} type="button">Best for sports first</button>
                </div>
            </div>
        </>
    )
}





export default ThreeButtons;