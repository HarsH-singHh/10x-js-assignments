// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    var BMI=mass/(height*height)
    if(mass<=0 || height<=0){
        return "INVALID INPUT"
    } else{
        return BMI
    }
}

module.exports = BMICalculator;
