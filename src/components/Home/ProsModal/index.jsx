import React, { useContext } from "react"
import  {Context}  from "../../../context"
import { ProsModalStyle } from "./style"
import * as yup from "yup"
import { useForm } from "react-hook-form";
import ErrorMessage from "../Error";


const ProsModal = ({closeModal}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    console.log(watch("example"))
    
    const {pros, setPros} = useContext(Context)

    return(                
            <ProsModalStyle >
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Add new pro</h3>
                        <button onClick={closeModal}>X</button>
                    </div>
                    <form action="submit" onSubmit={handleSubmit}>
                        <label  htmlFor="name">Pro</label>
                        <input type="text" name="name" {...register("name", { required: true })}/>
                        {errors.name && <ErrorMessage message={"Please insert a name!"}/> }
                        <label  htmlFor="points">Points</label>
                        <select type="text" name="points" {...register("points", { required: true })}> 
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
                         {errors.points && <ErrorMessage message={"Please select a number!"}/> }
                        <button className="add-pro-button" onClick={handleSubmit(pros,setPros)}>Add to pros</button>
                   </form>
                </div>
            </ProsModalStyle>
            )   
}
export default ProsModal