import React, { Fragment, Component } from 'react'
import { withStyles  } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'


const styles = theme => ({
    root: {
      maxWidth: 370,
    },
    media: {
      height: 100,
    },
  });

  class LessonItem extends Component{

    handleSelectLesson = () => {
        this.props.handleSelectLesson(this.props.lessonId)
    }
    
    render() {
        const { id, title, content, category, price, cover, classes, lessonId } = this.props
        return(
            <Card elevation={5} key={id}>
                <CardActionArea>
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
        )
    }
}

export default withStyles(styles)(LessonItem)