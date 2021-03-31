/**
 * 큰수로 나눈 나머지를 남은 수들로 해결할 수 있을까
 *  다시짜기
 */
var coinChange = function(coins, amount) {
    if(amount<coins[coins.length-1]) return 0;

    let dp=Array.from({length:amount+1},()=>Infinity);
    dp[0]=0;
    for(let i=1;i<=amount;i++){
        for(let coin of coins){
            if(i>=coin)
                dp[i]=Math.min(dp[i],dp[i-coin]+1)
        }
    }
    console.log(dp)
    return 1
};

console.log(coinChange([1,2,5],11))