import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {
    constructor() {
        super()

        this.state = {
            user: []
        }
    }

    componentDidMount() {
        this.getUserInfo(1)
    }

    getUserInfo(id) {
        axios.get(`http://localhost:5050/users/${id}`).then(res => {
            this.setState ({
                user: res.data
            })
        })
    }

    render() {
        const user =  this.state.user.map((c, i) => {
            const {username} = c
            return (
                <section key={i}>
                    <div id="username">{username}</div>
                </section>
            )
        })

        return (
            <section>
                <h1>The Header</h1>
                <div>{user}</div>
            </section>
        );
    }
}

export default Header;
