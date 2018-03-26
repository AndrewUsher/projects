import React from 'react'
import { A, Item, ProjectImage, ProjectTitle, ProjectCategory } from './styles'
const landingPage = require('./landing-page.png')

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

export default ProjectItem
