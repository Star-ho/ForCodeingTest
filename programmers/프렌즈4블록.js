/**
 * 일단 스플릿
 * 0,0부터 시작해서 오른쪽, 아래, 오른쪽아래가 같은건지 확인
 *  - undefined면 제외
 * 같으면 erase배열에 추가
 * 그래서 board배열길이의 오른쪽 -2, 아래 -2 까지 검사
 * 삭제는 해당 board[arr[0][0]][arr[0][1]].splice로 
 * 삭제를 했으면 flag=다시 1로 해서 다시 동작하게
 * flag가 0이면 다시 안함
 */

 function solution(m, n, board) {
    var answer = 0;
    let flag=true
    let arr=[[]]
    board=board.map(v=>v.split(''))
    //console.log(board)
    n=board[0].length
    m=board.length
    let switBoard=Array.from({length:n},()=>Array.from({length:m},()=>0))
    switBoard.forEach((_,i)=>{
            _.forEach((v,j)=>{
                switBoard[i][j]=board[m-j-1][i]
            })
    })
    //console.log(switBoard)
    let k=0
    while(flag){
        flag=false;
        for(let j=0;j<m-1;j++){
            for(let i=0;i<n-1;i++){
                //console.log(i,j)
                if(switBoard[i][j]!=undefined&&switBoard[i][j]==switBoard[i+1][j]&&switBoard[i+1][j]==switBoard[i][j+1]&&switBoard[i][j+1]==switBoard[i+1][j+1]){
                    arr[k].push([i,j],[i+1,j],[i,j+1],[i+1,j+1])
                }
            }
        }
        if(arr[k].length!=0){
            arr[k]=removeDup(arr[k])
            for(let i=arr[k].length-1;i>=0;i--){
                switBoard[arr[k][i][0]].splice(arr[k][i][1],1)
                flag=true;
            }
            arr.push([])
            k++;
        }
        //console.log(switBoard)

    }
    //console.log(arr)
    arr.forEach(v=>answer+=v.length)

    return answer;
}
function removeDup(arr){
	return [...new Set(arr.join('|').split('|'))].map(v=>v.split(',')).map(v=>v.map(a=>+a))
    }
console.log(solution(4,5,["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]))