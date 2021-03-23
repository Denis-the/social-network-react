import s from './Users.module.css';
import UsersItem from './UsersItem/UsersItem';

const Users = (props) => {
    const usersJXS = props.users.map((user) => (
        <UsersItem
            key={user.id}
            user={user}
            follow={props.follow}
            unfollow={props.unfollow}
        />
    ))

    const pageNavJSX = (
        <div>
            <select onChange={(e) => { props.changePerPageCount(e.target.value) }}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
            </select>

            {props.currentPage}/{props.pagesTotal}

            <div className={s.navButtons}>
                <button key={'start'}
                    className={`${s.navBtn}` + " " + `${(props.currentPage === 1) ? s.navBtnIncative : ''}`}
                    onClick={() => {props.loadPage(1)}}>
                    start
                </button>
                <button key={'prev'}
                    className={`${s.navBtn}` + " " + `${(props.currentPage === 1) ? s.navBtnIncative : ''}`}
                    onClick={() => {props.loadPage(props.currentPage - 1)}}>
                    prev
                </button>
                <button key={'next'}
                    className={`${s.navBtn}` + " " + `${(props.currentPage === props.pagesTotal) ? s.navBtnIncative : ''}`}
                    onClick={() => {props.loadPage(props.currentPage + 1)}}>
                    next
                </button>
                <button key={'end'}
                    className={`${s.navBtn}` + " " + `${(props.currentPage === props.pagesTotal) ? s.navBtnIncative : ''}`}
                    onClick={() => {props.loadPage(props.pagesTotal)}}>
                    end
                </button>

            </div>
        </div>
    )

    return (
        <div>
            <div className='usersContainer'>
                {usersJXS}
            </div>

            <div className='pageNav'>
                {pageNavJSX}
            </div>
        </div>
    )
}

export default Users;


