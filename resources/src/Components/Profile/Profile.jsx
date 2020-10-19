import React from 'react'
import Draggable from 'react-draggable'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle, Paper, TextField,
    Typography, Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    profileTitleContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box'
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    regButton: {
        margin: '0 0 0 0',
    },
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17),
      margin:'0 auto'
    },
  }))


function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function Profile(props) {

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [firstName, setFirstName] = React.useState(props.profile.firstName)
    const [email, setEmail] = React.useState(props.profile.email)
    const [lastName, setLastName] = React.useState(props.profile.lastName)
   
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            if (firstName.length > 0 || lastName.length > 0) {
                handleConfirm()
            }
        }
    }
    const handleConfirm = () => {
        const data = { firstName, lastName }

        props.handleNameChange(data)
        handleClose()
    } 

    const error = props.error ? 'Data is not set' : 'OK'
    return (
        <div className={ classes.regButton }>
            <p onClick={ handleClickOpen } >Профиль</p>
            {/* <Avatar className="avatar" onClick={ handleClickOpen } src={ props.profile.avatar }/> */}
            <Dialog
                open={ open }
                fullWidth
                onClose={ handleClose }
                PaperComponent={ PaperComponent }
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    <div className={ classes.profileTitleContainer }>
                        { props.profile.firstName }   { props.profile.lastName } 
                        <Link to='/cabinet' replace>
                            <Button color="primary" variant="contained" onClick={ handleClose }>
                                Кабинет
                            </Button>
                        </Link>
                    </div>
                    
                    
                </DialogTitle>
                <DialogContent>
                    <Avatar className="avatar" className={ classes.large } src={ props.profile.avatar }/>
                    <DialogContentText> 
                        Введите новые данные о пользователе
                    </DialogContentText>
                    <DialogContentText> 
                        Возраст : { props.profile.age }
                    </DialogContentText>
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имя"
                        onChange={ handleFirstNameChange } 
                        value={ firstName } 
                        onKeyUp={ (event) => handleKeyUp(event, firstName) }
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Фамилия"
                        onChange={ handleLastNameChange } 
                        value={ lastName } 
                        onKeyUp={ (event) => handleKeyUp(event, lastName) }
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        type="email"
                        label="Почта"
                        onChange={ handleEmailChange } 
                        value={ email } 
                        onKeyUp={ (event) => handleKeyUp(event, email) }
                        fullWidth
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Потдвердить
                    </Button>
                </DialogActions>
            </Dialog>
    </div>
    )
}