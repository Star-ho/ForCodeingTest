/**
 * 0에서 N까지 돌아가는 반복문
 * j는 0부터 시작해서 station의 인덱스
 * station의 범위에 포함되면 점프
 * 포함안되면 포함안되는 갯수만큼 스택에 담고 station시작하는곳 까지 점프
 * 
 * 효율성 테스트에서 막혔다
 * 잘짠 코드 보면 루프를 0에서 N으로 돌리는게 아닌 stations로 루프를 돌렸다
 * stations가 빈공간을 찾았음
 * 
 */

 function solution(n, stations, w) {
    var answer = 3;
    let station_index=0
    let temp_index=0;
    let temp=[];
    for(let i =0;i<=n;i++){
        //console.log(i)
        if(i<stations[station_index]-w){
            temp.push(0);
            temp[temp_index]=stations[station_index]-w-i-1
            i=stations[station_index]-1
            temp_index++;
            continue;
        }
        if(stations[station_index]-w<=i&&i<=stations[station_index]+w){
            i=stations[station_index]+w-1
            station_index++
            continue;
        }
        if(stations[station_index]==undefined){
            temp.push(0);
            temp[temp_index]=n-i
            i=n
            continue;
        }
    }
    answer=temp.reduce((a,b)=>{
        let temp=Math.floor(b/(2*w+1))
        temp=(b%(2*w+1))>0?temp+1:temp
        return a+temp
        },0)
    return answer;
}
console.log(solution(11,[4, 11],1))