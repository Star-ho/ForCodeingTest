function solution(absolutes, signs) {
    return absolutes.reduce((sum,v,i)=>{
        if(signs[i]){
            return sum+=v
        }else{
            return sum-=v
        }
    },0);
}