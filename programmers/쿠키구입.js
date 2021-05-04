function solution(cookie) {
    var answer = -1;
    let lo=0
    let hi=cookie.length;
    let mid=0
    while(lo<hi){
        mid=Math.floor((lo+hi)/2)
        if( cookie.slice(0,mid).reduce((a,b)=>a=a+b,0)<cookie.slice(mid).reduce((a,b)=>a=a+b,0) ){
            lo=mid+1
        }else{
            hi=mid
        }
    }
    mid=lo
    //console.log(lo,hi,mid)
    let lowsum=cookie.slice(0,mid).reduce((a,b)=>a=a+b,0)
    let highsum=cookie.slice(mid).reduce((a,b)=>a=a+b,0)
    lo=0
    hi=cookie.length-1
    //console.log(lowsum,highsum)
    while(lowsum!=highsum){
        //console.log(4,lo,mid,hi)
        //console.log(lowsum,highsum)

        if(lowsum>highsum){
            lowsum=lowsum-cookie[lo]
            lo++
        }else{
            highsum=highsum-cookie[hi]
            hi--

        }
        if(lo>mid||hi<mid){
            return 0
        }
    }
    //console.log(lowsum,highsum)
    return lowsum;
    
}

console.log(solution(

    [1,2,4,5]

    ))