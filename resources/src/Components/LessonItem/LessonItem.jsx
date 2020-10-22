import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { IconButton, Card, CardActionArea, CardMedia, 
         CardContent, Typography, CardActions, Button, Grow,
         Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 370,
    },
    media: {
      height: 100,
    },
    cardAction: {
        width: '100%',
        padding: theme.spacing(0, 1),
        justifyContent: 'center',
    },
  }))

export default function LessonItem(props) {
    const classes = useStyles()
    const { id, title, content, category, price, cover, lessonId } = props
    const [open, setOpen] = React.useState(false)
    const [deleteDialog, setDeleteDialog] = React.useState(false)
    const [isRender, setIsRender] = React.useState(false)
    const [timer, setTimer] = React.useState(500)
   
    React.useEffect( () => {
        setIsRender(true)
        setTimer((Math.floor(Math.random() * 5) * 100 ))
    })

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleDialogClose = () => {
        setDeleteDialog(false)
    }

    const handleDeleteItem = () => {
        props.handleDeleteItem(id)
        handleDialogClose()
    }

    const handleDialogOpen = () => {
        setDeleteDialog(true)
    }

    const handleSelectLesson = () => {
        props.handleSelectLesson(lessonId)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleCartAdd = () => {
        const data = { id, name: props.title, price }
        props.handleCartAdd(data)
    }

    const handleTimer = () => {
        const number = (Math.floor(Math.random() * 10) * 1000 )
    }
    return(
        <>
        <Grow direction="up" timeout={ timer } in={ isRender }>
        <Card elevation={5} key={ id } >
            <CardActionArea onClick={ props.modal ? handleClose : handleOpen }>
                <CardMedia
                    className={ classes.media }
                    image={ cover }
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { content } { id }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Категория: { category }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        цена: { price }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={ classes.cardAction }>
                <Button size="small" color="primary" variant="contained" onClick={ handleCartAdd } >
                    В корзину
                </Button>
                <Link className="link" to={ `/lesson/${id}` } replace>
                    <Button onClick={ handleSelectLesson } size="small" variant="contained" color="primary">
                        Подробнее
                    </Button>
                </Link>
                <IconButton aria-label="delete" color="primary" onClick={ handleDialogOpen }>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
        </Grow >
        <Dialog fullWidth onClose={ handleClose } open={ open }>
            <LessonItem { ...props } modal={true} />
        </Dialog>
        <Dialog onClose={ handleDialogClose } open={ deleteDialog } aria-labelledby="draggable-dialog-title">
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Подтверждение
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Вы действительно хотите удалить данный диалог?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={ handleDialogClose } color="primary">
                    Нет
                </Button>
                <Button onClick={ handleDeleteItem } color="secondary">
                    Да
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}
