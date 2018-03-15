import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

class App extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <Projects />
            </div>
        )
    }
}

export default App
