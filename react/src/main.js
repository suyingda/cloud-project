import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'e-react-redux';
import {BrowserRouter, Switch, Link, Route, Redirect} from 'react-router-dom';
import {RouteWithSubRoutes, routes} from "./router/router";
import store from './module';
import Home from './../src/page/Home/Index'
import VideoChat from './../src/page/VideoChat/index'
import BigPage from './../src/page/bigPage/bigPage'
import axios from 'axios';
axios({
    method: 'post',
    url: 'http://120.76.189.28:1241/queryOnlinePosInfos'
});
import('./main.scss')
const App = (val) => {
    return function () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/home'} component={Home}></Route>
                        <Route path={'/videoChat'} component={VideoChat}></Route>
                        <Route path={'/'} component={VideoChat}></Route>
                        {/*<Route path={'*'} component={VideoChat}></Route>*/}
                        {/*<Redirect to="/videoChat"/>*/}
                        {/*{RouteWithSubRoutes(routes)}*/}
                        {/*{val.routes.map((route, i) => <val.RouteWithSubRoutes key={i} excat={route.excat}   {...route} />)}*/}
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }

}

const AppComponent = (CreateApp) => {
    ReactDOM.render(
        <CreateApp/>, document.getElementById('root')
    );
}
AppComponent(App({RouteWithSubRoutes, routes}));

