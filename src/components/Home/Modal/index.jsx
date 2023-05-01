import React, { useContext } from "react"
import  { Context }  from "../../../context"
import { ModalStyle } from "./style"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Modal = ({name, uppercase, plural, submit, setData, data, state, close, color}) => {
    const schema = yup.object().shape({
        name: yup.string().required("name is required!"),
        points: yup.string().required("points is required!")
    })
    const {  generateId } = useContext(Context)
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })
    return(                
            <ModalStyle name={name} >
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Add new {name}</h3>
                        <button onClick={close}>X</button>
                    </div>
                    <form action="submit" onSubmit={handleSubmit(submit)}>
                        <label  htmlFor="name">{uppercase}</label>
                        <input type="text" name="name" {...register("name")}
                         onChange={(event)=>setData({...data, id: generateId(state), name: event.target.value, key: {name}})}/>
                        <p className="error-message">{errors.name?.message}</p>
                        <label  htmlFor="points">Points</label>
                        <select type="text" name="points" {...register("points")}
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
                        <p className="error-message">{errors.points?.message}</p>
                        <button className="add-data-button" >Add to {plural}</button>
                   </form>
                </div>
            </ModalStyle>)   
}
export default Modal