function solution(n, computers) {
    var answer = 0;
    let arr=Array.from({length:n},()=>[])
    for(let i=0;i<computers.length;i++){
        for(let j=0;j<Math.ceil((i+1)/2);j++){
            if(i!=j){
                if(computers[i][j]==1&&arr[i].indexOf(j)==-1){
                    arr[i].push(j)
                    arr[j].push(i)
                }
            }
        }
    }
    function dfs(arr){
        let queue=[];
        let cache=[];
        while(cache.length!=arr.length){
            console.log(queue,cache)
            if(queue.length==0){
                for(let i=0;queue.length==0&&i<arr.length;i++){
                    if(cache.indexOf(i)==-1){
                        queue.push(i)
                        answer++
                    }
                }
            }
            let cur=queue.pop()
            if(cache.indexOf(cur)==-1){
                queue.push(...arr[cur])
            }
        }
    }
    console.log(arr)
    dfs(arr)
    return answer;
}

console.log(solution(

    3	,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]
))