import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { DjangoAPI } from "./components/Hook/DjangoAPI";
// import "./SASS/Test.scss"


const App = () => {
    return(
        <React.Fragment>
            <DjangoAPI/>
        </React.Fragment>
    )
}
export default App;