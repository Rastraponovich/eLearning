import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { nanoid } from 'nanoid'
import { IconButton, Typography, Divider, MenuItem, TextField, Button, Paper, InputAdornment, Grid, CardMedia } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const BULK_IMAGE = `https://icon-library.com/images/no-image-icon/no-image-icon-5.jpg`

const styles = theme => ({
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
        backgroundColor: theme.palette.success.main
    },
    form: {
        width: '100%',
    },
    spacing: {
        margin: theme.spacing(0, 0, 2, 0)
    }
})

class CreateLesson extends Component{

    state = {
        id: null,
        title: '',
        content: '',
        categories: ['Первая', 'Вторая', 'Третья', 'Четвертая'],
        price: '',
        cover: '',
        category: '',
    }

    componentDidMount() {
        if (this.state.id === null) {
            this.handleGenerateId()
        }
    }

    handleGenerateId = () => {
        this.setState( {id: nanoid(6) })
    }

    handleChangeCaterogy = (event) => {
        this.setState({ category: event.target.value })
    }

    handleChangePrice = (event) => {
        this.setState({ price: event.target.value })
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.target.value})
    }

    handleChangePrice = (event) => {
        this.setState({ price: event.target.value})
    }

    handleChangeContent = (event) => {
        this.setState({ content: event.target.value})
    }

    handleConfirm = () => {
        const { id, title, content, price, category } = this.state
        let cover = this.state.cover === '' ? BULK_IMAGE : this.state.cover
        
        if (title !== '' && content !== '' && price !== '' && category !== '' ) {
            this.props.handleCreateLesson({
                id,
                title,
                cover,
                content,
                price,
                category,
                lessonId: id
            }) 
            this.props.handleRedirect(`lesson/${id}`)
        } else {
            alert('что-то не заполнено')
        }
    }

    render(){
        const { classes } = this.props
        const { title, content, categories, price, cover, category } = this.state
        return(
            <>
            <Typography className={ classes.spacing } component="h2" variant="h5">Новый урок</Typography>
            <Divider className={ classes.spacing } />
            <Paper elevation={10} className={ classes.root }>
                <Grid container spacing={2} justify="space-between">
                    <Grid container item xs={12} sm={8}> 
                        <form className={ classes.form } noValidate autoComplete="off">
                            <Grid container spacing={4} >
                                <Grid  item xs={12}>
                                    <TextField 
                                        className={ classes.textFiled }
                                        label="Название"
                                        id="title"
                                        fullWidth
                                        size="small" 
                                        variant="outlined"
                                        defaultValue="название урока"
                                        value={ title }
                                        onChange={ this.handleChangeTitle }
                                        helperText="Введите название урока"
                                        required />
                                </Grid>
                                <Grid  item xs={12} sm={6} lg={4} md={4}>
                                    <TextField 
                                        className={ classes.textFiled }
                                        label="Цена"
                                        id="price"
                                        size="small" 
                                        value={ price }
                                        variant="outlined"
                                        onChange={ this.handleChangePrice }
                                        helperText="Введите цену урока"
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                            ),
                                        }}
                                        required />
                                </Grid>
                                <Grid  item xs={12} sm={6}>
                                    <TextField 
                                        className={ classes.textFiled }
                                        label="Категория"
                                        fullWidth
                                        id="category"
                                        size="small" 
                                        select
                                        variant="outlined"
                                        value={ category }
                                        onChange={ this.handleChangeCaterogy }
                                        helperText="Выберите категорию урока"
                                        required> 
                                        {categories.map((item, idx) => (
                                            <MenuItem key={ idx } value={ item }>
                                                { item }
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid container item sx={12}>
                                    <TextField 
                                            className={ classes.textFiled }
                                            label="Описание"
                                            id="content"
                                            size="small" 
                                            fullWidth 
                                            value={ content }
                                            placeholder="Введите текст"
                                            multiline
                                            variant="outlined"
                                            onChange={ this.handleChangeContent }
                                            helperText="Введите содержание урока"
                                            required />
                                </Grid>
                                <div className={ classes.buttonGroup }>
                                        <Button 
                                            variant="contained" 
                                            color="primary">Отмена</Button>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            onClick={ this.handleConfirm }
                                            className={ classes.button } >Сохранить</Button>
                                    </div>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid container item sm={1} justify="center" >
                        <Divider orientation="vertical" flexItem />
                    </Grid>
                    
                    <Grid container item xs={12} sm={3} justify="center" alignItems="flex-start">
                        <Typography component="h4" className={ classes.spacing } variant="body1" align="center">Загрузка изображения</Typography>
                        <Paper elevation={10} className={ classes.spacing }>
                            <CardMedia
                                className={ classes.media }
                                image={ cover === '' ? BULK_IMAGE : cover }
                                title="Contemplative Reptile"
                            />
                        </Paper>
                        <div className={ classes.imageUpload }>
                            <input
                                accept="image/*"
                                className={ classes.input }
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Загрузить
                                </Button>
                            </label>
                            <input accept="image/*" className={ classes.input } id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
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
}

export default withStyles(styles)(CreateLesson)