const bcrypt = require("bcrypt")
const UserModel = require("../models/user-model")

const getHomePage = function (req, res, next) {
  let { alertMessage } = req.session;
  if (req.session.user) {
    let { user } = req.session; //fetching user and alert message stored inn session
    res.render('user/home-page', { title: 'Job Portal', user, alertMessage });
    delete req.session.alertMessage;
  } else {
    res.render('user/home-page', { title: 'Job Portal', alertMessage });
    delete req.session.alertMessage;
  }
}

const getUserLogin = (req, res) => {
  if (req.session.user) {
    res.redirect('/')
  } else {
    let alertMessage = req.session.alertMessage
    res.render('user/login', { title: "login", alertMessage });
    delete req.session.alertMessage;
  }
}
const getUserSignup = (req, res) => {
  let alertMessage = req.session.alertMessage
  res.render('user/signup', { title: "signup", alertMessage });
  delete req.session.alertMessage;
}
const createNewUser = async (req, res) => {
  // console.log(req.body)
  try {
    let oldpassword = req.body.password;
    req.body.password = await bcrypt.hash(oldpassword, 10); //encrypting the password from user and adding it to the req.body object
    console.log(req.body);
    const user = await UserModel.create(req.body);
    req.session.alertMessage = "Signup Comlpleted successfully"
    res.status(201).redirect("/login")
  } catch (error) {
    console.log(error);
    req.session.alertMessage = "Error in creating New User. Retry !!!!!";
    res.redirect('/signup')
  }
}
const doUserLogin = async (req, res) => {
  try {
    // console.log(req.body, req.body.password);
    let { password } = req.body;
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      const exist = await bcrypt.compare(password, user.password);
      if (exist) {
        req.session.user = user;
        req.session.alertMessage = "Logged In successfully";
        return res.redirect("/")
      }
    }
    req.session.alertMessage = "Invalid User Credentials";
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    req.session.alertMessage = "Error Occured. Please Retry !!!";
    res.redirect("/login")
  }
}
const logout = (req, res) => {
  req.session.user = null;
  req.session.alertMessage = "Logged Out Successfully!!!"
  res.redirect("/login")
}
const getJobsPage = (req, res) => {
  res.render("user/job-list")
}
const getUpdateUserForm = (req, res) => {
  res.render("user/update-profile", { id: req.params.id })
};
const updateUserProfile = async (req, res) => {
  // console.log(req.body);
  // console.log(req.files);
  try {
    let { id } = req.params;
    const user = await UserModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
    if (user) {
      let { image, resume } = req.files;
      await image.mv("./public/images/users/profile/" + id + ".jpg");
      await resume.mv("./public/images/users/resume/" + id + ".pdf");
      req.session.user = user;
      req.session.alertMessage = "Updated Profile successfully"
      return res.redirect("/");
    }
    req.session.alertMessage = "Couldn't Update Retry"
    res.redirect("/company")
  } catch (error) {
    console.log(error);
    req.session.alertMessage = "Couldn't Update Retry"
    res.redirect("/company")
  }
};
const getAllCompanies = (req, res) => {
};
const getJobApplicationForm = (req, res) => {
};
const applyJob = (req, res) => {
};
const getUserNotifications = (req, res) => {
};
const getUserApplications = (req, res) => {
};
module.exports = {
  getHomePage,
  getUserLogin,
  getUserSignup,
  createNewUser,
  doUserLogin,
  getUpdateUserForm,
  updateUserProfile,
  getJobsPage,
  getAllCompanies,
  getJobApplicationForm,
  applyJob,
  getUserNotifications,
  getUserApplications,
  logout
}
