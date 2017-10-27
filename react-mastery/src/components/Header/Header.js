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
            return (
                <section key={i}>
                    <div>{c.username}</div>
                </section>
            )
        })

        return (
            <section className="App">
                The Header
                <div>{user}</div>
            </section>
        );
    }
}

export default Header;
