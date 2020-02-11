import { Action } from 'redux'

export const ADD_COUNT = 'ADD_COUNT'
export const REDUCE_COUNT = 'REDUCE_COUNT'

export interface CountAction extends Action<string> {
    type: string
    value: number
}

export const addCount = (value = 1): CountAction => {
    return {
        type: ADD_COUNT,
        value,
    }
}

export const reduceCount = (value = 1): CountAction => {
    return {
        type: REDUCE_COUNT,
        value,
    }
}
