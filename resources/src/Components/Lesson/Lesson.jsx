import React, { Component, Fragment } from 'react'
import { Paper, Container, Typography, Card, 
        CardContent, CardMedia, Divider,
        CardActions, Button, Chip, Avatar } from '@material-ui/core'
import { withStyles  } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
      maxWidth: 370,
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

    
    render() {
        const { classes } = this.props
        
        if (this.props.lesson === undefined) {
            return <div>Урок не найден вернитесь на главную!</div>
        }
        const { id, category, content, title, price, cover } = this.props.lesson
        
        return(
            <Paper elevation={10}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            { title }
                        </Typography>
                        <CardMedia
                            component="img"
                            alt="cover_lesson"
                            className={ classes.media }
                            height="300"
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
                    </CardActions>
                </Card>
            </Paper>
            
        )
    }
}

export default withStyles(styles)(Lesson)