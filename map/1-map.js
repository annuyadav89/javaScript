// var temp=[10,20,30,40,50];
//     var finalResult =temp.map(function(obj){
//                return obj*5;
//     });
//     console.log("original array",temp);
//     console.log("new array",finalResult);
    var arr = [10,30,50,500];
    var result = arr.map(function(obj){
        return obj/5;
    });
    console.log("original",arr);
    console.log("new" , result);
     

    //square rootn

    var arr = [1,9,16,36,25];
    var sqrtOfarr =  arr.map(function(num){
        return Math.sqrt(num);
    });
    console.log(sqrtOfarr);