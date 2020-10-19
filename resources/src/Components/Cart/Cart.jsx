import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'


const styles = theme => ({
    root: {},

})

const rows = [
    { id: 123, name: 'Урок 1', quantity: 1, price: 100 },
    { id: 124, name: 'Урок 2', quantity: 2, price: 200 },
]

class Cart extends Component{
    
    handleSubtotal(items) {
        return items.map(({ price, quantity }) => price).reduce((sum, i) => sum + i , 0)
    }

    render() {
        const { classes }= this.props
        const invoiceSubtotal = this.handleSubtotal(rows)
        return(
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
                {rows.map((row, idx) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {idx}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.quantity * row.price}</TableCell>

                    </TableRow>
                ))}
                { invoiceSubtotal }
                </TableBody>
            </Table>
            </TableContainer>
        )
    }
}

export default withStyles(styles)(Cart)