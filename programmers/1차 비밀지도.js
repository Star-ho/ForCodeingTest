function solution(n, arr1, arr2) {
    var answer = [];
    arr1=arr1.map(v=>{
        v=v.toString(2)
        while(v.length<n){
            v='0'+v
        }
        return v
    })
    arr2=arr2.map((v,i)=>{
        v=v.toString(2)
        while(v.length<n){
            v='0'+v
        }
        v=v.split('')
        for(let j=0;j<v.length;j++){
            if(arr1[i][j]=='0'&&v[j]=='0'){
                v[j]=' '
            }else{
                v[j]='#'
            }                
        }
        v=v.join('')
        return v
    })
    return arr2;
}

console.log(solution(

	5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]

))