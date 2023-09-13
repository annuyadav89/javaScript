// var arr = [2,4,5,67,4];
// var resultOf = arr.map(function(obj){
//   if(obj % 2 == 0){
//     return {type:'even', value:obj}
//    }
//   else{
//     return {type:'odd', value:obj}
//   }
// });
// console.log(resultOf);

var arr = [2,4,5,67,4];
var resultOf = arr.map(function(obj,index){
  if(obj % 2 == 0){
    return {type:'even',status : true, value:obj}
   }
  else{
    return {type:'odd',status:false, value:obj}
  }
});
console.log(resultOf);