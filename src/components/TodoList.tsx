import React, {useEffect, FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: FC = () => {
    const {todos, isLoading, error, page, limit} = useTypedSelector(state => state.todoReducer)
    const {fetchTodos, setTodosPage} = useActions()
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <div>
                {todos.map(td => <div key={td.id}>
                    <div>{td.id}. {td.title}</div>
                </div>)}
            </div>
            <div>
                {pages.map(p => <button style={{border: p === page ? 'solid 1px black' : 'none'}}
                                        onClick={() => setTodosPage(p)} key={p}>{p}</button>)}
            </div>
        </div>
    );
};

export default TodoList;