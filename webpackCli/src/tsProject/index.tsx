import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));
import HeadPage from './head/index'
import Endlessly from "./endlessly";
import Banner from "./banner";
import Document from "./document";
import Download from "./download";
import Update from "./update";
import Relation from "./relation";

const Main = ()=>{
    return <>
        <Endlessly/>
        <Banner/>
    </>
}
const App = () => (
    <Router>
        <HeadPage/>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/document" component={Document}/>
                <Route path="/download" component={Download}/>
                <Route path="/update" component={Update}/>
                <Route path="/relation" component={Relation}/>
            </Switch>
        </Suspense>
    </Router>
);

function HomePage() {
    return <div>

        <App/>
        {/*tsScript*/}
    </div>
}

export default HomePage


