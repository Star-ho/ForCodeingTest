function solution(gems) {
    let len=gems.length;
    var answer = [];
    let start=0
    let end=0
    let temp=[1,9999]
    let n=[...new Set(gems)].length
    ff : while(end!=len+1){
      if([...new Set(gems.slice(start,end))].length==n){
        while(start!=end){
          if([...new Set(gems.slice(start,end))].length<n){
              if(temp[1]-temp[0]>end-start){
                console.log(start-1,end)
                temp=[start-1,end]
              }
              continue ff;
            }
          start++;
        }
      }
      end++
    }
    
    //console.log(start,end)
    answer=[temp[0],temp[1]]
    return answer;
 }
 
console.log(solution(
  ["A", "A", "B"]

  ))
