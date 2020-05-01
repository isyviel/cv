import React , {useState} from "react"
import {Row} from "@bootstrap-styled/v4/lib"
import ExpMenu from "./Exp/ExpMenu"
import Strategia from "./Exp/Strategia"
import Vente from "./Exp/Vente"

const Exp = ({exp,...props})=> {

    const [isWeb, setIsWeb] = useState(true)
    const [isSales, setIsSales] = useState(false)
    
    const displaySales = () => {
        setIsSales(true)
        setIsWeb(false)
    }

    const displayWeb = () => {
        setIsWeb(true)
        setIsSales(false)
    }

return(
        <div>
            <h1 className="h5">{exp}</h1>
                <Row>
                    <ExpMenu displaySales={displaySales} displayWeb={displayWeb}/>
                    {isWeb && (<Strategia isWeb={isWeb}/>)}
                    {isSales &&(<Vente isSales={isSales}/>)}
                </Row>
        </div>
    )
}

export default Exp