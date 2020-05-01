import React , {useState} from "react"
import {Row} from "@bootstrap-styled/v4/lib"
import FormationMenu from "./Formation/FormationMenu"
import Adrar from "./Formation/Adrar"
import English from "./Formation/English"

const Formation = ({diplome,...props})=> {

    const [isWeb, setIsWeb] = useState(true)
    const [isEng, setIsEng] = useState(false)
    
    const displayEnglish = () => {
        setIsEng(true)
        setIsWeb(false)
    }

    const displayAdrar = () => {
        setIsWeb(true)
        setIsEng(false)
    }

return(
        <div>
            <h1 className="h5">{diplome}</h1>
                <Row>
                    <FormationMenu displayEnglish={displayEnglish} displayAdrar={displayAdrar}/>
                    {isWeb && (<Adrar isWeb={isWeb}/>)}
                    {isEng &&(<English isEnglish={isEng}/>)}
                </Row>
        </div>
    )
}

export default Formation