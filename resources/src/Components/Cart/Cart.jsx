import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
    },
    buttonGroup: {
        '& button':{
            marginRight: theme.spacing(2),
        },
        '& button:last-child':{
            marginRight: 0
        }
    }
}))

export default function Cart(props) {
    const classes = useStyles()
    const { cart }= props
    const cartItems = []

    const [selected, setSelected] = React.useState('')

    for (let [key, value] of Object.entries(cart)) {
        cartItems.push(value)
    }

    const handleSelectRow = (event, itemId) => {
        selected === itemId ? setSelected('') : setSelected(itemId)
    }
    const handleCartRemoveItem = () => {
        props.handleCartRemoveItem(selected)
    }

    return(
        <>
            <TableContainer component={Paper}>
                <Table stickyHeader  className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Наименование</TableCell>
                            <TableCell align="right">Цена</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartItems.map((item, idx) => (
                        <TableRow 
                            selected={ item.id === selected }
                            onClick={(event) => handleSelectRow(event, item.id) } 
                            className={ classes.root } 
                            key={item.id}>
                            <TableCell component="th" scope="row">
                                { idx+1 }
                            </TableCell>
                            <TableCell align="right">{item.name}</TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography align="right">Итого: { Object.keys(cart).length }</Typography>
            <div className={ classes.buttonGroup }>
                <Button 
                    onClick={ props.hanldeCartDelete } 
                    color="primary" 
                    variant="contained">
                        Отчистить корзину
                    </Button>
                <Button 
                    onClick={ handleCartRemoveItem } 
                    disabled={ selected === '' } 
                    color="secondary" 
                    variant="contained">
                        Удалить
                </Button>
            </div>
        </>
    )
}
