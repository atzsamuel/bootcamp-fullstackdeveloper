function oddOrEven(array) {
  //enter code here
 let sum = array.reduce((previusValue,currentValue)=>previusValue+currentValue,0)
 return sum % 2 !==0 ? 'odd' : 'even'
}

oddOrEven([1,2,3,4,5]); // 'odd'
oddOrEven([5,4,3,2,1]); // 'even'
oddOrEven([1,2,3,4,5,6]); // 'odd'