/**
 * 
 * n=1 1
 * n=2 2
 * n=3 3
 * n=4 5
 * n=5 8
 * n=6 
 */

function solution(n) {
    var answer = 0;
    let cache=new Map()
    cache.set(1,1);
    cache.set(2,2);
    cache.set(5,8);
    cache.set(10000,24223428);
    cache.set(10001,295719788);
    cache.set(20000,437241455);
    cache.set(20001,425335911);
    cache.set(30000,992473682);
    cache.set(30001,386438816);
    cache.set(40000,609200151);
    cache.set(40001,942881734);

    cache.set(50000,441423758);
    cache.set(50001,986366369);

    function tailing(n){
        let res=0;
        if(!cache.has(n)){
            res=(tailing(n-1)+tailing(n-2))%1000000007
            cache.set(n,res)
        }else{
            res=cache.get(n)
        }
        return res
    }
    return tailing(n);
    
}

console.log(solution(50001))