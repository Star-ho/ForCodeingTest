var minimumTotal = function(triangle) {
    let arr=triangle.slice().map(v=>v.map(a=>Infinity))
    arr[0][0]=triangle[0][0]
    for(let i=0;i<triangle.length-1;i++){
        for(let j=0;j<triangle[i].length;j++){
            if(arr[i+1][j]>arr[i][j]+triangle[i+1][j]){
                arr[i+1][j]=arr[i][j]+triangle[i+1][j]
            }
            arr[i+1][j+1]=arr[i][j]+triangle[i+1][j+1]

        }
    }
    return Math.min(...arr[arr.length-1])
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))