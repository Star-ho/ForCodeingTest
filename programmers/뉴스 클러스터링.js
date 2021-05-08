function solution(str1, str2) { //합집합과 교집합 모두 공집합일경우 65536리턴
    var answer = 0;
    str1=str1.toLowerCase()
    str2=str2.toLowerCase()
    let temp=[]
    for(let i=0;i<str1.length;i++){
        temp.push(str1.slice(i,i+2))
    }
    str1=temp.slice()
    temp=[]
    for(let i=0;i<str2.length;i++){
        temp.push(str2.slice(i,i+2))
    }
    str2=temp.slice()
    let reg=new RegExp('[A-Za-z][A-Za-z]')
    for(let i=0;i<str1.length;i++){
        if(!str1[i].match(reg)){
            str1.splice(i,1)
            i--
        }
    }
    for(let i=0;i<str2.length;i++){
        if(!str2[i].match(reg)){
            str2.splice(i,1)
            i--
        }
    }
    str1.sort()
    str2.sort()
    if(str1.join()===str2.join()){
        return 65536
    }
    
    str1=str1.map(v=>[v,1])
    str2=str2.map(v=>[v,1])
    for(let i=0;i<str1.length;i++){
        for(let j=i+1;j<str1.length;j++){
            if(str1[i][0]==str1[j][0]){
                str1.splice(j,1)
                str1[i][1]++
                j--
            }
        }
    }
    for(let i=0;i<str2.length;i++){
        for(let j=i+1;j<str2.length;j++){
            if(str2[i][0]==str2[j][0]){
                str2.splice(j,1)
                str2[i][1]++
                j--
            }
        }
    }
    let gyo=[]
    let hab=[...str1,...str2]
    for(let i=0;i<hab.length;i++){
        for(let j=i+1;j<hab.length;j++){
            if(hab[i][0]==hab[j][0]){
                gyo.push([hab[i][0],Math.min(hab[i][1],hab[j][1])])
                hab[i][1]=Math.max(hab[i][1],hab[j][1])
                hab.splice(j,1)
                continue;
            }
        }
    }
    //console.log(gyo)
    //console.log(hab)
    if(hab.length==0){
        return 65536
    }
    answer=Math.floor(gyo.reduce((a,b)=>a+=b[1],0)/hab.reduce((a,b)=>a+=b[1],0)*65536)
    return answer;
    //결과에 65536곱함
    //교집합 나누기 합집합
}

console.log(solution(

	"FRANCE", "french"
    
    ))