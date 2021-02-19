



backPack = getUserInput()
dataWorks(backPack)
output(backPack)

function getUserInput(){
    let i = 2
    let currencyBag = []
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
        return currencyBag
    }
    else
    {
        return -10
    }
    
}

function output(backPack){
    if(backPack == -9){
        console.log("Error: Invalid arguments")
    }
    else if(backPack == -10){
        console.log("Error: Invalid arguments count")
    }
    else{
        console.log("All pass")
    }
    
}

function dataWorks(backPack){
    var buyedPrice = [], currencyValue = [], beginPrice = [], endPrice = [], currencyValue = [], onPeriodEndActivities = [], changesProc = [], pocketStartSum = 0

    for(k = 0; k < backPack.length; k=k+3){
        buyedPrice.push(backPack[k])
        Number(buyedPrice[k])
        pocketStartSum = pocketStartSum + buyedPrice[k]
    }
    for(k = 1; k < backPack.length; k=k+3){
        beginPrice.push(backPack[k])
    }
    for(k = 2; k < backPack.length; k=k+3){
        endPrice.push(backPack[k])
    }
    for(k = 0; k < buyedPrice.length; k++){
        currencyValue[k] = buyedPrice[k] / beginPrice[k]
        console.log("В валюте " + " " + currencyValue + " едениц")
        onPeriodEndActivities[k] = currencyValue[k] * endPrice[k]
        changesProc[k] = 1 - (buyedPrice / onPeriodEndActivities)
        }
    console.log("На конец периода ваши активы в рублях: " + onPeriodEndActivities + "\nВ процентах: " + changesProc)
    console.log("Start cost " + pocketStartSum)
    //console.log("Закупочные цены:   " + buyedPrice + "\nНачальные цены:    " + beginPrice +  "\nКонечные цены:     " + endPrice)
}