/*
일단 인접행렬 만들기
arr[x],arr[y],arr[z]=road[1]
플루이드 워셜
K보다 작은시간 구하기
*/

function solution(N, road, K) {
    var answer = 0;
    
    let graph=Array.from({length:N+1},()=>Array.from({length:N+1},()=>Infinity))
    road.forEach(v=>{
        graph[v[0]][v[1]]=Math.min(graph[v[0]][v[1]],v[2])
        graph[v[1]][v[0]]=Math.min(graph[v[1]][v[0]],v[2])
    })
    for(let i=0;i<=N;i++){
        graph[i][i]=0
    }

    for(let k=1;k<=N;k++){
        for(let i=1;i<=N;i++){
            for(let j=1;j<=N;j++){
                graph[i][j]=Math.min(graph[i][j], graph[i][k]+graph[k][j])
            }
        }
    }
    console.log(graph)

    answer=graph[1].reduce((a,b)=>b<=K?a+=1:a,0)

    return answer;
}

console.log(solution(5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3))
//console.log(solution(6,[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]],4))