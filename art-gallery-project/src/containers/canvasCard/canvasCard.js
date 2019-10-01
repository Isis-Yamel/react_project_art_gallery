import React, { Component } from 'react';
import Icons from '../../components/actionbar/actionbar';
import Image from '../../components/canvas-information/image';
import Information from '../../components/canvas-information/information';

class CanvasCard extends Component {

    render() {
        return (
            <article className='wrapper-card--style'>
                <Image
                    image={this.props.image}
                    alternative={this.props.artwork}/>
                <Icons/>
                <Information
                    title={this.props.title}
                    artwork={this.props.artwork}
                    credit={this.props.credit}/>
            </article>
        );
    }
}

export default CanvasCard;