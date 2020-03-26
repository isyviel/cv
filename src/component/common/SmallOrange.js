import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { Container } from "@bootstrap-styled/v4"
import Colors from './theme/Colors'

export default styled(Container)`

    height: 15px;
    width: 15px;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px 0 #FF5725, 0 2px 4px 0 rgba(0,0,0,0.5);
    margin: 0;
    padding: 0;
    background-color: ${Colors.orange};
    opacity: 70%;
  
`