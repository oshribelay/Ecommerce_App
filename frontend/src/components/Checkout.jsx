import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleClicked } from '../reducers/clicked';
import { Card, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';

export default function Checkout(props) {
    const clicked = useSelector((state) => state.clicked);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleClicked());
    };
    return (
        <Dialog open={clicked} onClose={handleClick}>
            <Card>
                <Typography>
                    Test Test
                </Typography>
            </Card>
        </Dialog>
    )
}