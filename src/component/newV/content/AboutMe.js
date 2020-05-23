import React from "react"
import Container from "@bootstrap-styled/v4/lib/Container"
import styled from "styled-components"
import { Slide } from "@material-ui/core"

const CustomContainer = styled(Container)`
    padding: 13% 0 0 8%;
    font-size: 20px;

    @media screen and (max-width:576px) {
        font-size: 15px;
        padding: 15px 20px 0 40px;
    }
`
const Aboutme = ({isHome,...props}) => {
    return (
        <Slide timeout={800} direction="right" in={isHome}>
            <CustomContainer>
                <article className="text-justify">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</article>
            </CustomContainer>
        </Slide>
    )
}

export default Aboutme