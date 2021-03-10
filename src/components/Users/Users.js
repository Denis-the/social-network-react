import axios from 'axios';
import s from './Users.module.css';
import UsersItem from './UsersItem/UsersItem';

const Users = (props) => {
   
    const showMoreUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then( response => props.setUsers(response.data.items))
        // .then( response => console.log(response.data.items))
    }

    if (props.users.length === 0) {
        showMoreUsers();
    }


    const usersJXS = props.users.map((user) => (
        <UsersItem
        key={user.id}
        user={user}
        followBTNAction={(user.isFollowing) ? props.unfollow : props.follow}
        />
    ))

    return (
        <div>
            <div>
                {usersJXS}
            </div>
            <div>
                <button onClick={ showMoreUsers }>SHOW MORE USERS</button>
            </div>
        </div>
    )

}

export default Users;