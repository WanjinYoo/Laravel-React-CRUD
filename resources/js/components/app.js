import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import New from './new';
import Index from './index';
import Edit from './edit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {


    return (

    <BrowserRouter>
    <br/>
          <Switch>
          <Route exact path = '/' component={Index}>
          </Route>
          <Route path='/create' component={New} />
          <Route path='/edit/:id' component={Edit} />
          </Switch>
    </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
