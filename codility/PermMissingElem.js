function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length==1){
        return A[0]
    }
    A.sort((a,b)=>(a-b))
    for(let i=0;i<A.length;i++){
        if(A[i]!=i+1)
            return i+1
    }
    return(A[A.length-1])
}
console.log(solution([2, 3, 1, 5]))