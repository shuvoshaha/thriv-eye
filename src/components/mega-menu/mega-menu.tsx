import React from 'react'
import { Link } from 'react-router-dom'
import { outClickPropsTypes } from 'types'
import './mega-menu.scss'

const MegaMenu: React.FC<outClickPropsTypes> = (props) => {

    const { contentRef, stateDispatch } = props

    return (
        <div className='te__mega_menu' ref={contentRef}>
            <div className="te__mega_menu__body">
                {
                    [1, 2, 3, 4, 5].map((item: any, idx: number) => {
                        return <ul key={idx} className='te__mega_menu__items'>

                            <li className="te__mega_menu__item">
                                <span className='te__mega_menu__item__title'>Men's</span>
                            </li>

                            {
                                [1, 2, 3, 4, 5, 6, 7].map((item: any, idx: number) => {
                                    return <li key={idx} className="te__mega_menu__item">
                                        <Link to={"/"} onClick={() => stateDispatch(false)} className='te__mega_menu__item__link'>Jeans</Link>
                                    </li>
                                })
                            }

                        </ul>
                    })

                }

            </div>
        </div>
    )
}

export default MegaMenu