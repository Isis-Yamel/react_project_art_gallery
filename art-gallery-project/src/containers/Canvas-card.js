import React from 'react';
import ActionBar from '.././components/action-bar';
import Image from '../components/canvas-information/image';
import Information from '../components/canvas-information/information';

const canvasCard = props => {
    return (
        <article className='wrapper-card--style'>
            <Image
                image={props.image}
                alternative={props.artwork}/>
            <ActionBar
                addFavoriteHandler={props.addFavoriteHandler}
                identifier={props.identifier}
            />
            <Information
                title={props.title}
                artwork={props.artwork}
                credit={props.credit}/>
        </article>
    );
}

export default canvasCard;