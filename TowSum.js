const towSum = function(nums,target){
    if(nums.length < 2) return []

    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        com = target - nums[i]
        
        if(obj[com] !== undefined){
            return[obj[com] , i]
        }
        obj[nums[i]] = i
    }
    return []
}
