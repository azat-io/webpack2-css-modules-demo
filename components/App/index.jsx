import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import RedTitle from '../RedTitle/index.jsx'
import YellowTitle from '../YellowTitle/index.jsx'
import GreenTitle from '../GreenTitle/index.jsx'

class App extends Component {
    render () {
        return (
            <div>
                <RedTitle />
                <YellowTitle />
                <GreenTitle />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
