function solution(n, path, order) {
    var answer = true;
    let closeList=Array.from({length:n},()=>[])
    for(let i=0;i<path.length;i++){
        closeList[path[i][0]].push(path[i][1])
        closeList[path[i][1]].push(path[i][0])
    }
    let arr=Array.from({length:n},()=>[])
    let bfs=function(start){
        let queue=[start]
        let cache=[]
        while(queue.length>0){
            let cur=queue.shift();
            for(let i=0;i<closeList[cur].length;i++){
                if(cache.indexOf(closeList[cur][i])==-1){
                    arr[cur].push(closeList[cur][i])
                    queue.push(closeList[cur][i])
                    cache.push(closeList[cur][i])
                }
            }
        }
    }
    bfs(0)
    for(let i=0;i<order.length;i++){
        arr[order[i][0]].push(order[i][1])
    }
    let cache=Array.from({length:n})
    let conuter=0;
    
    console.log(arr)
    return answer;
}

console.log(
    solution(


        9, [[0, 1], [0, 3], [0, 7], [8, 1], [3, 6], [1, 2], [4, 7], [7, 5]], [[8, 5], [6, 7], [4, 1]]
    )
)