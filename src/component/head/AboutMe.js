import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { Container } from "@bootstrap-styled/v4"
import Perceval from '../common/theme/Perceval'
import FondCitation from './cadres/FondCitation'
import FondTitre from './cadres/FondTitre'
import Titre from './Titre'
import Nom from './Nom'
import Orange from './cadres/Orange'
import TinyOrange from './cadres/TinyOrange'
import FondNom from './cadres/FondNom'
import Me from './Me'
const AboutMe = ()=> {
    return( 
       <div>
           <FondCitation>
               <Perceval/>
           </FondCitation>
           <TinyOrange/>
           <FondTitre>
               <Titre/>
           </FondTitre>
           <Orange/>
           <FondNom>
                <Nom/>
           </FondNom>
           <Me/>
       </div>
    )
}

export default AboutMe