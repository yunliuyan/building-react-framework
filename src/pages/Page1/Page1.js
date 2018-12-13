import React, {Component} from 'react';
import images from './images/hello.png';

export default class Page1 extends Component {
    render() {
        return (
            <div>
                this is Page1
                <img src={images}/>
            </div>
        )
    }
}