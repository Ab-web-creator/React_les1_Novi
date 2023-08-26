function itemsLeft (array) {

    let soldItems = 0;
    let purchasedItems = 0;
    let leftItems = 0;

    for (let i = 0; i < array.length; i++) {
        soldItems = soldItems + array[i].sold;
        purchasedItems = purchasedItems + array[i].originalStock;
    }

    leftItems = purchasedItems - soldItems;

    return leftItems;
}

export default itemsLeft;