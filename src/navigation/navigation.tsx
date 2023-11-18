import React, { Suspense } from 'react'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'
import { Routes, Route } from 'react-router-dom'
import { Home, SingleProduct } from 'view'


export const Navigation: React.FC = () => {
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



