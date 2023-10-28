const romanToInt = function(s) {
    let number = 0
    const arr = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }  
    for(let i=0; i<s.length; i++) {
        if(arr[s[i]] < arr[s[i+1]]){
            number += arr[s[i+1]] - arr[s[i]];
            i++
        }
        else{
            number += arr[s[i]]
        }
    }  
    return number
};