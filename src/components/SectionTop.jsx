import { memo } from "react"
import Header from "./Header"
import Home from "./Home"

const SectionTop = (props) => {
    return(
        <div className="section-top">
            <Header handleSetLanguage={props.handleSetLanguage} />
            <Home language={props.language}/>
        </div>
    )
}

export default memo(SectionTop)