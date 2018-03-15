import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background-color: #00204a;
  padding: 15px;
  position: relative;
  z-index: 20;
`

const Title = styled.h1`
  color: #f2f2f2;
  font-family: 'PT Sans', sans-serif;
  font-size: 36px;
  font-weight: normal;
  text-align: center;
`

const Navbar = () => (
    <Header>
        <Title>Projects</Title>
    </Header>
)

export default Navbar
