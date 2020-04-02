import React from "react"
import RowExperience from './RowExperience'

const Active = ({content,display,isActive,variant,...props}) => {
    
    return <RowExperience isActive={isActive} display={display} content={content} variant={variant}/>
}

export default Active