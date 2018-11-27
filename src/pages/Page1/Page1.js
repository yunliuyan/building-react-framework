import React, {Component} from 'react';
import style from './page1.css';
import images from './images/hello.png';

export default class Page1 extends Component {
    render() {
        return (
            <div className={style.box}>
                this is Page1
                <img src={images}/>
            </div>
        )
    }
}