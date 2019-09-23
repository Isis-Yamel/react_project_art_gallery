import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/reducers/actions/index';
import Canvas from '../../components/canvas/canvas';
import './search.css';

class Search extends Component {

    state = {
        clicked: false,
        inputFromUser: ''
    }

    storeInputFromUser = event => {
        this.setState({
            inputFromUser: event.target.value
        })
    };

    toggleCanvas = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    };

    renderCanvas = () => {
        let component = null;

        if (this.state.clicked){
            component = ( <Canvas />);
        }

        return component;
    }

    render () {
        return (
            <section className='search--style'>
                <input onChange={event => this.storestoreInputFromUser(event)} label='search' placeholder='Search here!' className='search_style--input' name='nav-search' type='text'/>
                <button className='search_style--button' onClick={this.props.fetchData.bind(this, this.state.InputFromUser)}>Search</button>
                <div>
                   {this.renderCanvas()}
                </div>
            </section>
        );
    }
};

const mapStateToProps = state => {
    return {
        data: state.fetchData.canvasData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: event => dispatch(actions.fetchData(event))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Search);