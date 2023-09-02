import {inventory} from "../constants/inventory.js";

const BestSellingTv = () => {
    // get the inventory array, // find the object which has the highest sold key value; //  and save it inside a variable
    function findHighestValueSoldTv (array) {
        let highestValueObject = array[0].sold;
        let targetedIndex = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].sold > highestValueObject) {
                highestValueObject = array[i].sold;
                targetedIndex = i;
            }
        }
        return targetedIndex;
    }

    const targetIndex = findHighestValueSoldTv(inventory)
    const targetObject = inventory[targetIndex]

    return (
        <>
            <h3>Best verkochte TV, soft-coded, depends on the # of the sold TVs</h3>
            <div className={"best-TV"}>
            <div>
                <img src={targetObject.sourceImg} />
            </div>

            <section>
                <h5> {targetObject.brand} {targetObject.type} - {targetObject.name} </h5>
                <h5 className={"price-bold"}> ${targetObject.price}, - </h5>
                <div className="flexed">
                    {targetObject.availableSizes.map((element, index, array) => {
                        const cantimetrizedElement = element * 2.54
                        const elementRounded = Math.round(cantimetrizedElement)
                        // console.log(elementRounded)
                        const lastElement =  index === array.length - 1 ? true : false

                        return (
                            <p key={index} className={"flexed-p"}> { element } inch ({elementRounded} cm)
                                <span className={"tikkaTurgan"}>  {lastElement ? " " : " |"} </span>
                            </p>
                        )
                    }) }
                </div>

            <p>
                {  targetObject.options.map((element, index) => {
                    return (
                        <span key={index} className={"flexed-p"}>
                            { element.applicable === true ? <img className={"znachki"} src="../src/assets/check.png" /> : <img className={"znachki"} src="../src/assets/minus.png" /> }
                            {element.name} </span>
                    )
                }) }
            </p>
        </section>
    </div>
        </>
    )
}





export default BestSellingTv;