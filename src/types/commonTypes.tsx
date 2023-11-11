import { Dispatch, RefObject, SetStateAction } from "react"

export declare type outClickPropsTypes = {
    contentRef: RefObject<HTMLDivElement>,
    stateDispatch: Dispatch<SetStateAction<boolean>>
}