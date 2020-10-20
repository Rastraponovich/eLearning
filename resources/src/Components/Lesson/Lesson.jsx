import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Paper, Container, Typography, Card, 
    CardContent, CardMedia, Divider,
    CardActions, Button, Chip, Avatar, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => ({
    root: {
      margin: theme.spacing(1, 0, 0, 0),
    },
    media: {
        margin: theme.spacing(0, 0, 0.5, 0),
    },
    divider: {
        margin: theme.spacing(0, 0, 1, 0),
    },
    content: {
        padding: theme.spacing(1)
    }

  })

class Lesson extends Component{
    
    handleDeleteLesson = () => {
        const { deleteLesonAction, lessonId } = this.props
        deleteLesonAction(lessonId)
    }

    render() {
        const { classes, lesson } = this.props
        
        if (lesson === undefined) {
            return <div>Урок не найден вернитесь на главную!</div>
        }
        const { id, category, content, title, price, cover } = lesson
        
        return(
                <Card className={ classes.root }>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            { title }
                        </Typography>
                        <CardMedia
                            component="img"
                            alt="cover_lesson"
                            className={ classes.media }
                            height="200"
                            image={ cover }
                            title={ title }
                        />
                        <Divider className={ classes.divider} />
                        <Chip
                            avatar={<Avatar>{ category[0] }</Avatar>}
                            label={ category }
                            className={ classes.divider }
                            color="primary"
                        />
                        <Paper elevation={5} className={ classes.content }>
                            <Typography variant="body1" color="textPrimary" component="h3">
                                Описание Урока
                            </Typography>
                            <Typography variant="body2" color="textPrimary" component="p">
                                { content }
                            </Typography>
                        </Paper>
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" variant="contained">
                            В корзину
                        </Button>
                        <Link to='/' replace>
                            <Button size="small" color="primary" variant="contained">
                                назад
                            </Button>
                        </Link>
                        <IconButton aria-label="delete" color="primary" onClick={ this.handleDeleteLesson }>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
        )
    }
}

export default withStyles(styles)(Lesson)