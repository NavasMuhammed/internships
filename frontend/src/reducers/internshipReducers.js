import {
    ONE_INTERNSHIP_DETAILS_REQUEST,
    ONE_INTERNSHIP_DETAILS_SUCCESS,
    ONE_INTERNSHIP_DETAILS_FAILS,
    ALL_INTERNSHIPS__LIST_REQUEST,
    ALL_INTERNSHIPS__LIST_SUCCESS,
    ALL_INTERNSHIPS__LIST_FAILS,
    ALL_USER_INTERNSHIPS_REQUEST,
    ALL_USER_INTERNSHIPS_SUCCESS,
    ALL_USER_INTERNSHIPS_FAILS,
    WEBDEV_INTERNSHIPS__LIST_REQUEST,
    WEBDEV_INTERNSHIPS__LIST_SUCCESS,
    WEBDEV_INTERNSHIPS__LIST_FAILS,
    DESIGNING_INTERNSHIPS__LIST_REQUEST,
    DESIGNING_INTERNSHIPS__LIST_SUCCESS,
    DESIGNING_INTERNSHIPS__LIST_FAILS,
    CONTENTWRITING_INTERNSHIPS__LIST_REQUEST,
    CONTENTWRITING_INTERNSHIPS__LIST_SUCCESS,
    CONTENTWRITING_INTERNSHIPS__LIST_FAILS,
    DIGITALMARKETING_INTERNSHIPS__LIST_REQUEST,
    DIGITALMARKETING_INTERNSHIPS__LIST_SUCCESS,
    DIGITALMARKETING_INTERNSHIPS__LIST_FAILS,
    DATASCIENCE_INTERNSHIPS__LIST_REQUEST,
    DATASCIENCE_INTERNSHIPS__LIST_SUCCESS,
    DATASCIENCE_INTERNSHIPS__LIST_FAILS,
    OTHER_INTERNSHIPS_LIST_REQUEST,
    OTHER_INTERNSHIPS_LIST_SUCCESS,
    OTHER_INTERNSHIPS_LIST_FAILS,
    ALL_EMPLOYER_INTERNSHIPS_REQUEST,
    ALL_EMPLOYER_INTERNSHIPS_SUCCESS,
    ALL_EMPLOYER_INTERNSHIPS_FAILS,
    INTERNSHIP_CREATE_REQUEST,
    INTERNSHIP_CREATE_SUCCESS,
    INTERNSHIP_CREATE_FAILS,
} from "../constants/internshipConstants";

// Partiicular INTERNSHIP details
// export const oneInternshipDetailsReducer = (
//     state = { internship: { reviews: [] } },
//     action
// ) => {
//     switch (action.type) {
//         case ONE_INTERNSHIP_DETAILS_REQUEST:
//             return { ...state, loading: true };
//         case ONE_INTERNSHIP_DETAILS_SUCCESS:
//             return { loading: false, internship: action.payload };
//         case ONE_INTERNSHIP_DETAILS_FAILS:
//             return { loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };

export const oneInternshipDetailsReducer = (
    state = { internshipDetails: [] },
    action
) => {
    switch (action.type) {
        case ONE_INTERNSHIP_DETAILS_REQUEST:
            return { ...state, loading: true, internshipDetails: [] };
        case ONE_INTERNSHIP_DETAILS_SUCCESS:
            return { loading: false, internshipDetails: action.payload };
        case ONE_INTERNSHIP_DETAILS_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const allInternshipsListReducer = (
    state = { allInternshipList: [] },
    action
) => {
    switch (action.type) {
        case ALL_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, allInternshipsList: [] };
        case ALL_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, allInternshipsList: action.payload };
        case ALL_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const allUserInternshipsReducer = (state = { internships: [] }, action) => {
    switch (action.type) {
        case ALL_USER_INTERNSHIPS_REQUEST:
            return { ...state, loading: true, internships: [] };
        case ALL_USER_INTERNSHIPS_SUCCESS:
            return { loading: false, internships: action.payload };
        case ALL_USER_INTERNSHIPS_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const allEmployerInternshipsReducer = (
    state = { employerInternships: [] },
    action
) => {
    switch (action.type) {
        case ALL_EMPLOYER_INTERNSHIPS_REQUEST:
            return { ...state, loading: true, employerInternships: [] };
        case ALL_EMPLOYER_INTERNSHIPS_SUCCESS:
            return { loading: false, employerInternships: action.payload };
        case ALL_EMPLOYER_INTERNSHIPS_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};



export const webdevInternshipListReducer = (
    state = { webdevInternshipList: [] },
    action
) => {
    switch (action.type) {
        case WEBDEV_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, webdevInternshipList: [] };
        case WEBDEV_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, WEBDEVInternshipList: action.payload };
        case WEBDEV_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const designingInternshipListReducer = (
    state = { designingInternshipList: [] },
    action
) => {
    switch (action.type) {
        case DESIGNING_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, designingInternshipList: [] };
        case DESIGNING_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, designingInternshipList: action.payload };
        case DESIGNING_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const contentWritingInternshipListReducer = (
    state = { contentWritingInternshipList: [] },
    action
) => {
    switch (action.type) {
        case CONTENTWRITING_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, contentWritingInternshipList: [] };
        case CONTENTWRITING_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, contentWritingInternshipList: action.payload };
        case CONTENTWRITING_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const digitalMarketingInternshipListReducer = (
    state = { digitalMarketingInternshipList: [] },
    action
) => {
    switch (action.type) {
        case DIGITALMARKETING_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, digitalMarketingInternshipList: [] };
        case DIGITALMARKETING_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, digitalMarketingInternshipList: action.payload };
        case DIGITALMARKETING_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const dataScienceInternshipListReducer = (
    state = { dataScienceInternshipList: [] },
    action
) => {
    switch (action.type) {
        case DATASCIENCE_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, dataScienceInternshipList: [] };
        case DATASCIENCE_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, dataScienceInternshipList: action.payload };
        case DATASCIENCE_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const otherInternshipListReducer = (
    state = { otherInternshipList: [] },
    action
) => {
    switch (action.type) {
        case OTHER_INTERNSHIPS_LIST_REQUEST:
            return { ...state, loading: true, otherInternshipList: [] };
        case OTHER_INTERNSHIPS_LIST_SUCCESS:
            return { loading: false, otherInternshipList: action.payload };
        case OTHER_INTERNSHIPS_LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const createInternshipReducer = (state = {}, action) => {
    switch (action.type) {
        case INTERNSHIP_CREATE_REQUEST:
            return { ...state, loading: true };
        case INTERNSHIP_CREATE_SUCCESS:
            return { ...state, loading: false, IinternshipCreateInfo: action.payload };
        case INTERNSHIP_CREATE_FAILS:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};