import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, CardMedia, Button, Grid, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {},
    media: {
        height: 100,
        width: 100,
        margin: theme.spacing(0, 0, '1rem', 0),
    },
    content: {
        margin: theme.spacing(0, 0, '1rem', 0),
    },

    title: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    elementSpacing: {},
    buttonGroup: {
        display: 'flex',
        width: '100%',
        ['& button']: {
            margin: theme.spacing(0, '1rem', 0, 0),
        },
    },
}))

export default function Cabinet(props) {
    const classes = useStyles()
    const { profile } = props
    const { firstName, lastName, avatar, email, age } = profile

    return (
        <>
            <Typography variant="h4" component="h2" className={classes.title}>
                Личный кабинет пользователя
            </Typography>
            <Grid
                container
                spacing={2}
                alignItems="flex-start"
                className={classes.root}
            >
                <Grid item xs={12} sm={8}>
                    <CardMedia
                        className={classes.media}
                        image={avatar}
                    ></CardMedia>
                    <Typography className={classes.content}>
                        Имя: {firstName} {lastName}
                    </Typography>
                    <Typography className={classes.content}>
                        Возраст: {age}{' '}
                    </Typography>
                    <Typography className={classes.content}>
                        Почта: {email}{' '}
                    </Typography>
                    <Typography className={classes.content}>
                        Роль: Администратор{' '}
                    </Typography>
                    <Button
                        className={classes.content}
                        variant="contained"
                        color="primary"
                    >
                        Показать все уроки
                    </Button>
                    <div className={classes.buttonGroup}>
                        <Button variant="contained" color="primary">
                            Сохранить
                        </Button>
                        <Button variant="contained" color="secondary">
                            Отмена
                        </Button>
                    </div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid
                    container
                    item
                    xs={12}
                    sm={3}
                    justify="center"
                    className={classes.root}
                >
                    <Typography className={classes.title} align="center">
                        Панель действий
                    </Typography>
                    <Button variant="outlined" color="primary">
                        Корзина
                    </Button>
                    <Button variant="outlined" color="primary">
                        История заказов
                    </Button>
                    <Button variant="outlined" color="primary">
                        Движение средств
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
