import React, { Component } from 'react'
import styled from 'styled-components'
import projectList from './projectList'
import ProjectItem from './ProjectItem'

const categories = [
    'All',
    'API',
    'Boilerplate',
    'CSS',
    'Experiment',
    'Game',
    'Landing Page',
    'Redesign'
]
const Container = styled.div``

const ProjectsContainer = styled.div`
  margin: 0 auto 20px auto;
  padding: 20px 30px 0 400px;
  width: 90%;

  @media (max-width: 900px) {
    padding: 10px;
  }
`

const Input = styled.input`
  display: inline-block;
  font-size: 20px;
  min-width: 300px;
  border: 0;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
  padding: 0 0 2px 2px;
  transition: border-bottom 300ms;

  &:focus {
    border-bottom: 3px solid #00bbf0;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
    opacity: 0.8;
    transition: opacity 400ms, color 300ms;
  }

  &:focus::placeholder {
    color: #888;
    opacity: 1;
  }
`

const FilterContainer = styled.div`
  background-color: #00204a;
  min-width: 400px;
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 3;
  padding: 90px 30px;

  @media (max-width: 900px) {
    background-color: #001633;
    padding: 20px;
    position: static;
    height: auto;
    margin-bottom: 10px;
  }
`

const FilterTitle = styled.h2`
  color: #f2f2f2;
  font-family: 'PT Sans', sans-serif;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 900px) {
    text-align: left;
    padding-left: 15px;
  }
`

const CategoryInput = styled.input``

const CategoryLabel = styled.label`
  color: #f2f2f2;
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  padding-left: 5px;
`

const RadioContainer = styled.div`
  margin-bottom: 10px;
`

class Projects extends Component {
    constructor () {
        super()
        this.state = {
            projects: projectList,
            searchTerm: '',
            categoryFilter: ''
        }
    }
    componentDidMount () {}

    filterList (event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    filterByCategory (event) {
        this.setState({
            categoryFilter: event.target.value.toLowerCase()
        })
    }
    render () {
        let filteredList = this.state.projects
            .filter(project => {
                return (
                    project.title
                        .toLowerCase()
                        .indexOf(this.state.searchTerm.toLowerCase()) !== -1
                )
            })
            .filter(project => {
                if (
                    this.state.categoryFilter === '' ||
          this.state.categoryFilter === 'all'
                ) {
                    return true
                } else {
                    return project.radioCategory === this.state.categoryFilter
                }
            })
        return (
            <Container>
                <FilterContainer>
                    <FilterTitle>Filter</FilterTitle>
                    <fieldset style={{ border: 'none' }}>
                        {categories.map((category, index) => (
                            <RadioContainer key={index}>
                                <CategoryInput
                                    value={category}
                                    onChange={this.filterByCategory.bind(this)}
                                    type="radio"
                                    name="category-filter"
                                />
                                <CategoryLabel htmlFor={category}>{category}</CategoryLabel>
                            </RadioContainer>
                        ))}
                    </fieldset>
                </FilterContainer>
                <ProjectsContainer>
                    <Input
                        type="text"
                        placeholder="Search for projects"
                        value={this.state.searchTerm}
                        onChange={this.filterList.bind(this)}
                    />

                    {filteredList.map(project => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                </ProjectsContainer>
            </Container>
        )
    }
}

export default Projects
