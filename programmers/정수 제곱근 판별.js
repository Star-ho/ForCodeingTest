function solution(n) {
    var answer = 0;
    n=Math.sqrt(n)
    if(!Number.isInteger(n)){
        return -1
    }
    n=(n+1)*(n+1)
    return n
}

console.log(solution(


    122
))