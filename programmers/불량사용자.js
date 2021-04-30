function solution(user_id, banned_id) {
    var answer = 0;
    banned_id=banned_id.map(_=>new RegExp('^'+_.split('').map(v=>v=='*'?'.':v).join('')+'$','g'))
    let arr=Array.from({length:banned_id.length},()=>[])
    for(let i=0;i<user_id.length;i++){
        for(let j=0;j<banned_id.length;j++){
            if(user_id[i].match(banned_id[j])){
                arr[j].push(user_id[i])
            }
        }
    }
    //console.log(banned_id)
    //console.log(arr)
    let resArr=[]
    let dfs=function(res=[],arr,index=0){
        if(index==arr.length){
            resArr.push(res)
            return
        }
        let queue=arr[index]
        for(let i=0;i<queue.length;i++){
            if(res.indexOf(queue[i])==-1){
                dfs([...res,queue[i]],arr,index+1)
            }
        }
        
    }
    dfs([],arr)
    resArr.map(v=>v.sort())
    resArr=resArr.map(v=>v.join())
    answer=[...new Set(resArr)].length
    return answer;
}

console.log(solution(

	["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]
))
