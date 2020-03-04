import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from './hRedux/store'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './index.css'


import BlockLevel from "./BlockLevel";
import InlineBlock from "./InlineBlock";
import VHeader from './Header/VHeader'
import Content from './Content'
import Exam from './Exam/one'
import Home from './Home'


function App() {
    return <div className={'homePage'}>
        <Provider>
            <BrowserRouter>
                <VHeader></VHeader>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/blockLevel" component={BlockLevel}/>
                    <Route exact path="/inlineBlock" component={InlineBlock}/>
                    <Route exact path="/exam" component={Exam}/>
                    <Route exact path="/content" component={Content}/>
                    <Route component={() => <h1>404!</h1>}/>
                </Switch>
            </BrowserRouter>,

        </Provider>

    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'));



