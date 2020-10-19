import React, { Component, Fragment } from 'react'
import { withStyles  } from '@material-ui/core/styles'
import { Typography, CardMedia, Button, Grid } from '@material-ui/core'

const styles = theme => ({
    root: {
    },
    media: {
        height: 100,
        width: 100,
    },
    title: {
        marginBottom: theme.spacing(2)
    },
    elementSpacing: {
    }

})

class Cabinet extends Component {

    render() {
        const { classes, profile } = this.props
        const { firstName, lastName, avatar, email, age } = profile
        return(
            <>
                <Typography variant="h4" component="h2" className={ classes.title }>Личный кабинет пользователя</Typography>
                <Grid container spacing={ 2 } alignItems="flex-start" className={ classes.root }>
                    <Grid item xs={12} sm={8}>
                        <CardMedia className={ classes.media } image={ avatar }></CardMedia>
                        <Typography>Имя: { firstName } { lastName }</Typography>
                        <Typography>Возраст: { age } </Typography>
                        <Typography>Почта: { email } </Typography>
                        <Typography>Роль: Администратор </Typography>
                        <Button variant="contained" color="primary">
                            Показать все уроки
                        </Button>
                        <Button variant="contained" color="primary">
                            Сохранить
                        </Button>
                        <Button variant="contained" color="secondary">
                            Отмена
                        </Button>
                    </Grid>
                    <Grid container item xs={12} sm={4} justify="center" className={ classes.root }>
                        <Typography className={ classes.title } align="center">Панель действий</Typography>
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
}

export default withStyles(styles)(Cabinet)