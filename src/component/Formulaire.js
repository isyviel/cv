import React, { useState, useContext, useEffect } from "react"

import Title from "./head/Title"
import Contact from "./head/Contact"
import Form from './mail/Form'


const Formulaire = () => {
    return (
        <div>
            <Title/>
            <Contact/>
            <Form/>
        </div>
    )
}

export default Formulaire