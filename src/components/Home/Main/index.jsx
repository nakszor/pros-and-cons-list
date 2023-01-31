import { HomeMainStyle } from "./style"

const HomeMain = () =>{
    return(
        <HomeMainStyle>
           <div className="pros">
            <p className="margin">Pros</p>
            <div className="bar2"></div>
                <ul className="pros-list">
                    <li>
                        <p>hot</p>
                        <p>10</p>
                    </li>
                    <li>
                        <p>great sex</p>
                        <p>8</p>
                    </li>
                </ul>
           </div>
           <div className="cons">
           <div className="bar"></div>
           <div className="cons-container">
           <p className="margin cons-title">Cons</p>
           <div className="bar2"></div>
            <ul className="cons-list">
                <li>
                    <p>Crazy jhdkhfkh hgdhjf</p>
                    <p>10</p>
                </li>
                <li>
                    <p>Agressive</p>
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