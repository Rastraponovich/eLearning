import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core'


const styles = theme => ({
    root: {},

})

class Cart extends Component{
    
    handleSubtotal(items) {
        return items.map(({ price, quantity }) => price * quantity).reduce((sum, i) => sum + i , 0)
    }

    render() {
        const { classes, cart }= this.props

        const cartItems = []

        for (let [key, value] of Object.entries(cart)) {
            cartItems.push(value)
        }

        const invoiceSubtotal = this.handleSubtotal(cartItems)
        return(
            <>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="right">Наименование</TableCell>
                                <TableCell align="right">Количество</TableCell>
                                <TableCell align="right">цена</TableCell>
                                <TableCell align="right">Сумма</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {cartItems.map((item, idx) => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                    { idx+1 }
                                </TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">{item.quantity}</TableCell>
                                <TableCell align="right">{item.price}</TableCell>
                                <TableCell align="right">{item.quantity * item.price}</TableCell>

                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography align="right">Итого: { invoiceSubtotal }</Typography>
                <Button onClick={ this.props.hanldeCartDelete } color="primary" variant="contained">Отчистить корзину</Button>
            </>
        )
    }
}

export default withStyles(styles)(Cart)