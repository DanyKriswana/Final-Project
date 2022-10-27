import React from 'react'

function SearchBox(props) {
  return (
    <div className='search-box'>
        <input
            className='search-input'
            value={props.value}
            onChange={(event) => props.setSearch(event.target.value)} 
            placeholder='Search...'>
        </input>
    </div>
  )
}

export default SearchBox