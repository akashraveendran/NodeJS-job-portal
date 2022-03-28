var express = require('express');
var router = express.Router();

const { getUserLogin,
    getUserSignup,
    createNewUser,
    doUserLogin,
    getHomePage,
    getJobsPage,
    getAllCompanies,
    getJobApplicationForm,
    applyJob,
    getUserNotifications,
    getUserApplications
} = require("../controllers/user-controller")


router.route('/login').get(getUserLogin).post(doUserLogin)
router.route('/signup').get(getUserSignup).post(createNewUser);
router.route('/').get(getHomePage);
router.route('/alljobs').get(getJobsPage);
router.route('/companies').get(getAllCompanies);
router.route('/apply-job/:id').get(getJobApplicationForm).post(applyJob);
router.route('/notifications/:id').get(getUserNotifications);
router.route('/user-applications/:id').get(getUserApplications);




module.exports = router;
