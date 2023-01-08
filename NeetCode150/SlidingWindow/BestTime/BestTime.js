/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var lowest=prices[0];
    var diff = -1;
    for(let i = 1; i<prices.length;i++){
        if(prices[i]<lowest)
            lowest = prices[i];
        else if(diff<(prices[i]-lowest))
            diff = prices[i]-lowest;
    }
    if(diff<=0) return 0;
    return diff;
};