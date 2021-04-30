function solution(stones, k) {
  var answer = 0;
  if(stones.length==k){
    return Math.max(...stones)
  }
  if(1==k){
    return Math.min(...stones)
  }
  let arr=[...new Set(stones)].sort((a,b)=>(a-b))
  let lo=0;
  let hi=arr.length;
  while(lo<hi){
    const mid=Math.floor((lo+hi)/2)
    let temp=culwidth(stones,arr[mid])
    if(temp<k){
      lo=mid+1
    }else{
      hi=mid
    }
  }  
  answer=arr[lo]
  return answer;
}

function culwidth(stones,i){
  let flag=1
  let temp=0
  let cur_max=0
  stones.forEach((v,index)=>{
    if(v<=i){
      if(flag==0){
         temp++     
        if(stones[index+1]<i){
        }else{
          cur_max=cur_max>temp?cur_max:temp;
        }
      }else{
        temp=1
        flag=0
      }
    }else{
      flag=1
    }
  })
  return cur_max
}

console.log(solution(

  [2, 4, 5, 3, 2, 1, 4, 2, 5, 1,4,5,1,2,3,1,2,4,5,1,3,6,7,8,9,10], 4

))