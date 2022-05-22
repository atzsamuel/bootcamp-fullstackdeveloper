const Person = require("../models/person");
const bcrypt = require("bcryptjs");

module.exports.registerPerson = async (req, res, next) => {
  const args = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  try {
    //model connection
    const { outBinds } = await Person.register(args);
    const { person_token } = outBinds;
    res
      .status(200)
      .cookie("auth_token", person_token[0], { sameSite: "none", secure: true })
      .json({
        message: "Person registered successfully",
        auth_token: person_token[0],
      });
  } catch (error) {
    res
      .status(400)
      .clearCookie("auth_token", { sameSite: "none", secure: true })
      .json({ message: error });
  }
};

module.exports.loginPerson = async (req, res, next) => {
  let args = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const { rows: hashpasswordrow } = await Person.hashpassword(args);
    if (hashpasswordrow.length > 0) {
      const hashpassword = hashpasswordrow[0]["PASSWORD"];
      if (bcrypt.compareSync(args.password, hashpassword)) {
        args = { email: args.email, password: hashpassword };
        const { outBinds } = await Person.login(args);
        const { person_token } = outBinds;
        return res
          .status(200)
          .cookie("auth_token", person_token[0], {
            sameSite: "none",
            secure: true,
          })
          .json({
            message: "Person logged in successfully",
            auth_token: person_token[0],
          });
      }
    }
    res
      .status(403)
      .clearCookie("auth_token", { sameSite: "none", secure: true })
      .json({ message: "Invalid email or password" });
  } catch (error) {
    res
      .status(400)
      .clearCookie("auth_token", { sameSite: "none", secure: true })
      .json({ message: error });
  }
};
