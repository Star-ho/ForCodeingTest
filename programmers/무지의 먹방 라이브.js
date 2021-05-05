function solution(food_times, k) {
    var answer = 0;
    let minArr=[...new Set(food_times)].sort((a,b)=>(b-a))
    let valMap=new Map()
    food_times.forEach(v=>{
        if(valMap.get(v)){
            valMap.set(v,valMap.get(v)+1)
        }else{
            valMap.set(v,1)
        }
    })
    let foodLen=food_times.length
    let preMin=0
    let min=0
    while(k>0){
        min=minArr.pop()
        console.log(min,foodLen,k)
        if((min-preMin)*foodLen<=k){
            k=k-(min-preMin)*foodLen
            foodLen=foodLen-valMap.get(min)
        }else{
            k=k%foodLen;
            break
        }
        preMin=min
    }
    console.log(min,foodLen,k)
    if(foodLen==0){
        return -1
    }
    food_times.forEach((v,i)=>{
        if(v>preMin){
            if(k==0){
                answer=i+1
            }
            k--
        }
    })
    return answer;
}



console.log(
    solution(
    
        [4,2,3,6,7,1,5,8],27
        
        ))

//3,5
let a=`
console.log(
    solution(
    
        [4,2,3,6,7,1,5,8],27
        [4,2,3,6,7,1,5,8], 16
        ))
        `