import { useContext } from "react"
import { Context } from "../../../context"
import Modal from "../Modal"
import { HomeMainStyle } from "./style"

const HomeMain = () =>{
    const {cons, pros, result, prosModal,
        openProsModal, closeProsModal, proSubmit,
        setProData, proData, openConsModal, consModal, 
        closeConsModal, conData, conSubmit, setConData} = useContext(Context)
    
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
                                    <li key={index}>
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
                <div className="cons-container"> 
                    <div className="cons-header">
                        <div className="title-button">
                            <p className="margin">Cons</p>
                            <button onClick={openConsModal} className="add-con">+</button>
                        </div>
                        <div className="bar2 height"></div>
                        <ul className="cons-list">
                            {
                             cons[0]? cons.map((elem, index) => {
                                return(
                                        <li key={index}>
                                            <p>{elem.name}</p>
                                            <p>{elem.points}</p>
                                        </li>
                                        )
                                    }): (
                                    <li className="empty">
                                        <a onClick={openConsModal}><p>add cons</p></a>
                                    </li>)
                            }
                        </ul>
                    </div>
                <div className="total">
                    <p>score</p>
                    <p>{result}</p>
                </div>
            </div>        
        </div>
    </HomeMainStyle>
)}

export default HomeMain