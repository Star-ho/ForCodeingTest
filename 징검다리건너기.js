var bysect=bisector(ascending)

function bisector(f) {
    let delta = f;
    let compare = f;
  
    if (f.length === 1) {
      delta = (d, x) => f(d) - x;
      compare = ascendingComparator(f);
    }
  
    function left(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    }
  
    function right(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  
    function center(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      const i = left(a, x, lo, hi - 1);
      return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
  
    return {left, center, right};
}
  


function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

function solution(stones, k) {
    var answer = 0;
    let temp;
    let sortStone=[...new Set(stones)].sort((a,b)=>(a-b))
    let index=0;
    let second=0;
    let max=0
    let i=0
    while(i<8){
        temp=sortStone.shift();
        index=stones.indexOf(temp);
        max=Math.max(...stones.slice(index,index+k))
        console.log(temp,index,max)
        if(temp>=max)
            break;
        i++;
    }
    answer=temp
    return answer;
}

console.log(solution([2,2,4, 5, 3, 2, 4, 2, 5, 1,1 ],6))