function solution(N, number) {
    var answer = 8;
    if(number> 43046721)
        return -1;
    let arr=Array.from({length:7},()=>Array.from([]) )
    arr[0][0]=N;
    //arr=arr.map((a,b)=>console.log( Array.isArray(arr[b-1]) ))

    for(let i =0;i<8;i++){
        //arr=arr.map((a,b)=>b>0?arr[b-1].map(v=>Array.from([v+N,v-N,v*N,N!=0?v/N:0,+(''+a+N),Array.from({length:b-1},()=>1).join('')])):0)
        arr.map((a,b)=>b>0?console.log(Array.isArray(arr[b-1])):0)
    }
    console.log(arr)
    //console.log(Array.isArray(arr))
    console.log(arr.map((a,b)=>Array.isArray(arr[b])))
    
    return answer;

}



N=5
number=12
console.log(`answer : ${solution(N,number)}`)
console.log(' ')
N=2
number=11
console.log(`answer : ${solution(N,number)}`)

