const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
//정점의 갯수, 간선의 갯수 , 탐색 시작 번호
const stdin = `1 4
`.split('\n');
const input_func = (() => {
    let line = 0;
    return () => stdin[line++];
})();
let line=Array.from({length:1},()=>0);
line=input_func().split(' ').map(v=>+v);
console.log(line[0]/line[1])