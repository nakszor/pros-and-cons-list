import React,{ createContext, useState} from "react";

export const Context = createContext()

const ContextProvider = ({children}) =>{

    const [pros, setPros] = useState([])
    const [cons, setCons] = useState([])
  
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
    
    function handleSubmit(data, setState){
        setState((previus) => [...previus, data])
    }
    const [proData, setProData] = useState({})
  
    function proSubmit(){
        handleSubmit(proData, setPros)
        closeProsModal()
    }

    const [prosModal,setProsModal] = useState(false)

    function openProsModal(){
       setProsModal(true)
    }
    function closeProsModal(){
        setProsModal(false)
    }
    const [conData, setConData] = useState({})
  
    function conSubmit(){
        handleSubmit(conData, setCons)
        closeConsModal()
    }
    const [consModal,setConsModal] = useState(false)
    function openConsModal(){
       setConsModal(true)
    }
    function closeConsModal(){
        setConsModal(false)
    }
    const [editProsModal,setEditProsModal] = useState(false)

    function openEditProsModal(){
       setEditProsModal(true)
    }
    function closeEditProsModal(){
        setEditProsModal(false)
    }
    function generateId(array) {
        return array.length ? Math.max(...array.map(item => item.id)) + 1 : 1
    }
    return(
        <Context.Provider
        value={{
        prosModal,
        openProsModal,
        closeProsModal,
        consModal,
        openConsModal,
        closeConsModal,
        pros,
        setPros,
        proSubmit,
        conSubmit,
        conData,
        setConData,
        generateId,
        proData,
        setProData,
        cons,
        result,
        openEditProsModal,
        closeEditProsModal,
        editProsModal
        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;


