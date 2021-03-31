var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1]==1||obstacleGrid[0][0]==1)return 0;
    obstacleGrid=obstacleGrid.map(v=>v.map(a=>a==1?-1:a));
    for(let i=0;i<obstacleGrid.length;i++){
        if(obstacleGrid[i][0]==-1){
            break;
        }
        obstacleGrid[i][0]=1;

    }
    for(let i=0;i<obstacleGrid[0].length;i++){
        if(obstacleGrid[0][i]==-1){
            break;
        }
        obstacleGrid[0][i]=1;
    }
    
    for(let i=1;i<obstacleGrid.length;i++){
        for(let j=1;j<obstacleGrid[0].length;j++){
            if(obstacleGrid[i][j]==-1)continue;
            if(obstacleGrid[i-1][j]==-1&&obstacleGrid[i][j-1]==-1){
                obstacleGrid[i][j]=0
                continue;
            }
            if(obstacleGrid[i][j-1]==-1){
                obstacleGrid[i][j]=obstacleGrid[i-1][j]
                continue;
            }
            if(obstacleGrid[i-1][j]==-1){
                obstacleGrid[i][j]=obstacleGrid[i][j-1]
                continue;
            }
            obstacleGrid[i][j]=obstacleGrid[i][j-1]+obstacleGrid[i-1][j]
        }       
    }
    console.log(obstacleGrid)
    return obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1]
};

console.log(uniquePathsWithObstacles(
    [[0,0,0,0,0],[0,0,0,0,1],[0,0,0,1,0],[0,0,0,0,0]]
))