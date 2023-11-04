import React from 'react'

const PublicRoute = (WrapComponent: any) => (props: any) => {

    return () => {

        if (typeof window !== "undefined" && typeof localStorage !== "undefined") {

            const storageToken = localStorage.getItem("access-token")
            const accessToken = storageToken ? JSON.parse(storageToken) : ""

            if (accessToken) {
                window.location.replace("/dashboard")
                return
            }

            return <WrapComponent {...props} />
        }
    }

}

export default PublicRoute