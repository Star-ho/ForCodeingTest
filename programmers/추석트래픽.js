function solution(lines) {
    var answer = 0;
    let date=[]
    for(let line of lines)
        date.push([Date.parse(line.split(' ').slice(0,2).join(' '))-parseFloat(line.split(' ')[2])*1000,Date.parse(line.split(' ').slice(0,2).join(' '))])
    console.log(date)
    for(let i=0;i<date.length;i++){
        for(let k=0;k<date[i].length;k++){
            let temp=0
            for(let j=0;j<date.length;j++){
                if(date[i][k]-999<date[j][0]&&date[j][0]<=date[i][k]){
                    temp++
                    continue
                }
                if(date[i][k]-99<date[j][1]&&date[j][1]<=date[i][k]){
                    temp++
                    continue;
                }
                if(date[i][k]-999>date[j][0]&&date[j][1]>=date[i][k]){
                    temp++
                    continue
                }
                if(date[i][k]-999<date[j][0]&&date[j][1]<=date[i][k]){
                    temp++
                    continue
                }
            }
            answer=Math.max(answer,temp)
        }
    }

    for(let i=0;i<date.length;i++){
        for(let k=0;k<date[i].length;k++){
            let temp=0
            for(let j=0;j<date.length;j++){
                if(date[i][k]<=date[j][0]&&date[j][0]<date[i][k]+999){
                    temp++
                    continue
                }
                if(date[i][k]<=date[j][1]&&date[j][1]<date[i][k]+999){
                    temp++
                    continue;
                }
                if(date[i][k]>=date[j][0]&&date[j][1]>date[i][k]+999){
                    temp++
                    continue
                }
                if(date[i][k]<=date[j][0]&&date[j][1]<date[i][k]+999){
                    temp++
                    continue
                }
            }
            answer=Math.max(answer,temp)
        }
    }

    return answer;
}

console.log(solution(
    
    ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]


))