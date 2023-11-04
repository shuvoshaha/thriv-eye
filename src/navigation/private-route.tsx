import React from 'react'

const PrivateRoute = (WrapComponent: any) => {

    return (props: any) => {

        if (typeof window !== "undefined" && typeof localStorage !== "undefined") {

            const storageToken = localStorage.getItem("access-token")
            const accessToken = storageToken ? JSON.parse(storageToken) : ""

            if (!accessToken) {
                window.location.replace("/login")
                return
            }

            return <WrapComponent {...props} />
        }
    }

}

export default PrivateRoute