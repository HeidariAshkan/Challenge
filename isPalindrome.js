const isPalindrome = function(x) {
    let getStringX = String(x)
    let reverseNumber = ""
    for (let index = 1 ; index <= getStringX.length; index++) {
        reverseNumber = reverseNumber + getStringX[getStringX.length - index];
        // console.log(getStringX[getStringX.length - index])
    }
    if(Number(reverseNumber) === x){
        return true
    }else{
        return false
    }
};