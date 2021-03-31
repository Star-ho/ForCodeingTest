/**
 * 
 */
 function solution(n) {
    var answer = 0;
    let graph=Array.from({length:n},()=>Array.from({length:n},()=>0))
    console.log(graph)
    for(let i=0;i<n;i++){

    }
    console.log(setOne(graph,[1,1]))
    return answer;
}
function setOne(graph,loc){
    graph=graph.map((v,i)=>{
        if(i==loc[0])
            return v.map((a,b)=>{
                if(b==loc[1])
                    return a
                return ++a
            })
        return v
    })
    graph=graph.map((v,i)=>{
        return v.map((a,b)=>{
            if(b==loc[0]&&i!=loc[1])
                return ++a   
            return a
        })
        return v
    })
    return graph
}

console.log(solution(4))