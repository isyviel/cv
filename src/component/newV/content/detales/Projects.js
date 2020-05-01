import React from "react"
import {Row} from "@bootstrap-styled/v4/lib"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const Projects = ({projects,...props})=> {

return(
    <div>
        <h1 className="h5">{projects}</h1>
        <Row>
            <Card>
                <CardContent>
                    <Typography>WheelRide</Typography>
                    <Typography>Application Web permettant la gestion de l'entretien de son véhicule</Typography>
                    <Typography><a href="https://miro.com/app/board/o9J_kvcSzp8=/">Conception</a></Typography>
                    <Typography><a href="https://adeline75189.invisionapp.com/prototype/wheelRide-ck91gch6t007syi01cl59x4j5?v=k5%2BJ%2BVpfNHAHFms410AliA%3D%3D&linkshare=urlcopied">
                        Wireframes
                    </a></Typography>

                </CardContent>
            </Card>
        </Row>
    </div>
    )
}

export default Projects