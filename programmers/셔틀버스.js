function solution(n, t, m, timetable) {
    var answer = '';
    let startTime=9*60
    let busTime=[]
    for(let i=0;i<n;i++){
        busTime.push(startTime+i*t)
    }
    for(let i=0;i<timetable.length;i++){
        if(timetable[i]=="24:00")
            timetable="23:59"
    }
    console.log(busTime)
    timetable=timetable.map(v=>{
        v=v.split(':')
        return +v[0]*60+ +v[1]
    })
    timetable.sort((a,b)=>(a-b))
    let client=timetable.filter(v=>v<=busTime[0]).length
    let flag=0
    if(client>=m){
        client=client-m
    }else{
        client=0
        flag=1
    }
    for(let i=1;i<busTime.length;i++){
        client+=timetable.filter(v=>v<=busTime[i]&&v>busTime[i-1]).length
        //console.log(client)
        flag=0
        if(client>=m){
            client=client-m
        }else{
            client=0
            flag=1
        }
    }
    if(flag==1){
        answer=busTime.pop()
    }else{
        //console.log(timetable,client)
        answer=timetable[timetable.length-client-1]
        answer=answer-1
    }
    answer=''+Math.floor(answer/60)+":"+answer%60
    let temp=answer.split(':')
    
    while(temp[0].length<2){
        temp[0]='0'+temp[0]
    }
    while(temp[1].length<2){
        temp[1]='0'+temp[1]
    }
    answer=temp.join(':')
    return answer;
}


console.log(solution(

    2,10,3,["09:05","09:09","09:13"]
    ))