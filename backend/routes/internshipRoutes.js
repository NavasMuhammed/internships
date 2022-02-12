const express = require("express");

const {
    createInternship,
    getAllInternships,
    getAllWebdevInternships,
    getAllDesigningInternships,
    getAllDigitalMarketingInternships,
    getAllDataScienceInternships,
    getAllContentWritingInternships,
    getInternshipById,
    payUsingRazorpay,
    getAllOtherInternships,
    getAllInternshipsOfUser,
    getAllInternshipsOfEmployer,
    // createChapter,
} = require("../controllers/internshipControllers");

const {
    protect,
    instructorProtect,
} = require("../middlewares/protectedRoutes");

const router = express.Router();

// Create new Internships - Only for Employers
router.route("/createInternship").post(createInternship);

// Create new chapter - Only for Employers
// router.route("/createChapter/:id").put(createChapter);

// Get all Internshipss
router.route("/allInternships").get(getAllInternships);

// Get all Webdev Internshipss
router.route("/allWebdevInternships").get(getAllWebdevInternships);

// Get all Backend Internshipss
router.route("/allDesigningInternships").get(getAllDesigningInternships);

// Get all Database Internships
router.route("/allDigitalMarketingInternships").get(getAllDigitalMarketingInternships);

// Get all Fullstack Internshipss
router.route("/allDataScienceInternships").get(getAllDataScienceInternships);

// Get all Designing Internshipss
router.route("/allContentWritingInternships").get(getAllContentWritingInternships);

// Get all Other Internshipss
router.route("/allOtherInternships").get(getAllOtherInternships);

// Get a particular Internships by id
router.route("/oneInternship/:id").get(getInternshipById);

// Get all Internshipss by id
router.route("/allInternships/:id").get(getAllInternshipsOfUser);

// Get all Internshipss of instructor
router.route("/allEmployerInternships/:id").get(getAllInternshipsOfEmployer);

// Pay using Razorpay
router.route("/razorpay").post(payUsingRazorpay);

module.exports = router;