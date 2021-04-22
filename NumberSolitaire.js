function solution(A){
    let res=A[0]
    let i=0;
    console.log(A.length-6)
    while(i<A.length-1){
        let temp=A.slice(i+1,i+7)
        let index=temp.findIndex(a=>a>=0)
        if(index>-1){
            i+=index+1
            res+=A[i]
        }else if(A.length-6<=i&&i<=A.length-1){
            console.log(i,11)
            i=A.length-1
            res+=A[i]
        }else{
            index=temp.lastIndexOf(Math.max(...temp));
            i+=index+1
            res+=A[i]
        }
        console.log(A[i],i)
    }
    return res
}

console.log(solution(

    [1, -2, 0, 9, -1,-1,-1,-1,-1,-3, -2]

))

