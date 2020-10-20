import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core'

const styles = theme => ({
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
})

class Cart extends Component{
    
    state = {
        selected: ''
    }

    handleSubtotal(items) {
        return items.map(({ price, quantity }) => price * quantity).reduce((sum, i) => sum + i , 0)
    }

    handleSelectRow = (event, itemId) => {
        if (this.state.selected === itemId) {
            this.setState({ selected: '' })
        } else {
            this.setState({ selected: itemId })
        }
    }
    handleCartRemoveItem = () => {
        const itemId = this.state.selected
        this.props.handleCartRemoveItem(itemId)
    }

    handleCartMinusItem = () => {
        const itemId = this.state.selected
        this.props.handleCartMinusItem(itemId)
    }

    handleCartPlusItem = () => {
        const itemId = this.state.selected
        this.props.handleCartPlusItem(itemId)
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
                    <Table stickyHeader  className={classes.table} size="small" aria-label="a dense table">
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
                            <TableRow 
                                selected={ item.id === this.state.selected }
                                onClick={(event) => this.handleSelectRow(event, item.id) } 
                                className={ classes.root } 
                                key={item.id}>
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
                <div className={ classes.buttonGroup }>
                    <Button 
                        onClick={ this.props.hanldeCartDelete } 
                        color="primary" 
                        variant="contained">
                            Отчистить корзину
                        </Button>
                    <Button 
                        onClick={ this.handleCartRemoveItem } 
                        disabled={ this.state.selected === '' } 
                        color="secondary" 
                        variant="contained">
                            Удалить
                    </Button>
                    <Button 
                        onClick={ this.handleCartPlusItem } 
                        disabled={ this.state.selected === '' } 
                        color="secondary" 
                        variant="contained">
                            +1
                    </Button>
                    <Button 
                        onClick={ this.handleCartMinusItem } 
                        disabled={ this.state.selected === '' } 
                        color="secondary" 
                        variant="contained">
                            -1
                    </Button>
                </div>
                

            </>
        )
    }
}

export default withStyles(styles)(Cart)