import React from 'react';
import Icons from '../../components/actionbar/actionbar';
import Image from '../../components/canvas-information/image';
import Information from '../../components/canvas-information/information';

const CanvasCard = props => {
    return (
        <article className='wrapper-card--style'>
            <Image
                image={props.image}
                alternative={props.medium}/>
            <Icons/>
            <Information
                title={props.title}
                artwork={props.medium}
                credit={props.creditLine}/>
        </article>
    );
}

export default CanvasCard;