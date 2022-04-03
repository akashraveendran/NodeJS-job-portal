var express = require('express');
var router = express.Router();

const { getUserLogin,
    getUserSignup,
    createNewUser,
    doUserLogin,
    getHomePage,
    getProfilePage,
    getUpdateUserForm,
    updateUserProfile,
    getJobsPage,
    getAllCompanies,
    applyJob,
    getUserNotifications,
    getUserApplications,
    logout
} = require("../controllers/user-controller")


router.route('/signup').get(getUserSignup).post(createNewUser);
router.route('/login').get(getUserLogin).post(doUserLogin);
router.route("/logout").get(logout)
router.route('/').get(getHomePage);
router.route("/profile").get(getProfilePage)
router.route("/update-user/:id").get(getUpdateUserForm).post(updateUserProfile)
router.route('/user-jobs').get(getJobsPage);
router.route('/companies').get(getAllCompanies);
router.route('/apply-job/:id').get(applyJob) //job id
// router.route('/notifications/:id').get(getUserNotifications);
router.route('/user-applications/:id').get(getUserApplications);




module.exports = router;
