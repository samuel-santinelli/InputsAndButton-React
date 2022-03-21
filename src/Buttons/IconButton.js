import React, { Component } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import '../App.css'

export class IconButton extends Component {
  render() {
    return (
        <div>
        <Button id="buttonNext" variant="contained" endIcon={<NavigateNextIcon />}>
        Próxima Pagina
      </Button>
      </div>
    )
  }
}

export default IconButton