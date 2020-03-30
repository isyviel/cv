import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Bouton from '../../common/Bouton'
import RowExperience from '../../common/RowExperience'

const Active= ({content,display,...props}) => {
    const isActive = true;
    return <RowExperience isActive={isActive} display={display} content={content}/>
}

export default Active