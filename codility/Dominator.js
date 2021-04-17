function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map=new Map()
    let domi_len=A.length/2
    if(A.length==1){
        return 0
    }
    for(let i=0;i<A.length;i++){
        if(map.has(A[i])){
            map.set(A[i],map.get(A[i])+1)
            if(map.get(A[i])>domi_len){
                return i;
            }
        }else{
            map.set(A[i],1)
        }
    }
    return -1
}

console.log(solution(

    [3, 4, 3, 2, 3, -1, 3, 3]
))