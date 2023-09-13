var list=[5,10,15,20,25];
var sum = list.reduce(function(a,b){
         return a+b;
},0)
console.log(sum);
 // second example

 var list=[4,5,6,7,8,1];
 var result = list.reduce(function(a,b){
     return a>b?a:b;
 });
 console.log(result);