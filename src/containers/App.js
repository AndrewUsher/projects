import React, { Component } from 'react'
import { projectsList } from '../assets/list'
import Navbar from '../components/Navbar/Navbar'
import Filters from '../components/Filters/Filters'
import Projects from '../components/Projects/Projects'
import Search from '../components/Search/Search'

class App extends Component {
    constructor () {
        super()
        this.state = {
            projects: projectsList,
            searchTerm: '',
            categoryFilter: ''
        }
    }

    filterList (event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    filterByCategory (event) {
        console.log(event)
        this.setState({
            categoryFilter: event.target.value.toLowerCase()
        })
    }
    render () {
        let filteredList = this.state.projects
            .filter(project => {
                return project.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1
            })
            .filter(project => {
                if (this.state.categoryFilter === '' || this.state.categoryFilter === 'all') {
                    return true
                } else {
                    return project.radioCategory === this.state.categoryFilter
                }
            })
        return (
            <div>
                <Navbar />
                <Filters filter={this.filterByCategory.bind(this)} />
                <Projects projects={filteredList}>
                    <Search searchTerm={this.state.searchTerm} changed={this.filterList.bind(this)} />
                </Projects>
            </div>
        )
    }
}

export default App
