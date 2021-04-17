function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res=0;
    let right_leader=Infinity
    let right_size=0
    let map=new Map()

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
    
    let left_size=0;
    let left_leader=Infinity;

    for(let i of A){
        if(left_size==0){
            left_leader=i
            left_size=1
        }else{
            if(left_leader==i){
                left_size++
            }else{
                left_size--
            }
        }
        if(right_size==0){
            right_leader=i
            right_size=1
        }else{
            if(right_leader==i){
                right_size--
            }else{
                right_size++
            }
        }
        if(left_leader==right_leader){
            res++;
        }
        
    }

    return res
}

console.log(solution(
    [4, 3, 4, 4, 4, 2]
))