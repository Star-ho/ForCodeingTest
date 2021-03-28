/**
 * aarray
 * 
 * 
 */

 var maxProfit = function(prices) {
    let arr=[[prices[0],prices[1]]]
    for(let i=1;i<prices.length;i++){
        if(prices[i]<arr[arr.length-1][0]){
            arr.push([prices[i],0])
        }
        for(let j=0;j<arr.length;j++){
            if(arr[j][1]<prices[i]){
                arr[j][1]=prices[i]
            }
        }
    }
    return Math.max(...arr.map(v=>v[1]-v[0]))
};

console.log(maxProfit([7,6,4,3,1]))