sortedData = getUserInput()
if(sortedData == -9 || sortedData == -10 || sortedData == "help"){
    console.log(sortedData)
    output()
}
else{
    dataWorks()
    output()
}
if(sortedData == "test"){
    console.log("test")
    output()
}else{
    dataWorks()
    output()
}
//dataWorks()
//test

function getUserInput(){
    let i = 2
    var currencyBag = []
    var sortedData = []
    if(process.argv[2] == "help" || process.argv[2] == "--help" || process.argv[2] == "-h"){
        return "help"
    }
    if(process.argv[2] == "test"){
        return "test"
    }
    //Внесение значений в массив
    while(process.argv[i] != undefined)
    {
        currencyBag[i] = process.argv[i]
        i++
    }
    currencyBag.splice(0,2)
    //Проверка на нули и отрицательные значения
    for(k = 0; k < currencyBag.length; k++){
        if (currencyBag[k] <= 0 || true == isNaN(currencyBag[k])){
            return -9
            break
        }
    }
    //Проверка количества аргументов
    
    invalidCountElementCheck = currencyBag.length / 3

    if( Number.isInteger(invalidCountElementCheck) == true)
    {
        i = 0
        for(k = 0; k < currencyBag.length; k = k + 3){
            sortedData.push({rubbleCount: 0, startPrice: 0, endPrice: 0, currencyCount: 0, endCount: 0, difference: 0, profitPercent: 0})
            sortedData[i].rubbleCount = Number(currencyBag[k])
            sortedData[i].startPrice = Number(currencyBag[k+1])
            sortedData[i].endPrice = Number(currencyBag[k+2])
            sortedData[i].currencyCount = Number(sortedData[i].rubbleCount) / Number(sortedData[i].startPrice)
            sortedData[i].currencyCount = sortedData[i].currencyCount.toFixed(2)
            i++
            
        }
        return sortedData
    }
    else
    {
        return -10
    }
    
}

function output(){
    if(sortedData == -9){
        console.log("Error: Invalid arguments. Type 'help' for see help page")
    }
    else if(sortedData == -10){
        console.log("Error: Invalid arguments count. Type 'help' for see help page")
    }
    else if(sortedData == "help"){
        console.log("node filename.js <Your invests in rubbles> <Buying price> <End/current price>")
    }
    else if(sortedData == "test"){
        console.log("test")
    }
    else{
        //console.log(sortedData)
        console.log("В вашем портефеле " + sortedData[0].activitiesCount + " актива/ов на общую сумму: " + sortedData[0].sum + " руб.\nПрибыль/потери за период: " + sortedData[0].allProfit + " рублей " + "(" + sortedData[0].allProfitPercent + "%)" + "\n")
        for(i = 1; i < sortedData.length; i++){

            console.log("В валюте " + i + " прибыль/убыток составил(а): " + sortedData[i].difference.toFixed(2) + " (" + sortedData[i].profitPercent + "%)")
        }
    }
    
}

function dataWorks(){
    let sum = 0,
    allProfit = 0,
    allProfitPercent = 0
    for(i = 0; i < sortedData.length; i++){
        sum += sortedData[i].rubbleCount
        sortedData[i].endCount = sortedData[i].endPrice * sortedData[i].currencyCount
        sortedData[i].endCount = sortedData[i].endCount.toFixed(2)
        sortedData[i].profitPercent = ((sortedData[i].endCount / sortedData[i].rubbleCount) - 1) * 100
        sortedData[i].profitPercent = sortedData[i].profitPercent.toFixed(2)
        sortedData[i].difference = sortedData[i].endCount - sortedData[i].rubbleCount
        allProfit = allProfit + (sortedData[i].endCount - sortedData[i].rubbleCount)
        allProfitPercent += Number(sortedData[i].profitPercent)
    }
    allProfitPercent = Number(allProfit) / Number(sum) * 100
    sortedData.unshift({sum: sum, allProfit: allProfit.toFixed(2), allProfitPercent: allProfitPercent.toFixed(2), activitiesCount: sortedData.length})
    return sortedData
}
//tests()
function tests(){
    let test = -600 / 9000
    console.log("TEST: " + test)
}