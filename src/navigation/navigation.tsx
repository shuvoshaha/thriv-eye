import React, { Suspense, useEffect } from 'react'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, SingleProduct } from 'view'


export const Navigation: React.FC = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    }, [useLocation()])

    
    return (

        <>
            <Routes>
                <Route
                    index
                    element={(
                        <Suspense fallback={<>...</>}>
                            <Home />
                        </Suspense>
                    )}
                />

                <Route
                    path='product/:id'
                    element={(
                        <Suspense fallback={<>...</>}>
                            <SingleProduct />
                        </Suspense>
                    )}
                />


            </Routes>

        </>

    )
}



