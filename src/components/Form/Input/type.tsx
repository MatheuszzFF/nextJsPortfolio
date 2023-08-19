import { Dispatch, SetStateAction } from "react"

export type TInput<T> = {
    type: string,
    name: string,
    placeholder?: string,
    labelText?: string,
    state: T,
    setState: Dispatch<SetStateAction<T>>
}