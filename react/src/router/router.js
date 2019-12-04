import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Base64} from 'js-base64';


// import App from '../page/App'

// import A from '../page/A'
// import _Head from '../page/Head'
// import _Head1 from '../page/Header/Head1';
// import _Head2 from '../page/Header/Header2/Head2';
// import _Head3 from '../page/Header/Header2/Header3/Head3';
// import _Head4 from '../page/Header/Header2/Header3/Head4';

import withLoadable from './Loadable'

const HomeIndex = withLoadable(() => import('../page/Home/Index'));
const VideoChat = withLoadable(() => import('../page/VideoChat'));
const BigPage = withLoadable(() => import('../page/bigPage/bigPage'));
// const Head = withLoadable(() => import('../page/Head'));


const Not = () => <h2>Not Page</h2>;
export const routes = [
    {
        path: "/",
        // exact: true,
        component: BigPage,
    },
    // {
    //     path: '/home',
    //     component: HomeIndex,
    // },
    // {
    //     path: '/videoChat',
    //     component: VideoChat,
    // },
].concat(
    [{
        path: '*',
        component: Not,
    }])
const routerGo = (t, path, value, _target = undefined) => {
    let childrenPath = "";
    let params = undefined;
    if (typeof value === "string") {
        params = '/' + value;
    } else {
        params = value ? "/" + Base64.encode(JSON.stringify(value)) : Void;
    }

    for (let i in t.props.routes) {
        if (t.props.routes[i].path.split('/:')[0] === path) {
            console.log('children component');
            childrenPath = t.props.match.url;
        }
    }
    if (_target) {
        return window.open(childrenPath + path + params, _target)
    } else {
        return t.props.history.push(childrenPath + path + params)
    }
}
const routerGet = (value) => {
    return JSON.parse(Base64.decode(value));
}

export const RouteWithSubRoutes = route => {
    console.log(route, 'route')
    return route && route.map((items, i) => {
        return <Route key={i} path={items.path} component={items.component}></Route>
    })

    // return <Route
    //     path={route.matchpath !== undefined ? route.matchpath + route.path : route.path}
    //     exact={route.exact}
    //     render={props => {
    //         return <route.component {...props}
    //                                 routerGo={routerGo}
    //                                 routerGet={routerGet}
    //                                 routes={route.children}/>
    //     }
    //     }
    // />
};
 