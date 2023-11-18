import React, { lazy } from 'react';
const Home = lazy(() => delayForDemo(import('./home/home')));
const SingleProduct = lazy(() => delayForDemo(import('./product/single-product/single-product')));

export {
    Home,
    SingleProduct
}


const delayForDemo = async (promise: Promise<any>) => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
    }).then(() => promise)
}