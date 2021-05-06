function solution(n, build_frame) {//기둥:0  보:1  삭제:0 설치:1
    var answer = [];
    let matrix=Array.from({length:n+1},()=>Array.from({length:n+1},()=>[0,0]));//첫번째가 기둥, 두번쨰가 보, 존재하면 1 없으면 0
    for(let i=0;i<build_frame.length;i++){
        if(build_frame[i][2]==0){
            if(build_frame[i][3]==1){
                if(horizantal(build_frame[i]))
                    answer.push(build_frame[i].slice(0,3))
            }else{
                if(horizantal(build_frame[i])){
                    
                    build_frame[i].pop()
                    for(let j=0;j<answer.length;j++){
                        if(answer[j].join()==build_frame[i].join()){
                            answer.splice(j,1)
                        }
                    }


                }
            }
        }else{
            if(build_frame[i][3]==1){
                if(vertical(build_frame[i]))
                    answer.push(build_frame[i].slice(0,3))
            }else{
                if(vertical(build_frame[i])){

                    build_frame[i].pop()
                    for(let j=0;j<answer.length;j++){
                        if(answer[j].join()==build_frame[i].join()){
                            answer.splice(j,1)
                        }
                    }


                }
            }
        }
    }
    answer=answer.map(v=>v.join())
    for(let i=0;i<answer.length;i++){
        for(let j=i+1;j<answer.length;j++){
            if(answer[i]==answer[j]){
                answer.splice(j,1)
                answer.splice(i,1)
            }
        }
    }
    answer=answer.map(v=>v.split(',')).map(_=>_.map(v=>+v))
    answer.sort()
    return answer;
    function sortArr(a,b){
        if(a[0]>b[0]){
            return 1
        }else if(a[0]<b[0]){
            return -1
        }else{
            if(a[1]>b[1]){
                return 1
            }else if(a[1]<b[1]){
                return -1
            }else{
                if(a[2]==1){
                    return 1
                }else{
                    return -1
                }
            }
        }
    }
    function horizantal(arr){
        if(arr[3]==1){//설치         .map(v=>v.slice(0,3))
            //바닥이거나, 기둥이 있거나 왼쪽 또는 오른쪽에 보가 있을때
            //console.log(arr)
            if(arr[1]==0 || (arr[0]>0&&arr[1]>0&&(matrix[arr[1]-1][arr[0]][0]==1||matrix[arr[1]][arr[0]-1][1]==1||matrix[arr[1]][arr[0]]==1 )) ){
                matrix[arr[1]][arr[0]][0]=1
                return true;
            }else{
                return false
            }
        }else{
            //위에 기둥이 있으면서 위왼쪽에 보가 없을때
            //console.log(arr)
            if(arr[1]<n&&matrix[arr[1]+1][arr[0]][0]==1&&arr[0]>0&&matrix[arr[1]+1][arr[0]-1][1]==0)
                return false
            //위에 보가 있으면서 양쪽에 보가 없을때
            if(arr[1]<n&&matrix[arr[1]+1][arr[0]][1]==1&&arr[0]>0&&matrix[arr[1]+1][arr[0]-1][1]==0&&arr[0]<n&&matrix[arr[1]+1][arr[0]+1][1]==0)
                return false
            matrix[arr[1]][arr[0]][0]=0
            return true
        }
    }
    function vertical(arr){
        if(arr[3]==1){//설치
            //console.log(arr)
            //기둥이 한쪽이라도 있을때
            if((arr[1]>0&&arr[0]<=n&&(matrix[arr[1]-1][arr[0]][0]==1||matrix[arr[1]-1][arr[0]+1][0]==1)) ){
                matrix[arr[1]][arr[0]][1]=1
                return true;
            //양쪽 다 보와 연결되어 있을때
            }else if(arr[1]>0&&arr[0]<=n&&matrix[arr[1]][arr[0]+1][1]==1&&arr[0]>0&&matrix[arr[1]][arr[0]-1][1]==1){
                matrix[arr[1]][arr[0]][1]=1
                return true;
            }
            return false
        }else{
            //왼쪽이 보와 연결되어 있을때 //왼쪽보의 왼쪽아래 혹은 오른아래에 기둥 존재 여부
            if( !(arr[0]>0&&arr[1]>0&&matrix[arr[1]][arr[0]-1][1]==1 &&(matrix[arr[1]][arr[0]-1][0]==1 || arr[0]>1&&matrix[arr[1]-1][arr[0]-2][0]==1 )) )
                return false
            //오른쪽에 보와 연결되어 있을때 오른쪽보의 왼쪽아래 혹은 오른쪽아래에 기둥이 존재하는가
            if( !(arr[0]<n &&arr[1]>0&&matrix[arr[1]][arr[0]+1][1]==1 &&(matrix[arr[1]][arr[0]-1][0]==1 || arr[0]>1&&matrix[arr[1]-1][arr[0]+1][0]==1 )))
                return false
            matrix[arr[1]][arr[0]][1]=0
            return true
        }
    }
}

console.log(solution(

	5, [[0, 0, 0, 1], [2, 0, 0, 1], [4, 0, 0, 1], [0, 1, 1, 1], [1, 1, 1, 1], [2, 1, 1, 1], [3, 1, 1, 1], [2, 0, 0, 0], [1, 1, 1, 0], [2, 2, 0, 1],[1, 0, 0, 1],[2, 0, 0, 1],[1, 0, 1, 1],[2, 0, 1, 1],]

))

