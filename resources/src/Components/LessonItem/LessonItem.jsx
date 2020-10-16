import React, { Fragment, Component } from 'react'
import { withStyles  } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { IconButton, Card, CardActionArea, CardMedia, 
         CardContent, Typography, CardActions, Button, 
         Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { ThreeSixty } from '@material-ui/icons'

const styles = theme => ({
    root: {
      maxWidth: 370,
    },
    media: {
      height: 100,
    },
    cardAction: {
        width: '100%',
        justifyContent: 'center',
    },
  });

  class LessonItem extends Component{

    state = {
        open: false,
        deleteDialog: false
    }

    handleOpen = () => {
        this.setState({ open: !this.state.open })
    }

    handleDeleteItem = () => {
        this.props.handleDeleteItem(this.props.id)
        this.handleDialogClose()
    }

    handleDialogClose = () => {
        this.setState({ deleteDialog: false })
    }

    handleDialogOpen = () => {
        this.setState({ deleteDialog: true })
    }

    handleSelectLesson = () => {
        this.props.handleSelectLesson(this.props.lessonId)
    }

    handleClose = () => {
        this.setState( { open: false } )
    }
    
    render() {
        const { id, title, content, category, price, cover, classes, lessonId } = this.props
        return(
            <>
            <Card elevation={5} key={id}>
                <CardActionArea onClick={ this.props.modal ? this.handleClose : this.handleOpen }>
                    <CardMedia
                        className={classes.media}
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
                    <Button size="small" color="primary" variant="contained" >
                        Купить
                    </Button>
                    <Link className="link" to={ `/lesson/${id}` } replace>
                        <Button onClick={ this.handleSelectLesson } size="small" variant="contained" color="primary">
                            Подробнее
                        </Button>
                    </Link>
                    <IconButton aria-label="delete" color="primary" onClick={ this.handleDialogOpen }>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Dialog fullWidth onClose={ this.handleClose } open={ this.state.open }>
                <LessonItem { ...this.props } modal={true} />
            </Dialog>
            <Dialog onClose={ this.handleDialogClose } open={ this.state.deleteDialog } aria-labelledby="draggable-dialog-title">
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Подтверждение
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Вы действительно хотите удалить данный диалог?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={ this.handleDialogClose } color="primary">
                        Нет
                    </Button>
                    <Button onClick={ this.handleDeleteItem } color="secondary">
                        Да
                    </Button>
                </DialogActions>
            </Dialog>
            </>
        )
    }
}

export default withStyles(styles)(LessonItem)