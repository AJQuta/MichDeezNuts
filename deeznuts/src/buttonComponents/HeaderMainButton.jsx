import React from 'react'
import {Button} from "@mui/material";


const handleClick = () => {
        alert('hi');
};

function HeaderMainButton({text}) {
    return <Button variant="contained" onClick={handleClick} color={"primary"} >
        {text}
    </Button>

} export default HeaderMainButton



