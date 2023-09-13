var arr = [4,12,54,7, 89, 90];
var result = arr.filter(function(obj,index){
    console.log(index);
    if(obj%2==0){
    return true;
    }

});
console.log(result);
console.log(arr);