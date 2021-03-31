/**
 * 
 * 
 * 
 */

 function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=>(a[2]-b[2]))
    let arr=Array.from({length:n},()=>0).map((v,i)=>i)
    let cost=0;
    while(costs.length>0){
        let cur=costs.shift();
        if(getParents(arr,cur[0])==getParents(arr,cur[1]))
            continue;
        console.log(cur)
        unionParents(arr,cur[0],cur[1]);
        console.log(arr)

        cost+=cur[2]
    }
    return cost;
}

function getParents(arr,b){ 
    if(arr[b]==b) return b;
    return arr[b]=getParents(arr,arr[b])

}

function unionParents(parents, a,b){
    a=getParents(parents,a);
    b=getParents(parents,b);
    if(a<b)parents[b]=a;
    else parents[a]=b
}


console.log(solution(
    
   6,
    
   [[0, 1, 5], [0, 3, 2], [0, 4, 3], [1, 4, 1], [3, 4, 10], [1, 2, 2], [2, 5, 3], [4, 5, 4]]
    
    
    
    ))


