import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../ducks/reducer';

import ViewFromProps from './ViewForProps/ViewForProps';

class HomeView extends Component {
    constructor() {
        super()

        this.state = {
            toggle: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }
    toggleMenu() {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        return (
            <section className="Home-View">
                THIS IS THE HOME VIEW
                <button onClick={() => this.props.getAllProducts()}>GET ALL PRODUCTS</button>
                <button onClick={() => this.toggleMenu()}>Toggler</button>
                <ViewFromProps toggleMenu={this.toggleMenu} toggle={this.state.toggle}/>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {getAllProducts})(HomeView);
