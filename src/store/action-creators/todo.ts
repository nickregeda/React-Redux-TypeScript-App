import {Dispatch} from "redux";
import {TodoAction, TodoActionTypes} from "../../types/todo";
import axios from "axios";
import {useDispatch} from "react-redux";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',
                {
                    params: {
                        _page: page,
                        _limit: limit
                    }
                })
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Todos fetching error'})
        }
    }
}

export const setTodosPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODOS_PAGE, payload: page}
}