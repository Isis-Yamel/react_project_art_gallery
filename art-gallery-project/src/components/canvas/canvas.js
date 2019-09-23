import React, { PureComponent } from 'react';
import CanvasCard from '../../containers/canvasCard/canvasCard';
import './canvas.css';

class Canvas extends PureComponent {

    canvasCardRender = props => {
        return props.data.map((data) => {
            return <CanvasCard
                key={data.objectId}
                image={data.primaryImageSmall}
                title={data.title}
                artwork={data.medium}
                credit={data.creditLine}
            />
        });
    };

    render (){
        return (
            <section className='wrapper'>
                <article className='wrapper-card--style'>
                    {this.canvasCardRender(this.props)}
                </article>
            </section>
        );
    };
};

export default Canvas;