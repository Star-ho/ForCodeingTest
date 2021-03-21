function solution(dirs) {
    var answer = 0;
    let loc=[0,0]
    let locstack=[]
    locstack.push(loc.slice())
    dirs=dirs.split('')
    dirs.forEach(v=>{
        let temp=[]
        if(v=='U'){
            if(loc[1]!=5){
                temp=loc
                temp[1]++;
                locstack.push(loc.slice());
            }
        }
        if(v=='D'){
            if(loc[1]!=-5){
                loc[1]--;
                locstack.push(loc.slice());
            }
        }
        if(v=='L'){
            if(loc[0]!=-5){
                loc[0]--;
                locstack.push(loc.slice());
            }
        }
        if(v=='R'){
            if(loc[0]!=5){
                loc[0]++;
                locstack.push(loc.slice());
            }
        }

    })

    locstack=locstack.map(v=>v.map(a=>a+5))
    console.log(locstack)
    let graph=lineToGraph(10,locstack).flat()
    
    answer=graph.reduce((a,b)=>a+=b)

    return answer;
}

console.log(solution("LULLLLLLU"))

function lineToGraph(node_num,line){
    let Graph=Array.from({length:(+node_num+1)},()=>Array.from({length:(+node_num+1)},()=>0))
    line.forEach(v=>{
        Graph[v[0]][v[1]]=1
    })
    return Graph
}

/*
0,0 배열을 푸쉬
그리고 UDRL에 따라 값을 변경
U면 [1]위치에 +1을 하겠지
그리고 또 값을 푸쉬

하지만 값이 절대값 5를 넘어가면 +1하지 않음

그리고 SET하면 될듯
 */