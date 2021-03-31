function solution(lines) {
    var answer = 0;
    let time=Array.from({length:lines.length},()=>Array.from({length:2},()=>0));
    let temp,add;
    for(let i=0;i<lines.length;i++){
        temp=lines[i].split(' ')[0]+" "+lines[i].split(' ')[1]
        add=parseInt(lines[i].split(' ')[2])
        time[i][0]=Date.parse(temp)-add
        time[i][1]=Date.parse(temp)
    }
    console.log(time)
    let low=0;
    let low1=0;
    let high1=0;
    let high=0;
    for(let i=0;i<time.length;i++){
        for(let j=0;j<time.length;j++){
            if( ((time[i][0]-1000)<time[j][0]&&(time[i][0])>=time[j][0]) || ((time[i][0]-1000)<time[j][1]&&(time[i][0])>=time[j][1]) ){
                low++
            }
        }
        for(let j=0;j<time.length;j++){
            if( ((time[i][1]-1000)<time[j][0]&&(time[i][1])>=time[j][0]) || ((time[i][1]-1000)<time[j][1]&&(time[i][1])>=time[j][1]) ){
                low1++
            }
        }
        for(let j=0;j<time.length;j++){
            if( ((time[i][0])<=time[j][0]&&(time[i][0]+1000)>time[j][0]) || ((time[i][0])<=time[j][1]&&(time[i][0]+1000)>time[j][1]) ){
                high++;
            }
        }
        for(let j=0;j<time.length;j++){
            if( ((time[i][1])<=time[j][0]&&(time[i][1]+1000)>time[j][0]) || ((time[i][1])<=time[j][1]&&(time[i][1]+1000)>time[j][1]) ){
                high1++;
            }
        }
        answer=Math.max(low,high,answer)
        low=0
        high=0
    }
    return answer;
}

console.log(solution(
    [
        "2016-09-15 20:59:57.421 0.351s",
        "2016-09-15 20:59:58.233 1.181s",
        "2016-09-15 20:59:58.299 0.8s",
        "2016-09-15 20:59:58.688 1.041s",
        "2016-09-15 20:59:59.591 1.412s",
        "2016-09-15 21:00:00.464 1.466s",
        "2016-09-15 21:00:00.741 1.581s",
        "2016-09-15 21:00:00.748 2.31s",
        "2016-09-15 21:00:00.966 0.381s",
        "2016-09-15 21:00:02.066 2.62s"
        ]
    ))