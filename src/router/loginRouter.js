import React from 'react';
import { BrowserRouter as Router,Route, Switch, Link } from 'react-router-dom';

import Bundle from 'router/Bundle.js';
import Loading from 'component/Loading/Loading';

import Login from 'bundle-loader?lazy&name=login!pages/Login/login';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';


//按需加载
const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading />
        }
    </Bundle>
);

const getLoginRouter = () => (
    <div>
        <Switch>
            <Route path="/login" component={createComponent(Login)} />
        </Switch>
    </div>
);
export default getLoginRouter;