//var vs let vs const
//var is global(function level)
//let is local(block level)
//const is constant variable and immutable
var age = 20;

function showAge() {
  var age = 22;
  console.log(age + 1);
}

showAge();
console.log(age);
{
  var age = 15;
  age += 1;
  console.log(age);
}
console.log(age);
