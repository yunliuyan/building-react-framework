import  React, { Component } from "react";

import Nav from 'component/Nav/Nav';

import getRouter from 'router/router';
import getLoginRouter from 'router/loginRouter';

import { CHECK_TOKEN } from 'config/api.js';
import { requsetByAxios } from 'config/http.js';
import { Redirect } from 'react-router-dom';

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
                {this.state.isRouter ? <Redirect push to="/login" /> : ''}  
                <div>{getLoginRouter()}</div>
                <div><Nav/>{getRouter()}</div> 
            </div>
        )
    }
}
export default App;