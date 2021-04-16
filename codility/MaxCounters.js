function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr=Array.from({length:N+1},()=>0)
    for(let i=0;i<A.length;i++){
        if(A[i]>N){
            let max=Math.max(...arr)
            for(let i=0;i<arr.length;i++){
                arr[i]=max
            }
            continue
        }
        arr[A[i]]+=1
    }
    return arr.slice(1)
}

console.log(
    solution(

        5, [3, 4, 4, 6, 1, 4, 4]

    )
)