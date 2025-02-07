import React from 'react';
import { Button } from '@mui/material';
function Header() {

    const handleClick = () => {
        alert('hi');
    };


    return <header>
        Epic header that totally works
        <Button onClick={handleClick} color={"primary"}>
            Material Button
        </Button>
    </header>

} export default Header

