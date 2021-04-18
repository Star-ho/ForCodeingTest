function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res=0;
    let left_size=0;
    let left_candidate= Infinity;
    let right_size=0;
    let right_candidate= Infinity;

    if(A.length==1){
        return 0
    }
    for(let i=0;i<A.length-1;i++){
        let left_leader=-1
        let count=0
        if(left_size==0){
            left_candidate=A[i]
            left_size=1
        }else{
            if(left_candidate==A[i]){
                left_size++
            }else{
                left_size--
            }
        }
        for(let k=0;k<=i;k++){
            if(A[k]==left_candidate)
                count++
        }
        if(count>(i+1)/2)
            left_leader=left_candidate
        if(left_leader!=-1){
            let right_leader=-1
            count=0;
            right_size=0;
            for(let j=i+1;j<A.length;j++){
                if(right_size==0){
                    right_candidate=A[j]
                    right_size=1
                }else{
                    if(right_candidate==A[j]){
                        right_size++;
                    }else{
                        right_size--;
                    }
                }
            }
            
            for(let k=i+1;k<=A.length;k++){
                if(A[k]==right_candidate)
                    count++
            }
            if(count>(i+1)/2)
                right_leader=right_candidate
            if(right_size>0){
                if(left_leader==right_leader){
                    res++;
                }
            }
        }
    }
    return res
}

console.log(solution(

    [4, 4, 2, 5, 3, 4, 4, 4]

))
let a=`
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res=0;
    let map=new Map();

    if(A.length==1){
        return 0
    }
    for(let i=0;i<A.length;i++){
        if(map.has(A[i])){
            map.set(A[i],map.get(A[i])+1);
        }else{
            map.set(A[i],1);
        }
    }
    let left_size=0;
    let left_leader= Infinity;

    for(let i =0;i<A.length;i++){
        if(left_size==0){
            left_leader=A[i]
            left_size=1
        }else{
            if(left_leader==A[i]){
                left_size++
            }else{
                left_size--
            }
        }
        map.set(A[i],map.get(A[i])-1)
        if(map.get(A[i])==0)
            map.delete(A[i])
        console.log(left_leader,left_size)
        if(left_size>0){
            let temp=[]
            map.forEach((val,key)=>{
                temp.push([key,val])
            })
            if(map.size==0)
                break;
            console.log(temp,left_leader,left_size)
            temp.sort((a,b)=>b[1]-a[1])
            if(temp[0][1]>(A.length-i-1)/2){
                if(temp[0][0]==left_leader)
                    res++
            }
            console.log(res)
        }
    }
    return res
}

`