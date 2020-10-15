import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { nanoid } from 'nanoid'
import { IconButton, Typography, Divider, MenuItem, TextField, Button, Paper, Container, InputAdornment, Grid, CardMedia } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const BULK_IMAGE = `https://icon-library.com/images/no-image-icon/no-image-icon-5.jpg`

const styles = theme => ({
    root: {
        // width: '100%',
        // maxWidth: 400,
        height: '100%',
        padding: theme.spacing(4, 4, 2, 4),
        backgroundColor: theme.palette.background.paper,
    },
    imageUpload: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    textFiled: {
        margin: theme.spacing(0, 0, 2, 0),
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between'
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
    }
})

class CreateLesson extends Component{

    state = {
        id: null,
        title: '',
        content: '',
        categories: ['Первая', 'Вторая', 'Третья', 'Четвертая'],
        price: '',
        image: '',
        SelectedCategory: '',
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
        this.setState({ SelectedCategory: event.target.value })
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
        const { id, title, content, price, image, SelectedCategory } = this.state
        if (title !== '' && content !== '' && price !== '' && SelectedCategory !== '' ) {
            alert('all rights')
        } else {
            alert('что-то не заполнено')
        }
        // this.props.createLesson()
    }

    render(){
        const { classes } = this.props
        const { title, content, categories, price, image, SelectedCategory } = this.state
        return(
            <Container >
                <Paper elevation={10} className={ classes.root }>
                    <Grid container spacing={2} justify="space-between">
                        <Grid container item xs={7}> 
                            <form className='' noValidate autoComplete="off">
                                <TextField 
                                    className={ classes.textFiled }
                                    label="Название"
                                    id="title"
                                    size="small" 
                                    fullWidth 
                                    defaultValue="название урока"
                                    value={ title }
                                    onChange={ this.handleChangeTitle }
                                    helperText="Введите название урока"
                                    required />
                                <TextField 
                                    className={ classes.textFiled }
                                    label="Описание"
                                    id="content"
                                    size="small" 
                                    fullWidth 
                                    value={ content }
                                    onChange={ this.handleChangeContent }
                                    helperText="Введите содержание урока"
                                    required />
                                <TextField 
                                    className={ classes.textFiled }
                                    label="Категория"
                                    id="category"
                                    size="small" 
                                    select
                                    value={ SelectedCategory }
                                    onChange={ this.handleChangeCaterogy }
                                    fullWidth 
                                    helperText="Выберите категорию урока"
                                    required> 
                                    {categories.map((item, idx) => (
                                        <MenuItem key={ idx } value={ item }>
                                            { item }
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField 
                                    className={ classes.textFiled }
                                    label="Цена"
                                    id="price"
                                    size="small" 
                                    fullWidth 
                                    value={ price }
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
                            </form>
                        </Grid>
                        
                        <Divider orientation="vertical" flexItem />
                        
                        <Grid container item xs={4} justify="center" alignItems="flex-start">
                            <Paper elevation={10}>
                                <Typography component="h4" variant="body1" align="center">Загрузка изображения</Typography>
                            </Paper>
                            <CardMedia
                                className={classes.media}
                                image={ image === '' ? BULK_IMAGE : image }
                                title="Contemplative Reptile"
                            />
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
            </Container>

        )
    }
}

export default withStyles(styles)(CreateLesson)