function itemsSold (array) {
    let soldItems = 0;
    // console.log(array);
    for (let i = 0; i < array.length; i++) {
        soldItems = soldItems + array[i].sold;
    }
    return soldItems;
}

export default itemsSold;