import React, { Suspense } from 'react'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'
import { Routes, Route } from 'react-router-dom'
import { Home } from 'view'


export const Navigation: React.FC = () => {
    return (

        <>
            <Routes>
                <PublicRoute
                    index
                    element={(
                        <Suspense fallback={<>...</>}>
                            <Home />
                        </Suspense>
                    )}
                />


            </Routes>

        </>

    )
}



