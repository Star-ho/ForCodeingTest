/**
 * ㄴㄴ 갯수별로 나눠야할듯
 * 
 * 
 */

var sortByBits = function(arr) {
    arr.sort((a,b)=>(a-b))
    arr=arr.map(v=>v.toString(2));
    let count=Array.from({length:Math.max(...arr).toString(2).length},()=>Array.from([]))
    for(let i=0;i<arr.length;i++){
        let num=arr[i].split('').map(v=>+v).reduce((a,b)=>a+=b,0)
        //console.log(arr[i],num)
        count[num].push(arr[i])
    }
    
    
    return count.flat().map(v=>parseInt(v,2))
    
};

console.log(sortByBits([0,1,2,3,4,5,6,7,8]))