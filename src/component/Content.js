import React from "react"
import Formations from './content/Formations'
import Experiences from './content/Experiences'
import Spacer from './common/Spacer'

const Content = () => {
    
    return (
        <div>
            <Experiences/> 
            <Spacer/>
            <Formations/>
            <Spacer/>
        </div>
    )
}

export default Content