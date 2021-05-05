function solution(dartResult) {
    var answer = 0;
    dartResult=dartResult.split('')
    let arr=[]
    let i=0;
    
    while(i<dartResult.length){

        if(parseInt(dartResult[i])||dartResult[i]=='0'){
            if(dartResult[i+1]=='0'){
                arr.push(10)
                i++
            }else{
                arr.push(+dartResult[i])
            }
        }else if(dartResult[i]=='S'){

        }else if(dartResult[i]=='D'){
            arr[arr.length-1]=arr[arr.length-1]*arr[arr.length-1]
        }else if(dartResult[i]=='T'){
            arr[arr.length-1]=arr[arr.length-1]*arr[arr.length-1]*arr[arr.length-1]
        }else if(dartResult[i]=='*'){
            arr[arr.length-2]=arr[arr.length-2]*2
            arr[arr.length-1]=arr[arr.length-1]*2
        }else if(dartResult[i]=='#'){
            arr[arr.length-1]=-arr[arr.length-1]

        }
        i++
    }

    return arr.reduce((a,b)=>a+=b,0);
}

console.log(solution(

    "1D2S#10S"
))

console.log(Boolean(parseInt('0')))