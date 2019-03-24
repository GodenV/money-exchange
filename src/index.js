
module.exports = function makeExchange(currency) {
    if(currency > 10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency < 0)
    return {};
    vocabulary = {
    }    
    vocabulary["H"] = (currency - currency%50)/50;
    currency = currency - vocabulary["H"]*50;
    vocabulary["Q"] = (currency - currency%25)/25;
    currency = currency - vocabulary["Q"]*25;
    vocabulary["D"] = (currency - currency%10)/10;
    currency = currency - vocabulary["D"]*10;
    vocabulary["N"] = (currency - currency%5)/5;
    currency = currency - vocabulary["N"]*5;
    vocabulary["P"] = currency;
    for(var key in vocabulary)
    {
        if(vocabulary[key] == 0)
        delete vocabulary[key];
    }
    return vocabulary;
}
