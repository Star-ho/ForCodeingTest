function solution(board) {
    var answer = 0;
    board=board.map(_=>_.map(v=>v==1?-1:Infinity))
    let bfs=function(board,start){
        let cache=board.slice();
        let queue=[[...start,0]];
        while(queue.length>0){
            let current=queue.pop();
            if(current[1]+1<cache[0].length&&cache[current[0]][current[1]+1]!=-1){
                if(cache[current[0]][current[1]+1]<current[2]+1){
                    cache[current[0]][current[1]+1]=current[2]+1;
                    queue.push([current[0],current[1]+1,current[2]+1])
                }
            }
            if(current[0]+1<cache.length&&cache[current[0]+1][current[1]]!=-1){
                if(cache[current[0]+1][current[1]]<current[2]+1){
                    cache[current[0]+1][current[1]]=current[2]+1;
                    queue.push([current[0]+1,current[1],current[2]+1])
                }
            }
            if(current[1]-1>0&&cache[current[0]][current[1]-1]!=-1){
                if(cache[current[0]][current[1]-1]<current[2]+1){
                    cache[current[0]][current[1]-1]=current[2]+1;
                    queue.push([current[0],current[1]-1,current[2]+1])
                }
            }
            if(current[0]-1>0&&cache[current[0]-1][current[1]]!=-1){
                if(cache[current[0]-1][current[1]]<current[2]+1){
                    cache[current[0]-1][current[1]]=current[2]+1;
                    queue.push([current[0]-1,current[1],current[2]+1])
                }
            }

        }
        return cache
    }
    console.log(bfs(board,[0,0]))
    console.log(bfs(board,[0,1]))
    return answer;
}

console.log(solution(
    [[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]]
))