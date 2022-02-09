const mongoose = require("mongoose");

const InternshipSchema = mongoose.Schema(
  {
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
      // required: true,
      default:
        "https://media.istockphoto.com/vectors/businessman-avatar-icon-profession-logo-male-character-a-man-in-suit-vector-id1126791018?k=20&m=1126791018&s=170667a&w=0&h=qfHYWoeGkS5Xmg6RNzujdQOpbWarSACoXICDC7TlLvg=",
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
      default: "Work from Home",
    },
    startsAt: {
      type: String,
      default: "Immediately",
    },
    duration: {
      type: Number,
      required: true,
    },
    stipend: {
      type: Number,
      required: true,
      default: 5000,
    },
    lastDateToApply: {
      type: String,
      required: true,
      default: Date.now(),
    },
    aboutCompany: {
      type: String,
      required: true,
    },
    aboutInternship: {
      type: String,
      required: true,
    },
    noOfOpenings: {
      type: Number,
      required: true,
    },
    skillsRequired: {
      type: String,
    },
    // skillsRequired: [
    //     {
    //         skill: {
    //             type: String,
    //             required: true,
    //         },
    //     },
    // ],
    perks: [
      {
        perk: {
          type: String,
        },
      },
    ],
    questions: [
      {
        question: {
          type: String,
          default: "Why should we hire you?",
        },
      },
      {
        question: {
          type: String,
          default:
            "Will you be able to start immediately for the duration mentioned?",
        },
      },
    ],
    isPartTime: {
      type: Boolean,
      required: true,
    },
    isPPO: {
      type: Boolean,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    noOfApplicants: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Internship = mongoose.model("Internship", InternshipSchema);

module.exports = Internship;
