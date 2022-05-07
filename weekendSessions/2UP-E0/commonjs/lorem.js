/*exports.average = (numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
};*/

//module.exports = { average };

//console.log(module);
/*module.exports.samuel = "Samuel";
module.exports.age = "22";
module.exports.newObject = { data: "=?" };*/

/*module.exports = (numbers) => {
  if(numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
};*/




/*
const PI = 3.1415;
const average = (numbers) => {
  if(numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

const circleArea = (radius) => {
  return PI * Math.pow(radius, 2);
}
module.exports={average, circleArea};*/
const PI = 3.1415;
exports.average = (numbers) => {
  if(numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

exports.circleArea = (radius) => {
  return PI * Math.pow(radius, 2);
}