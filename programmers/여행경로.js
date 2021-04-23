function solution(tickets) {
    var answer = [];
    let map=new Map()
    let queue=[]
    let lastLen=tickets.length
    function dfs(curCity,tickets,res=["ICN"]){
        if(res.length==lastLen+1){
            if(answer.length==0){
                answer=res.slice()
            }else{
                for(let i=0;i<answer.length;i++){
                    if(answer[i].localeCompare(res[i])>0){
                        answer=res.slice()
                        break;
                    }
                    if(answer[i].localeCompare(res[i])<0)
                        break;
                }
            }
        }
        let nextCity=tickets.filter(v=>v[0]==curCity).map(v=>v[1])
        for(let i=0;i<nextCity.length;i++){
            let nextIndex=tickets.findIndex(v=>v[0]==curCity&&v[1]==nextCity[i])
            dfs(nextCity[i],[...tickets.slice(0,nextIndex),...tickets.slice(nextIndex+1)],[...res,nextCity[i]])
        }
    }
    dfs("ICN",tickets)
    return answer;
}