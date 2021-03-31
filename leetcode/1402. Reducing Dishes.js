var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a,b)=>(a-b));
    let arr=[];
    if(satisfaction[satisfaction.length-1]<=0) return 0;
    arr.push(satisfaction.slice().reduce((sum,v,i)=>sum+=v*(i+1)))
    if(satisfaction.length==1){
        if(satisfaction[0]>0){
            return satisfaction[0];
        }else{
            return 0;
        }
    }
    for(let i=1;i<satisfaction.length;i++){
        arr.push(satisfaction.slice(i).reduce((sum,v,i)=>sum+=v*(i+1)))
        if(arr[i]<arr[i-1])
            break;
    }
    return arr[arr.length-2]
};

console.log(maxSatisfaction( [-1,-8,0,5,-9]))