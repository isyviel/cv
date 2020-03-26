import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { Container } from "@bootstrap-styled/v4"
import Colors from '../../common/theme/Colors'

export default styled(Container)`
    height: 100px;
    width: 440px;
    border-radius: 30px;
    background-color: black;
    opacity: 40%;
    box-shadow: inset 0 1px 3px 0 #4F4F4F, 0 2px 4px 0 #000;
    position: relative;
   
    left: -200px;
    padding: 25px;
    `