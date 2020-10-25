import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
    AppBar,
    Tabs,
    Tab,
    Typography,
    Paper,
    Box,
    Container,
    TextField,
    Button,
} from '@material-ui/core'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'span'} variant={'body2'}>
                        {children}
                    </Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        marginTop: '1rem',
        height: '100%',
    },
    form: {
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(1),
            width: '100%',
        },
    },
}))

export default function LoginPage(props) {
    const classes = useStyles()
    const theme = useTheme()
    const [value, setValue] = React.useState(0)
    const [email, setEmail] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rePassword, setRePassword] = React.useState('')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    React.useEffect(() => {
        if (props.token !== null) {
            props.redirect('/')
        }
    })

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastName = (event) => {
        setLastName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleRePassword = (event) => {
        setRePassword(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }

    const handleLogin = () => {
        if (password.length > 0 && email.length > 0) {
            props.handleLogin({ email, password })
        }
    }

    const handleSend = () => {
        props.handleRegistration({ email, firstName, lastName, password })
    }

    return (
        <Container className={classes.root} maxWidth="xs">
            <Paper square>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Авторизация" {...a11yProps(0)} />
                        <Tab label="Регистрация" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <form className={classes.form}>
                            <TextField
                                id="email"
                                label="Логин"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                                value={email}
                                onChange={handleEmail}
                            />
                            <TextField
                                id="password"
                                label="Пароль"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                                value={password}
                                onChange={handlePassword}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleLogin}
                            >
                                Вход
                            </Button>
                            <Button
                                onClick={() => props.redirect('/')}
                                variant="contained"
                                color="secondary"
                            >
                                Назад
                            </Button>
                        </form>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <form
                            className={classes.form}
                            action="/"
                            method="POST"
                            noValidate={true}
                        >
                            <TextField
                                id="firstName"
                                label="Имя"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                                value={firstName}
                                onChange={handleFirstName}
                            />
                            <TextField
                                id="lastName"
                                label="Фамилия"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                                value={lastName}
                                onChange={handleLastName}
                            />
                            <TextField
                                id="email"
                                label="Почта"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                                value={email}
                                onChange={handleEmail}
                            />
                            <TextField
                                id="password"
                                label="Пароль"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                                value={password}
                                onChange={handlePassword}
                            />
                            <TextField
                                id="repassword"
                                label="Повторить пароль"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                                value={rePassword}
                                onChange={handleRePassword}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleSend}
                            >
                                Регистрация
                            </Button>
                            <Button
                                onClick={() => props.redirect('/')}
                                variant="contained"
                                color="secondary"
                            >
                                Назад
                            </Button>
                        </form>
                    </TabPanel>
                </SwipeableViews>
            </Paper>
        </Container>
    )
}
