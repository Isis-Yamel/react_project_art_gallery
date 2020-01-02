import Canvas from '.././containers/Canvas';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchData, addFavorite } from '../store/actions/actions';
import '../css/Search.css';

class Search extends Component {

    state = {
        inputFromUser: ''
    }

    addFavoriteHandler = (event, key) => {
        const favorite = this.props.data.filter( e => {
            return e.objectID === key;
        });

        this.props.addFavorite(favorite[0]);
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
                    <input
                        className='search_style--input'
                        label='search' placeholder='Search here!'
                        name='nav-search'
                        onChange={event => this.storeInputFromUser(event)}
                        type='text'/>
                    <button
                        className='search_style--button'
                        onClick={this.props.fetchData.bind(this, this.state.inputFromUser)}>Search</button>
                </section>
                <section className='canvas_wrapper'>
                    <Canvas
                        addFavoriteHandler={this.addFavoriteHandler}
                        data={this.props.data}/>
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

const mapDispatchToProps = { addFavorite, fetchData };

export default connect(mapStateToProps, mapDispatchToProps) (Search);