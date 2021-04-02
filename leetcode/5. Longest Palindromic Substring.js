var longestPalindrome = function(s) {
    let ret='';
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            const temp=s.slice(i,j+1)
            if(isPalindrome(temp)){
                ret=temp.length>ret.length?temp:ret
                console.log(ret)
            }
        }
        if(ret.lenth>=s.length-i)
            return ret
    } 
    return ret
};

function isPalindrome(str){
    for(let i=0;i<str.length/2;i++){
        if(str[i]!=str[str.length-i-1])
            return false
    }
    return true
}

console.log(longestPalindrome("babad"))