import React, { useState, useContext, useEffect } from "react"

import {LISTE_EXP, DESCRIPTION} from '../common/constantes/texte'

const Exp = () => {
   return (
      <div>
         {LISTE_EXP.map((exp) => {
            return <p>{exp}</p>
         })}
         <p>{DESCRIPTION}</p>
      </div> 
   )
}

export default Exp