import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'
import {
    Typography,
    Checkbox,
    Divider,
    Fab,
    InputAdornment,
    FormControlLabel,
    TextField,
    Input,
    Container,
} from '@material-ui/core'
import LessonItemBig from 'components/LessonItem/LessonItemBig'
import AddIcon from '@material-ui/icons/Add'
import { green } from '@material-ui/core/colors'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createFilterOptions } from '@material-ui/lab/Autocomplete'
import { profile } from '../../helpers/profileData'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: '2rem',
        height: '100%',
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },

    filter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    spacing: {
        margin: theme.spacing(0, 0, 2, 0),
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}))

export default function LessonList(props) {
    const classes = useStyles()
    const { lessonsList } = props
    let lessonsItems = []
    const categoryList = ['Первая', 'Вторая', 'Третья', 'Четвертая', 'Прочее']
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(null)
    const [searchValue, setSearchValue] = React.useState(null)
    const [inputValue, setInputValue] = React.useState('')
    const [searchInputValue, setSearchInputValue] = React.useState('')
    const [checked, setChecked] = React.useState(false)
    const loading = open && lessonsItems.length === 0

    const filterOptions = createFilterOptions({
        matchFrom: 'any',
        ignoreCase: true,
        limit: 2,
        stringify: (option) => option.title,
    })

    const handleCBChange = (event) => {
        setChecked(event.target.checked)
    }

    for (let [key, value] of Object.entries(lessonsList)) {
        lessonsItems.push(value)
    }

    return (
        <>
            <Typography className={classes.spacing} component="h2" variant="h4">
                Список Уроков
            </Typography>
            <Divider className={classes.spacing} />
            <div className={classes.filter}>
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue)
                    }}
                    id="caterory-search"
                    size="small"
                    options={categoryList}
                    style={{ width: 300, marginBottom: '1rem' }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Категории"
                            variant="outlined"
                        />
                    )}
                />
                <FormControlLabel
                    value="end"
                    control={
                        <Checkbox
                            checked={checked}
                            color="primary"
                            onChange={handleCBChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    }
                    label="Мои уроки"
                    labelPlacement="end"
                />

                <Autocomplete
                    freeSolo
                    loading
                    id="search"
                    value={searchValue}
                    onOpen={() => {
                        setOpen(true)
                    }}
                    onBlur={() => {
                        setOpen(false)
                    }}
                    onChange={(event, newValue) => {
                        setSearchValue(newValue)
                    }}
                    inputValue={searchInputValue}
                    onInputChange={(event, newInputValue) => {
                        setSearchInputValue(newInputValue)
                    }}
                    options={lessonsItems}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300, marginBottom: '1rem' }}
                    size="small"
                    filterOptions={filterOptions}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Поиск"
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {loading ? (
                                            <CircularProgress
                                                color="inherit"
                                                size={20}
                                            />
                                        ) : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                />
            </div>
            <Divider className={classes.spacing} />

            <Grid container className={classes.root} spacing={2}>
                {lessonsItems.map((item, idx) =>
                    searchValue === null || item === searchValue ? (
                        <Grid item xs={12} key={idx}>
                            <LessonItemBig
                                key={idx}
                                {...item}
                                redirect={props.redirect}
                                lessonId={item.id}
                                handleCartAdd={props.handleCartAdd}
                                handleDeleteItem={props.handleDeleteItem}
                                handleSelectLesson={props.handleSelectLesson}
                            />
                        </Grid>
                    ) : null,
                )}
            </Grid>

            <Fab className={classes.fab}>
                <AddIcon />
            </Fab>
        </>
    )
}
