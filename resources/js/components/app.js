import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import New from './new';
import Index from './index';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {


    return (

    <BrowserRouter>
    <br/>
          <Switch>
          <Route exact path = '/' component={Index}>
          </Route>
          <Route path='/create' component={New} />
          </Switch>
    </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
