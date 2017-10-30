import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class DetailView extends Component {
    render() {
        return (
            <section>
                <div>DETAIL VIEW</div>
                <h1>{this.props.match.params.name}</h1>
                <p>{this.props.match.params.desc}</p>
            </section>
        );
    }
}
