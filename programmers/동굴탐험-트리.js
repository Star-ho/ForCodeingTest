function solution(n, path, order) {
    var answer = true;
    let arr=Array.from({length:n},()=>[])
    let adj=Array.from({length:n},()=>[])
    let i=0
    for(let i of path){
        arr[i[0]].push(i[1])
        arr[i[1]].push(i[0])
    }
    let queue=[0]
    let visit=[0]
    while(queue.length>0){
        let cur=queue.shift();
        for(let i of arr[cur]){
            if(visit.indexOf(i)==-1){
                visit.push(i)
                adj[cur].push(i)
                queue.push(i)
            }
        }
    }
    for(let i of order){
        adj[i[0]].push(i[1])
    }
    let flag=true
    let cache=Array.from({length:n},()=>-1)
    let finish=Array.from({length:n},()=>-1)
    let dfs=function(now){
        console.log("cache",cache)
        if(flag==false)return;
        cache[now]=now
        for(let i of adj[now]){
            if(cache[i]==-1){
                dfs(i)
            }
            else if(finish[i]==-1){
                flag=false
                return
            }
        }
        finish[now]=now
        console.log("finish",finish)
    }
    dfs(0)
    console.log(adj)
    return flag
}


console.log(solution(


    9, [[0, 1], [0, 3], [0, 7], [8, 1], [3, 6], [1, 2], [4, 7], [7, 5]], [[8, 5], [6, 7], [4, 1]]


))

