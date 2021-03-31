function solution(N, number) {
    let arr=Array.from({length:8},()=>[]);
    if(N==number)return 1;
    arr[0].push(N)
    arr[1].push(N*N)
    arr[1].push(0)//N-N
    arr[1].push(N+N)
    arr[1].push(Math.floor(1))//N/N
    
    for(let i=2;i<arr.length;i++){
        for(let j=0;j<arr[i-1].length;j++){
            arr[i].forEach((v,i)=>(
                arr[i]
            ))
            arr[i].push(arr[i-1][j]*arr[i-2][k])
            arr[i].push(arr[i-1][j]-arr[i-2][k])
            arr[i].push(arr[i-1][j]+arr[i-2][k])
            arr[i].push(Math.floor(arr[i-2][k]/arr[i-1][j]))
        }
        arr[i]=[...new Set(arr[i])]
        let temp=''
        for(let j=0;j<=i;j++)
            temp+=N
        arr[i].push(+temp)
        if(arr[i].indexOf(number)!=-1){
//            console.log(arr)
            return i+1
        }
    }
  //  console.log(arr)
    return -1;
}

console.log(solution(5,31168))