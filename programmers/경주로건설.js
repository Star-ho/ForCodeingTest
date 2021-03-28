/**
 * 잘못한점 
 * bfs라는 이유로 생각하지 않고 품
 * 
 * (*)표시되어있는줄 비교할때 >로 했음
 * 혹시나 싶어 >=로 했는데 차이를 생각해보니 방향성에 있음
 * 현재는 차이가 없지만 다음진행시 방향에 따라 돈이 달라지므로 >=로 해야 했음!
 * 
 * 
 * 이전에 진행했던 것이 진행 이유가 아니라
 * 이전에 진행했던 것보다 돈이 더 적게들면 진행할 수 있다는 생각을 하지 못했음
 * 
 * 
 * 
 */

 function solution(board) {
    var answer = 999999;
    let cache=Array.from({length:board.length+1},()=>Array.from({length:board[0].length},()=>9999999999));
    
    let bfs=function(board){
        let queue=[];
        let current=[0,0,0,'*'];//현재위치, 돈, 방향
        cache[board.length][1]='*';
        queue.push(current)
        while(queue.length!=0){ 
            current=queue.shift();
            //console.log(current)
            if(current[0]==board.length-1&&current[1]==board[0].length-1){
                answer=Math.min(current[2],answer)
            }


            if(current[0]<board[0].length-1&&board[current[0]+1][current[1]]==0){
                if(current[3]=='U'||current[3]=='*'){
                    if(cache[current[0]+1][current[1]]>=current[2]+100){//(*)
                        cache[current[0]+1][current[1]]=current[2]+100
                        queue=[...queue,[current[0]+1,current[1],current[2]+100,'U']]
                    }
                }else{
                    if(cache[current[0]+1][current[1]]>=current[2]+600){//(*)
                        cache[current[0]+1][current[1]]=current[2]+600
                        queue=[...queue,[current[0]+1,current[1],current[2]+600,'U']]
                    }
                }

            }  


            if(current[1]<board[0].length-1&&board[current[0]][current[1]+1]==0){
                if(current[3]=='R'||current[3]=='*'){
                    if(cache[current[0]][current[1]+1]>=current[2]+100){//(*)
                        cache[current[0]][current[1]+1]=current[2]+100;
                        queue=[...queue,[current[0],current[1]+1,current[2]+100,'R']];
                    }
                }else{
                    if(cache[current[0]][current[1]+1]>=current[2]+600){//(*)
                        cache[current[0]][current[1]+1]=current[2]+600
                        queue=[...queue,[current[0],current[1]+1,current[2]+600,'R']]
                    }
                }
            }

            if(current[0]>0&&board[current[0]-1][current[1]]==0){
                if(current[3]=='D'||current[3]=='*'){
                    if(cache[current[0]-1][current[1]]>=current[2]+100){//(*)
                        cache[current[0]-1][current[1]]=current[2]+100
                        queue=[...queue,[current[0]-1,current[1],current[2]+100,'D']]
                    }
                }else{
                    if(cache[current[0]-1][current[1]]>=current[2]+600){//(*)
                        cache[current[0]-1][current[1]]=current[2]+600
                        queue=[...queue,[current[0]-1,current[1],current[2]+600,'D']]
                    }
                }
            }
            if(current[1]>0&&board[current[0]][current[1]-1]==0){
                if(current[3]=='L'||current[3]=='*'){
                    if(cache[current[0]][current[1]-1]>=current[2]+100){//(*)
                        cache[current[0]][current[1]-1]=current[2]+100
                        queue=[...queue,[current[0],current[1]-1,current[2]+100,'L']]
                    }   
                }else{
                    if(cache[current[0]][current[1]-1]>=current[2]+600){//(*)
                        cache[current[0]][current[1]-1]=current[2]+600
                        queue=[...queue,[current[0],current[1]-1,current[2]+600,'L']]
                    }
                }
            }
        }
    }
    bfs(board)
    //console.log(cache)
    return answer;
}
console.log(solution(	[[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0]] ))

