/**
 * 
 * 
 * 
 * 
 */
var convert = function(s, numRows) {
    if(numRow1s==1)return s
    let pattenLen=numRows*2-2;
    let arr=Array.from({length:numRows},()=>'');
    for(let i=0;i<s.length;i++){
        let loc = i%pattenLen
        if(loc>=numRows){
            loc=pattenLen-loc
        }
        arr[loc]=arr[loc]+s[i]
    
    }
    return arr.join('');
};

console.log(convert())