import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import Review from './Review'
import Rating from '@material-ui/lab/Rating'
import { nanoid } from 'nanoid'
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
    TextField,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import DoneIcon from '@material-ui/icons/Done'
import InfoIcon from '@material-ui/icons/Info'
import SendIcon from '@material-ui/icons/Send'

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
    reviews: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        boxSizing: 'border-box',
        justifyContent: 'center',
        '& > *:not(:last-child)': {
            marginBottom: theme.spacing(2),
        },
    },
    reviewContent: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(2),
        },
    },
    reviewsList: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    reviewInput: {
        flexGrow: 1,
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
    const { lesson, deleteLesonAction, lessonId, profile } = props
    const [isEdit, setIsEdit] = React.useState(false)
    const [value, setValue] = React.useState(0)
    const [review, setReview] = React.useState('')

    if (lesson === undefined) {
        return <div>Урок не найден вернитесь на главную!</div>
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }

    const handleSetReview = () => {
        const searchReview = props.lesson.reviews.find(
            (item) =>
                item.author ===
                `${props.profile.firstName} ${props.profile.lastName}`,
        )
        // if (searchReview) {
        //     alert('Отзыв уже есть')
        //     return
        // } else {
        props.addReviewLesson({
            id: props.lessonId,
            review: {
                id: nanoid(4),
                author: `${props.profile.firstName} ${props.profile.lastName}`,
                text: review,
                avatar: props.profile.avatar,
            },
        })
        setReview('')
        // }
    }

    const handleDeleteReview = (event, id) => {
        props.removeReviewLesson({
            lessonId: props.lessonId,
            reviewId: id,
        })
    }

    const {
        id,
        category,
        content,
        title,
        price,
        cover,
        rating,
        author,
    } = lesson

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
                    onClick={handleRedirect}
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
                    {profile.myLessons.find((item) => item === lesson.id) ? (
                        <Chip
                            color="primary"
                            icon={<DoneIcon />}
                            label="В моих Уроках"
                            size="small"
                        />
                    ) : (
                        <Chip
                            color="primary"
                            icon={<InfoIcon />}
                            label="Доступен"
                            size="small"
                        />
                    )}
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
                        index={0}
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
                    <Card
                        className={classes.root}
                        index={1}
                        dir={theme.direction}
                    >
                        <CardContent>
                            <Typography>Категория:</Typography>
                            <Chip
                                avatar={<Avatar>{category[0]}</Avatar>}
                                label={category}
                                className={classes.divider}
                                color="primary"
                            />
                            <Typography>Сложность: 5</Typography>
                            <Typography>Автор: {author}</Typography>
                            <Typography>Рейтинг:</Typography>
                            <Rating name="read-only" value={rating} readOnly />
                        </CardContent>
                    </Card>

                    <Card
                        className={classes.root}
                        index={2}
                        dir={theme.direction}
                    >
                        <CardContent className={classes.reviews}>
                            <div className={classes.reviewsList}>
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    style={{ marginBottom: theme.spacing(1) }}
                                >
                                    Отзывы
                                </Typography>
                                <Divider
                                    variant="fullWidth"
                                    orientation="horizontal"
                                    style={{ marginBottom: theme.spacing(2) }}
                                />
                                {props.lesson.reviews.map((item, idx) => (
                                    <Paper
                                        key={item.id}
                                        elevation={2}
                                        style={{
                                            marginBottom: theme.spacing(2),
                                            padding: theme.spacing(1),
                                            boxSizing: 'border-box',
                                        }}
                                    >
                                        <div className={classes.reviewContent}>
                                            <Avatar src={item.avatar} />
                                            <Typography
                                                variant="body2"
                                                component="span"
                                                style={{ flexGrow: 1 }}
                                            >
                                                {item.author}: {item.text}
                                            </Typography>
                                            {item.author ===
                                            `${props.profile.firstName} ${props.profile.lastName}` ? (
                                                <CardActions>
                                                    <IconButton>
                                                        <CreateIcon />
                                                    </IconButton>
                                                    <IconButton
                                                        id={item.id}
                                                        onClick={(event) =>
                                                            handleDeleteReview(
                                                                event,
                                                                item.id,
                                                            )
                                                        }
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </CardActions>
                                            ) : null}
                                        </div>
                                    </Paper>
                                ))}
                            </div>
                            {props.lesson.reviews.length > 0 ? (
                                <Divider
                                    orientation="horizontal"
                                    variant="fullWidth"
                                />
                            ) : null}
                            <div className={classes.reviewContent}>
                                <Avatar src={profile.avatar} />
                                <TextField
                                    placeholder={
                                        props.lesson.reviews.length > 0
                                            ? 'Оставьте отзыв '
                                            : 'Станьте первым, кто оставит отзыв об этом уроке!'
                                    }
                                    variant="outlined"
                                    className={classes.reviewInput}
                                    size="small"
                                    type="text"
                                    onKeyPress={(event) => {
                                        if (event.key === 'Enter') {
                                            handleSetReview()
                                        }
                                    }}
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <IconButton
                                    onClick={handleSetReview}
                                    color="primary"
                                >
                                    <SendIcon />
                                </IconButton>
                            </div>
                        </CardContent>
                    </Card>
                    <Review
                        value={value}
                        index={3}
                        dir={theme.direction}
                        profile={props.profile}
                        lesson={props.lesson}
                    ></Review>
                </SwipeableViews>
            </div>
        </div>
    )
}
