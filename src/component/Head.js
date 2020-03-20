import React, { useState, useContext, useEffect } from "react"

import Me from './head/Me'
import Title from './head/Title'
import Contact from './head/Contact'


const Head = ({isForm,...props}) => {
    return (
        <div className="mt-5">
                <Me/>
                <Title/>
                <Contact isForm={isForm}/>
        </div>
    )
}

export default Head