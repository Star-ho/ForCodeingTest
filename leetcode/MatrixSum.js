/**
 * var matrixBlockSum = function (mat, K) {
  const dp = [
    Array(mat[0].length + 1).fill(0),
    ...mat.map((row) => [0, ...row]),
  ];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      dp[i + 1][j + 1] = mat[i][j] + dp[i][j + 1] + dp[i + 1][j] - dp[i][j];
    }
  }

  const m = mat.length;
  const n = mat[0].length;

  for (let i = 1; i < dp.length; i++) {
    const r1 = Math.max(0, i - K - 1);
    const r2 = Math.min(m, i + K);
    for (let j = 1; j < dp[0].length; j++) {
      const c1 = Math.max(0, j - K - 1);
      const c2 = Math.min(n, j + K);

      mat[i - 1][j - 1] = dp[r2][c2] - dp[r1][c2] - dp[r2][c1] + dp[r1][c1];
    }
  }

  return mat;
};
 * 
 */
 
var matrixBlockSum = function(mat, K) {
    let ret=Array.from({length:mat.length},()=>Array.from({length:mat[0].length},()=>0))
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            for(let r=Math.max(0,i-K);r<=Math.min(i+K,mat.length-1);r++){
                for(let c=Math.max(0,j-K);c<=Math.min(mat[0].length-1,j+K);c++){
                    //console.log(i,j,r,c)
                    ret[i][j]+=mat[r][c]
                }
            }
        }
    }
    return ret
};

console.log(matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]],1))