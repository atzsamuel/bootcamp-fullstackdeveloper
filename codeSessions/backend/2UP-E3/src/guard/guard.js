const Guard = require("../models/guard");
const guard = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startWith("Bearer")
  ) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  const person_token = req.headers.authorization.split("Bearer")[1];

  try {
    const args = { person_token };
    const { rows: personrow } = await Guard.verifyPersonToken(args);
    if (personrow.length > 0) {
     /* const person = personrow[0];
      req.person = person;*/
      return next();
    }
  } catch (error) {
    console.log(error);
  }
  return res.status(403).json({ message: "Unauthorized" });

  next();
};

module.exports = guard;
