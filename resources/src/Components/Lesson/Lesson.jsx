import React, { Component, Fragment } from 'react'
import { Paper, Container, Typography } from '@material-ui/core'

class Lesson extends Component{

    
    render() {
        if (this.props.lesson === undefined) {
            return <div>Loading</div>
       }
       
        const { id, category, content, title, price, cover } = this.props.lesson
        return(
            <Container fluid>
                <Paper elevation={10}>
                    <h2>{ title }</h2>
                    <Typography>{id}</Typography>
                    <Typography>{category}</Typography>
                    <Typography>{content}</Typography>
                    <Typography>{price}</Typography>
                    <Typography>{cover}</Typography>

                </Paper>
            </Container>
            
        )
    }
}

export default Lesson