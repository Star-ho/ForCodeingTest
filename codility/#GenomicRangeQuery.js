function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    S=S.split('')
    let arr=[[1,S[0]]];
    let j=0;
    let res=[];
    for(let i=1;i<S.length;i++){
        if(S[i]==S[i-1]){
            arr[j][0]++
        }else{
            arr.push([arr[j][0]+1,S[i]])
            j++;
        }
    }
    for(let i=0;i<P.length;i++){
            let left=findRight(arr,P[i])
            let right=findRight(arr,Q[i])
            let temp=[]
            for(let i=left;i<=right;i++){
                temp.push(arr[i][1])
            }
            temp.sort()
            console.log(temp)
            if(temp[0]=='A')
                res.push(1)
            if(temp[0]=='C')
                res.push(2)
            if(temp[0]=='G')
                res.push(3)
            if(temp[0]=='T')
                res.push(4)
        
        
    }

    return res
}

function findRight(arr,v){
    let lo=0;
    let hi=arr.length;
    while(lo<hi){
        const mid=Math.floor((lo+hi)/2)
        if(arr[mid][0]>v){
            hi=mid
        }else{
            lo=mid+1
        }
    }
    return lo
}

function findLeft(arr,v){
    let lo=0;
    let hi=arr.length;
    while(lo<hi){
        const mid=Math.floor((lo+hi)/2)
        if(arr[mid][0]<v){
            lo=mid+1
        }else{
            hi=mid
        }
    }
    return lo    
}
console.log(solution(

    'CAGCCTA', [2, 5, 0], [4, 5, 6]

))