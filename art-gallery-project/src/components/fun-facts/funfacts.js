import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import React, { Component } from 'react';
import './funfacts.css';

class FunFacts extends Component {
    render () {
        console.log(this.props.data);
        return (
            <section>
                <article className='information--style'>
                    <h2 className='information_title--style'>Artist Willard Wigan once inhaled his own work!</h2>
                    <p>Wigan’s works are ‘micro-sculptures’, so tiny they must be viewed through a microscope. In creating his art, Wigan has to slow his heartbeat and work between pulses. The work he inhaled was Alice, from Alice in Wonderland, but apparently she was even better when remade.</p>
                    <button onClick={this.props.OnClicked} >More Facts</button>
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
        OnClicked: () => dispatch({type: actions.FUN_FACT})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FunFacts);