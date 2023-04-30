import React, { useContext } from "react"
import  { Context }  from "../../../context"
import { ProsModalStyle } from "./style"


const ProsModal = () => {
    
    const {pros, proSubmit, generateId, proData, setProData, closeModal} = useContext(Context)

    return(                
            <ProsModalStyle >
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Add new pro</h3>
                        <button onClick={closeModal}>X</button>
                    </div>
                    <form action="submit" onSubmit={(event)=>{proSubmit(event)}}>
                        <label  htmlFor="name">Pro</label>
                        <input type="text" name="name" 
                         onChange={(event)=>setProData({...proData, id: generateId(pros), name: event.target.value, key: "pro"})}/>
                       
                        <label  htmlFor="points">Points</label>
                        <select type="text" name="points"  
                         onChange={(event)=>setProData({...proData, points: Number(event.target.value)})}> 
                            <option>-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <button className="add-pro-button" >Add to pros</button>
                   </form>
                </div>
            </ProsModalStyle>)   
}
export default ProsModal