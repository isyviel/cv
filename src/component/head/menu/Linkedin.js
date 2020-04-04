import React from "react"
import Button from '@material-ui/core/Button';
import ImageButton from "../../common/ImageButton"

const Linkedin = () => {
  return (
    <Button>
        <a href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">
            <ImageButton src="images/linkedin.png" alt="icone linkedin" id="profil_linkedin"/>
        </a>
    </Button>
  )
}
export default Linkedin