function calcOddNumbers(xNumber){
    return (((2*xNumber)+1)**2)
}
function oddSquareSum(topNumber){
    sumResult = 0
    sumToCompare = 0
    for(var xNumber = 0; sumToCompare<topNumber; xNumber++){
        sumToCompare += calcOddNumbers(xNumber)
        console.log("comparation sum result", sumToCompare)
        if(sumToCompare <= topNumber)
        sumResult = sumToCompare
    }
    return sumResult
}
console.log("sum result: ", oddSquareSum(44))
/*outputs 
comparation sum result 1
comparation sum result 10
comparation sum result 35
comparation sum result 84
sum result:  35*/
