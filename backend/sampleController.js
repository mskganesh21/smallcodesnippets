import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { validateLength } from "../utils/lenghtvalidator.js";
import { validateEmail } from "../utils/emailvalidator.js";

// this is the signup api route
const SignUpUser = async (req, res) => {
  //we are getting email and password from reqbody
  const { email, password } = req.body;
  console.log(req.body);

  //validate request body
  const isvalidemail = validateEmail(email);
  const isvalidpassword = validateLength(password, 8);

  //if email is invalid then return 
  if(!isvalidemail){
    return res.status(422).send("Invalid email format");
  }

  //if password is invalid then return
  if(!isvalidpassword){
    return res.status(422).send("Invalid Password length");
  }

  //find if a user already exists
  const user = await User.findOne({email});
  if(user){
    return res.status(409).send("User already registered. Please try with a differnt email")
  }

    try {
      const hash = await bcrypt.hash(password, 10);
      await User.create({
        email,
        password: hash,
      });
      res.status(201).send("User created successfully");
      return;
    } catch (error) {
      console.log(error);
      res.status(500).send("Something wen't wrong. Please try again");
      return;
    }
};

export { SignUpUser };
