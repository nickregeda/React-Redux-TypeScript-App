import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    error: null,
    isLoading: false,
    page: 1,
    limit: 10
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {
                ...state,
                isLoading: true
            }
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                isLoading: false
            }
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case TodoActionTypes.SET_TODOS_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state;
    }
}