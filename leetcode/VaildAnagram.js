var isAnagram = function(s, t) {
    s=s.split('').sort().join('');
    t=t.split('').sort().join('');
    if(s==t)
        return true
    console.log(s,t)
    return false  
};

console.log(isAnagram('anagram','nagaram'))