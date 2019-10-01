import React, { Component, Fragment } from 'react';
import CanvasCard from '../../containers/canvas-card/canvasCard';
import './canvas.css';

class Canvas extends Component {

    canvasCardRender = props => {
        console.log(this.props)
        return props.data.map((data, index) => {
            return <CanvasCard
                key={index}
                image={data.primaryImageSmall}
                title={data.title}
                artwork={data.medium}
                credit={data.creditLine}
            />
        });
    };

    render (){
        return (
            <Fragment>
                {this.canvasCardRender(this.props)}
            </Fragment>
        );
    };
};

export default Canvas;