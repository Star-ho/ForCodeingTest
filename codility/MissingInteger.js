// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A=[...new Set(A.filter(a=>a>0))].sort((a,b)=>(a-b));
    for(let i=0;i<A.length;i++){
        if(i+1!=A[i]){
            return i+1
        }
    }
    return A.length+1
}


console.log(solution(


    [1, 3, 6, 4, 1, 2]

))