import React from 'react';

const information = props => {
    return (
        <div className='info info--scroll'>
            <h2>{props.title || 'Canvas' }</h2>
            <p><b>Credit:</b> {props.credit || 'drybrush, washing, splatering, dabbing'}</p>
            <p><b>Artwork:</b> {props.artwork || 'There is a lot of things but I do not know'}</p>
        </div>
    );
};

export default information;