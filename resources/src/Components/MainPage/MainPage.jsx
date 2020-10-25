import React, { Fragment } from 'react'
import { Typography, Box, Grid, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '85vh',
        alignItems: 'center',
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    },
}))

export default function MainPage(porps) {
    const classes = useStyles()
    const [progress, setProgress] = React.useState(0)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? setLoading(false) : prevProgress + 1,
            )
        }, 30)

        return () => {
            clearInterval(timer)
        }
    }, [])

    const renderLoading = loading ? (
        <Box position="relative" display="inline-flex">
            <CircularProgress size={150} variant="static" value={progress} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="h2" component="div" color="textSecondary">
                    {`${Math.round(progress)}%`}
                </Typography>
            </Box>
        </Box>
    ) : (
        <Typography component="h2" variant="h5" align="center">
            Добро пожаловать
        </Typography>
    )

    return (
        <Grid
            className={classes.root}
            container
            sx={12}
            justify="center"
            alignContent="center"
            direction="column"
        >
            {renderLoading}
        </Grid>
    )
}
