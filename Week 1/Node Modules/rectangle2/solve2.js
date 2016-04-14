var rect = require('./rectangle2');

function solveRect(l,b){
  console.log('Solving for rectangle with l = '+l+' and b = '+b);

  if(l<=0 || b<=0){
    console.log("Rectangle dimensions should be greater zero: l = "+l+", and b = "+b);
  }else{
    console.log("The area of the rectangle of dimensions length = "+l+" and breadth = "+b+" is "+ rect.area(l,b));
    console.log("The perimeter of the rectangle of dimensions length = "+l+" and breadth = "+b+" is "+ rect.perimeter(l,b));
  }
}

console.log('\n');
solveRect(2,4);
console.log('\n');
solveRect(3,5);
console.log('\n');
solveRect(-3,5);
console.log('\n');
