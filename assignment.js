
//first problem solve:
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if(kilometer<0){
        return 'Earror the value cannot be negative;'
    }
    else if(kilometer == undefined){
        return 'Earror the value cannot be empty'
    }
    else{
        return meter;
    }
}
var result1 = kilometerToMeter(7);
console.log(result1);

//second problem solve:
function budgetCalculator(ghori,phon,laptop){
    var ghoriPrice = 50 * ghori;
    var phonePrice = 100 * phon;
    var laptopPrice = 500 * laptop;
    var tottalPrice = ghoriPrice+phonePrice+laptopPrice;
    var number = tottalPrice;
    
    if(ghori,phon,laptop<0){
        return 'Earror the value cannot be negetive'
    }
    else if(ghori,phon,laptop == undefined){
        return 'Earror the value cannot be empty'
    }
    else{
        return number;
    }
}
var result2 = budgetCalculator(2,3,7);
console.log(result2);

//Third Problem solving:
function hotelCost(day){
    var price = 0;
    if(day<=10){
        var price = day * 100;
    }
    else if(day<=20){
      var firstOffear = 10 * 100;
        var remaningDay = day - 10;
        var  secondOffear = remaningDay * 80;
        price = firstOffear + secondOffear;
    }
    else{
        var firstOffear = 10 * 100;
        var secondOffear = 10 * 80;
        var remaningDay = day - 20;
        var thirdOffear = remaningDay * 50;
        price = firstOffear + secondOffear + thirdOffear;
    }
    return price;
}
var result3 = hotelCost(27);
console.log(result3);

//Four problem solving:

function megaFriend(names){
    var longName = names[0];
 for (var i = 0; i<names.length;i++){
     var element = names[i];
     if (longName.length < element.length) {
        longName = element;
    }
 }
 return longName;
}

var result4 = megaFriend(['rahim','fahim','mdkaium']);
console.log(result4);