import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.scss'
import Desktop from './main'

const App = () => {
    return (
        <Router>
            <div>
                <Route component={Desktop} exact path="/" />
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
