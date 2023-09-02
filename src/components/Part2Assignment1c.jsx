import {inventory} from "../constants/inventory.js";

const Part2Assignment1c = () => {
    let targetObject = null;
    for (const obj of inventory) {
        if (obj.type === "NH3216SMART") {
            targetObject = obj;
            break; // I am not sure if we need this "break"
        }
    }


        // console.log("Found object:", targetObject);



    return (
        <>
            <h1>Part 2, assignment 1c: </h1>
            <h3>Use an array method to retrieve the TV type 'NH3216SMART' information.</h3>
            <h3 key={targetObject.id} >
                React found the name of this TV: <span className={"red"}>~ {targetObject.name}!</span>

            </h3>
            <h3>I displayed the whole info in the console, as it was requested in the assignment (unless I commented it here).</h3>
        </>

    )
}

export default Part2Assignment1c;