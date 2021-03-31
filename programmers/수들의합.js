const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `200
`
).split('\n');

let n=+stdin[0]

let sum=0;
let lo=0;
let hi=n;
while(lo<hi){
    const mid=Math.floor((lo+hi)/2)
    sum=0
    for(let i=1;i<=mid;i++)
        sum+=i
    if(sum>n){
        hi=mid
    }else(
        lo=mid+1
    )
 //   console.log(sum,lo,hi,mid)
}

console.log(lo-1)