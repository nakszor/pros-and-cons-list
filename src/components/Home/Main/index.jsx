import { HomeMainStyle } from "./style"

const HomeMain = () =>{
    return(
        <HomeMainStyle>
           <div className="pros">
           <div className="title-button">
            <p className="margin">Pros</p>
           <button  className="add-pro">+</button>
            </div>
            <div className="bar2"></div>
                <ul className="pros-list">
                    <li>
                        <p>kind</p>
                        <p>10</p>
                    </li>
                    <li>
                        <p>beautiful</p>
                        <p>8</p>
                    </li>
                </ul>
           </div>
           <div className="cons">
           <div className="bar"></div>
           <div className="cons-container">
            <div className="title-button">
            <p className="margin">Cons</p>
           <button className="add-con">+</button>
            </div>
           
           <div className="bar2"></div>
            <ul className="cons-list">
                <li>
                    <p>jealous</p>
                    <p>10</p>
                </li>
                <li>
                    <p>boring</p>
                    <p>8</p>
                </li>
            </ul>
            <div className="total">
                <p>total</p>
                <p>0</p>
            </div>
           </div>
            
           </div>
        </HomeMainStyle>
    )
}
export default HomeMain