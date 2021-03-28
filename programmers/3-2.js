/**
 * 젤 먼저 들어온거가 끝나기전에 제일 먼저 끝나는거 찾고, 그시간 안에 해당하는거 다 빼기
 * 
 * 
 */

function solution(routes) {
    var answer = 0;
    while(routes.length>0){
        routes.sort((a,b)=>(a[0]-b[0]));
        let temp=routes.filter(v=>v[1]<=routes[0][1]);
        temp.sort((a,b)=>(a[1]-b[1]));
        let time=temp[0][1];
        routes=routes.filter(v=>!(v[0]<=time&&v[1]>=time))
        answer++;
       // console.log(temp,time,routes)
    }
    return answer;
}

console.log(solution([[-20,15], [-14,-5], [-18,-13], [-5,-3]]))