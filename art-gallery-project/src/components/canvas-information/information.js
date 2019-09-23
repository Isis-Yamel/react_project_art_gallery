import React from 'react';

const information = props => {
    return (
        <div className='info info--scroll'>
            <h2>{props.title || 'Canvas' }</h2>
            <p>{props.medium || 'drybrush, washing, splatering, dabbing'}</p>
            <p>{props.artwork || 'There is a lot of things but I do not know'}</p>
        </div>
    );
};

export default information;