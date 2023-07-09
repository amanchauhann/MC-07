import { createContext, useContext, useEffect, useReducer } from "react";
import { data } from "../Data/Data";

const DataContext = createContext()

const data_reducer = (state, { type, payload }) => {
    switch (type) {
        case ("INITIAL"):
            return {
                ...state,
                continents: payload
            }
        case ("SELECT_CONTINENT"):
            return {
                ...state,
                selected_continent: payload
            }
        case ("SELECT_COUNTRY"):
            return {
                ...state,
                selected_country: payload
            }
    }
}

export const DataProvider = ({ children }) => {
    const initial_Data = {
        continents: [],
        selected_continent: "",
        selected_country: ""
    }

    const [all_continents, continents_dispatch] = useReducer(data_reducer, initial_Data)

    useEffect(() => {
        continents_dispatch({ type: "INITIAL", payload: data.continents })
    }, [])
    return (
        <DataContext.Provider value={{ all_continents, continents_dispatch }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)