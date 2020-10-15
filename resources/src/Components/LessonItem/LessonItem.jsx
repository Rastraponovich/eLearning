import React, { Fragment, Component } from 'react'
import { withStyles  } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Dialog } from '@material-ui/core'


const styles = theme => ({
    root: {
      maxWidth: 370,
    },
    media: {
      height: 100,
    },
  });

  class LessonItem extends Component{

    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({ open: !this.state.open })
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
                <CardActionArea onClick={this.props.modal ? this.handleClose : this.handleOpen}>
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
                            { content }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Категория: { category }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            цена: { price }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" variant="contained" >
                        Купить
                    </Button>
                    <Link className="link" to={ `/lesson/${id}` } replace>
                        <Button onClick={ this.handleSelectLesson } size="small" variant="contained" color="primary">
                            Подробнее
                        </Button>
                    </Link>
                </CardActions>
            </Card>
            <Dialog fullWidth onClose={ this.handleClose } open={ this.state.open }>
                <LessonItem { ...this.props } modal={true} />
            </Dialog>
            </>
        )
    }
}

export default withStyles(styles)(LessonItem)