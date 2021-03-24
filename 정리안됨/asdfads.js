

function solution(genres, plays) {
    var answer = [];
    let total=Array.from({length:genres.length},()=>0).map((a,b)=>a=[genres[b],plays[b],b]);
    genres=[...new Set(genres)]
    let arr=Array.from({length:genres.length},()=>[])
    for(let i =0;i<genres.length;i++){
        total.forEach(v=>v[0]==genres[i]?arr[i].push(v):0)
    }
    arr.sort((a,b)=>(b.reduce((a,b)=>a+b[1],0)-a.reduce((a,b)=>a+b[1],0)))
    arr=arr.map( v=> v.sort((a,b)=>( b[1]-a[1]) ).slice(0,2) ).flat()
    arr.forEach(v=> answer.push(v[2]) )
    console.log(arr)
    return answer;
}

let a =solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500])
console.log(`answer :`,a)