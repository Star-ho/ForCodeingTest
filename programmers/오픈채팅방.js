function solution(record) {
    var answer = [];
    let id=new Map();
    record=record.map(v=>v.split(' '))
    for(let i=0;i<record.length;i++){
        if(record[i][0]=='Enter'){
            if(!id.get(record[i][1])){
                id.set(record[i][1],record[i][2])
            }
            answer.push([record[i][1],"님이 들어왔습니다."])
        }if(record[i][0]=="Leave"){
            answer.push([record[i][1],"님이 나갔습니다."])
        }else{
            id.set(record[i][1],record[i][2])
        }
    }
    answer=answer.map(v=>{
        v[0]=id.get(v[0])
        return v.join("")
    })
    return answer;
}



console.log(solution(

["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

))