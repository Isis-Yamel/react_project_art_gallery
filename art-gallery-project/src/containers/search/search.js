import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Canvas from '../../components/canvas/canvas';
import './search.css';

class Search extends Component {

    state = {
        clicked: false
    }

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
        console.log(this.props.data);
        return (
            <section className='search--style'>
                <input label='search' placeholder='Search here!' className='search_style--input' name='nav-search' type='text'/>
                <button className='search_style--button' onClick={this.props.OnSearch}>Search</button>
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
        OnSearch: () => dispatch({type: actions.FETCH})
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Search);