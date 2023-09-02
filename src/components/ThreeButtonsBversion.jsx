import {useState, useEffect} from "react";
import {inventory} from "../constants/inventory.js";

const ThreeButtonsBversion = () => {
    const [knopka, setKnopka] = useState('')
    const [filteredArray, setFilteredArray] = useState([])

    useEffect(() => {
        let tempArray = [...inventory];

        if (knopka === "most sold") {
            tempArray.sort((a, b) => b.sold - a.sold);
        } else if (knopka === "cheapest") {
            tempArray.sort((a, b) => a.price - b.price);
        } else if (knopka === "best for sports") {
            tempArray.sort((a, b) => b.refreshRate - a.refreshRate);
        }

        setFilteredArray(tempArray);
    }, [knopka]);


    function setValueForSetKnopka (selectedValue) {
        setKnopka(selectedValue);
    }

    return (
        <>
            <h3>Alle TVs...(click the buttons below to sort the TVs)</h3>
            <section className={"flexed20"}>
                    <button onClick={() => {setValueForSetKnopka("most sold")}}
                            type="button"
                            className={knopka === "most sold" ? "active-knopka" : "default-knopka"}>
                        Most sold first</button>
                    <button onClick={() => {setValueForSetKnopka("cheapest")}}
                            type="button"
                            className={knopka === "cheapest" ? "active-knopka" : "default-knopka"}>
                        Cheapest first</button>
                    <button onClick={() => {setValueForSetKnopka("best for sports")}}
                        type="button"
                            className={knopka === "best for sports" ? "active-knopka" : "default-knopka"}>
                        Best for sports first</button>
            </section>

            {   knopka
                ? <h4> The <span className={"span-choice"}> {knopka}</span> TVs are first!</h4>
                : <h4>Click a button to see which TVs are sorted this way</h4>
            }

            { knopka && filteredArray?.map( (check) => {
                    return  <section className={"best-TV"} key={check.id}>
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
                })
                }
        </>
    )
}

export default ThreeButtonsBversion;