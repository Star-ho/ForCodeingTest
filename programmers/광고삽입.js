function solution(play_time, adv_time, logs) {
    var answer=[0,Infinity]
    if(play_time===adv_time){
        return "00:00:00"
    }
    play_time=secToInt(play_time)
    adv_time=secToInt(adv_time)
    logs=logs.map(v=> secArrToInt(v) )
    let arr=Array.from({length:play_time+1},()=>0)
    logs.forEach(v=>{
        arr[v[0]] += 1
        arr[v[1]] += -1
    })
    for(let i=1;i<arr.length;i++){
        arr[i]+=arr[i-1]
    }
    let res=0
    for(let i=0;i<=adv_time;i++){
        res+=arr[i]
    }
    let lo=0
    answer=[res,0]
    for(let hi=adv_time;hi<play_time;hi++){
        res=res-arr[lo]+arr[hi]
        //console.log(res,v[0])
        lo++
        if(res>answer[0]){
            answer=[res,lo]
        }
    }
    //console.log(answer)
    answer=answer[1]

    let temp=Math.floor(answer/3600)+''
    while(temp.length<2){
        temp='0'+temp
    }
    let ret=''+temp+':'
    answer=answer%3600
    temp=Math.floor(answer/60)+''
    while(temp.length<2){
        temp='0'+temp
    }
    ret=ret+temp+':'    
    answer=answer%60+''
    while(answer.length<2){
        answer='0'+answer
    }
    ret+=answer
    return ret;



    function secToInt(str){
        str=str.split(':')
        return +str[0]*3600+ +str[1]*60+ +str[2]
    }
    function secArrToInt(arr){
        let temp=arr.split('-')
        return [secToInt(temp[0]),secToInt(temp[1])]
    }
}


console.log(solution(



	"02:03:55", "00:14:15", ["01:20:15-01:45:14", "00:25:50-00:48:29", "00:40:31-01:00:00", "01:37:44-02:02:30", "01:30:59-01:53:29"]



))

console.log(99*3600+59*60+59)