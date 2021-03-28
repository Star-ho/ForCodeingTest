function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=>(a[2]-b[2]))
    let cost=costs[0][2];
    let arr=[costs[0][0],costs[0][1]];
    console.log(cost,arr)
    let graph=Array.from({length:n},()=>Array.from({length:n},()=>0))
    let cache=Array.from({length:n},()=>Array.from({length:n},()=>0))
    for(let i=0;i<costs.length;i++){
        graph[costs[i][0]][costs[i][1]]=costs[i][2]
        graph[costs[i][1]][costs[i][0]]=costs[i][2]
        cache[costs[i][1]][costs[i][0]]=1
        cache[costs[i][1]][costs[i][0]]=1
    }
    let connected=[costs[0][0],costs[0][1]]
    let temp=[...graph[0],...graph[1]];
    let min=0;
    while(n!=arr.length){
        


    }

    console.log(graph)

    return answer;
}

console.log(solution(4,[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]))
