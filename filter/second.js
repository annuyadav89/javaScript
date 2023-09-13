var list=[{
    name:"lokesh",
    city:'bangalore'
},{
    name:'prakash',
    city:'kochi'
},{
    name:'salman',
    city:'delhi'
},{
    name:'durgesh',
    city:'Delhi'
},{
    name:'amol',
    city:'deltion'
}];
var finalResult = list.filter(function(obj){
   
    return obj.city.toLowerCase()=='delhi';
});
console.log(finalResult);

// second example


var object = [{ name :'Annu yadav',city : 'noida'},{name:'kaushal yadav',city:'etah'},{name:'anupam',city:'Noida'}];
var resultOfThis = object.filter(function(input){
    return input.city.toLocaleLowerCase().toUpperCase() == 'NOIDA';
})
console.log(resultOfThis);