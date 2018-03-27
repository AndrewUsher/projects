import styled from 'styled-components'

export const Input = styled.input`
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
