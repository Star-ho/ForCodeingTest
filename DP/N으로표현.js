/**
 * 숫자가 12이고 숫자가 5일때
 * 5/5 인경우 55/5 인경우
 * 5가 1개
 * 5
 * 5가 2개
 * 5 55 5/5 5+5 5-5 5*5
 * 5로 3 
 * 
 * 5로 3
 * 5+5+5/5 
 * 
 * 5로 4
 * 5
 * 11
 * 55/5 55+5/5 55+5+5/5
 */
function solution(N, number) {
    var answer = 0;

    let set=Array.from({length:8},()=>[])
    set[0]=N
    set[1]=[N*N,N+N,N/N,+`${NN}`]
    for(let i=1;i<set.length;i++){
        
    }

    return answer;
}

console.log(solution(5,12))