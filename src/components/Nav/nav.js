import React,{ Component } from "react";
import {Link} from 'react-router-dom';
import { Menu, Icon, Switch } from 'antd';
require('./nav.css')
const SubMenu = Menu.SubMenu;

export default class Nav extends Component {
    constructor(){
        super();
        this.state = {
            theme: 'dark',
            background:'#001529',
            clounmArr: [
                {
                  titleName: '页面管理',
                  icon: 'bars',
                  children: [
                      {
                          titleName: '页面1',
                          icon: 'file',
                          path: '/page1',
                      },
                      {
                          titleName: '计数器',
                          icon: 'calculator',
                          path: '/counter',
                      },
                      {
                          titleName: '好书推荐',
                          icon: 'book',
                          path: '/books',
                      },
                  ]
                },
                {
                    titleName: '用户管理',
                    icon: 'team',
                    children: [
                        {
                            titleName: '用户信息',
                            icon: 'user',
                            path: '/userInfo',
                        },
                    ]
                  }
            ]
          }
        this.changeTheme = this.changeTheme.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };
    changeTheme = (value) => {
        this.setState({
          theme: value ? 'dark' : 'light',
          background: value ? '#001529' : '#fff',
        });

      }
    
      handleClick = (e) => {
        this.setState({
          current: e.key,
        });
      }
    render() {
        return (
            <div style={{ height: '100%'}}>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: '100%',height:'100%' }}
          mode="inline"
        >
        <Menu.Item className='switchs' style={{background: this.state.background,height: '46px'}}>
            <Switch
            style={{margin: '10px 0 0'}}
            checked={this.state.theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="夜间"
            unCheckedChildren="白天"
            />
        </Menu.Item>   
         <Menu.Item key='home'><Link to='/'><Icon type='home' />首页</Link></Menu.Item>
        {
            this.state.clounmArr.map((item,index)=>{
                return <SubMenu key={index} title={<span><Icon type={item.icon} /><span>{item.titleName}</span></span>}>
                    {
                        item.children?item.children.map((value,key)=>{
                            return  <Menu.Item key={value.path+key}><Link to={value.path}><Icon type={value.icon} />{value.titleName}</Link></Menu.Item>
                        }): ''
                    }
              </SubMenu>
            })
        }
        </Menu>
        </div>
        )
    }
}