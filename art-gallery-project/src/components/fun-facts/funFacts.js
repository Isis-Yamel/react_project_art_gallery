import { connect } from 'react-redux';
import * as actions from '../../store/actions/types';
import React, { Component } from 'react';
import './funFacts.css';

class FunFacts extends Component {

    render () {
        return (
            <section>
                <article className='information--style'>
                    <h2 className='information_title--style'>{this.props.data.title || 'Search fact'}</h2>
                    <p className='information_text--style' >{this.props.data.text || 'Hit the "More Facts" button to get fun facts!'}</p>
                    <button className='information_button--style' onClick={this.props.OnClicked} >More Facts</button>
                </article>
            </section>
        );
    };
};

const mapStateToProps = state => {
    return {
        data: state.facts.funData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        OnClicked: () => dispatch({type: actions.GET_FACT})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FunFacts);