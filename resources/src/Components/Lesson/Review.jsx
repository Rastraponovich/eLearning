import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import {
    Paper,
    Typography,
    Card,
    CardContent,
    Divider,
    CardActions,
    Avatar,
    IconButton,
    TextField,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1, 0, 0, 0),
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
}))

export default function Review(props) {
    const classes = useStyles()
    const theme = useTheme()
    const [review, setReview] = React.useState('')
    const { profile, lesson } = props

    const handleSetReview = () => {}
    const handleDeleteReview = () => {}

    return (
        <Card className={classes.root} index={2} dir={theme.direction}>
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
                    {lesson.reviews.map((item, idx) => (
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
                                `${profile.firstName} ${profile.lastName}` ? (
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
                {lesson.reviews.length > 0 ? (
                    <Divider orientation="horizontal" variant="fullWidth" />
                ) : null}
                <div className={classes.reviewContent}>
                    <Avatar src={profile.avatar} />
                    <TextField
                        placeholder={
                            lesson.reviews.length > 0
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
                    <IconButton onClick={handleSetReview} color="primary">
                        <SendIcon />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    )
}
