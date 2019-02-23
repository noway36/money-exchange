module.exports = function makeExchange(currency) {
    const object = {};
    if (currency > 0 && currency < 10000){
        let coin50 = 0, coin25 = 0, coin10 = 0, coin5 = 0, coin1 = 0, coinsArray = [];
        coin50 = Math.floor(currency/50);
        currency -= coin50*50;
        coin25 = Math.floor(currency / 25);
        currency -= coin25 * 25;
        coin10 = Math.floor(currency / 10);
        currency -= coin10 * 10;
        coin5 = Math.floor(currency / 5);
        currency -= coin5 * 5;
        coin1 = Math.floor(currency/1);
        coinsArray = [coin50, coin25, coin10, coin5, coin1];
        if(coinsArray[0] != 0) 
            object["H"] = coinsArray[0];
        if (coinsArray[1] != 0) 
            object["Q"] = coinsArray[1];
        if (coinsArray[2] != 0)
            object["D"] = coinsArray[2];
        if (coinsArray[3] != 0)
            object["N"] = coinsArray[3];
        if (coinsArray[4] != 0)
            object["P"] = coinsArray[4];

    } else if (currency != 0 && currency > 10000) {
            object.error = "You are rich, my friend! We don't have so much coins for exchange";
        } 
    return object;
}
