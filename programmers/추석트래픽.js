function solution(lines) {
    var answer = 0;
    let temp=0
    lines=lines.map(v=>[...v.split(' ')]).map(v=>[Date.parse(v[0]+' '+v[1]),v[2]]).map(v=>[v[0] - parseFloat(v[1])*1000+1,v[0]])
    for(let i=0;i<lines.length;i++){
        for(let k=0;k<lines[0].length;k++){
        temp=0
            for(let j=0;j<lines.length;j++){       
                if(lines[i][k]<=lines[j][0]&&lines[i][k]+999>=lines[j][0]){
                    temp++;
                    continue;
                }
                if(lines[i][k]<=lines[j][1]&&lines[i][k]+999>=lines[j][1]){
                    temp++;
                    continue;
                }
            }
        answer=Math.max(answer,temp)
        }
    }
    for(let i=0;i<lines.length;i++){
        for(let k=0;k<lines[0].length;k++){
        temp=0
            for(let j=0;j<lines.length;j++){       
                if(lines[i][k]-999<=lines[j][0]&&lines[i][k]>=lines[j][0]){
                    temp++;
                    continue;
                }
                if(lines[i][k]-999<=lines[j][1]&&lines[i][k]>=lines[j][1]){
                    temp++;
                    continue;
                }
            }
        answer=Math.max(answer,temp)
        }
    }
    console.log(lines)
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