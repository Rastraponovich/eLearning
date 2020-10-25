import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Paper,
    TextFiled,
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

const useStyles = makeStyles((theme) => ({
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
        padding: theme.spacing(1),
    },
}))

export default function Lesson(props) {
    const classes = useStyles()
    const { lesson, deleteLesonAction, lessonId } = props
    const [isEdit, setIsEdit] = React.useState(false)

    if (lesson === undefined) {
        return <div>Урок не найден вернитесь на главную!</div>
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
        <Card className={classes.root}>
            <CardHeader
                title={title}
                action={
                    <IconButton
                        aria-label="edit"
                        color="primary"
                        onClick={handleEdit}
                    >
                        <CreateIcon />
                    </IconButton>
                }
            />
            <CardContent>
                <CardMedia
                    component="img"
                    alt="cover_lesson"
                    className={classes.media}
                    height="200"
                    image={cover}
                    title={title}
                />
                <Divider className={classes.divider} />
                <Chip
                    avatar={<Avatar>{category[0]}</Avatar>}
                    label={category}
                    className={classes.divider}
                    color="primary"
                />
                <Paper elevation={5} className={classes.content}>
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
                </Paper>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" variant="contained">
                    В корзину
                </Button>
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={handleRedirect}
                >
                    назад
                </Button>
                <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={handleDeleteLesson}
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}
