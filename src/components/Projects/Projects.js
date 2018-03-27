import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'
import ProjectItem from './List/Item/Item'

const Projects = props => {
    return (
        <Container>
            {props.children}
            {props.projects.map(project => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </Container>
    )
}

Projects.propTypes = {
    children: PropTypes.element,
    projects: PropTypes.array.isRequired
}

export default Projects
