function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count=1
    let temp=0

    for(let i=0;i<A.length;i++){
        if(A[i]<B[temp]){
            count++
            temp=i
        }
    }
    return count
}

console.log(solution(


    [1, 3, 7, 9, 9], [5, 6, 8, 9, 10]
))
