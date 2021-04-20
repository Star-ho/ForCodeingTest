function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res=new Set()
    for(let i=1;i<A.length-1;i++){
        if(A[i-1]<A[i]&&A[i]>A[i+1])
            res.add(A[i])
    }

    return res.size
}

console.log(solution(

    [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]

))