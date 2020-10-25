import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import {
    Paper,
    TextFiled,
    AppBar,
    Container,
    Tabs,
    Tab,
    Typography,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Divider,
    CardActions,
    Button,
    Chip,
    Avatar,
    IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1, 0, 0, 0),
    },
    media: {
        // margin: theme.spacing(0, 0, 0.5, 0),
        filter: `brightness(25%)`,
        zIndex: 1,
    },
    divider: {
        margin: theme.spacing(0, 0, 1, 0),
    },
    nav: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    navButton: {
        alignSelf: 'flex-start',
        color: '#000',
        textShadow: '0px 1px 2px rgba(255, 255, 255, 0.1)',
    },
    content: {
        padding: theme.spacing(1),
    },
    lessonHeader: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
        height: 200,
        boxSizing: 'border-box',
        padding: theme.spacing(0, 0, 4, 2),
        justifyContent: 'space-between',
    },
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props
    return <div>sdadssad</div>
}

export default function Lesson(props) {
    const classes = useStyles()
    const theme = useTheme()
    const { lesson, deleteLesonAction, lessonId } = props
    const [isEdit, setIsEdit] = React.useState(false)
    const [value, setValue] = React.useState(0)

    if (lesson === undefined) {
        return <div>Урок не найден вернитесь на главную!</div>
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }

    const { id, category, content, title, price, cover } = lesson

    const handleDeleteLesson = () => {
        deleteLesonAction(lessonId)
        props.redirect('/lessons')
    }
    const handleRedirect = () => {
        props.redirect('/lessons')
    }

    const handleEdit = () => {
        setIsEdit(!isEdit)
    }

    return (
        <div style={{ position: 'relative' }}>
            <Container maxWidth="xl" className={classes.lessonHeader}>
                <Button
                    variant="text"
                    color="primary"
                    className={classes.navButton}
                >
                    Назад к урокам
                </Button>
                <Typography variant="h3" component="h3" color="textPrimary">
                    {title}
                </Typography>
                <Typography variant="body2" component="span" color="secondary">
                    Завершен
                </Typography>
            </Container>
            <CardMedia
                component="img"
                alt="cover_lesson"
                className={classes.media}
                height="200"
                image={cover}
                title={title}
            />
            <div className={classes.nav}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Содержание" {...a11yProps(0)} />
                        <Tab label="Об уроке" {...a11yProps(1)} />
                        <Tab label="Отзывы" {...a11yProps(2)} />
                        <Tab label="Вопросы и ответы" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <Card
                        className={classes.root}
                        index={1}
                        dir={theme.direction}
                    >
                        <CardContent>
                            <Typography
                                variant="body1"
                                color="textPrimary"
                                component="h3"
                            >
                                Описание Урока
                            </Typography>
                            {isEdit ? null : (
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    component="p"
                                >
                                    {content}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                    <div>
                        <Typography>Категория:</Typography>
                        <Chip
                            index={1}
                            dir={theme.direction}
                            avatar={<Avatar>{category[0]}</Avatar>}
                            label={category}
                            className={classes.divider}
                            color="primary"
                        />
                        <Typography>Сложность: 5</Typography>
                        <Typography>Автор:</Typography>
                        <Typography>Рейтинг:</Typography>
                    </div>

                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        Item Four
                    </TabPanel>
                </SwipeableViews>
            </div>
        </div>
    )
}
