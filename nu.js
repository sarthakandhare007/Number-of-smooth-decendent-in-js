var getDescentPeriods = function(prices) {
    let ans = 1;     // first day
    let count = 1;   // current smooth descent length

    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] - prices[i] === 1) {
            count++;
        } else {
            count = 1;
        }
        ans += count;
    }

    return ans;
};
