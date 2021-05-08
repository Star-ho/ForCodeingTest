function turnKey(arr){
    let n = arr.length;
    let m = arr[0].length;
    let rotate = Array.from({length:n},()=>Array.from({length:m},()=>0))

    for (let i = 0; i < rotate.length; i++) {
        for (let j = 0; j < rotate[i].length; j++) {
            rotate[i][j] = arr[n-1-j][i];
        }
    }
    return rotate;
}