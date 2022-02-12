import {
    APPLICATION_CREATE_FAILS,
    APPLICATION_CREATE_REQUEST,
    APPLICATION_CREATE_SUCCESS,
    ALL_USER_APPLICATIONS_REQUEST,
    ALL_USER_APPLICATIONS_SUCCESS,
    ALL_USER_APPLICATIONS_FAILS
} from "../constants/applicationConstants";

export const createApplicationReducer = (state = {}, action) => {
    switch (action.type) {
        case APPLICATION_CREATE_REQUEST:
            return { ...state, loading: true };
        case APPLICATION_CREATE_SUCCESS:
            return { ...state, loading: false, applicationCreateInfo: action.payload };
        case APPLICATION_CREATE_FAILS:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};


export const allUserApplicationsReducer = (state = { userApplications: [] }, action) => {
    switch (action.type) {
        case ALL_USER_APPLICATIONS_REQUEST:
            return { ...state, loading: true, userApplications: [] };
        case ALL_USER_APPLICATIONS_SUCCESS:
            return { loading: false, userApplications: action.payload };
        case ALL_USER_APPLICATIONS_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};