import React, { createContext, useState, useContext } from 'react'

const StoreContext = createContext()

export default function StoreProvider({ children }) {
    const [store, setStore] = useState([])

    return (
        <StoreContext.Provider value={{ store, setStore }}>
            {children}
        </StoreContext.Provider>
    )
}

export function useStore() {
    const { store, setStore } = useContext(StoreContext)
    return { store, setStore }
}
