import React, {useEffect} from 'react';
import {FC} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: FC = () => {
    const {users, error, isLoading} = useTypedSelector(state => state.userReducer)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(u => <div key={u.id}>
                <div>{u.name}</div>
            </div>)}
        </div>
    );
};

export default UserList;