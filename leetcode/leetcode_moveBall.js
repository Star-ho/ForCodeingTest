var minOperations = function(boxes) {
    boxes=boxes.split('').map(v=>+v);
    let ret=Array.from({length:boxes.length},()=>0)
    for(let i=0;i<ret.length;i++){
        boxes.forEach((v,index)=>{
            if(v==1&&index!=i){
                ret[i]+=Math.abs(index-i)
            }
        })
    }
    console.log(ret)
};

console.log(minOperations( "001011"
))