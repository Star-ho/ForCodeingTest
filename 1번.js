/*
배열로 바꾸고
0갯수 reduce로 찾고
0필터하고
length를 toString으로 바꿈
ㅇㅋ

*/

function solution(s) {
    var answer = [0,0];
    while(s!='1'){
        s=s.split('')
        s.forEach(v=>v=='0'?answer[1]++:0)
        s=s.filter(v=>v=='1').length.toString(2)
        answer[0]++;
    }
    return answer;
}
console.log(solution('01110'))