var express = require('express');
var router = express.Router();

const {
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
} = require("../controllers/company-controller")

router.route('/login').get(getCompanyLogin).post(doCompanyLogin)
router.route('/signup').get(getCompanySignup).post(createNewCompany);
router.route('/').get(geCompanytHomePage);
router.route("/update-company/:id").get(getCompanyUpdateForm).post(updateCompanyProfile);
router.route('/company-jobs/:id').get(getCompanyJobsPage);
router.route('/company-applications/:id').get(getCompanyApplications);
router.route("/short-list/:id").get(shortListApplication);
router.route("/accept-application/:id").get(acceptApplication);
router.route("/reject-application/:id").get(rejectApplication);


