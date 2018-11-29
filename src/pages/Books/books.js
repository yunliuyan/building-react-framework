import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooksInfo } from 'reduxRouter/actions/userInfo';
import { USER_INFO } from 'config/api.js';
import { requsetByAxios } from 'config/http.js';

class Books extends Component {
    constructor(){
        super();
        this.state = {
            userInfo: {}
        }
        this.getUserInfo = this.getUserInfo.bind(this)
    };
    componentWillMount = () => {
        this.getUserInfo()
    };
    componentDidMount = () => {
        this.props.getBooksInfo()
    };
    getUserInfo = () =>{
        const _this = this;
        requsetByAxios({url:USER_INFO}).then(res=>{
            _this.setState({
                userInfo: res
            })
        })
    };
    render() {
         const data = this.props.state.books.data?this.props.state.books.data:[];
         const { name, intro } = this.state.userInfo
        return (
            <div>
                {
                data.map((item,index)=>{
                          return  <div key={index}>书名: {item.name} 星级: {item.star}</div>
                        })  
                }
                <div>读书人: {name}  介绍： {intro}</div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.books
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        getBooksInfo: ()=>{
            dispatch(getBooksInfo())
        }
    }
}


export default connect(mapStateToProps,mapDispacthToProps)(Books);