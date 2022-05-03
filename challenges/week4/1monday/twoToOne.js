function longest(s1, s2) {
  // your code
  let fullString = s1.concat("", s2);
  const filtered = fullString
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .sort()
    .join("");

  return filtered;
}

longest("aretheyhere", "yestheyarehere"); // "aehrsty"
