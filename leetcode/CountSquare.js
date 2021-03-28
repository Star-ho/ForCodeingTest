/**
이거 4개 합쳐서 다시 만들기 ㅇㅈ?

*/


var countSquares = function(matrix) {
    let ret=0
    matrix.forEach(v=>v.forEach(c=>ret+=c));
    for(let i=2;i<=matrix.length;i++){
        let arr=makeSquare(matrix,i);
        //console.log(arr)
        arr.forEach(v=>v.forEach(c=>ret+=c))
    }

    function makeSquare(arr,n){
        let arr2=Array.from({length:arr.length-n+1},()=>Array.from({length:arr[0].length-n+1},()=>0))
        for(let i=0;i<arr2.length;i++){
            for(let j=0;j<arr2[0].length;j++){
                let sum=0;
                for(let k=i;k<i+n;k++){
                    for(let l=j;l<j+n;l++){
                        sum+=arr[k][l]
                    }
                }
                if(sum==n*n){
                    arr2[i][j]=1
                }
            }   
        }
        return arr2
    }
    return ret
};

console.log(countSquares(
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]

))