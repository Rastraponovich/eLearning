import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        // width: '100%',
        // maxWidth: 400,
        height: '100%',
        padding: theme.spacing(4, 4, 2, 4),
        backgroundColor: theme.palette.background.paper,
    },
    imageUpload: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    textFiled: {
        margin: theme.spacing(0, 0, 2, 0),
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    input: {
        display: 'none',
    },
    media: {
        height: 140,
        width: 140,
    },
    button: {
        backgroundColor: theme.palette.success.main
    }
})

class ModalComponent extends Component {

    render() {
        return(
            <h2>test</h2>
        )
    }
}

export default withStyles(styles)(ModalComponent)