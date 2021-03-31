function solution(n, results) {
    var answer = 0;
    
    let arr=Array.from({length:n+1},()=>Array.from({length:n+1},()=>10))
    results.forEach(v=>{
        arr[v[0]][v[1]]=1

    })
    let arr2=Array.from({length:n+1},()=>Array.from({length:n+1},()=>10))
    results.forEach(v=>{
        arr2[v[1]][v[0]]=1

    })
    for(let i=0;i<=n;i++){
        arr[i][i]=0
        arr2[i][i]=0
    }

    for(let k =0;k<=n;k++){
        for(let i=0;i<=n;i++){
            for(let j=0;j<=n;j++){  
                arr[i][j]=Math.min(arr[i][j],arr[i][k]+arr[k][j])
                arr2[i][j]=Math.min(arr2[i][j],arr2[i][k]+arr2[k][j])
            }
        }
    }
    

    let arr3=Array.from({length:n+1},()=>Array.from({length:n+1},()=>Infinity));
    for(let i =0;i<=n;i++){
        for(let j =0;j<=n;j++){
            arr3[i][j]=Math.min(arr[i][j],arr2[i][j])
        }
        
    }
    console.log(arr)
    console.log(arr2)
    arr3.splice(0,1)
    
    arr3.forEach(v=>v.splice(0,1))
    console.log(arr3)
    arr3.forEach(v=>{
        if(v.reduce((a,b)=>a+=b,0)!=Infinity){
            answer++
        }
    })
    return answer;
}

console.log(solution(5,	[[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]))