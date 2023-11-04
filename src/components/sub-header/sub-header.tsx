import React, { useState } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import './sub-header.scss'

const SubHeader = () => {

    const [search, setSearch] = useState<string>("")

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <div className='te__sub-header'>
            <div className="te__container">
                <div className="te__sub-header--inner">

                    <div className="te__category-menu">
                        <button className='te__bar'>
                            <FaBars className='te__bar_icon' />
                            <span className='te__bar_title'>Shop</span>
                        </button>
                    </div>

                    <div className="te__search">
                        <div className="te__search_group">
                            <input onChange={onChangeHandler} type="text" className='search__input' placeholder='Search...' value={search} />
                            <FaSearch className='search__icon' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SubHeader