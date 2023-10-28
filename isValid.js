const isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    
    const obj = {
        "(":")",
        "[":"]",
        "{":"}"
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if(obj[s[i]]) {
            stack.push(s[i])
        }
        else if(s[i] != obj[stack.pop()]){
            return false
        }
        
    }

    return stack.length === 0
};