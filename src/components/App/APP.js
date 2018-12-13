import  React, { Component } from "react";
import Nav from 'component/Nav/Nav';
import Hello from 'component/Hello/Hello';
import Login from 'pages/Login/login';
import getRouter from 'router/router';
import { CHECK_TOKEN } from 'config/api.js';
import { requsetByAxios } from 'config/http.js';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'antd';


class App extends Component {
    constructor(){
        super();
        this.state = {
            isRouter:false,
        }
        this.checkToken = this.checkToken.bind(this);
    };
    componentWillMount = () => {
        try{
            this.checkToken(localStorage.getItem('token')).then(res=>{
                if(!res.code){
                    this.setState({
                        isRouter:true
                    })
                }else{
                    localStorage.setItem('token',res.token);
                }
            })
        }catch(err){
            this.setState({
                isRouter:true
            })
        }
    };
    checkToken=(token)=>{
        return requsetByAxios({url:CHECK_TOKEN,method: 'post',data: {token}}).then(res=>{
           return JSON.parse(res)
        })
    };
    render() {
        return (
            <div> 
                {this.state.isRouter ? <Login /> : <div style={{position:'absolute',height:'100%',width:'100%'}}>
                    <Row style={{height:'100%'}}>
                        <Col style={{ height: '100%'}} span={3}><Nav/></Col>
                        <Col span={21}><Hello />{getRouter()}</Col>
                    </Row>
                </div> }  
                
            </div>
        )
    }
}
export default App;