import { useContext } from "react"
import { Context } from "../../../context"
import { HomeMainStyle } from "./style"

const HomeMain = () =>{
    const {cons, pros, result} = useContext(Context)
    
    return(
        <HomeMainStyle value={result}>
           <div className="pros">
           <div className="title-button">
            <p className="margin">Pros</p>
           <button  className="add-pro">+</button>
            </div>
            <div className="bar2"></div>
                <ul className="pros-list">
                    {
                        pros.map((elem,index) => {
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
           <div className="cons">
           <div className="bar"></div>
           <div className="cons-container">
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
            <div className="total">
                <p>total</p>
                <p>{result}</p>
            </div>
           </div>
            
           </div>
        </HomeMainStyle>
    )
}
export default HomeMain