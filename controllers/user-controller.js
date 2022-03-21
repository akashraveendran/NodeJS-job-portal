const bcrypt = require("bcrypt")
const UserModel = require("../models/user-model")

const getHomePage = function(req, res, next) {
  res.render('user/home-page', { title: 'Job Portal' });
}

const getUserLogin = (req, res) => {
  res.render('user/login', { title: "login" });
}
const getUserSignup = (req, res) => {
  res.render('user/signup', { title: "signup" });
}
const createNewUser = async (req, res) => {
  // console.log(req.body)
  try {
    let oldpassword=req.body.password;
    req.body.password=await bcrypt.hash(oldpassword,10); //encrypting the password from user and adding it to the req.body object
    console.log(req.body);
    const user = await UserModel.create(req.body);
    res.status(201).redirect("/")
  } catch (error) {
    console.log(error);
  }
}
const doUserLogin = async (req, res) => {
  try {
    console.log(req.body,req.body.password);
    let {password} = req.body;
    const user =await UserModel.findOne({email:req.body.email});
    if(user){
      console.log(password,user.password);
      const exist= await bcrypt.compare(password,user.password);
      console.log(exist);
      if(exist)return res.send("sucess")
    }
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.redirect("/login")
  }
}
module.exports = { getHomePage,getUserLogin, getUserSignup, createNewUser ,doUserLogin}
