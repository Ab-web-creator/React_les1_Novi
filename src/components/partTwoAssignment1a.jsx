import {inventory} from "../constants/inventory.js";

const PartTwoAssignment1a = () => {
    const outcome = inventory.map((name) => {
        name.name;
        return (
            <li key={name.id} >
                {name.name}
            </li>
        )
    });

    // console.log(outcome)
    return (
        <>

            <h1>Part 2, assignment 1a: </h1>
            <ol>
                { outcome }
            </ol>

        </>

    )
}

export default PartTwoAssignment1a;