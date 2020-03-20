import React, { useState, useContext, useEffect } from "react"

import Title from "./head/Title"
import Contact from "./head/Contact"
import Form from './mail/Form'


const Formulaire = () => {
    const [isForm, setIsForm] = useState(true)

    return (
        <div>
            <Title/>
            <Contact isForm={isForm}/>
            <Form/>
        </div>
    )
}

export default Formulaire