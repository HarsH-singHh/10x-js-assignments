function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence){
        if(isTired===false){
            if(isSober){
                return "You can drive"
            }
            return "You shouldn't drive"
        }
        return "You shouldn't drive"
    }
    else{
        return "You cannot drive"
    };
}

module.exports = CanDrive;
