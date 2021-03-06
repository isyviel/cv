import React from "react"
import styled from "styled-components"

const CustomImg = styled.img `
    margin: 0 0 10px 50px;
    height: 200px;
    z-index: 2;
    @media screen and (max-width:1200px) {
        margin: 0 0 10px 15px;
    }

    @media screen and (max-width:992px) {
        height: 150px;
        margin: 0 0 10px 15px;
    }
    @media screen and (max-width:768px) {
        height: 150px;

    }
    @media screen and (max-width:576px) {
        height: 100px;
        margin: 0;
    }
`

const Biker = ({src,alt,...props}) => {
        return <CustomImg alt={alt} src={src}/>
}

export default Biker