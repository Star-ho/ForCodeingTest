function solution(board)
{
    if(board.length<=1) return 1
    if(board[0].length<=1) return 1
    if(board.length<=1) return 1
    if(board[0].length<=1) return 1
    for(let i=1;i<board.length;i++){
        for(let j=1;j<board[i].length;j++){
            if(board[i][j-1]>0&&board[i-1][j-1]>0&&board[i-1][j]>0&&board[i-1][j-1]>0&&board[i][j]>0){
                board[i][j]=Math.min(board[i][j-1],board[i-1][j-1],board[i-1][j],board[i-1][j-1])+1
            }
        }
    }
    board=board.map(v=>Math.max(...v))
    let a=Math.max(...board)
    return a*a;
}


console.log(solution(


	[[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]


))