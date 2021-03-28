function solution(n, results) {
    var answer = 0;
    let arr=Array.from({length:n+1},()=>Array.from({length:n+1},()=>0));
    results.forEach(v=>{
        arr[v[0]][v[1]]++;
        arr[v[1]][v[0]]++;
    })
    arr=arr.map(v=>v.map(a=>a==0?Infinity:a));
    for(let i=1;i<n+1;i++){
        arr[i][i]=0
    }
    for(let k = 1; k<=n; k++){
        for(let i= 1;i <= n ;i++){        
            for(let j = 1; j <= n; j++){
                arr[i][j]=Math.min(arr[i][j],arr[i][k]+arr[k][j])
            }
        }
    }
    console.log(arr)

    return answer;
}
//solution(6,[[4, 3], [4, 2], [3, 2], [1, 2],[2, 5],[6,3]])
console.log(solution(5,[[4, 3], [4, 2], [3, 2], [1, 2],[2, 5]]))