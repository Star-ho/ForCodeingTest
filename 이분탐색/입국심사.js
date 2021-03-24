function solution(n, times) {
    var answer = 0;
    let a=[];
    let arr=times.map(v=>Array.from([v]))
    
    for(let i=1;i<=n;i++){
        arr=arr.map((v,index)=>v.push(times[index]*i))
    }
    return answer;
    
}

console.log(solution(6,[7, 10]))