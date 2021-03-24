const stdin = `4 5 1
1 2
1 3
1 4
2 4
3 4
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

function lineToGraph(node_num,line){
    let Graph=Array.from({length:(+node_num+1)},()=>Array.from({length:(+node_num+1)},()=>0))
    line.forEach(v=>{
        Graph[v[0]][v[1]]=1
        Graph[v[1]][v[0]]=1
    })
    console.log(Graph)
}

function lineToList(node_num,line){
    let list=Array.from({length:(+node_num+1)},()=>[])
    line.forEach(v=>{
        list[v[0]].push(v[1]);
        list[v[1]].push(v[0]);
    })
}

