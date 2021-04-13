// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let B=new Map();
    for(let i=0;i<A.length;i++){
        if(B.has(A[i])){
            B.set(A[i],B.get(A[i])+1)
        }else{
            B.set(A[i],1)
        }
    }
    for(let i of B.entries()){
        if(i[1]%2==1)
            return i[0]
    }
}