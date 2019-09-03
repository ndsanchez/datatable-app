import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import * as bs from 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap'
import Phome from './pages/Phome'
import Ptable from './pages/Ptable'

const App = () =>(
    <div>
        <Router>
            <Route exact path="/" component={Phome}/>
            <Route exact path="/info" component={Ptable} />
        </Router>
    </div>
)  

export default App