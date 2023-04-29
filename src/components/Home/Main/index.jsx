import { useContext, useState } from "react"
import { Context } from "../../../context"
import ProsModal from "../ProsModal"
import { HomeMainStyle } from "./style"

const HomeMain = () =>{
    const {cons, pros, setPros, result} = useContext(Context)

    const [open,setOpen] = useState(false)
    function openModal(){
       setOpen(true)
    }
    function closeModal(){
        setOpen(false)
    }
    const [proData, setProData] = useState({})
    function handleProSubmit(){
        setPros((previus) => [...previus, proData])
    }
    
    return(
        <HomeMainStyle value={result}>
            {
                open?(
                    <ProsModal closeModal={closeModal} proData={proData} setProData={setProData} handleProSubmit={handleProSubmit}/>
            ): null}
            <div className="pros">
                <div className="title-button">
                    <p className="margin">Pros</p>
                    <button onClick={openModal} className="add-pro">+</button>
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
                                    <p>add pros</p>
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
                            <button className="add-con">+</button>
                        </div>
                        <div className="bar2 height"></div>
                        <ul className="cons-list">
                            {
                             cons.map((elem, index) => {
                                return(
                                        <li key={index}>
                                            <p>{elem.name}</p>
                                            <p>{elem.points}</p>
                                        </li>
                                        )
                                    })
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