/*
s%n 이 0이면 몫을 n개만큼
s%n이 0이 아닐때
1일때는 한개에 1을 더해
2일때는 각자 1을더해
첫번째꺼 빼고 다 1을더해 ㅇㅈ?
*/

function solution(n, s) {
    var answer = [];
    if(s%n==0){
        for(let i=0;i<n;i++){
            answer.push(s/n)
        }
    }else{
        for(let i=0;i<n;i++){
            answer.push(Math.floor(s/n))
        }
        for(let i=answer.length-1;i>answer.length-(s%n)-1;i--){
            answer[i]++;
        }
    }
    if(answer[0]==0)
        return [-1];
    return answer;
}

console.log(solution(4,25))
console.log(solution(2,1,[-1]))