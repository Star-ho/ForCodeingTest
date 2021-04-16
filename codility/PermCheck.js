function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b)=>(a-b))
    for(let i=0;i<A.length;i++){
        if(i+1!=A[i])
            return 0;
    }

    return 1
}