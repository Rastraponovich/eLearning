import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { nanoid } from 'nanoid'
import {
    IconButton,
    Typography,
    Divider,
    MenuItem,
    TextField,
    Button,
    Paper,
    InputAdornment,
    Grid,
    CardMedia,
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const BULK_IMAGE = `https://icon-library.com/images/no-image-icon/no-image-icon-5.jpg`

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4, 4, 4, 4),
        backgroundColor: theme.palette.background.paper,
    },
    imageUpload: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    textFiled: {
        margin: theme.spacing(0, 0, 1, 0),
    },
    buttonGroup: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 2),
    },
    input: {
        display: 'none',
    },
    media: {
        height: 140,
        width: 140,
    },
    button: {
        backgroundColor: theme.palette.success.main,
    },
    form: {
        width: '100%',
    },
    spacing: {
        margin: theme.spacing(0, 0, 2, 0),
    },
}))

export default function CreateLesson(props) {
    const classes = useStyles()
    const [data, setData] = React.useState({
        id: null,
        title: '',
        content: '',
        categories: ['Первая', 'Вторая', 'Третья', 'Четвертая'],
        price: '',
        cover: '',
        category: '',
    })
    const { id, title, content, categories, price, cover, category } = data

    if (id === null) {
        setData({ ...data, id: nanoid(6) })
    }

    const handleChangeCaterogy = (event) => {
        setData({ ...data, category: event.target.value })
    }

    const handleChangePrice = (event) => {
        setData({ ...data, price: event.target.value })
    }

    const handleChangeTitle = (event) => {
        setData({ ...data, title: event.target.value })
    }

    const handleChangeContent = (event) => {
        setData({ ...data, content: event.target.value })
    }

    const handleConfirm = () => {
        const newCover = cover === '' ? BULK_IMAGE : cover

        if (title !== '' && content !== '' && price !== '' && category !== '') {
            props.handleCreateLesson({
                id,
                title,
                cover: newCover,
                content,
                price,
                category,
                lessonId: id,
            })
            props.redirect(`lesson/${id}`)
        } else {
            alert('что-то не заполнено')
        }
    }

    return (
        <>
            <Typography className={classes.spacing} component="h2" variant="h5">
                Новый урок
            </Typography>
            <Divider className={classes.spacing} />
            <Paper elevation={10} className={classes.root}>
                <Grid container spacing={2} justify="space-between">
                    <Grid container item xs={12} sm={8}>
                        <form
                            className={classes.form}
                            noValidate
                            autoComplete="off"
                        >
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.textFiled}
                                        label="Название"
                                        id="title"
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                        value={title}
                                        onChange={handleChangeTitle}
                                        helperText="Введите название урока"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} md={4}>
                                    <TextField
                                        className={classes.textFiled}
                                        label="Цена"
                                        id="price"
                                        size="small"
                                        value={price}
                                        variant="outlined"
                                        onChange={handleChangePrice}
                                        helperText="Введите цену урока"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className={classes.textFiled}
                                        label="Категория"
                                        fullWidth
                                        id="category"
                                        size="small"
                                        select
                                        variant="outlined"
                                        value={category}
                                        onChange={handleChangeCaterogy}
                                        helperText="Выберите категорию урока"
                                        required
                                    >
                                        {categories.map((item, idx) => (
                                            <MenuItem key={idx} value={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid container item sx={12}>
                                    <TextField
                                        className={classes.textFiled}
                                        label="Описание"
                                        id="content"
                                        size="small"
                                        fullWidth
                                        value={content}
                                        placeholder="Введите текст"
                                        multiline
                                        variant="outlined"
                                        onChange={handleChangeContent}
                                        rows={3}
                                        helperText="Введите содержание урока"
                                        required
                                    />
                                </Grid>
                                <div className={classes.buttonGroup}>
                                    <Button variant="contained" color="primary">
                                        Отмена
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleConfirm}
                                        className={classes.button}
                                    >
                                        Сохранить
                                    </Button>
                                </div>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid container item sm={1} justify="center">
                        <Divider orientation="vertical" flexItem />
                    </Grid>

                    <Grid
                        container
                        item
                        xs={12}
                        sm={3}
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Typography
                            component="h4"
                            className={classes.spacing}
                            variant="body1"
                            align="center"
                        >
                            Загрузка изображения
                        </Typography>
                        <Paper elevation={10} className={classes.spacing}>
                            <CardMedia
                                className={classes.media}
                                image={cover === '' ? BULK_IMAGE : cover}
                                title="Contemplative Reptile"
                            />
                        </Paper>
                        <div className={classes.imageUpload}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component="span"
                                >
                                    Загрузить
                                </Button>
                            </label>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="icon-button-file"
                                type="file"
                            />
                            <label htmlFor="icon-button-file">
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                >
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}
