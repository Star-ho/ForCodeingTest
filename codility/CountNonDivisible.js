function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let temp=Array.from({length:A.length},()=>0);
    let map=new Map()
    for(let i=0;i<A.length;i++){
        A.forEach((v,index)=>{
            if(v%A[i]!=0){
                temp[index]++
            }
        })
    }
    return temp
}
console.log(solution(

    [3, 1, 2, 3, 6]
))