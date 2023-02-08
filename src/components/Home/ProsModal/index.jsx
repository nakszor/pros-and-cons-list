
import { useContext } from "react"
import  {Context}  from "../../../context"
import { ProsModalStyle } from "./style"

const ProsModal = ({closeModal}) => {
    
    const {pros, setPros} = useContext(Context)

    const handleSubmit = (pros, setPros) => {
       console.log(setPros)
    }
    return(                
            <ProsModalStyle >
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Add new pro</h3>
                        <button onClick={closeModal}>X</button>
                    </div>
                    <form action="submit" onSubmit={(e) => e.preventDefault()}>
                        <label  htmlFor="name">Pro</label>
                        <input type="text" name="name"   onChange={(event) =>
                        setPros({ ...pros, name: event.target.value })
                      } required />
                        <label  htmlFor="points">Points</label>
                        <select type="text" name="points"  onChange={(event) =>
                        setPros({ ...pros, points: event.target.value })
                      } required> 
                            <option value="0">0</option>
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
                        <button className="add-pro-button" onClick={handleSubmit(pros,setPros)}>Add to pros</button>
                   </form>
                </div>
            </ProsModalStyle>
            )   
}
export default ProsModal