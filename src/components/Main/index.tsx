import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Ads from '../Ads';
import Details from '../Details';

const Main: React.FunctionComponent<{}> = () => {

    return (
        <Router>
            <Switch>
                <Route exact path='/' key='home' component={Home} />
                <Route exact path='/ads' key='ads' component={Ads} />
                <Route exact path='/details' key='details' component={Details} />
            </Switch>
        </Router>
    );
};

export default Main;
