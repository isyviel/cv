import React from "react"

import Formations from './content/Formations'
import Experiences from './content/Experiences'
import Spacer from './common/Spacer'

import { SYMFONY, REACT, ANDROID, JAVA, GIT} from "./common/constantes/logos"
import { COMPETENCES} from "./common/constantes/texte"


const Content = ({title,content,...props}) => {
    
    return (
        <div>
            <Experiences/> 
            <Spacer/>
            <Formations/>
            <Spacer/>
   
        </div>
    )
}

export default Content