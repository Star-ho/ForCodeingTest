function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res=0

    while(A.length>0){
        let arr=[]
        for(let i=0;i<A.length;i++){
            if(A[i]<=B[0])
                arr.push(i)
        }
        A=A.filter((v,i)=>arr.indexOf(i)==-1)
        B=B.filter((v,i)=>arr.indexOf(i)==-1)
        res++
    }
    return res
}
console.log(solution(


    [1, 3, 7, 9, 9], [5, 6, 8, 9, 10]
))
