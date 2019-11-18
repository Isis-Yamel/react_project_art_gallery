import React, { Fragment } from 'react';
import CanvasCard from '../../containers/canvas-card/canvasCard';
import './canvas.css';

const Canvas = props => {

    const canvasCardRender = props => {
        return props.data.map((data) => {
            return <CanvasCard
                artwork={data.medium}
                credit={data.creditLine}
                image={data.primaryImageSmall}
                key={data.objectID}
                identifier={data.objectID}
                title={data.title}
                addFavoriteHandler={props.addFavoriteHandler}
            />
        });
    };

    return (
        <Fragment>
            {canvasCardRender(props)}
        </Fragment>
    );
};

export default Canvas;