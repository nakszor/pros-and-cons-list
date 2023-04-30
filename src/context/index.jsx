import React,{ createContext, useState} from "react";

export const Context = createContext()

const ContextProvider = ({children}) =>{

    const [pros, setPros] = useState([
       
    ])
    const [cons, setCons] = useState([
        {
            name: "lunatic",
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
    
    function handleProSubmit(proData){
        setPros((previus) => [...previus, proData])
    }
    const [proData, setProData] = useState({})
  
    function proSubmit(event){
        event.preventDefault()
        handleProSubmit(proData)
        closeModal()
    }
    function generateId(array) {
        return array.length ? Math.max(...array.map(item => item.id)) + 1 : 1
    }
    const [open,setOpen] = useState(false)
    function openModal(){
       setOpen(true)
    }
    function closeModal(){
        setOpen(false)
    }
    return(
        <Context.Provider
        value={{
        open,
        setOpen,
        openModal,
        closeModal,
        pros,
        setPros,
        proSubmit,
        generateId,
        proData,
        setProData,
        cons,
        result
        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;


