function solution(priorities, location) {
    var answer = 0;
    priorities=priorities.map((v,i)=>i==location?[v,1]:[v,0])
    console.log(priorities)
    let temp=Array.from([])
    while(true){
        let max=Math.max(...priorities.map(v=>v[0]));
        temp=priorities.shift()
        console.log(temp)
        if(max==temp[0]){
            answer++;
            if(temp[1]==1){
                break;
            }
            
        }else{
        priorities.push(temp)
    }
    }
    return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1],0))