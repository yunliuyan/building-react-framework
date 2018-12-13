import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from 'reduxRouter/store';
import 'mock/mock';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'component/App/App';


/*初始化*/
renderWithHotReload(App);
// 热更新
if(module.hot) {
    module.hot.accept('component/App/App',()=>{
        const NextApp = require('component/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <CookiesProvider>
                <Provider store={store}>
                    <Router>
                        <RootElement/>
                    </Router>
                </Provider>
            </CookiesProvider>
        </AppContainer>,
        document.getElementById('app')
    )
};
