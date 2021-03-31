




var uniquePaths = function(m, n) {
    let arr=Array.from({length:m},()=>Array.from({length:n},()=>1))
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            arr[i][j]=arr[i-1][j]+arr[i][j-1]
        }
    }
    return arr[arr.length-1][arr[0].length-1]
};

console.log(uniquePaths(3,7))