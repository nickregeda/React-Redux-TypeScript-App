import {UserState, UserAction, UserActionTypes} from "../../types/user";

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                ...state,
                users: [],
                isLoading: true,
                error: null
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                error: null
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                ...state,
                users: [],
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}


