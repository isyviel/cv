import React from "react"
import Button from '@material-ui/core/Button';
import ImageButton from "../../common/ImageButton"

const Pdf = () => {
  return (
    <Button>
        <a href='cv_Adeline_Simon.pdf' target='__blank'>
          <ImageButton src="images/pdf.png" />
        </a>
    </Button>
  )
}
export default Pdf