import React,{ createContext, useState} from "react";

export const Context = createContext()

const ContextProvider = ({children}) =>{

    const [pros, setPros] = useState([
        {
            name: "beautiful",
            points: 10
        },
        {
            name: "kind",
            points: 5
        }
    ])
    const [cons, setCons] = useState([
        {
            name: "jealous",
            points: 8
        },
        {
            name: "agressive",
            points: 10
        }
    ])

    const total = (list) => {
        let value = 0
        
        list.map((elem) => {
           
            value = value + elem.points
            
        });

        return value
    }
    
    const totalPros = total(pros)
    const totalCons = total(cons)
    const result = totalPros - totalCons
    
    return(
        <Context.Provider
        value={{
        pros,
        cons,
        result
        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;


