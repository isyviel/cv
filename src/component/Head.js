import React, { useState, useContext, useEffect } from "react"
import { Row,Col } from "@bootstrap-styled/v4"
import Container from './common/Container'
import Me from './head/Me'
import Title from './head/Title'
import Contact from './head/Contact'


const Head = () => {
return (
    <div>
            <Me/>
            <Title/>
            <Contact/>
    </div>
)
}

export default Head