import React, { Fragment, Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles  } from '@material-ui/core/styles'
import { Typography, Divider } from '@material-ui/core'
import LessonItem from 'components/LessonItem/LessonItem'
import ScrollableFeed from 'react-scrollable-feed'
import ModalComponent from 'components/ModalComponent/ModalComponent'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    spacing: {
        margin: theme.spacing(0, 0, 2, 0)
    }
})

class LessonList extends Component{

    handleSelectLesson = (id) => {
        console.log(id)
        this.props.handleSelectLesson(id)
    }

    render() {
        const { classes, lessons } = this.props
        const lessonsItems = []

        for (let [key, value] of Object.entries(lessons)) {
            lessonsItems.push(key)
        }
        
        return(
            <>
                <Typography className={ classes.spacing } component="h2" variant="h4">Список Уроков</Typography>
                <Divider className={ classes.spacing } />
                <Grid container className={classes.root} spacing={2}>
                    { lessonsItems.map((item) => 
                        <Grid item xs={4} key={item}>
                            <LessonItem key={item} { ...lessons[item] } lessonId={item} handleSelectLesson={this.handleSelectLesson} /> 
                        </Grid>
                        )}
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(LessonList)