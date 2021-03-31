function solution(n) {
    var answer = 0;
    answer=fibo(n)
    return answer;

}
let cache=new Map()

function fibo(n){
    if(n==0) return 0
    if(n==1) return 1
    if(n==8000) return 903558
    if(n==8001) return 289219
    if(n==16000) return 440690
    if(n==16001) return 1148841
    if(n==24000) return 871394
    if(n==24001) return 597876
    if(n==32000) return 377190
    if(n==32001) return 1214756
    if(n==40000) return 359617
    if(n==40001) return 852972
    if(n==40000) return 359617
    if(n==40001) return 852972
    if(n==48000) return 611505
    if(n==48001) return 79247
    if(n==56000) return 569896
    if(n==56001) return 1010245
    if(n==64000) return 1085469
    if(n==64001) return 678435
    if(n==72000) return 133176
    if(n==72001) return 115610
    if(n==80000) return 701802
    if(n==80001) return 1059814

    if(n==88000) return 204390
    if(n==88001) return 806410
    if(n==96000) return 1059307
    if(n==96001) return 211075


    if(cache.get(n)==undefined){
        cache.set(n,(fibo(n-1)+fibo(n-2))%1234567)
        return cache.get(n)
    }
    return cache.get(n)
}

console.log(solution(96001))
