import { useContext } from "react"
import { Context } from "../../../context"
import Modal from "../Modal"
import { HomeMainStyle } from "./style"
import EditDeleteModal from "./EditModal"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

const HomeMain = () =>{
    const {cons, pros, result, prosModal,
        openProsModal, closeProsModal, proSubmit,
        setProData, proData, openConsModal, consModal, 
        closeConsModal, conData, conSubmit, setConData, 
        editProsModal, openEditProsModal, closeEditProsModal} = useContext(Context)
    
    return(
        <HomeMainStyle value={result}>
            {
                prosModal?(
                    <Modal name={"pro"} uppercase={"Pro"} plural={"pros"} 
                    submit={proSubmit} setData={setProData} data={proData}
                     state={pros} close={closeProsModal} />
            ): null}
            {
                consModal?(
                    <Modal name={"con"} uppercase={"Con"} plural={"cons"} 
                    submit={conSubmit} setData={setConData} data={conData}
                     state={cons} close={closeConsModal}/>
                ):null
            }
            {
                editProsModal?(<EditDeleteModal/>):null
            }
            <div className="pros">
                <div className="title-button">
                    <p className="margin">Pros</p>
                    <button onClick={openProsModal} className="add-pro">+</button>
                </div>
                <div className="bar2"></div>
                    <ul className="pros-list">
                        {
                        pros[0]? pros.map((elem,index) => {
                                return(
                                    <li key={index} onClick={openEditProsModal}>
                                        <p>{elem.name}</p>
                                        <p>{elem.points}</p>
                                    </li>
                                )
                            }) : (
                                <li className="empty">
                                    <a onClick={openProsModal}><p>add pros</p></a>
                                </li>
                            )
                        }
                    </ul>
            </div>
            <div className="cons">
                <div className="bar"></div>
                <div className="cons-container border"> 
                    <div className="cons-header border2">
                        <div className="title-button">
                            <p className="margin">Cons</p>
                            <button onClick={openConsModal} className="add-con">+</button>
                        </div>
                        <div className="bar2 height"></div>
                        <ul className="cons-list">
                            {
                             cons[0]? cons.map((elem, index) => {
                                return(
                                        <li className="cons-itens" key={index} >
                                            <p>{elem.name}</p>
                                            <div className="edit-delete-container">
                                                <AiFillDelete/>
                                                <AiFillEdit/>
                                            </div>
                                            <p>{elem.points}</p>
                                        </li>
                                        )
                                    }): (
                                    <li className="empty">
                                        <a onClick={openConsModal}><p>add cons</p></a>
                                    </li>)
                            }
                        </ul>
                        <div className="border total-cons">
                            <p className="margin">Total cons</p>
                            <p className="margin2">value</p>
                        </div>
                    </div>
                
            </div>        
        </div>
        <div className="total">
                    <p>score</p>
                    <p>{result}</p>
                </div>
    </HomeMainStyle>
)}

export default HomeMain