const asyncHandler = require("express-async-handler");
// const Internship = require("../models/internshipModel");
const Application = require("../models/applicationModel");
const User = require("../models/userModel");

/*
LIST OF CONTROLLERS
1. Create an assignment
2. Get all assignments of a user by userId
*/

// 1. Create a new assignment
const createApplication = asyncHandler(async (req, res) => {
    const {
        userId,
        internshipId,
        isComplete,
        location,
        education,
        resumeDriveLink,
        ans1,
        ans2,
        projects,
        skills,
        applicationStatus
    } = req.body;
    // const userId = req.user._id;

    const alreadyApplied = await Application.find({ userId, internshipId });

    if (alreadyApplied.length > 0) {
        res.json({ message: "Already Applied" })
        console.log("Already applied");
    } else {
        const newApplication = new Application({
            userId,
            internshipId,
            isComplete,
            location,
            education,
            resumeDriveLink,
            ans1,
            ans2,
            projects,
            skills,
            applicationStatus
        });

        await newApplication.save();
        console.log("Application created details", newApplication);
        return res.status(200).json({
            success: true,
            data: newApplication,
        });
    }

    // if (submitted.length > 0) {
    //     console.log(submitted);
    //     // submitted[0].assignmentLink = assignmentLink;
    //     // submitted[0].assignmentScreenshotLink = assignmentScreenshotLink;
    //     // submitted[0].assignmentStatus = assignmentStatus;
    //     // submitted[0].isCertified = isCertified;
    //     // const newAssignment = new Assignment(submitted[0]);
    //     await Application.findByIdAndDelete(submitted[0]._id);

})

// const internship = await Internship.find({ internshipId });

// if (!internship) {
//     return res.status(400).json({
//         success: false,
//         message: "No such internship found",
//     });
// }

// const newApplication = new Application({
//     userId,
//     internshipId,
//     isComplete,
//     location,
//     education,
//     resumeDriveLink,
//     ans1,
//     ans2,
//     projects,
//     skills,
//     applicationStatus
// });

// await newApplication.save();
// console.log(req.user);

// return res.status(200).json({
//     success: true,
//     data: newApplication,
// });
// });




// 2. Get all applications of a user by userId
const getAllApplicationsOfUser = asyncHandler(async (req, res) => {
    const applications = await Application.find({ userId: req.params.id }).populate(
        "internshipId userId"
    );
    res.status(200).json({
        success: true,
        data: applications,
    });
});

const getAllApplicationsOfInternship = asyncHandler(async (req, res) => {
    const applications = await Application.find({ internshipId: req.params.id }).populate("internshipId userId")
    res.status(200).json({
        success: true,
        data: applications,
    });
});

module.exports = {
    createApplication,
    getAllApplicationsOfUser,
    getAllApplicationsOfInternship,
};