import React, { useState, useRef } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import { OutSideClicker } from 'helpers'
import { MegaMenu } from 'components'
import './sub-header.scss'

const SubHeader = () => {

    const [search, setSearch] = useState<string>("")
    const contentRef = useRef<HTMLDivElement>(null)
    const { isMegaMenuOpen, setIsMegaMenuOpen } = OutSideClicker(contentRef)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <div className='te__sub-header'>
            <div className="te__container">
                <div className="te__sub-header--inner">

                    <div className="te__sub-header--inner-group">
                        <div className="te__category-menu">
                            <button onClick={() => setIsMegaMenuOpen(true)} className='te__bar'>
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

                    {
                        isMegaMenuOpen &&
                        <MegaMenu
                            contentRef={contentRef}
                            stateDispatch={setIsMegaMenuOpen}
                        />
                    }


                </div>
            </div>
        </div>
    )
}

export default SubHeader