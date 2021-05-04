function solution(enroll, referral, seller, amount) {
    var answer = [];
    amount=amount.map(v=>v*100)
    let obj={'-':{value:0}}
    for(let i=0;i<enroll.length;i++){
        obj[enroll[i]]={value:0,referral:referral[i]}
    }
    for(let i=0;i<seller.length;i++){
        sell(obj,seller[i],amount[i])
    }
    for(let i=0;i<enroll.length;i++){
        answer.push(obj[`${enroll[i]}`].value)
    }
    return answer;
    function sell(obj,seller,amount){
        if(seller=='-'||amount<10){
            obj[seller].value+=amount
        }else{
            let nextAmount=parseInt(amount*0.1)
            amount=amount-nextAmount
            obj[seller].value+=amount
            sell(obj,obj[seller].referral,nextAmount)
        }
    }
}

class Node{
    constructor(){
        this.name
        this.value
    }
}
console.log(solution(

    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"], ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], ["young", "john", "tod", "emily", "mary"], [12, 4, 2, 5, 10]

))