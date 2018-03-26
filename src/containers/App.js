import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/Projects/Projects'

class App extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <Projects projects={this.state.projects} />
            </div>
        )
    }
}

export default App
