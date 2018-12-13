import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLogin } from 'reduxRouter/actions/login';
import {Form, Icon, Input, Button, Checkbox,Spin,message } from 'antd';
import image from './images/login.jpg';

const backgorund = {
    background: `url(${image}) no-repeat`,
    width: `100%`,
    height: `100%`,
    position: `absolute`,
    backgroundSize: `100% 100%`,
}
const loginBox = {
    width: '400px',
    height: '300px',
    background: '#fff',
    borderRadius: '10px',
    textAlign: 'center',
    margin: 'auto',
    top: '0',
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '0',
    opacity:'.9'
}
const FormItem = Form.Item;
class Login extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: false,
        }
    }
     handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.setState({
                isLoading: !this.state.isLoading
            })
            this.props.getLogin(values)
          }
        });
    };
    componentDidUpdate=()=>{
        if(JSON.stringify(this.props.state.login) != '{}' ){
            if(this.props.state.login.code === 0){
                this.setState({
                    isLoading: false
                })   
                this.props.history.replace({pathname: '/',state: {isLogin: true}})
                localStorage.setItem('token',this.props.state.login.token);
            }else if(this.props.state.login.code == 1){  
                message.info('登录出错，请重试!')  
                this.props.state.login = {loading:false}
            } 
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div  style={backgorund}>
                <div style={loginBox}>
                    <Form onSubmit={this.handleSubmit}  style={{maxWidth:'300px',marginLeft:'50px',paddingTop:'30px'}} className="login-form">
                    
                    {this.state.isLoading&&JSON.stringify(this.props.state.login) == '{}'  ? <Spin style={{marginTop: '110px',marginLeft: '-10px',position:'absolute'}}/>: ''}
                    <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入你的用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入你的密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox style={{marginRight:'166px'}}>记住我</Checkbox>
                    )}
                    <a className="login-form-forgot" style={{float: 'right'}} href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" style={{width: '100%'}} className="login-form-button">
                        登录
                    </Button>
                     <a href="">现在注册!</a>
                    </FormItem>
                </Form>
                </div>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

const mapStateToProps = (state) => {
    return {
        state: state.login
    }
};
const mapDispacthToProps = (dispatch) => {
    return {
        getLogin: (data)=>{
            dispatch(getLogin(data))
        }
    }
}
export default connect(mapStateToProps,mapDispacthToProps)(WrappedNormalLoginForm);