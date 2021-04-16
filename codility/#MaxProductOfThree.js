function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res =0;
    let sum=A.reduce((a,b)=>a+=b,0)
    for(let i=0;i<A.length;i++){
        if(A[i]==1){
            sum--;
        }else{
            res+=sum
            if(res> 1000000000){
                return -1
            }
        }
    }
    return res
}

console.log(solution(

    [0, 1, 0,0,1, 1, 1]
))