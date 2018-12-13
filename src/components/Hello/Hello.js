import React, {Component} from 'react';
import { Row, Col,Icon } from 'antd';
import image from './image/avatar.jpg';
import {Link} from 'react-router-dom';
require('./Hello.css')

export default class Hello extends Component {
    backLogin=()=>{
        localStorage.removeItem('token');
        window.location.reload()
    }
    render() {
        return (
            <div className='topNav'>
                <Row>
                    <Col  span={18}></Col>
                    <Col span={2}><div className='flexBox'><img className='avatar' src={image}/><span style={{marginLeft:'10px',color:'#666'}}>云流烟</span></div></Col>
                    <Col span={1}><Icon theme='twoTone' style={{fontSize: '22px'}} type="mail" /></Col>
                    <Col span={1}><Icon theme='twoTone' style={{fontSize: '22px'}} type="bell" /></Col>
                    <Col span={2} className='backLogin' onClick={this.backLogin}>退出系统</Col>
                </Row>
            </div>
        )
    }
}
