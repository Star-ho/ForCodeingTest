function solution(number, k) {
    var answer = '';
    let startNumber=0
    let len=number.length-k
    if(number.length==len){
        for(let i=0;i<number.length;i++){
            answer+=number[i]
        }
        return answer
    }
    while(len>0){
        let temp;
        if(number.legnth>500000&&len<100){
            let i=500000
            temp = Math.max(...number.slice(0,i))
            temp = Math.max(...number.slice(i,number.length-len+1))
        }else{
            temp = Math.max(...number.slice(0,number.length-len+1))
        }
        let tempIndex=number.indexOf(temp)
        number=number.slice(tempIndex+1)
        answer+=temp
        len--
        if(number.length==len){
            for(let i=0;i<number.length;i++){
                answer+=number[i]
            }
            break
        }
    }
    return answer;
}