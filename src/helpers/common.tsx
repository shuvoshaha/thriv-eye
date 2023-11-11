import React, { useEffect, useRef, useState } from 'react'

export const OutSideClicker = (
    contentRef: any
) => {

    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false)

    console.log("isMegaMenuOpen", isMegaMenuOpen)
    console.log("contentRef", contentRef)

    const modalHandler = (e: any) => {

        if (contentRef.current && !contentRef.current.contains(e.target)) {
           return setIsMegaMenuOpen(false)
        }
        return
    }
    useEffect(() => {
        document.addEventListener("click", modalHandler)
        return () => document.removeEventListener('click', modalHandler)
    },[contentRef])

    return {  isMegaMenuOpen, setIsMegaMenuOpen }
}