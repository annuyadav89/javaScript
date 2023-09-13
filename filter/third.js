var object = [{ name :'Annu yadav',city : 'noida'},{name:'kaushal yadav',city:'etah'},{name:'anupam',city:'Noida'}];
var resultOfThis = object.filter(function(input){
    return input.city.toLocaleLowerCase().includes('a');
})
console.log(resultOfThis);