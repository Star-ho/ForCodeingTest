function solution(brown, yellow) {
    var answer = [];
    let j=0;
    for(let i = 2;i<brown/2+1;i++){
        if((brown+yellow)%i==0){
            j=(brown+yellow)/i;
            if( (i-2)*(j-2) == yellow )
                return [j,i]
        }
    }
    return answer;
}

console.log(solution(10,2))