//Create a temps array here
var temp=[
monday=[31,32,19,37],
  tuesday=[29,27,55,36],
  wednesday=[17,27,42,46],
  thursday=[29,52,21,64],
  friday=[91,27,31,61]
];
//End of temps array
function myArrayFunction(arr){
var newTemps=[...arr];
var averageDayTemp=[];
 
  //Only change code below this line
for (var i=0;i<temp.length;i++){
  var average=0;
    var sum=0;
   
    for(var j=0;j<temp[i].length;j++){
    sum+=temp[i][j]
    }
    average=sum/4;
    averageDayTemp.push(average);
}
  
//Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction(temp)); // Change this line
module.exports=myArrayFunction;