function base64toBase10(base64) {
  let base10 = "0123456789";
  var base64ToBase10 = {};
  for (let i = 0; i < base64.length; i++) {
    base64ToBase10[base64[i]] = base10[i];
  }
  console.log(base64ToBase10);
  return base64ToBase10;
}

base64toBase10("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");   
base64toBase10("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");     