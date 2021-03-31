/**
 * 5
 * 5+4+3+2+1
 * 
 * 
 */

 var countVowelStrings = function(n) {
    let a=Math.pow(5,n-2)
    console.log(a)
    let arr=[5,4,3,2,1]
    arr=arr.map(v=>v*a)
    return arr.reduce((a,b)=>a+=b,0)
};

console.log(countVowelStrings(2))