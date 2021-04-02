function solution(gems) {
  const cateGemLen=[...new Set(gems)].length
  var answer = [gems.length,Infinity]
  let start=0;
  let end=0;
  let gemMap=new Map();
  while(start<=end&&end<=gems.length){
    console.log(start,end,gemMap)

    if(gemMap.size==cateGemLen){
      if(answer[1]-answer[0]>end-start){
        answer[0]=start;
        answer[1]=end
      }
      if(gemMap.get(gems[start])==1){
        gemMap.delete(gems[start])
      }else{
        gemMap.set(gems[start],gemMap.get(gems[start])-1)
      }
      start++;
    }else{
      if(gemMap.has(gems[end])){
        gemMap.set(gems[end],gemMap.get(gems[end])+1)
      }else{
        gemMap.set(gems[end],1)
      }
      end++;
    }
  }
  answer[0]++
  return answer;
}


console.log(solution(

  ["ZZZ", "YYY", "NNNN", "YYY", "BBB"]	
))
