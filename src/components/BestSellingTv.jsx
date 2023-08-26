import {bestSellingTv} from "../constants/inventory.js";

const BestSellingTv = () => {

    return (
        <>
        <h3>Best verkochte TV</h3>
    <div className={"best-TV"}>
        <div>
            <img src={bestSellingTv.sourceImg} />
        </div>

        <div>
            <h5> {bestSellingTv.brand} {bestSellingTv.type} - {bestSellingTv.name} </h5>
            <h5 className={"price-bold"}> ${bestSellingTv.price}, - </h5>
            <div className="flexed">
                {bestSellingTv.availableSizes.map((element, index, array) => {

                    const cantimetrizedElement = element * 2.54
                    const elementRounded = Math.round(cantimetrizedElement)
                    console.log("index", index)
                    console.log("array", array)


                    //  array = [a, b, c]
                    //  a:index = 0; array.length = 3-1 = 2   FALSE
                    //  b:index = 1; array.length = 3-1 = 2   FALSE
                    //  c:index = 2; array.length = 3-1 = 2   TRUE



                    const lastElement =  index === array.length - 1 ? true : false
                    console.log("lastElement", lastElement )

                    return (
                            <p key={index} className={"flexed-p"}> { element } inch ({elementRounded} cm)
                                {lastElement ? " " : " |"} </p>
                    )
                }) }
            </div>




            <p>
                {  bestSellingTv.options.map((element, index) => {
                    return (
                        <span key={index} className={"flexed-p"}>
                            { element.applicable === true ? <img className={"znachki"} src="../src/assets/check.png" /> : <img className={"znachki"} src="../src/assets/minus.png" /> }
                            {element.name} </span>
                    )
                }) }
            </p>
        </div>
    </div>
        </>
    )
}





export default BestSellingTv;