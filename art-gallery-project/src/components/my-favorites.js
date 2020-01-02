import Canvas from '../containers/Canvas';
import React from 'react';
import { connect } from 'react-redux';

import '../css/my-favorites.css'

const MyFavorites = props => {

    return (
        <section className='favorite--style'>
            <Canvas data={props.favorites}/>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        favorites: state.favorite.favorites
    };
};

export default connect(mapStateToProps, null)(MyFavorites);