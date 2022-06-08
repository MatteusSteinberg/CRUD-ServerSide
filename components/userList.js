import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import UserItem from './userItem';

export default function UserList({ setIsEditOpen, setIsDeleteOpen }) {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('/api/users');
                setUsers(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        };

        fetchData();
    }, [users]);

    return (
        <ul className="list">
            {users.map((user, index) => {
                return (
                    <UserItem key={index} user={user} setIsEditOpen={setIsEditOpen} setIsDeleteOpen={setIsDeleteOpen} />
                )
            })}
        </ul>
    )
}
