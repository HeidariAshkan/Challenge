var isAnagram = function(s, t) {
    if(s.length !== t.length)return false;

    let map = new Map();

    for(const char of s){
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    for(const char of t){
        if(map.has(char)){
            map.set(char, map.get(char) - 1);
            if(map.get(char)=== 0) map.delete(char);
        }else{
            return false;
        }
    }
    return map.size === 0;
};