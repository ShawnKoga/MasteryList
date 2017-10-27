import React from 'react';
import { Link } from 'react-router-dom';


export default function (props) {
    return (
        <section className="App">
            <h1>New View</h1>
            <Link to="/"><button>Back to Home View</button></Link>
            <Link to="/new-view/lastView">Last View</Link>
            {props.children}
        </section>
    );
}