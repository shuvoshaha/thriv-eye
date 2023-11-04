import React, { lazy } from 'react';
const Home = lazy(() => delayForDemo(import('./home/home')));
const Product = lazy(() => delayForDemo(import('./product/product')));

export {
    Home,
    Product
}


const delayForDemo = async (promise: Promise<any>) => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
    }).then(() => promise)
}