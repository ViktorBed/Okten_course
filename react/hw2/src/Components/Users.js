import React, { useEffect, useState } from 'react';

import User from './User';
import {getUsers} from "../services/user.service";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data);
        });
    }, []);

    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
}

export default Users;

