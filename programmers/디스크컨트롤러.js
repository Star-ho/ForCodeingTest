function solution(jobs) {
    var answer = 0;
    let jobsLen=jobs.length;
    jobs.sort((a,b)=>(a[0]-b[0]))
    jobs.forEach((v,i)=>v.push(i));
    //console.log(jobs,1)
    let time=0;
    while(jobs.length>0){
        if(jobs[0][0]<=time){
            let temp=jobs.filter(v=>v[0]<=time);
          //  console.log(temp)
            if(temp.length>1){
                temp.sort((a,b)=>a[1]-b[1]);
            }
            jobs=jobs.filter(v=>v[2]!=temp[0][2])          
        //    console.log(jobs)
            time+=temp[0][1];
            answer+=time-temp[0][0]
      //      console.log(answer,time)
        }else{
            time=jobs[0][0]
        }
    }
    //console.log(jobs)
    return Math.floor(answer/3);
}


//console.log(solution([[0, 3], [1, 9], [2, 6]]))
console.log(solution([[1, 9], [1, 3], [2, 6]]))

/*
알고리즘
아무것도 없을때는 있는거 바로 시작 > 현재 대기하고 있는거 확인 > 1개면 바로 시작
2개 이상일때? 시간이 적게 걸리는거ㅇㅇ 왜냐면 짧은거 많은거 만큼 기다리고 실행하니 시간이 많이 걸리는거 부터
아무것도 없을때? 그냥 지나가? ㄴㄴ 
time변수를 생성해야 하는가? 생성해야함. 왜? 기다리는 시간이 걸리는데 어떻게 표기할 것인가
각 작업의 (시작시간 + 걸린시간 - 요청 들어온시간) 구한 후 더해야함
그러면 필요한 변수를 생각해보자
예제만 따지면
시간 순대로 정렬 나중에 필터로 자르기 위해
각 작업에 인덱스 넣기, 몇번쨰께 빠져야 하는지 확인하기 위해
시작시간을 구해야해 - time변수가 필요

시작, 아무것도 없음 이걸 큐에 넣자 그리고 
A가 끝나, 그럼 나머지 것들중에 시작 할 수 있는거 찾고, 그중에 시간이 제일 짧은걸 찾아 - 진행
진행한걸 어떻게 할것이냐

A진행 - 
근데 도중 B,C가 들어오잖니?
그럼 B,C중에 짧은거를 다음 걸로 잡아

시간 알고리즘
작업이 들어온다 - + 작업에 걸리는시간 
작업이 끝났는데 아무것도 없다 - 제일 짧은걸로 시간 변경

만드는 거
시작 - 시작시간정렬, id 추가
현재시각에 할 수 있는 작업 찾기
	있다? 
		1개다? 	그리고 jobs에서 뺴기
				time 추가
		2개다? 	그럼 filter함수 사용해서 현재 시간 이하의 잡찾기
				걸리는시간으로 정렬 후 1개일때와 같이 진행

	없다?
		그럼 지금 시간과 제일 가까운시간으로 이동
		ㅅㅅ


필요한 변수 : 
time - 시작시간을 찾기 위해
temp - 필터 한걸 임시로 들고있기 위해

*/