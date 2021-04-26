import React from 'react'

export const WebContext = React.createContext()

const initialState = {
    isActive: false,
    index: 0,
    showMenu: false
}

function reducer(state, action) {
    switch (action.type) {
        case "toggle_fullscreen": {
            return {
                ...state,
                isActive: action.payload
            }
        }
        case "set_index" : {
            return {
                ...state,
                index: action.payload
            }
        }
        case "toggle_menu" : {
            return {
                ...state,
                showMenu: action.payload
            }
        }
        default:
            return state
    }
}

const ContextProvider = ({ children }) => {
    const store = React.useReducer(reducer, initialState)
    return <WebContext.Provider value={store}>{children}</WebContext.Provider>
}

export default ContextProvider