function makeArmy() {
    let shooters = [];
    let j;
    for(j=0;j<10;){
        let i
        for(i = 0;i < 3;) {
        let shooter = function() { // shooter 함수
            console.log( i,j ); // 몇 번째 shooter인지 출력해줘야 함
        };
        shooters.push(shooter);
        i++;
        j++
        }
    }
    return shooters;
  }
  
  let army = makeArmy();
  
  army[6](); // 0번째 shooter가 10을 출력함
  army[5](); // 5번째 shooter 역시 10을 출력함
  console.log(army[1])