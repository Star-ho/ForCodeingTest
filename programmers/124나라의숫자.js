/**
*/

function solution(n) {
    var answer = '';
    n=n-1;
    while(n>3){
        answer+=n%3
        n=Math.floor(n/3)
    }
    answer=n+answer
    console.log(answer)
    answer=answer.split('').map(v=>{
        if(v==1) return 1
        if(v==2) return 2
        if(v==0) return 4
    })
    return answer;
}

console.log(solution(9))