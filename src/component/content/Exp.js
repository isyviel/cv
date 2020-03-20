import React, { useState, useContext, useEffect } from "react"

import {LISTE_EXP, DESCRIPTION} from '../common/constantes/texte'

const Exp = () => {
   return (
      <div>
         <p>{LISTE_EXP}</p>
         <p>{DESCRIPTION}</p>
      </div> 
   )
}

export default Exp