import React from 'react'
import styled from 'styled-components'
import image from '../img/landing-page.png'

const A = styled.a`
  display: block;
  text-decoration: none;
`
const Item = styled.li`
  align-items: center;
  background-color: #f2f2f2;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 0;
  position: relative;
  width: 100%;
  margin: 0 auto 30px auto;
  transition: transform 300ms;

  &:hover {
    transform: scale(1.1);
  }
`

const ProjectTitle = styled.span`
  color: #000;
  display: block;
  font-family: 'PT Sans', sans-serif;
  font-size: 22px;
  position: relative;
  top: -5px;
`

const ProjectCategory = styled.span`
  color: #555;
  display: block;
  position: relative;
  font-family: sans-serif;
  font-size: 15px;
`

const ProjectImage = styled.img`
  height: 70px;
  margin-right: 15px;
`

const ProjectItem = props => (
    <A href={props.project.liveSite} target="_blank">
        <Item>
            <ProjectImage src={image} />
            <div>
                <ProjectTitle>{props.project.title}</ProjectTitle>
                <ProjectCategory>{props.project.category}</ProjectCategory>
            </div>
        </Item>
    </A>
)

export default ProjectItem
