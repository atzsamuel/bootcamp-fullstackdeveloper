function mxdiflg(a1, a2) {
  let max1 = Math.max(...a1.map((x) => x.length));
  let max2 = Math.max(...a2.map((x) => x.length));
  let min1 = Math.min(...a1.map((x) => x.length));
  let min2 = Math.min(...a2.map((x) => x.length));
  return Math.max(max1 - min2, max2 - min1);
}

mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]); // 13