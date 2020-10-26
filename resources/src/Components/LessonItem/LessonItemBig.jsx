import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    CardHeader,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Grow,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Chip,
} from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 150,
        maxWidth: '25%',
        width: '100%',
    },
    card: {
        position: 'relative',
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    content: {
        flexGrow: 1,
    },
    button: {
        '&:not(:last-child)': {
            marginBottom: '1rem',
        },
    },
    chip: {
        position: 'absolute',
        top: '1rem',
        right: '.5rem',
    },
}))

export default function LessonItemBig(props) {
    const classes = useStyles()
    const { id, title, content, category, price, cover, lessonId } = props
    const [open, setOpen] = React.useState(false)
    const [deleteDialog, setDeleteDialog] = React.useState(false)
    const [isRender, setIsRender] = React.useState(false)
    const [timer, setTimer] = React.useState(500)

    React.useEffect(() => {
        setIsRender(true)
        setTimer(Math.floor(Math.random() * 5) * 100)
    })

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleDialogClose = () => {
        setDeleteDialog(false)
    }

    const handleDeleteItem = () => {
        props.handleDeleteItem(id)
        handleDialogClose()
    }

    const handleDialogOpen = () => {
        setDeleteDialog(true)
    }

    const handleSelectLesson = () => {
        props.handleSelectLesson(id)
        props.redirect(`/lesson/${id}`)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleCartAdd = () => {
        const data = { id, name: props.title, price }
        props.handleCartAdd(data)
    }

    return (
        <>
            <Grow direction="up" timeout={timer} in={isRender}>
                <Card elevation={5} key={id} className={classes.card}>
                    <div className={classes.chip}>
                        <Chip
                            color="primary"
                            icon={<DoneIcon />}
                            label="В моих Уроках"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <CardActionArea
                        onClick={handleSelectLesson}
                        className={classes.cardAction}
                    >
                        <CardMedia
                            className={classes.media}
                            image={cover}
                            title="lesson image"
                        />
                        <CardContent className={classes.content}>
                            <CardHeader title={title} subheader={content} />
                            <Typography variant="body2" component="p">
                                {' '}
                                {content}{' '}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {' '}
                                цена: {price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grow>
        </>
    )
}
