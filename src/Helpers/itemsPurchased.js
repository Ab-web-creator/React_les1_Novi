function itemsPurchased (array) {
    let purchasedItems = 0;
    // console.log(array);
    for (let i = 0; i < array.length; i++) {
        purchasedItems = purchasedItems + array[i].originalStock;
    }
    return purchasedItems;
}

export default itemsPurchased;