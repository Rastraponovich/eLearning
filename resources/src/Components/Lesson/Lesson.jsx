import React, { Component, Fragment } from 'react'
import { Paper, Container, Typography, Card, 
        CardContent, CardMedia, Divider,
        CardActions, Button, Chip, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Lesson extends Component{

    
    render() {
        if (this.props.lesson === undefined) {
            return <div>Loading</div>
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
                            height="300"
                            image={ cover }
                            title={ title }
                        />
                        <Divider />
                        <Chip
                            avatar={<Avatar>{ category[0] }</Avatar>}
                            label={ category }
                            color="primary"
                        />
                        <Paper elevation={5}>
                            <Typography variant="body1" color="textPrimary" component="h3">
                                Описание Урока
                            </Typography>
                            <Typography variant="body2" color="textPrimary" component="p">
                                { content }
                            </Typography>
                        </Paper>
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" variant="outlined">
                            В корзину
                        </Button>
                        <Link to='/' replace>
                            <Button size="small" color="primary" variant="outlined">
                                назад
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Paper>
            
        )
    }
}

export default Lesson