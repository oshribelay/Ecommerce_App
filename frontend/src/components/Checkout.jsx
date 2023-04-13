import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleClicked } from '../reducers/clicked';
import { Card, cardActionAreaClasses, Dialog, DialogActions, DialogContent, Typography , CardContent} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { fontFamily } from '@mui/system';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Checkout(props) {
    const clicked = useSelector((state) => state.clicked);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    function calculateTotal(itemsObject) {
        var totalAmount = 0;
        let keysList = Object.keys(itemsObject);
        for (let key in keysList) {
            let itemAmount = (cart[keysList[key]].priceInCents * cart[keysList[key]].count) / 10000;
            totalAmount += itemAmount;
        }
        return totalAmount;
    }

    const handleClick = () => {
        dispatch(toggleClicked());
    };
    return (
        <Dialog className='dialog' open={clicked} onClose={handleClick} PaperProps={{ sx: { width: "50%", height: "100%", fontFamily: "Roboto"} }}>
            <Card sx={{ height: "100%" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Typography align='center' variant="h5">Your Cart</Typography>
                <TableContainer sx={{ flex: "1 1 auto" }}>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Item</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(cart).map((item) => (
                        <TableRow key={item}>
                            <TableCell align="center">{item}</TableCell>
                            <TableCell align="center">{cart[item].count}</TableCell>
                            <TableCell align="center">{cart[item].price}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                <Stack direction="row" justifyContent="space-between" paddingBottom="20%">
                    <Typography sx={{width: "50%", textAlign: "left", pt: 2, fontWeight: "40px"}}>
                        Sub-Total: {calculateTotal(cart)} USD
                    </Typography>
                    <Button variant="contained" sx={{ width: "50%", backgroundColor: "green" }}>Checkout</Button>    
                </Stack>      
                <Typography variant="body1" sx={{ position: "absolute", bottom: 0, textAlign: "center", left: 0, right: 0, p: 2, marginTop: "-40px" }}>
                    Thank you for shopping with us!
                </Typography>
                </CardContent>          
            </Card>
        </Dialog>
        
    )
}