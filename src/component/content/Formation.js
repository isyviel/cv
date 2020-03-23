import React, { useState, useContext, useEffect } from "react"

import {LISTE_FORMATION} from '../common/constantes/texte'

const Formation = () => {
    return (
        LISTE_FORMATION.map((diplomes) => {
            return(<p>{diplomes}</p>)
        })
        )
}

export default Formation