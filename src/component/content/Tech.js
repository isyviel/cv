import React, { useState, useContext, useEffect } from "react"

import {LISTE_TECHNO, LISTE_SECONDAIRE, LISTE_OUTILS} from '../common/constantes/texte'

const Tech = () => {
   return (
      <div>
         <p>{LISTE_TECHNO}</p>
         <p>{LISTE_SECONDAIRE}</p>
         <p>{LISTE_OUTILS}</p>
      </div>
   )
}

export default Tech