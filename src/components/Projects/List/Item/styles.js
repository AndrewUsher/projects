import styled from 'styled-components'

export const A = styled.a`
  display: block;
  text-decoration: none;
`
export const Item = styled.li`
  align-items: center;
  background-color: #f2f2f2;
  box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0;
  position: relative;
  width: 100%;
  margin: 0 auto 30px auto;
  transition: transform 300ms, box-shadow 500ms;

  &:hover {
    box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`

export const ProjectTitle = styled.span`
  color: #000;
  display: block;
  font-family: 'PT Sans', sans-serif;
  font-size: 22px;
  position: relative;
  top: -5px;
`

export const ProjectCategory = styled.span`
  color: #555;
  display: block;
  position: relative;
  font-family: sans-serif;
  font-size: 15px;
`

export const ProjectImage = styled.img`
  height: 70px;
  margin-right: 15px;
`
