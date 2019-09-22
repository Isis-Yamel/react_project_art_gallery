import React, { Component } from 'react';
import './canvas.css';
import Icons from '../../components/actionbar/actionbar';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


class Canvas extends Component {
    render () {
        return (
            <section className='wrapper'>
                <article className='wrapper-card--style'>
                    <figure className='image'>
                        <img className='imageStyle' src={this.props.data.primaryImageSmall} alt={this.props.data.creditLine}/>
                    </figure>
                    <Icons/>
                    <div className='info info--scroll'>
                        <h2>{this.props.data.title}</h2>
                        <p>{this.props.data.creditLine}</p>
                        <p>Artwork: {this.props.data.medium}</p>
                    </div>
                </article>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.canvasData
    };
}

const mapDispatchToProps = dispatch => {
    return {
        OnClicked: () => dispatch({type: actions.FETCH})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);