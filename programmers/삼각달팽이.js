/*
1:22분
배열에 1,2,3넣고 진행 
1일떄는 앞의값 증가
2일때는 뒤의값 증가
3일때는 둘다 감소
언제마다 바뀔것인가
5 4 3 2 1
*/

function solution(n) {
    var answer = [];
    answer=Array.from({length:n},()=>[]);
    answer=answer.map((v,i)=>Array.from({length:i+1},()=>0))
    let len=Array.from({length:n},()=>0).map((v,i)=>n-i);
    let loc=[-1,0];
    //console.log(len)
    let number=1;
    for(let i=0;i<len.length;i++){
        for(let j=0;j<len[i];j++){
            if(i%3==0){
                loc[0]++;
                answer[loc[0]][loc[1]]=number;
            }
            if(i%3==1){
                loc[1]++;
                answer[loc[0]][loc[1]]=number;
            }
            if(i%3==2){
                loc[0]--;
                loc[1]--;
                answer[loc[0]][loc[1]]=number;
            }
            //console.log(loc,i)
            number++;
        }
    }
    answer=answer.flat()
    return answer;
}

console.log(solution(4))