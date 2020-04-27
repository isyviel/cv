import React from "react"
import Button from '@material-ui/core/Button';
import ImageButton from "../../common/ImageButton"

const Pdf = () => {
  return (
    <Button>
        <a href='adeline_simon_CV.pdf' target='__blank' rel="noopener noreferrer">
          <ImageButton src="images/pdf.png" alt="icone pdf" id="telecharger_cv" />
        </a>
    </Button>
  )
}
export default Pdf