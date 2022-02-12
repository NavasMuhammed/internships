const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        internshipId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Internship",
        },
        isComplete: {
            type: Boolean,
            // required: true,
            default: false,
        },
        location: {
            type: String,
            required: true,
        },
        education: {
            type: String,
            required: true,
        },
        resumeDriveLink: {
            type: String,
            required: true,
        },
        ans1: {
            type: String,
        },
        ans2: {
            type: String,
        },
        projects: {
            type: String,
            required: true,
            default: "No projects made"
        },
        skills: {
            type: String,
            required: "True",
            default: "No skills to display"
        },
        // projects: [{
        //     projectName: {
        //         type: String,
        //         default: "E-learning Website"
        //     },
        //     projectLink: {
        //         type: String,
        //         default: "https://github.com/vidhishpanchal/Full-Stack-Simplified"
        //     },
        // }],
        // skills: [
        //     {
        //         skillName: {
        //             type: String,
        //             default: "ReactJS"
        //         },
        //     },
        // ],
        applicationStatus: {
            type: String,
            required: true,
            default: "applied",
        },
    },
    {
        timestamps: true,
    }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;