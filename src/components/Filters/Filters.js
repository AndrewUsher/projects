import React from 'react'
import PropTypes from 'prop-types'
import { Container, Title, RadioContainer, Input, Label } from './styles'
import { categories } from '../../assets/list'

const Filters = props => {
    return (
        <Container>
            <Title>Filter</Title>
            <fieldset style={{ border: 'none' }}>
                {categories.map((category, index) => (
                    <RadioContainer key={index}>
                        <Input
                            value={category}
                            onChange={props.filter}
                            type="radio"
                            name="category-filter"
                        />{' '}
                        <Label htmlFor={category}>{category}</Label>
                    </RadioContainer>
                ))}
            </fieldset>
        </Container>
    )
}

Filters.propTypes = {
    filter: PropTypes.func.isRequired
}

export default Filters
