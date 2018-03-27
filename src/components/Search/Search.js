import React from 'react'
import PropTypes from 'prop-types'
import { Input } from './styles'

const Search = props => {
    return (
        <Input
            type="text"
            placeholder="Search for projects"
            value={props.searchTerm}
            onChange={props.changed}
        />
    )
}

Search.propTypes = {
    searchTerm: PropTypes.string,
    changed: PropTypes.func.isRequired
}

export default Search
