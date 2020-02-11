import { combineReducers } from 'redux'
import { CountAction, ADD_COUNT, REDUCE_COUNT } from './actions'

export const count = (state = 0, action: CountAction) => {
    const { type, value } = action
    switch (type) {
        case ADD_COUNT:
            return state + value
        case REDUCE_COUNT:
            return state - value
        default:
            return state
    }
}

export const countApp = combineReducers({
    count,
})
