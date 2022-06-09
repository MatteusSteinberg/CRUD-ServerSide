import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import DeleteModal from './deleteModal';
import EditModal from './editModal';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [isDeleteOpen, setIsDeleteOpen] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [users]);

  const handleDeleteUser = async (id) => {
    try {
      const res = await axios.post(`/api/deleteUser`, {
        id: id
      });
      if (res.data.success) {
        const newUser = users.filter((el) => el._id !== id);
        setUsers(newUser);
        console.log(users, 'hej');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ul className='list'>
        {users.map((user) => {
          return (
            <>
              <UserItem
                handleDeleteUser={() => handleDeleteUser(user._id)}
                key={user._id}
                user={user}
                setIsEditOpen={setIsEditOpen}
                setIsDeleteOpen={setIsDeleteOpen}
              />

              <DeleteModal
                isOpen={isDeleteOpen}
                setIsOpen={setIsDeleteOpen}
                handleDeleteUser={() => handleDeleteUser(user._id)}
              />

              <EditModal isOpen={isEditOpen} setIsOpen={setIsEditOpen} userId={user._id} />
            </>
          );
        })}
      </ul>
    </>
  );
}

function UserItem(props) {
  return (
    <li className='user-item'>
      <div className='actions'>
        <div
          className='delete-wrap'
          onClick={() => {
            props.handleDeleteUser(props.user._id);
          }}
        >
          <svg fill='#000000' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24px' height='24px'>
            <path d='M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z' />
          </svg>
        </div>
        <div className='edit-wrap' onClick={(e) => props.setIsEditOpen(true)}>
          <svg fill='#000000' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24px' height='24px'>
            {' '}
            <path d='M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z' />
          </svg>
        </div>
      </div>
      <p className='user-first'>{props.user.firstName}</p>
      <p className='user-last'>{props.user.lastName}</p>
      <p className='username'>{props.user.username}</p>
      <p className='role'>{props.user.role}</p>
    </li>
  );
}
