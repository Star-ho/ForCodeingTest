function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length==2){
        return Math.abs(A[1]-A[0])
    }
    let start=A[0];
    let end=A.slice(1).reduce((a,b)=>a+=b,0)
    let res=Math.abs(start-end)
    for(let i=1;i<A.length-1;i++){
        start+=A[i]
        end-=A[i]
        if(res>Math.abs(start-end))
            res=Math.abs(start-end)
    }
    return res
}

console.log(solution(

    [3, 1, 2, 4, 3]

    ))
