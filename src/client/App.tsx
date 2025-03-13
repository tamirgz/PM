import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Employees from './pages/Employees';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/projects" component={Projects} />
                <Route path="/employees" component={Employees} />
            </Switch>
        </Router>
    );
};

export default App;