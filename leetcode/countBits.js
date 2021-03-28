/**
 * 
 * 
 * 
*/
var countBits = function(num) {
    let res=Array.from({length:num+1},()=>0)
    let twojegom=2
    let count=0;
    res[0]=0;
    res[1]=1;
    for(let i=2;i<res.length;i++){
        if(i==twojegom){
            count=1;
            twojegom=twojegom*2;
        }
        if(i%2!=0){
            count++;
        }
        res[i]=count;

    }
    return res
}

console.log(countBits(2))