import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pie from './components/page2/Pie';
import BasicTable from './components/page1/BasicTable';

function App() {
  return (
        <Router>
                <Switch>
                  <Route exact path='/dawaniris/' component={BasicTable} />
                  <Route exact path='/dawaniris/page2' component={Pie} />
                </Switch>
        </Router>
  );
}

export default App;
