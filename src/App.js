import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import Phome from './pages/Phome'
import Ptable from './pages/Ptable'
import P404 from './pages/P404'

const App = () =>(
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Phome}/>
                <Route exact path="/info" component={Ptable} />
                <Route component={P404}/>    
            </Switch>
        </Router>
    </div>
)  

export default App