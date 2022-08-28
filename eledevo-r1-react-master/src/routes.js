import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import * as pages from './pages'

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element= {<pages.HomePage/>}/>
                <Route exact path="/items" element= {<pages.ItemPage/>}/>
            </Routes>
        </Router>
    )
}

export default Routers