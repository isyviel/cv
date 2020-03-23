import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

const Title= styled.div`
    text-align: center;
    font-family: "Baloo 2";
    font-size: 24px;
    padding-bottom : 26px;
`

const Exp = ({exp,...props}) => {
            return  <div element={exp}>
                        <Title>{exp}</Title>
                        <p>Symfony, React, ApiPlatform, Twig, Bootstrap</p>
                        <p>Gestion des workflows client</p>
                        <p>Mise en place de fonctionnalités: Suppression, Duplication, Mail de notification, exportation en pdf</p>
                        <p>FRONT et BACK</p>
                        <p>Reproductions d'erreurs</p>
                        <p>Responsive</p>
                    </div>
}

export default Exp