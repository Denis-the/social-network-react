import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import UsersItem from './UsersItem/UsersItem';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perPage: 10,
            pagesTotal: 1,
            currentPage: 1,
        }
    }
    componentDidMount() {
            this.props.loadPage(this.props.currentPage);
    }
    generatePageNav() {
        const pagesJSX = [];

        if (this.props.currentPage > 1) {
            pagesJSX.push(
                <button key={'prev'}
                    onClick={() => this.props.loadPage(this.props.currentPage - 1)}>
                    prev
                </button>)
        }
        if (this.props.currentPage < this.props.pagesTotal) {
            pagesJSX.push(
                <button key={'next'}
                    onClick={() => this.props.loadPage(this.props.currentPage + 1)}>
                    next
                </button>)
        }

        return pagesJSX
    }

    render() {
        const usersJXS = this.props.users.map((user) => (
            <UsersItem
                key={user.id}
                user={user}
                followBTNAction={(user.isFollowing) ? this.props.unfollow : this.props.follow}
            />
        ))

        return (
            <div>
                <div>
                    {usersJXS}
                </div>
                <div className="pageNav">
                    <select onChange={ (e) => {
                        this.props.changePerPageCount(e.target.value)}}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="40">40</option>
                    <option value="60">60</option>
                    <option value="80">80</option>
                    <option value="100">100</option>
                    </select>

                    {this.props.currentPage}/{this.props.pagesTotal}
                    {this.generatePageNav()}
                </div>
            </div>
        )
    }
}


export default Users;


