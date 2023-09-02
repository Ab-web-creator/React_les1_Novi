import {inventory} from "../constants/inventory.js";
const Part2Assignment1d = () => {
    const outcome = inventory.map((name) => {
        let trueOrFalse;
        if (name.refreshRate >= 100) {
                trueOrFalse = "true";

        } else {
            trueOrFalse = "false";
        }

        // console.log("Name:", name.name + ", " + "suitable:", trueOrFalse);

        return (
            <div key={name.id} >
                <p> Name: {name.name} </p>
                <p> Suitable: {trueOrFalse} </p>
                <hr className={"spacer20"} />
            </div>
        )
    });


// HTML part:
    return (
        <>
            <h1>Part 2, assignment 1d: </h1>
            <h3>Used an array method to list the brand and TV names indicating whether they are suitable for sports viewing (a refresh rate of 100Hz or higher). It is also in the console (unless I commented it on line 12 in jsx file). </h3>

            {outcome}
        </>
    )
}


export default Part2Assignment1d;