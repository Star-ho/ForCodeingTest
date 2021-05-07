function solution(key, lock) {
    var answer = true;
    let arr=Array.from({length:(lock.length-1)*2+key.length},()=>Array.from({length:(lock.length-1)*2+key.length},()=>0))
    for(let i=0;i<lock.length;i++){
        for(let j=0;j<lock[0].length;j++){
            arr[i+key.length-1][j+key.length-1]=lock[i][j]
        }
    }
    for(let i=0;i<arr.length-key.length+1;i++){
        for(let j=0;j<arr[0].length-key.length+1;j++){
            for(let p=0;p<4;p++){
                key=turnKey(key)
                let temp=arr.map(v => v.slice());

                for(let k=0;k<key.length;k++){
                    for(let l=0;l<key.length;l++){
                        temp[i+k][j+l]+=key[k][l]
                    }
                }
                if(isFull(temp)){
                    return true
                }

            }
        }
    }
    return false;
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
    function isFull(arr){
        for(let i=0;i<lock.length;i++){
            for(let j=0;j<lock[0].length;j++){
                if(arr[i+key.length-1][j+key.length-1]!=1){
                    return false
                }
            }
        }
        return true
    }
    
}


console.log(solution(

    [[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
))