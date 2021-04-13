function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr=Array.from({length:N+1},()=>0)
    const lastIndex=A.lastIndex(N+1)
    
    for(let i=0;i<A.length;i++){
        if(A[i]>N){
            let max=Math.max(...arr)
            for(let i=1;i<arr.length;i++){
                arr[i]=max;
            }
            continue
        }
        arr[A[i]]=arr[A[i]]+1
    }
    arr.shift()
    return arr
}

console.log(
    solution(

        5, [3, 4, 4, 6, 1, 4, 4]

    )
)