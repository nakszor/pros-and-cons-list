
import HomeMain from "./Main"
import { HomePageStyle } from "./style"

const HomePage = () => {
    return(
        <HomePageStyle>
           <HomeMain/>
           <div className="total">
                <p>score</p>
                <p>teste</p>
            </div>
        </HomePageStyle>
    )
}

export default HomePage