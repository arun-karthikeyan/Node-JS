var rect = require('./rectangle');

function rectCallback(error, result){
  if(error){
    console.log(error);
  }else{
    console.log('The perimeter is : '+result.perimeter());
    console.log('The area is : '+result.area());
  }
};

function solveRect(l,b){
  console.log('Solving for rectangle with l='+l+', b='+b);
  rect(l,b,rectCallback);
};

console.log('\n');
solveRect(2,4);
console.log('\n');
solveRect(3,5);
console.log('\n');
solveRect(-3,5);
console.log('\n');
