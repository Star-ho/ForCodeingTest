function solution(begin, target, words) {
    var answer = Infinity;
    if(words.indexOf(target)==-1){
        return 0
    }
    let cache=new Map();
    cache.set(begin,0)
    dfs(begin,target,words)
    function dfs(begin,target,words){
        let queue=[begin];
        while(queue.length>0){
            let cur=queue.shift()
            if(cur===target){
                answer=Math.min(cache.get(cur),answer)
                continue;
            }
            let arr=oneDiff(cur,words)
            for(let i=0;i<arr.length;i++){
                if(!cache.has(arr[i])){
                    cache.set(arr[i],cache.get(cur)+1)
                    queue.push(arr[i])
                }
            }
        }
    }
    if(answer==Infinity){
        return 0
    }
    return answer;
}

function oneDiff (word,arr){
        let res=[]
        for(let i=0;i<arr.length;i++){
            let count=0;
            for(let j=0;j<arr[i].length;j++){
                if(word[j]==arr[i][j])
                    count++
            }
            if(count==arr[0].length-1){
                res.push(arr[i])
            }
        }
        return res
    }