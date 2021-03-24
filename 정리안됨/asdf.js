const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
//정점의 갯수, 간선의 갯수 , 탐색 시작 번호
const stdin = `6 8 1
1 6
6 2
2 4
4 3
3 5
5 1
5 6
2 3
`.split('\n');
const input_func = (() => {
    let line = 0;
    return () => stdin[line++];
})();
let input=input_func().split(' ').map(v=>[+v]);
let node_count=[...input[0]];
let line_count=[...input[1]];
let start_node=[...input[2]];
let line=Array.from({length:line_count},()=>0);
line=line.map(v=>(input_func()).split(' ').map(v=>+v).sort((a,b)=>(a-b)));
console.log(line)

line=line.filter(v=>v[0]!=0)

function lineToList(node_num,line_num,line){
    let list=Array.from({length:(+node_num+1)},()=>[])
    line.forEach(v=>{
        list[v[0]].push(v[1]);
        list[v[1]].push(v[0]);
    })
    return list.map(v=>v.sort((a,b)=>(a-b)));
}

let visit=[]
start_node=+start_node;
let bfs=function(start_node,graph){
    let queue=[start_node];
    visit.push(start_node);
    while(queue.length!==0){
        const node=queue.shift();
        for(let i of graph[node]){
            //console.log(visit)
            if(!visit.includes(i)){
                visit.push(i);
                queue=[...queue,i]
            }
        }
    }
    
}


let dfs=function(start_node,line){
    visit.push(start_node);
    for(let i of line[start_node]){
        if(!visit.includes(i)){
            dfs(i,line)
        }
    }
}

line=lineToList(+node_count,+line_count,line)

dfs(start_node,line)
console.log(visit)
visit=[];
bfs(start_node,line)
i = visit.findIndex(v=>v==0)
if(i!=-1)
    visit.splice(i,1)
console.log(visit)
