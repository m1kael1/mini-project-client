import React from 'react'
import '../../styles/Search.css'

const Search = () => {
  return (
    <div>
      <div className='main-search'>
        <div className='search-box'>
          <input
            type="text"
            placeholder="Mencari Barang..." />
          <div className='green-search'>
            <span class="material-symbols-outlined">
              search
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search