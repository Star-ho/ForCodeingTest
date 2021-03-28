/**
 * 큰수로 나눈 나머지를 남은 수들로 해결할 수 있을까
 *  다시짜기
 */
var coinChange = function(coins, amount) {
    let answer=-1;
    coins.sort((a,b)=>(b-a))
    if(amount<coins[coins.length-1]) return 0;
    if(amount==0) return 0;

    let arr=Array.from({length:~~(amount/coins[coins.length-1])},()=>[]);
    arr[0].push(...coins)
    if(arr[0].indexOf(amount)!=-1)
        return 1
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<arr[i-1].length;j++){
            for(let k=0;k<coins.length;k++){
                arr[i].push(arr[i-1][j]+coins[k])
            }
            if(arr[i].indexOf(amount)!=-1)
                return i+1
        }
    }
    return answer
};

console.log(coinChange([1],2))