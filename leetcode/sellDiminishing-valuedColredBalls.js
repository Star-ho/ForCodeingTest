var maxProfit = function(inventory, orders) {
    let res=0;
    while(orders>0){
        //console.log(inventory,orders,res)
        inventory.sort((a,b)=>(b-a));
        if(inventory[1]==undefined){
            for(let i=inventory[0];orders>0;i--){
                res+=i;
                res=res%(Math.pow(10,9)+7)
                orders--
            }
            break;
        }
        res+=inventory[0];
        res=res%(Math.pow(10,9)+7)
        inventory[0]--;
        orders--;
    }
    res=res
    return res;
};

console.log(maxProfit(
    [1000000000],1000000000))