import React, {Component} from 'react';
import { Spin } from 'antd';
export default class Loading extends Component {
    render() {
        return (
            <div> <Spin size="large" tip="Loading..." style={{position:'absolute',width:'100%',height:'100%',margin:'400px auto'}} /></div>
        )
    }
}