import React, { useContext } from "react"
import  { Context }  from "../../../context"
import { ModalStyle } from "./style"

const Modal = ({name, uppercase, plural, submit, setData, data, state, close, color}) => {

    const {  generateId } = useContext(Context)

    return(                
            <ModalStyle name={name} >
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Add new {name}</h3>
                        <button onClick={close}>X</button>
                    </div>
                    <form action="submit" onSubmit={(event)=>{submit(event)}}>
                        <label  htmlFor="name">{uppercase}</label>
                        <input type="text" name="name" 
                         onChange={(event)=>setData({...data, id: generateId(state), name: event.target.value, key: {name}})}/>
                       
                        <label  htmlFor="points">Points</label>
                        <select type="text" name="points"  
                         onChange={(event)=>setData({...data, points: Number(event.target.value)})}> 
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
                        <button className="add-data-button" >Add to {plural}</button>
                   </form>
                </div>
            </ModalStyle>)   
}
export default Modal