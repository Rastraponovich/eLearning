import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import { IconButton, Collapse, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        bottom: '1rem',
        right: '2rem',
        width: '60%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))

export default function AlertShow(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(props.popup.status)

    return (
        <div className={classes.root}>
            <Collapse in={props.popup.status}>
                <Alert
                    variant="filled"
                    severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                props.hanldeCloseAlert(false)
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {props.popup.text}
                </Alert>
            </Collapse>
        </div>
    )
}
