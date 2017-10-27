import React, { Component } from 'react';

class ViewForProps extends Component {
    render() {
        return (
            <section className={this.props.toggle ? "Prop-View show" : "hide"}>
                <div>THIS IS THE PROP THING VIEW</div>
                <button onClick={() => this.props.toggleMenu()}>Toggle</button>
                <ul className="the_pic">
                    <li>-Mountains</li>
                    <li>-Snow</li>
                    <li>-Clouds</li>
                </ul>
                <ul className="the_list">
                    <li>-Mountains</li>
                    <li>-Snow</li>
                    <li>-Clouds</li>
                </ul>
            </section>
        );
    }
}

export default ViewForProps;