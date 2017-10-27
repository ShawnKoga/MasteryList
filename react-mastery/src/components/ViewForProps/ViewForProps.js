import React, { Component } from 'react';

class ViewForProps extends Component {
    render() {
        return (
            <section className={this.props.toggle ? "Prop-View show" : "hide"}>
                THIS IS THE PROP THING VIEW
                <button onClick={() => this.props.toggleMenu()}>Toggle</button>
            </section>
        );
    }
}

export default ViewForProps;