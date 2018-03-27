import React from 'react'
import PropTypes from 'prop-types'
import { A, Item, ProjectImage, ProjectTitle, ProjectCategory } from './styles'
import landingPage from './landing-page.png'

const ProjectItem = props => (
    <A href={props.project.liveSite} target="_blank">
        <Item>
            <ProjectImage src={landingPage || null} />
            <div>
                <ProjectTitle>{props.project.title}</ProjectTitle>
                <ProjectCategory>{props.project.category}</ProjectCategory>
            </div>
        </Item>
    </A>
)

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem
