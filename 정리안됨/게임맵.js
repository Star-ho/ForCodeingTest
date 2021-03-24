/*
이동가능하면 이동,
큐에넣기
일단시작
큐가 0인지 파악
거리 +1해주기
큐에있는거 빼기
매 턴마다 가로 +1. 세로 +1해서 이동 가능한지 확인,
갈수있으면 큐에넣기
간거는 그래프 0으로 바꾸기
다시 처음부터
 */

function solution(maps) {
    var answer = Infinity;
    let len=0;
    let queue=[];
    let current;
    let mapsLen=maps.length;
    let mapOneLen=maps[0].length;
    if(maps[mapsLen-1][mapsLen-2]==0&&maps[mapsLen-2][mapsLen-1]==0)
        return -1;
    queue.push([0,0,0])
    maps[0][0]=0;
    while(queue.length!=0){
        current=queue.shift();
        //console.log(current)
        if(current[0]==mapsLen-1&&current[1]==mapOneLen-1){
            answer=Math.min(answer,current[2])
        }
        if(current[0]<mapsLen-1&&maps[current[0]+1][current[1]]==1){
            queue=[...queue,[current[0]+1,current[1],current[2]+1]];
            maps[current[0]+1][current[1]]=0;
        }
        if(current[0]>0&&maps[current[0]-1][current[1]]==1){
            queue=[...queue,[current[0]-1,current[1],current[2]+1]];
            maps[current[0]-1][current[1]]=0;

        }
        if(current[1]<mapOneLen-1&&maps[current[0]][current[1]+1]==1){
            queue=[...queue,[current[0],current[1]+1,current[2]+1]];
            maps[current[0]][current[1]+1]=0;
        }
        if(current[1]>0&&maps[current[0]][current[1]-1]==1){
            queue=[...queue,[current[0],current[1]-1,current[2]+1]];
            maps[current[0]][current[1]-1]=0;
        }

    }
    answer=answer==Infinity?-1:answer+1;
    return answer;
}

//console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
console.log(solution([[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]))
//let cache=Array.from({length:maps.length},()=>Array.from({length:maps[0].length},()=>0))