import styled from 'styled-components'

export const Container = styled.div`
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

export const Title = styled.h2`
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

export const Input = styled.input``

export const Label = styled.label`
  color: #f2f2f2;
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  padding-left: 5px;
`

export const RadioContainer = styled.div`
  margin-bottom: 10px;
`
