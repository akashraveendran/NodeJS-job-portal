const bcrypt = require("bcrypt")
const CompanyModel = require("../models/company-model")


const getCompanyLogin = function (req, res) {
    res.send("route is live")
};
const doCompanyLogin = function (req, res) {
    res.send("route is live")
};
const getCompanySignup = function (req, res) {
    res.send("route is live")
};
const createNewCompany = function (req, res) {
    res.send("route is live")
};
const geCompanytHomePage = function (req, res) {
    res.send("route is live")
};
const getCompanyUpdateForm = function (req, res) {
    res.send("route is live")
};
const updateCompanyProfile = function (req, res) {
    res.send("route is live")
};
const getCompanyJobsPage = function (req, res) {
    res.send("route is live")
};
const getCompanyApplications = function (req, res) {
    res.send("route is live")
};
const shortListApplication = function (req, res) {
    res.send("route is live")
};
const acceptApplication = function (req, res) {
    res.send("route is live")
};
const rejectApplication = function (req, res) {
    res.send("route is live")
};


module.exports = {
    getCompanyLogin,
    doCompanyLogin,
    getCompanySignup,
    createNewCompany,
    geCompanytHomePage,
    getCompanyUpdateForm,
    updateCompanyProfile,
    getCompanyJobsPage,
    getCompanyApplications,
    shortListApplication,
    acceptApplication,
    rejectApplication
} 