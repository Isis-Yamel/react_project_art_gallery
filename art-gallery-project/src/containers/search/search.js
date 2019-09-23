import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/reducers/actions/index';
import Canvas from '../../components/canvas/canvas';
import './search.css';

class Search extends Component {

    state = {
        inputFromUser: ''
    }

    storeInputFromUser = event => {
        this.setState({
            inputFromUser: event.target.value
        })
    };

    render () {
        return (
            <Fragment>
                <section className='search--style'>
                    <input onChange={event => this.storeInputFromUser(event)} label='search' placeholder='Search here!' className='search_style--input' name='nav-search' type='text'/>
                    <button className='search_style--button' onClick={this.props.fetchData.bind(this, this.state.inputFromUser)}>Search</button>
                </section>
                <section>
                    <Canvas data={this.props.data}/>
                </section>
            </Fragment>
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