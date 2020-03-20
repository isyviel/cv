import React, { useState, useContext, useEffect } from "react"

import Head from './Head'
import Content from './Content'


const OnePage = () => {
    const [isForm, setIsForm] = useState(false)
    return (
        <div>
            <Head isForm={isForm}/>
            <Content/>
        </div>
    )
}

export default OnePage