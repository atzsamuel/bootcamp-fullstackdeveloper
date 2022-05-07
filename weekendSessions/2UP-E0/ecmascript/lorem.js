const PI = 3.1415;

export const average = (numbers) => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
};

export const circleArea = (radius) => {
  return PI * Math.pow(radius, 2);
};

export default PI;
