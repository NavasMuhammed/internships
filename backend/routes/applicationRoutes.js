const express = require("express");

const {
    createApplication,
    getAllApplicationsOfUser,
    getAllApplicationsOfInternship
} = require("../controllers/applicationControllers");

const {
    employerProtect,
    protect,
} = require("../middlewares/protectedRoutes");

const router = express.Router();

// Submit new Application
router.route("/createApplication").post(createApplication);

// Get all applications of a user by userId
router.route("/getApplicationsOfUser/:id").get(getAllApplicationsOfUser);

// get all applications submitted to the employer
router.route("/getAllApplicationsOfInternship/:id").get(getAllApplicationsOfInternship);

module.exports = router;