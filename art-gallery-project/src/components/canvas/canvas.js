import React from 'react';
import Icons from '../actionbar/actionbar';
import Image from '../canvas-information/image';
import Information from '../canvas-information/information';
import './canvas.css';

const Canvas = () => {
    return (
        <section className='wrapper'>
            <article className='wrapper-card--style'>
                <Image/>
                <Icons/>
                <Information/>
            </article>
        </section>
    );
};

export default Canvas;