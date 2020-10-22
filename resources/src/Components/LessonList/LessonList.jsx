import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Divider, Fab, Container, TextField } from '@material-ui/core'
import LessonItem from 'components/LessonItem/LessonItem'
import ScrollableFeed from 'react-scrollable-feed'
import AddIcon from '@material-ui/icons/Add'
import { green } from '@material-ui/core/colors'
import Autocomplete from '@material-ui/lab/Autocomplete'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: '2rem',
        height: '100%'
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
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            bottom: 0,
            right: theme.spacing(8) * 4, 
        },
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}))

export default function LessonList(props) {
    const classes = useStyles()
    const { lessons } = props
    const lessonsItems = []
    const categoryList = ['Первая', 'Вторая', 'Третья', 'Четвертая', 'Прочее']

    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    
    for (let [key, value] of Object.entries(lessons)) {
        lessonsItems.push(value)
    }
    
    return(
        <>
            <Typography className={ classes.spacing } component="h2" variant="h4">Список Уроков</Typography>
            <Divider className={ classes.spacing } />
            <Autocomplete
                value={ value }
                onChange={ (event, newValue) => { setValue(newValue) }}
                inputValue={ inputValue }
                onInputChange={ (event, newInputValue) => { setInputValue(newInputValue) }}
                id="controllable-states-demo"
                size="small"
                options={ categoryList }
                style={{ width: 300, marginBottom: '1rem' }}
                renderInput={(params) => <TextField { ...params } label="Категории" variant="outlined" />}
            />
            <Divider className={ classes.spacing } />
            
            <Grid container className={ classes.root } spacing={2}>
                { lessonsItems.map((item, idx) => item.category === value || value === null ?
                    <Grid  item xs={12} sm={6} md={4} xl={6} key={ idx }>
                        <LessonItem 
                            key={ idx } 
                            { ...item } 
                            lessonId={ item.id } 
                            handleCartAdd={ props.handleCartAdd }
                            handleDeleteItem={ props.handleDeleteItem }
                            handleSelectLesson={ props.handleSelectLesson } /> 
                    </Grid>
                    : null
                    )}
            </Grid>

            <Fab className={ classes.fab }>
                <AddIcon />
            </Fab>
        </>
    )
}
