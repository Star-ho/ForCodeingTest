function solution(n,edges){
    let answer=1
    edges=lineToList(n,edges)
    let len=Array.from({length:n+1},()=>9999999);
    let cache=Array.from([])
    let queue=Array.from([1]);
    len[1]=0;

    let BFS=function(startNode,edges){
        let currentNode=startNode;
        queue.push(currentNode);
        cache.push(currentNode)
        while(queue.length>0){
            currentNode=queue.shift()
            for(let i of edges[currentNode]){
                if(!cache.includes(i)){
                    len[i]=Math.min(len[currentNode]+1,len[i])
                    queue=[...queue,i];
                    cache.push(i);
                }
            }
        }
    }
    BFS(1,edges)
    console.log(len)
    len=len.map((a,b)=>Array.from([b,a])).filter(v=>v[1]!=9999999).sort((a,b)=>(b[1]-a[1]))
    answer=len.filter(v=>v[1]==len[0][1]).map(v=>v[0]).length;
    console.log(len)
    return answer;
}

function lineToList(node_num,line){
    let list=Array.from({length:(+node_num+1)},()=>[])
    line.forEach(v=>{
        list[v[0]].push(v[1]);
        list[v[1]].push(v[0]);
    })
    return list.map(v=>v.sort((a,b)=>(a-b)));
}

solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])
