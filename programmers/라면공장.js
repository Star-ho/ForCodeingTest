const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : 
`6
2 0 1 0 2`
).split('\n');

let n=+stdin[0]
let A=stdin[1]
A=A.split(' ').map(v=>+v)
let cost=0;
let min=0;
for(let i=0;i<A.length;i++){
    min=0
    if(A[i]>0){
        if(i<A.length-1&&A[i+1]>0){
            if(i<A.length-2&&A[i+2]>0){
                min=Math.min(A[i],A[i+1],A[i+2])
                A[i]=A[i]-min
                A[i+1]=A[i+1]-min
                A[i+2]=A[i+2]-min
                cost+=7*min
            }
            min=Math.min(A[i],A[i+1])
            A[i]=A[i]-min
            A[i+1]=A[i+1]-min
            cost+=5*min
        }
        cost+=A[i]*3
        A[i]=0
    }
}
console.log(cost)
