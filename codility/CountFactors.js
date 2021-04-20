function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res=0;
    for(let i=1;i*i<N;i++){
        if(N%i==0){
            res+=2
        }
    }
    return res

}

console.log(solution(

    24
))
