function solution(play_time, adv_time, logs) {
    var answer=[0,Infinity]
    if(play_time===adv_time){
        return "00:00:00"
    }
    play_time=secToInt(play_time)
    adv_time=secToInt(adv_time)
    logs=logs.map(v=>[secToInt(v.split('-')[0]),secToInt(v.split('-')[1])])
    logs.sort((a,b)=>(a[0]-b[0]))
    for(let i=0;i<logs.length;i++){
        const res=[logs.filter(v=>(v[0]<=logs[i][0]&&v[1]>=logs[i][1]) || (v[1]<=logs[i][1]&&v[1]>=logs[i][0])||(v[0]<=logs[i][1]&&v[0]>=logs[i][0])||(v[1]<=logs[i][1]&&v[0]>=logs[i][0])).length, logs[i][0]]
        console.log(res)
        if(answer[0]<res[0]){
            answer=res.slice()
        }
    }
    console.log(play_time,adv_time,logs,answer)
    answer=answer[1]
    let res=''+Math.floor(answer/3600)+':'
    answer=answer%3600
    res=res+Math.floor(answer/60)+':'
    answer=answer%60
    res+=answer
    return res;



    function secToInt(str){
        str=str.split(':')
        return +str[0]*3600+ +str[1]*60+ +str[2]
    }
}


console.log(solution(



	"02:03:55", "00:14:15", ["01:20:15-01:45:14", "00:25:50-00:48:29", "00:40:31-01:00:00", "01:37:44-02:02:30", "01:30:59-01:53:29"]



))