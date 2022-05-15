function findChildren(dancingBrigade) {
  return dancingBrigade
    .split("")
    .sort((a, b) => a.localeCompare(b, "kf", { caseFirst: "upper" }))
    .join("");
}

console.log(findChildren("beeeEBb")); //"BbbEeee"
