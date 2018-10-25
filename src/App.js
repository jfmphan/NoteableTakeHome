import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PhysiciansTable from './components/PhysiciansTable'
import PhysiciansAppointments from './components/PhysiciansAppointments'

class App extends Component {
    render() {
        const pathname = window.location.pathname
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={PhysiciansTable} />
                    <Route path="/appointments/physician:id" component={PhysiciansAppointments} />
                    <Route path="**" component={PhysiciansTable} />
                </Switch>
            </div>
        );
    }
}
export default App;
