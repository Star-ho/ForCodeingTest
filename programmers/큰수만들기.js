/*
*
number에서 k만큼 자른후 제일 큰 것 선택
자른것 인덱스부터 k-1만큼 자른 후 제일크너 선택
자른거 인덱스부터 k-2만큼 자른 후 제일 큰 거 선택

*/
function solution(number, k) {
    var answer = '';
    console.log(number.length)
    let anLen=number.length-k;
    let startNum=0;
    let maxNum=0;
    let anLen2=anLen;
    number=number.split('').map(v=>+v);
    let i=0
    while(answer.length!=anLen){
        maxNum=Math.max(...number.slice(startNum,number.length-anLen2+1));
        answer+=maxNum;
        startNum=number.indexOf(maxNum,startNum)+1;
        k--;
        anLen2--;
        i++;
    }

    return answer;
}
let s='9'
for(let i=0;i<1000000;i++)
    s=s+9
console.log(s.length)
solution(s)