import React from "react"
import styled from "styled-components"
import Colors from '../common/theme/Colors'

const CustomTitle = styled.p`
font-family: "Baloo 2";
font-size: 32px;
color : ${Colors.orange};
text-shadow: 1px 1px 2px black, 0 0 0.2em ${Colors.lightGrey};
`

const Comp = ({comp,...props}) => {
      return <CustomTitle>{comp}</CustomTitle>
}

export default Comp