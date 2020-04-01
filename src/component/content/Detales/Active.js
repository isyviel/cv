import React from "react"
import RowExperience from '../../common/RowExperience'

const Active = ({content,display,isActive,...props}) => {
    
    return <RowExperience isActive={isActive} display={display} content={content}/>
}

export default Active