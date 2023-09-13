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
    return obj.city.toLowerCase().includes('del');
}).map(function(obj){
    return obj.name;
    // return obj.name == 'salman'
})
console.log(finalResult);

// second example

var list =[33,40,50,80,90,22];
    var result = list.filter(function(obj){
          return obj%5==0;
    }).map(function(obj,index){
        return {index:index,value:obj}
   });
    
    console.log(result);


    // third example

    var list =[33,40,50,801,90,22];
    var result = list.map(function(obj,index){
            return {index:index,value:obj};
    }).filter(function(obj){
          return obj.value%5==0;
    })
    console.log(result);