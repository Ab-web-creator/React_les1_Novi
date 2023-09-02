import {inventory} from "../constants/inventory.js";

const Part2Assignment1e = () => {
    const filteredInventory = inventory.filter(item =>
        item.availableSizes.some(size => size >= 65));

    return (
        <>
            <h1>Part 2, assignment 1e: The list of TVs available in screen sizes of 65 inches and larger.</h1>
            <div>
                {filteredInventory.map( (check) => {
                    return (
                        <section className={"best-TV"} key={check.id}>
                            <div>
                                <img src={check.sourceImg} />
                            </div>
                            <section>
                                <h5> {check.brand} {check.type} - {check.name} </h5>
                                <h5 className={"price-bold"}> ${check.price}, - </h5>
                                <div className="flexed">
                                    {check.availableSizes.map((element, index, array) => {
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
                                <h1> Refresh rate: {check.refreshRate}</h1>
                                <h1>Sold numbers: {check.sold}</h1>


                                <p>
                                    {  check.options.map((element, index) => {
                                        return (
                                            <span key={index} className={"flexed-p"}>
                            { element.applicable === true ? <img className={"znachki"} src="../src/assets/check.png" /> : <img className={"znachki"} src="../src/assets/minus.png" /> }
                                                {element.name} </span>
                                        )
                                    }) }
                                </p>
                            </section>
                        </section>
                    )
                })}
            </div>
        </>
    )
};

export default Part2Assignment1e;
