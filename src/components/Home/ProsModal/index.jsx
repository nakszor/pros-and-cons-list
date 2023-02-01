import { ProsModalStyle } from "./style"
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ProsModal = (closeModal) => {
    
    console.log(closeModal)
    return(                
            <ProsModalStyle >
                <div className="modal-background">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Add new pro</h3>
                            <button onClick={closeModal}>close</button>
                        </div>
                        <form action="submit">
                            <input type="text" name="name" />
                            <label htmlFor="name">name</label>
                            <input type="text" name="points" />
                            <label htmlFor="points">points</label>
                            <button type="submit">Add to pros</button>
                        </form>
                    </div>
                </div>
            </ProsModalStyle>
    )
}
export default ProsModal